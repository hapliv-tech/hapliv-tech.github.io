"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import useBanners from '../../hooks/useBanners';
import BannerBadge from './BannerBadge';
import { generateOfferSchema, generateAdvertisementSchema } from '../../utils/schemaUtils';
import { getBannerAspectRatio } from '../../utils/bannerAspectRatios';
import { getBannerTextLimits, truncateText } from '../../utils/bannerTextLimits';

/**
 * Single Banner Component for sidebars, footer, etc.
 * @param {object} props
 * @param {string} props.position - Banner position
 * @param {object} props.fallbackBanner - Fallback banner if API fails
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.enableAnalytics - Enable Google Analytics (default: true)
 * @param {object} props.banner - Pre-fetched banner object
 * @param {object} props.aspectRatio - Override aspect ratio { width, height, className }
 */
export default function BannerSingle({ 
  position,
  fallbackBanner = null,
  className = '',
  enableAnalytics = true,
  banner = null, // Allow passing a pre-fetched banner directly
  aspectRatio = null // Override aspect ratio
}) {
  // Get aspect ratio for position
  const aspectConfig = aspectRatio || getBannerAspectRatio(position);
  // Only fetch if banner is not provided directly
  const { banners, loading } = useBanners(banner ? null : position, { enableAnalytics });
  
  // Use passed banner, first banner from API, or fallback
  const displayBanner = banner || (banners.length > 0 ? banners[0] : fallbackBanner);

  // Track banner view
  useEffect(() => {
    if (!displayBanner || !enableAnalytics) return;
    
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'banner_view', {
        'banner_id': displayBanner.id,
        'banner_title': displayBanner.title,
        'banner_position': position,
        'event_category': 'Banner',
        'event_label': displayBanner.title,
      });
    }
  }, [displayBanner, position, enableAnalytics]);

  const handleClick = () => {
    if (!displayBanner || !enableAnalytics) return;
    
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'banner_click', {
        'banner_id': displayBanner.id,
        'banner_title': displayBanner.title,
        'banner_position': position,
        'link_url': displayBanner.link,
        'event_category': 'Banner',
        'event_label': displayBanner.title,
      });
    }
  };

  if (loading && !displayBanner) {
    return (
      <div className={`bg-gray-200 animate-pulse rounded-lg ${aspectConfig.className} ${className}`} />
    );
  }

  if (!displayBanner) return null;

  const isLimitedTime = displayBanner.endDate && new Date(displayBanner.endDate) > new Date();
  const daysUntilEnd = displayBanner.endDate 
    ? Math.ceil((new Date(displayBanner.endDate) - new Date()) / (1000 * 60 * 60 * 24))
    : null;
  
  // Determine badge type - Priority: sponsored > advertisement > badgeType from API > calculated
  const getBadgeType = () => {
    if (displayBanner.sponsored) return 'sponsored';
    if (displayBanner.isAdvertisement) return 'advertisement';
    if (displayBanner.badgeType) return displayBanner.badgeType;
    if (daysUntilEnd && daysUntilEnd <= 7) {
      return daysUntilEnd <= 3 ? 'ending-soon' : 'limited-time';
    }
    return null;
  };
  
  const badgeType = getBadgeType();

  const offerSchema = generateOfferSchema(displayBanner);
  const adSchema = displayBanner.isAdvertisement ? generateAdvertisementSchema(displayBanner) : null;

  // Special styling for global-header (compact banner)
  const isGlobalHeader = position === 'global-header';
  
  const BannerContent = () => (
    <div className={`relative overflow-hidden bg-gray-100 ${isGlobalHeader ? '' : 'rounded-lg'} ${aspectConfig.className}`}>
      <Image
        src={displayBanner.imageUrl || displayBanner.image}
        alt={`${displayBanner.title} - ${displayBanner.description || ''} | Hapliv Dental Clinic`}
        width={aspectConfig.width}
        height={aspectConfig.height}
        className="object-contain w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Badges - Smaller for global-header */}
      {!isGlobalHeader && (
        <div className="absolute flex flex-col gap-2 top-2 right-2">
          {badgeType && <BannerBadge type={badgeType} />}
          {displayBanner.sponsored && badgeType !== 'sponsored' && (
            <BannerBadge type="sponsored" />
          )}
          {displayBanner.isAdvertisement && badgeType !== 'advertisement' && (
            <BannerBadge type="advertisement" />
          )}
        </div>
      )}
      
      {(displayBanner.title || displayBanner.description || displayBanner.offerCode || displayBanner.discountPercentage || displayBanner.discountAmount) && (
        <div className={`absolute ${isGlobalHeader ? 'inset-0 flex items-center justify-center' : 'bottom-0 left-0 right-0'} ${isGlobalHeader ? 'px-4' : 'p-4'} ${isGlobalHeader ? 'bg-black/40' : 'bg-gradient-to-t from-black/80 to-transparent'}`}>
          <div className={`${isGlobalHeader ? 'text-center w-full' : ''}`}>
            {displayBanner.title && (
              <h3 className={`text-white font-semibold ${isGlobalHeader ? 'text-xs md:text-sm leading-tight line-clamp-2 break-words' : 'mb-1'}`}>
                {displayBanner.title}
              </h3>
            )}
            {displayBanner.description && !isGlobalHeader && (
              <p className="mb-2 text-sm text-white/90">{displayBanner.description}</p>
            )}
          
            {/* Offer Code - Compact for global-header */}
            {displayBanner.offerCode && (
              <div className={`${isGlobalHeader ? 'mt-1 inline-block' : 'mb-2 inline-block'} px-2 py-1 bg-white/20 backdrop-blur-sm rounded border border-white/30`}>
                <span className="mr-1 text-xs text-white/90">Code:</span>
                <span className={`${isGlobalHeader ? 'text-xs' : 'text-sm'} font-bold text-white`}>{displayBanner.offerCode}</span>
              </div>
            )}
            
            {/* Discount - Compact for global-header */}
            {(displayBanner.discountPercentage || displayBanner.discountAmount) && (
              <div className={`${isGlobalHeader ? 'mt-1 text-sm' : 'mb-2 text-lg'} font-bold text-accent`}>
                {displayBanner.discountPercentage 
                  ? `${displayBanner.discountPercentage}% OFF`
                  : `₹${displayBanner.discountAmount} OFF`
                }
              </div>
            )}
            
            {/* Countdown Timer - Removed to reduce visual clutter */}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Schema Markup */}
      {offerSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        />
      )}
      {adSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(adSchema) }}
        />
      )}

      <div className={className}>
        {displayBanner.link ? (
          <Link 
            href={displayBanner.link}
            onClick={handleClick}
            aria-label={`${displayBanner.title} - ${displayBanner.description || 'Learn more'}`}
          >
            <BannerContent />
          </Link>
        ) : (
          <BannerContent />
        )}
      </div>
    </>
  );
}

