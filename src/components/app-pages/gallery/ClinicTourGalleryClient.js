"use client";
import ImageGallery from 'components/image-gallery/img-gallery';
import { useEffect, useState } from 'react';

export default function ClinicTourGalleryClient() {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const baseAPIUrl = 'https://api.haplivdentalclinic.com';
  useEffect(() => {
    const endpoint = `${baseAPIUrl}/files/ls-media?key=clinic_tour`;
    fetch(endpoint)
      .then((r) => r.json())
      .then((data) => {
        setImagesList(data.map((d) => ({ id: d.url, src: d.thumbnail, alt: d.name })));
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p className="mt-40 text-4xl animate-bounce">Loading...</p>;
  if (!imagesList) return <p className="mt-40 text-4xl">No profile data</p>;
  return (
    <div className="container m-auto items-center justify-center p-4">
      <div className="mt-40">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold">Clinic Tour</h1>
        </div>
        <ImageGallery images={imagesList} />
      </div>
    </div>
  );
}

