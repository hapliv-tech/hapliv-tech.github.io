"use client";
import React from 'react';

/**
 * Loading skeleton for banner carousel
 */
export default function BannerSkeleton() {
  return (
    <section className="relative h-screen overflow-hidden bg-gray-200 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading banners...</p>
        </div>
      </div>
    </section>
  );
}

