"use client";
import { useEffect, useState } from 'react';

const BASE_API_URL = 'https://api.haplivdentalclinic.com';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

/**
 * Custom hook for fetching gallery data with error handling and retry logic
 * @param {string} galleryKey - The gallery key (patients, treatment_results, camp, clinic_tour)
 * @returns {object} - { imagesList, isLoading, error, retry }
 */
export default function useGalleryData(galleryKey) {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchGalleryData = async (retryAttempt = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      const endpoint = `${BASE_API_URL}/files/ls-media?key=${galleryKey}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`Failed to fetch gallery data: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format: expected an array');
      }

      const mappedImages = data
        .filter((d) => {
          // Filter out items without a valid image source
          const src = d.thumbnail || d.src || d.url;
          return src && typeof src === 'string' && src.trim() !== '';
        })
        .map((d) => {
          let src = d.thumbnail || d.src || d.url;
          
          // Ensure URL is absolute (starts with http:// or https://)
          if (src && !src.startsWith('http://') && !src.startsWith('https://')) {
            // If it's a relative URL, make it absolute by prepending the API base URL
            if (src.startsWith('/')) {
              src = `${BASE_API_URL}${src}`;
            } else {
              src = `${BASE_API_URL}/${src}`;
            }
          }
          
          return {
            id: d.url || d.id || Math.random().toString(36).substr(2, 9),
            src: src,
            alt: d.name || d.alt || `Gallery image ${d.id || ''}`,
            link: d.link || null,
            caption: d.caption || null,
          };
        });
      
      // Log for debugging (remove in production if needed)
      if (mappedImages.length > 0) {
        console.log(`Loaded ${mappedImages.length} images for gallery: ${galleryKey}`);
      }

      setImagesList(mappedImages);
      setLoading(false);
      setRetryCount(0);
    } catch (err) {
      console.error(`Error fetching gallery data (attempt ${retryAttempt + 1}):`, err);
      
      if (retryAttempt < MAX_RETRIES) {
        // Exponential backoff retry
        const delay = RETRY_DELAY * Math.pow(2, retryAttempt);
        setTimeout(() => {
          setRetryCount(retryAttempt + 1);
          fetchGalleryData(retryAttempt + 1);
        }, delay);
      } else {
        setError(err.message || 'Failed to load gallery images. Please try again later.');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchGalleryData(0);
  }, [galleryKey]);

  const retry = () => {
    setRetryCount(0);
    fetchGalleryData(0);
  };

  return { imagesList, isLoading, error, retry };
}

