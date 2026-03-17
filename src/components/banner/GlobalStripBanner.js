"use client";
import BannerSingle from './BannerSingle';

/**
 * Global Full-Width Strip Banner Component
 * Appears as a full-width strip across the page
 */
export default function GlobalStripBanner() {
  return (
    <div className="w-full">
      <BannerSingle position="global-strip" className="w-full" />
    </div>
  );
}

