'use client';

import Link from 'next/link';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

export default function StickyMobileCtaBar() {
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] flex md:hidden border-t border-gray-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-pb"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex-1 py-3.5 text-center text-sm font-semibold text-primary border-r border-gray-100 active:bg-gray-50"
      >
        Call
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3.5 text-center text-sm font-semibold text-emerald-700 border-r border-gray-100 active:bg-gray-50"
      >
        WhatsApp
      </a>
      <Link
        href="/appointment"
        className="flex-1 py-3.5 text-center text-sm font-semibold text-white bg-primary active:bg-primary-dark"
      >
        Book
      </Link>
    </div>
  );
}
