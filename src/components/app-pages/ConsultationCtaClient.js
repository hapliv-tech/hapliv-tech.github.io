'use client';

import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { DEFAULT_WHATSAPP_MSG, PHONE_TEL, WHATSAPP_E164 } from 'lib/seo';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const defaultWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export default function ConsultationCtaClient({
  title,
  description,
  ctaLocation,
  whatsappUrl = defaultWaUrl,
  id,
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-accent/30 bg-primary-dark px-4 py-16 text-white md:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute inset-0 bg-primary-dark/25" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-5 inline-flex rounded-pill border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
          Expert dental care in Gurgaon and West Delhi
        </span>
        <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <BookAppointmentLink
            href="/appointment"
            data-cta="appointment"
            data-cta-location={ctaLocation}
            className="inline-flex items-center justify-center rounded-button bg-accent px-8 py-4 text-base font-semibold text-primary-dark shadow-button transition-all duration-300 hover:bg-accent-light hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Consultation
          </BookAppointmentLink>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-cta-location={ctaLocation}
            className="inline-flex items-center justify-center gap-2 rounded-button bg-success px-8 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-success-hover hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden />
            WhatsApp Now
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            data-cta="call"
            data-cta-location={ctaLocation}
            className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/45 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaPhoneAlt className="h-4 w-4" aria-hidden />
            Call: +91 98104 71255
          </a>
        </div>
      </div>
    </section>
  );
}
