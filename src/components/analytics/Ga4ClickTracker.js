'use client';

import { useEffect } from 'react';
import { trackGa4Event } from 'lib/analytics';

/**
 * Delegates clicks on CTAs: [data-cta], tel:, and wa.me links → GA4 event `cta_click`.
 */
export default function Ga4ClickTracker() {
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest?.('a, button');
      if (!el || el.closest('[data-analytics-ignore]')) return;

      const cta = el.getAttribute('data-cta');
      const ctaLocation = el.getAttribute('data-cta-location');

      if (cta) {
        trackGa4Event('cta_click', {
          cta_type: cta,
          cta_location: ctaLocation || 'not_set',
        });
        return;
      }

      if (el.tagName === 'A') {
        const href = el.getAttribute('href') || '';
        if (href.startsWith('tel:')) {
          trackGa4Event('cta_click', {
            cta_type: 'call',
            cta_location: ctaLocation || 'link_tel',
          });
          return;
        }
        if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
          trackGa4Event('cta_click', {
            cta_type: 'whatsapp',
            cta_location: ctaLocation || 'link_whatsapp',
          });
        }
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return null;
}
