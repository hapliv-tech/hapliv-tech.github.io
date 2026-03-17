"use client";
import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Custom hook for fetching banners from API with caching and error handling
 * @param {string} position - Banner position (e.g., 'homepage-hero', 'homepage-sidebar')
 * @param {object} options - Optional configuration
 * @param {boolean} options.enableAnalytics - Enable Google Analytics tracking (default: true)
 * @returns {object} - { banners, loading, error }
 */
export default function useBanners(position, options = {}) {
  const { enableAnalytics = true } = options;
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      // Check cache first
      const cacheKey = `banners_${position}`;
      const cached = typeof window !== 'undefined' ? sessionStorage.getItem(cacheKey) : null;
      const cacheTime = typeof window !== 'undefined' ? sessionStorage.getItem(`${cacheKey}_time`) : null;
      
      if (cached && cacheTime) {
        const age = Date.now() - parseInt(cacheTime);
        if (age < CACHE_DURATION) {
          setBanners(JSON.parse(cached));
          setLoading(false);
          
          // Track cache hit
          if (enableAnalytics && typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'banner_cache_hit', {
              'banner_position': position,
              'event_category': 'Performance',
            });
          }
          return;
        }
      }

      // Fetch from API
      try {
        setLoading(true);
        setError(null);
        
        const url = `${API_BASE_URL}/api/banners${position ? `?position=${position}` : ''}`;
        
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch banners: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.status === '200' && Array.isArray(data.data)) {
          const now = new Date();
          const activeBanners = data.data
            .filter(b => b.isActive !== false) // Filter active banners
            .filter(b => {
              // Filter by date range
              if (b.startDate && new Date(b.startDate) > now) return false;
              if (b.endDate && new Date(b.endDate) < now) return false;
              return true;
            })
            .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
          
          setBanners(activeBanners);
          
          // Update cache
          if (typeof window !== 'undefined') {
            sessionStorage.setItem(cacheKey, JSON.stringify(activeBanners));
            sessionStorage.setItem(`${cacheKey}_time`, Date.now().toString());
          }
          
          // Track fetch success
          if (enableAnalytics && typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'banner_fetch', {
              'banner_position': position,
              'banner_count': activeBanners.length,
              'event_category': 'Performance',
            });
          }
        } else {
          // Invalid response format - return empty array (will use fallback)
          setBanners([]);
        }
      } catch (err) {
        // Silently handle errors - fallback banners will be used
        console.warn('Banner API fetch failed, using fallback:', err.message);
        setError(err);
        setBanners([]); // Empty array triggers fallback in BannerCarousel
        
        // Track error
        if (enableAnalytics && typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'banner_fetch_error', {
            'banner_position': position,
            'error_message': err.message,
            'event_category': 'Error',
          });
        }
      } finally {
        setLoading(false);
      }
    };

    if (position) {
      fetchBanners();
    } else {
      setLoading(false);
    }
  }, [position, enableAnalytics]);

  return { banners, loading, error };
}

