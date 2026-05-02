import LocationSeoPage from 'components/app-pages/LocationSeoPage';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import { SITE_URL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG, CLINIC_SCHEMA_NAME } from 'lib/seo';

export const metadata = {
  title: 'West Delhi Dentist Mohan Garden | Evening 5–8 PM',
  description:
    'Busy in Dwarka or Uttam Nagar? Braces, Invisalign, RCT & implants with Mon–Sat evening appointments (5–8 PM). Same care as our Gurgaon clinic. WhatsApp or call +91 98104 71255.',
  alternates: { canonical: '/dentist-in-west-delhi' },
  openGraph: {
    description:
      'Evening dental care Mon–Sat — aligners, braces, implants & more. WhatsApp or call +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/dentist-in-west-delhi',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Mohan Garden clinic: braces, Invisalign, RCT & implants. Mon–Sat 5–8 PM. WhatsApp or +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;
const mapHref = 'https://www.google.com/maps/dir/?api=1&destination=28.6225322,77.036289';

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: `${SITE_URL}/assets/hapliv_dental_operatory.webp`,
  url: `${SITE_URL}/dentist-in-west-delhi`,
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Dental clinic in Mohan Garden, West Delhi. Braces, Invisalign, root canal, implants, and family dentistry. Evening appointments.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110059',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.6225322, longitude: 77.036289 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '17:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'Place', name: 'West Delhi' },
    { '@type': 'Place', name: 'Mohan Garden' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Dentist in West Delhi', item: `${SITE_URL}/dentist-in-west-delhi` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Hapliv Dental in West Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are at B-85/86, Pipal Wala Road, Mohan Garden, New Delhi 110059. Evening timings Mon-Sat 5 PM-8 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Invisalign and braces in West Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide braces and Invisalign consultations and treatment coordination at our West Delhi clinic; complex visits may also use our Gurgaon Sector 65 facility.',
      },
    },
  ],
};

const services = [
  { title: 'Braces', description: 'Metal and ceramic braces consultation for West Delhi patients.', href: '/braces-cost-gurgaon' },
  { title: 'Invisalign', description: 'Clear aligner assessment and treatment planning.', href: '/invisalign-gurgaon' },
  { title: 'Root Canal', description: 'Comfort-focused RCT and restorative planning.', href: '/root-canal-treatment-cost-gurgaon' },
  { title: 'Dental Implants', description: 'Consultation for missing tooth replacement.', href: '/dental-implants-gurgaon' },
  { title: 'Teeth Whitening', description: 'Professional whitening options for smile improvement.', href: '/treatments/teeth-whitening' },
  { title: 'Kids Dentist', description: 'Family and pediatric dental care access.', href: '/pediatric-dentist-gurgaon' },
];

const areas = [
  'Mohan Garden',
  'Uttam Nagar',
  'Dwarka',
  'Janakpuri',
  'Rajouri Garden',
  'Paschim Vihar',
  'Punjabi Bagh',
  'Vikaspuri',
  'Tilak Nagar',
  'Nangloi',
];

export default function DentistInWestDelhiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageBreadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Dentist in West Delhi', path: '/dentist-in-west-delhi' }]} />
      <LocationSeoPage
        eyebrow="Mohan Garden, West Delhi"
        title="West Delhi dentist in Mohan Garden"
        description="Evening dental care for Dwarka, Uttam Nagar, Mohan Garden, Janakpuri, and nearby West Delhi areas, with braces, Invisalign, RCT, implants, whitening, and family dentistry."
        ctaLocation="west-delhi-footer"
        whatsappUrl={wa}
        imageAlt="Hapliv Dental Clinic West Delhi treatment room"
        address="Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi 110059"
        timings="Mon-Sat, 5:00 PM - 8:00 PM"
        landmark="Mohan Garden, West Delhi"
        mapHref={mapHref}
        introTitle="Clinic address and evening timings"
        introBody={[
          'Hapliv Dental Clinic in West Delhi is located at B-85/86, Pipal Wala Road, Mohan Garden, New Delhi 110059, with evening appointment access from Monday to Saturday.',
          'The clinic is useful for patients from Uttam Nagar, Dwarka, Janakpuri, Vikaspuri, Tilak Nagar, Paschim Vihar, and surrounding West Delhi areas.',
          'Need a same-day dentist in Gurgaon during the day? Our Sector 65 clinic runs longer hours and supports emergency dental appointments when slots are available.',
        ]}
        quickFacts={[
          'Evening appointments from 5 PM to 8 PM',
          'Convenient for Dwarka and Uttam Nagar',
          'Braces, Invisalign, RCT and implants',
          'Same treatment planning standards as Gurgaon',
          'Useful for family and preventive dental visits',
          'Google Maps and WhatsApp access',
        ]}
        services={services}
        areas={areas}
        relatedLinks={[
          { label: 'Nearby dentist West Delhi', href: '/locations/nearby-dentist-west-delhi' },
          { label: 'Sector 65 Gurgaon clinic', href: '/locations/dentist-in-sector-65-gurgaon' },
          { label: 'Braces & Invisalign planner', href: '/dental-guides/braces-invisalign-consultation-planner' },
        ]}
        consultationTitle="Book your West Delhi visit"
        consultationDescription="Book an evening appointment in Mohan Garden, call the clinic, or WhatsApp us before you visit."
      />
    </>
  );
}
