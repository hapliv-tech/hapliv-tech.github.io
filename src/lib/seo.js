/** @typedef {{ name: string, path: string }} BreadcrumbItem */

export const SITE_URL = 'https://haplivdentalclinic.com';
export const PHONE_DISPLAY = '+91 98104 71255';
export const PHONE_TEL = '+919810471255';
export const WHATSAPP_E164 = '919810471255';
export const DEFAULT_WHATSAPP_MSG =
  'Hello! I would like to book an appointment at Hapliv Dental Clinic.';

export function absoluteUrl(path) {
  if (!path) return SITE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/**
 * @param {BreadcrumbItem[]} items
 */
export function buildBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * @param {{ question: string, answer: string }[]} faqs
 */
export function buildFaqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hapliv Dental Clinic',
    url: SITE_URL,
    description:
      'Dental clinic in Gurgaon Sector 65 and West Delhi — braces, Invisalign, root canal, implants, and family dentistry.',
    publisher: {
      '@type': 'Organization',
      name: 'Hapliv Dental Clinic',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/favicon.png`,
      },
    },
  };
}
