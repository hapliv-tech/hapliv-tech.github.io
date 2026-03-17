"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../../utils/useIsMobile';
import useBanners from '../../hooks/useBanners';
import BannerBadge from './BannerBadge';
import BannerSkeleton from './BannerSkeleton';
import { generateOfferSchema, generateImageObjectSchema, generateAdvertisementSchema } from '../../utils/schemaUtils';
import { getBannerTextLimits, truncateText } from '../../utils/bannerTextLimits';

/**
 * Banner Carousel Component with Google Analytics tracking
 * @param {object} props
 * @param {string} props.position - Banner position (e.g., 'homepage-hero')
 * @param {array} props.fallbackBanners - Fallback banners if API fails
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.enableAnalytics - Enable Google Analytics (default: true)
 * @param {boolean} props.showDefaultCTA - Show default "Learn More" CTA (default: true)
 * @param {React.ReactNode} props.customContent - Custom content to overlay on banners
 */
export default function BannerCarousel({ 
  position = 'homepage-hero',
  fallbackBanners = [],
  className = '',
  enableAnalytics = true,
  showDefaultCTA = true,
  customContent = null
}) {
  const isMobile = useIsMobile();
  const { banners, loading, error } = useBanners(position, { enableAnalytics });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use API banners if available, otherwise fallback
  const displayBanners = banners.length > 0 ? banners : fallbackBanners;
  
  // Convert fallback banners to API format if needed
  const normalizedBanners = displayBanners.map(banner => {
    // If it's a fallback banner (has images object), convert it
    if (banner.images) {
      return {
        id: banner.id || Math.random(),
        title: banner.title,
        description: banner.description,
        subtitle: banner.subtitle,
        imageUrl: isMobile ? (banner.images.mobile || banner.images.web) : banner.images.web,
        link: banner.link || null,
        position: position,
        displayOrder: banner.displayOrder || 0,
        isActive: true,
        startDate: banner.startDate || null,
        endDate: banner.endDate || null,
      };
    }
    // API banner - just ensure imageUrl is set correctly
    return {
      ...banner,
      imageUrl: banner.imageUrl || banner.image,
    };
  });

  const currentBanner = normalizedBanners[currentIndex];

  // Auto-rotate banners
  useEffect(() => {
    if (normalizedBanners.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % normalizedBanners.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [normalizedBanners.length]);

  // Track banner view in Google Analytics
  useEffect(() => {
    if (!currentBanner || !enableAnalytics) return;
    
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'banner_view', {
        'banner_id': currentBanner.id,
        'banner_title': currentBanner.title,
        'banner_position': position,
        'event_category': 'Banner',
        'event_label': currentBanner.title,
      });
    }
  }, [currentBanner, position, enableAnalytics]);

  // Handle banner click tracking
  const handleBannerClick = (banner) => {
    if (!enableAnalytics) return;
    
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'banner_click', {
        'banner_id': banner.id,
        'banner_title': banner.title,
        'banner_position': position,
        'link_url': banner.link,
        'event_category': 'Banner',
        'event_label': banner.title,
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % normalizedBanners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + normalizedBanners.length) % normalizedBanners.length);
  };

  // Generate schema markup for current banner
  const offerSchema = currentBanner ? generateOfferSchema(currentBanner) : null;
  const adSchema = currentBanner && currentBanner.isAdvertisement ? generateAdvertisementSchema(currentBanner) : null;
  const imageSchema = currentBanner ? generateImageObjectSchema(currentBanner) : null;

  if (loading && normalizedBanners.length === 0) {
    return <BannerSkeleton />;
  }

  if (normalizedBanners.length === 0) {
    return null;
  }

  // Determine badge type
  const getBadgeType = (banner) => {
    // Priority: sponsored > advertisement > badgeType from API > calculated
    if (banner.sponsored) return 'sponsored';
    if (banner.isAdvertisement) return 'advertisement';
    if (banner.badgeType) return banner.badgeType;
    
    // Calculate based on end date
    if (!banner.endDate) return null;
    const daysUntilEnd = Math.ceil((new Date(banner.endDate) - new Date()) / (1000 * 60 * 60 * 24));
    if (daysUntilEnd <= 0) return null;
    if (daysUntilEnd <= 3) return 'ending-soon';
    if (daysUntilEnd <= 7) return 'limited-time';
    return 'limited-time';
  };

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
      {imageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
        />
      )}

      <section className={`relative h-screen overflow-hidden ${className}`} style={{ marginTop: 0 }} aria-label="Promotional banners">
        <div className="relative h-full">
          {normalizedBanners.map((banner, index) => {
            const isActive = index === currentIndex;
            const badgeType = getBadgeType(banner);
            const isLimitedTime = banner.endDate && new Date(banner.endDate) > new Date();
            const daysUntilEnd = banner.endDate 
              ? Math.ceil((new Date(banner.endDate) - new Date()) / (1000 * 60 * 60 * 24))
              : null;
            
            // Get text limits for this position
            const textLimits = getBannerTextLimits(position);
            const truncatedTitle = banner.title ? truncateText(banner.title, textLimits.titleLimit) : '';
            const truncatedSubtitle = banner.subtitle ? truncateText(banner.subtitle, textLimits.titleLimit) : '';
            const truncatedDescription = banner.description && textLimits.descriptionLimit > 0
              ? truncateText(banner.description, textLimits.descriptionLimit)
              : '';
            
            return (
              <div
                key={banner.id || index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="relative h-full bg-gray-900">
                  {/* Background Image */}
                  <Image
                    src={banner.imageUrl}
                    alt={`${truncatedTitle || banner.title} - ${truncatedDescription || banner.description || ''} | Hapliv Dental Clinic ${position.includes('homepage') ? 'Gurgaon & Delhi' : ''}`}
                    layout="fill"
                    objectFit="contain"
                    className="object-contain"
                    priority={isActive && index === 0}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-75" />
                  
                  {/* Badges - Can show multiple badges */}
                  <div className="absolute z-20 flex flex-col gap-2 top-20 right-4">
                    {badgeType && <BannerBadge type={badgeType} />}
                    {banner.sponsored && badgeType !== 'sponsored' && (
                      <BannerBadge type="sponsored" />
                    )}
                    {banner.isAdvertisement && badgeType !== 'advertisement' && (
                      <BannerBadge type="advertisement" />
                    )}
                  </div>
                  
                  {/* Content Overlay - Title vertically centered */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="max-w-6xl px-4 text-center text-white md:px-8 py-16">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            key={banner.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                          >
                            <h1 className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-hero md:mb-4">
                              {truncatedTitle}
                            </h1>
                            {truncatedSubtitle && (
                              <p className="mb-3 text-lg font-medium leading-relaxed text-white drop-shadow md:text-xl lg:text-2xl md:mb-4">
                                {truncatedSubtitle}
                              </p>
                            )}
                            {truncatedDescription && (
                              <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-200 drop-shadow md:text-lg lg:text-xl">
                                {truncatedDescription}
                              </p>
                            )}
                            
                            {/* Offer Code Display */}
                            {banner.offerCode && (
                              <div className="inline-block px-4 py-2 mb-4 border-2 rounded-lg bg-white/20 backdrop-blur-sm border-white/30">
                                <span className="mr-2 text-sm text-white/90">Use Code:</span>
                                <span className="text-xl font-bold text-white">{banner.offerCode}</span>
                              </div>
                            )}
                            
                            {/* Discount Display */}
                            {(banner.discountPercentage || banner.discountAmount) && (
                              <div className="mb-4 text-2xl font-bold md:text-3xl text-accent drop-shadow-lg">
                                {banner.discountPercentage 
                                  ? `${banner.discountPercentage}% OFF`
                                  : `₹${banner.discountAmount} OFF`
                                }
                              </div>
                            )}
                            
                            {/* Countdown Timer - Removed to reduce visual clutter */}
                            
                            {/* Default CTA Button */}
                            {showDefaultCTA && banner.link && (
                              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                  href={banner.link}
                                  onClick={() => handleBannerClick(banner)}
                                  className="px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                                >
                                  Learn More
                                </Link>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Arrows */}
          {normalizedBanners.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute z-20 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full left-4 top-1/2 bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
                style={{ zIndex: 20 }}
              >
                <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute z-20 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full right-4 top-1/2 bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 hover:scale-110 active:scale-95"
                aria-label="Next slide"
                style={{ zIndex: 20 }}
              >
                <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {normalizedBanners.length > 1 && (
            <div className="absolute z-20 flex space-x-2 transform -translate-x-1/2 bottom-8 left-1/2" style={{ zIndex: 20 }}>
              {normalizedBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-accent shadow-soft' 
                      : 'w-1.5 bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Custom Content Overlay */}
        {customContent && (
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ zIndex: 20 }}>
            {customContent}
          </div>
        )}
      </section>
    </>
  );
}

