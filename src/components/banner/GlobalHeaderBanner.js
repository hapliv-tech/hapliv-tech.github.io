"use client";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import BannerSingle from './BannerSingle';

/**
 * Global Header Banner Component
 * Appears above navbar on all pages (except Invisalign which has its own header)
 */
export default function GlobalHeaderBanner() {
  const bannerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Skip layout updates on Invisalign page
    if (pathname === '/invisalign') {
      return;
    }
    
    // Update navbar position based on banner height
    // Note: Pages handle their own spacing (mt-24, etc.) when there's no banner
    const updateLayout = () => {
      const banner = bannerRef.current;
      const navbar = document.querySelector('[data-navbar]');
      const main = document.querySelector('main');
      const isHomePage = window.location.pathname === '/';
      
      // If navbar doesn't exist (e.g., on Invisalign page), don't do anything
      if (!navbar) {
        if (main) {
          main.style.paddingTop = '';
        }
        return;
      }
      
      const navbarHeight = navbar.offsetHeight || 73; // Default navbar height ~73px
      
      if (banner) {
        const bannerHeight = banner.offsetHeight;
        
        if (bannerHeight > 0) {
          // Banner exists and has height - need to account for both banner and navbar
          navbar.style.top = `${bannerHeight}px`;
          navbar.style.display = 'block';
          // Only add padding to main for non-home pages when banner is present
          // Home page hero section handles its own positioning
          if (main && !isHomePage) {
            main.style.paddingTop = `${bannerHeight + navbarHeight}px`;
          } else if (main && isHomePage) {
            main.style.paddingTop = '0px';
          }
        } else {
          // Banner exists but has no height (hidden or empty) - no banner, just navbar
          navbar.style.top = '0px';
          navbar.style.display = 'block';
          // Remove any padding - pages handle their own spacing (mt-24, etc.)
          if (main) {
            main.style.paddingTop = '';
          }
        }
      } else {
        // No banner element at all - just navbar
        navbar.style.top = '0px';
        navbar.style.display = 'block';
        // Remove any padding - pages handle their own spacing (mt-24, etc.)
        if (main) {
          main.style.paddingTop = '';
        }
      }
    };

    // Initial update with slight delay to ensure DOM is ready
    let initialTimeout = setTimeout(updateLayout, 100);
    updateLayout();
    
    // Also update after a longer delay to catch any async content loading
    let delayedTimeout = setTimeout(updateLayout, 500);

    // Update on resize
    window.addEventListener('resize', updateLayout);
    
    // Use MutationObserver to watch for banner content changes
    const observer = new MutationObserver(updateLayout);
    if (bannerRef.current) {
      observer.observe(bannerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(delayedTimeout);
      window.removeEventListener('resize', updateLayout);
      observer.disconnect();
    };
  }, [pathname]);

  // Hide on Invisalign page (it has its own header design)
  if (pathname === '/invisalign') {
    return null;
  }

  return (
    <div ref={bannerRef} data-global-banner className="fixed top-0 left-0 right-0 z-40 w-full">
      <BannerSingle position="global-header" className="w-full" />
    </div>
  );
}

