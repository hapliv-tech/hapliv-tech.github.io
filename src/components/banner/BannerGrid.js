"use client";
import React from 'react';
import useBanners from '../../hooks/useBanners';
import BannerSingle from './BannerSingle';
import { getBannerAspectRatio } from '../../utils/bannerAspectRatios';

/**
 * Banner Grid Component for displaying multiple banners in a grid layout
 * @param {object} props
 * @param {string} props.position - Banner position
 * @param {number} props.columns - Number of columns (default: 2 for desktop, 1 for mobile)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.enableAnalytics - Enable Google Analytics (default: true)
 */
export default function BannerGrid({ 
  position,
  columns = 2,
  className = '',
  enableAnalytics = true
}) {
  const { banners, loading } = useBanners(position, { enableAnalytics });
  const aspectConfig = getBannerAspectRatio(position);

  if (loading) {
    return (
      <div className={`grid grid-cols-1 gap-4 ${columns === 2 ? 'md:grid-cols-2' : `md:grid-cols-${columns}`} ${className}`}>
        {[1, 2].map((i) => (
          <div key={i} className={`bg-gray-200 animate-pulse rounded-lg ${aspectConfig.className}`} />
        ))}
      </div>
    );
  }

  if (!banners || banners.length === 0) {
    return null;
  }

  // Use dynamic grid columns based on number of banners
  const gridCols = banners.length === 1 ? 1 : columns;
  const gridClass = gridCols === 1 
    ? 'grid-cols-1' 
    : gridCols === 2 
    ? 'grid-cols-1 md:grid-cols-2' 
    : `grid-cols-1 md:grid-cols-${gridCols}`;

  return (
    <div className={`grid ${gridClass} gap-4 ${className}`}>
      {banners.map((banner) => (
        <BannerSingle 
          key={banner.id}
          position={position}
          banner={banner}
          aspectRatio={aspectConfig}
          enableAnalytics={enableAnalytics}
        />
      ))}
    </div>
  );
}
