'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCalendarCheck, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { trackToolCtaClick } from 'lib/analytics';
import { PHONE_TEL } from 'lib/seo';
import { buildAppointmentHref } from 'lib/tools/appointment-query';
import { buildToolWhatsAppUrl } from 'lib/tools/cta-builders';
import { TOOL_NAME_GA } from 'lib/tools/constants';

const primaryBtn =
  'inline-flex w-full min-h-[48px] items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-button text-center shadow-button transition hover:shadow-button-hover hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto';

const secondarySolid =
  'inline-flex w-full min-h-[48px] items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-button text-center transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:w-auto';

const tertiaryBtn =
  'inline-flex w-full min-h-[48px] items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-button border-2 text-center transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto';

export default function ToolResultActions({ toolSlug, toolLabel, result }) {
  const sourcePage = usePathname() || '/dental-guides';
  const gaName = TOOL_NAME_GA[toolSlug] || toolSlug;
  const { cta_mode, recommended_service, result_category, preferred_location, urgency_level } = result;

  const track = (cta_type) => {
    trackToolCtaClick({
      tool_name: gaName,
      cta_type,
      result_category,
      recommended_service,
      location_default: preferred_location,
      source_page: sourcePage,
    });
  };

  const apptHref = buildAppointmentHref({
    source: 'dental_guide',
    guide: gaName,
    service: recommended_service,
    location: preferred_location,
    urgency: urgency_level,
    result_category,
    recommendation: result_category,
  });

  const waHref = buildToolWhatsAppUrl({
    toolLabel,
    resultCategory: result_category,
  });

  if (cta_mode === 'urgent') {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={`tel:${PHONE_TEL}`}
          className={`${primaryBtn} bg-white text-primary`}
          data-cta="call"
          onClick={() => track('call')}
        >
          <FaPhoneAlt className="h-4 w-4 shrink-0" aria-hidden />
          Call now
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${secondarySolid} bg-emerald-600 text-white`}
          data-cta="whatsapp"
          onClick={() => track('whatsapp')}
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
          WhatsApp now
        </a>
        <Link
          href={apptHref}
          className={`${primaryBtn} bg-primary-dark text-white`}
          data-cta="appointment"
          onClick={() => track('appointment')}
        >
          <FaCalendarCheck className="h-4 w-4 shrink-0" aria-hidden />
          Book appointment
        </Link>
      </div>
    );
  }

  if (cta_mode === 'semi_urgent') {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${secondarySolid} bg-emerald-600 text-white`}
          data-cta="whatsapp"
          onClick={() => track('whatsapp')}
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
          WhatsApp now
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className={`${primaryBtn} bg-white text-primary`}
          data-cta="call"
          onClick={() => track('call')}
        >
          <FaPhoneAlt className="h-4 w-4 shrink-0" aria-hidden />
          Call clinic
        </a>
        <Link
          href={apptHref}
          className={`${primaryBtn} bg-primary-dark text-white`}
          data-cta="appointment"
          onClick={() => track('appointment')}
        >
          <FaCalendarCheck className="h-4 w-4 shrink-0" aria-hidden />
          Book appointment
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href={apptHref}
        className={`${primaryBtn} bg-primary text-white`}
        data-cta="appointment"
        onClick={() => track('appointment')}
      >
        <FaCalendarCheck className="h-4 w-4 shrink-0" aria-hidden />
        Book appointment
      </Link>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${secondarySolid} bg-emerald-600 text-white`}
        data-cta="whatsapp"
        onClick={() => track('whatsapp')}
      >
        <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
        WhatsApp our clinic
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className={`${tertiaryBtn} border-primary text-primary`}
        data-cta="call"
        onClick={() => track('call')}
      >
        <FaPhoneAlt className="h-4 w-4 shrink-0" aria-hidden />
        Call clinic
      </a>
    </div>
  );
}
