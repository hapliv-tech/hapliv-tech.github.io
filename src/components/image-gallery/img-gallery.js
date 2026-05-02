"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery({images, className}) {
    // Validate images prop
    if (!images || !Array.isArray(images) || images.length === 0) {
        return null;
    }

    return (
        <div className={className?className:"mx-auto max-w-7xl px-0 py-8 sm:py-10"}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {images.map((image,idx)=>(<BlurImage key={image.id || idx} image={image}></BlurImage>))}
            </div>
        </div>
    );
}

function cn(...clases){
    return clases.filter(Boolean).join(' ');
}

function BlurImage({image}){
    const [isLoading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [imageSrc, setImageSrc] = useState(image.src || image);
    
    const href = image.link ? (image.link.startsWith('/') ? image.link : `/${image.link}`) : '#';
    
    const handleLoad = () => {
        setLoading(false);
    };
    
    const handleError = () => {
        setLoading(false);
        setHasError(true);
        console.error('Failed to load image:', imageSrc);
    };

    // Don't render if no valid image source
    if (!imageSrc || (typeof imageSrc === 'string' && imageSrc.trim() === '')) {
        return null;
    }

    return (
        <a className="group block" href={href}>
            <div className="relative w-full overflow-hidden rounded-card border border-primary/10 bg-gray-100 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-soft-lg" style={{ paddingBottom: '100%' }}>
                {hasError ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="text-center text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs">Image unavailable</p>
                        </div>
                    </div>
                ) : (
                    <Image 
                        src={imageSrc}
                        alt={image.alt || 'Gallery image'}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className={cn(
                            'object-cover transition-all duration-700 ease-in-out',
                            'group-hover:scale-105',
                            isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
                        )}
                        onLoad={handleLoad}
                        onError={handleError}
                        unoptimized
                    />
                )}
            </div>
            {image.caption && (
                <h2 className="mt-4 text-base font-semibold leading-snug text-center text-gray-900">
                    {image.caption}
                </h2>
            )}
        </a>
    );
}
