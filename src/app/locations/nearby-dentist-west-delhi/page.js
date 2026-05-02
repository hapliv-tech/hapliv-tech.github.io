import LocationSeoPage from 'components/app-pages/LocationSeoPage';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import { CLINIC_SCHEMA_NAME, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const nearbyWestDelhiWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;
const mapHref = 'https://www.google.com/maps/dir/?api=1&destination=28.6225322,77.036289';

export const metadata = {
  title: 'Nearby Dentist in West Delhi | Best Dental Clinic Near Me',
  description:
    'Looking for a nearby dentist in West Delhi? Hapliv Dental Clinic in Mohan Garden is one of the best dental clinics near you. Expert dental surgeons offering braces, Invisalign, root canal, implants, and all dental treatments. Book your appointment today!',
  keywords:
    'Nearby dentist West Delhi, Dentist near me West Delhi, Best dentist near me, Dental clinic near me, Nearby dental surgeon, Dentist in West Delhi, Dental clinic Mohan Garden, Best dentist West Delhi, Orthodontist near me, Invisalign near me, Root canal near me, Dental implants near me, Dentist in Uttam Nagar, Dentist in Dwarka',
  alternates: {
    canonical: '/locations/nearby-dentist-west-delhi',
  },
  openGraph: {
    description:
      'Find the best nearby dentist in West Delhi. Hapliv Dental Clinic in Mohan Garden offers expert dental care including braces, Invisalign, root canal, and more.',
    url: 'https://haplivdentalclinic.com/locations/nearby-dentist-west-delhi',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Find the best nearby dentist in West Delhi. Expert dental care near you.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/locations/nearby-dentist-west-delhi',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Best nearby dentist in West Delhi. Expert dental surgeons offering braces, Invisalign, root canal treatment, dental implants, and comprehensive dental care in Mohan Garden, West Delhi.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110059',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6225322,
    longitude: 77.036289,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '17:00',
      closes: '20:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Delhi',
  },
  medicalSpecialty: [
    'Orthodontics',
    'Endodontics',
    'Prosthodontics',
    'Cosmetic Dentistry',
    'Pediatric Dentistry',
    'General Dentistry',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://haplivdentalclinic.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Locations',
      item: 'https://haplivdentalclinic.com/locations',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Nearby Dentist in West Delhi',
      item: 'https://haplivdentalclinic.com/locations/nearby-dentist-west-delhi',
    },
  ],
};

const services = [
  { title: 'Braces Treatment', description: 'Orthodontic consultation for teeth alignment and bite correction.', href: '/treatments/braces' },
  { title: 'Invisalign', description: 'Clear aligner consultation and planning for West Delhi patients.', href: '/invisalign' },
  { title: 'Root Canal Treatment', description: 'Comfort-focused RCT planning and restorative dental care.', href: '/treatments/painless-root-canal-treatment' },
  { title: 'Dental Implants', description: 'Missing tooth replacement consultation and treatment coordination.', href: '/treatments/implant' },
  { title: 'Teeth Whitening', description: 'Professional whitening options for a brighter smile.', href: '/treatments/teeth-whitening' },
  { title: 'General Dentistry', description: 'Checkups, cleaning, fillings, crowns, and family dental visits.', href: '/treatments' },
];

const areas = [
  'Mohan Garden',
  'Uttam Nagar',
  'Dwarka',
  'Janakpuri',
  'Rajouri Garden',
  'Paschim Vihar',
  'Punjabi Bagh',
  'Rohini',
  'Nangloi',
  'Najafgarh',
  'Vikaspuri',
  'Tilak Nagar',
];

export default function NearbyDentistWestDelhiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageBreadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Nearby Dentist West Delhi', path: '/locations/nearby-dentist-west-delhi' },
        ]}
      />
      <LocationSeoPage
        eyebrow="Nearby dentist in West Delhi"
        title="Nearby Dentist in West Delhi"
        description="Hapliv Dental Clinic in Mohan Garden supports West Delhi patients with evening dental appointments for braces, Invisalign, RCT, implants, whitening, and family care."
        ctaLocation="nearby-dentist-west-delhi-footer"
        whatsappUrl={nearbyWestDelhiWaUrl}
        imageAlt="Hapliv Dental Clinic operatory for West Delhi patients"
        address="Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi 110059"
        timings="Mon-Sat, 5:00 PM - 8:00 PM"
        landmark="Mohan Garden, near Uttam Nagar and Dwarka access"
        mapHref={mapHref}
        introTitle="Best nearby dentist in West Delhi"
        introBody={[
          'Looking for a nearby dentist in West Delhi? Hapliv Dental Clinic in Mohan Garden offers evening access for patients from Uttam Nagar, Dwarka, Janakpuri, Vikaspuri, Paschim Vihar, and surrounding areas.',
          'The West Delhi clinic supports consultation-led care for braces, Invisalign, root canal treatment, dental implants, whitening, and routine family dentistry.',
          'For full-day availability or same-day emergency support, patients can also use the Sector 65 Gurgaon clinic.',
        ]}
        quickFacts={[
          'Evening clinic in Mohan Garden',
          'Useful for Dwarka and Uttam Nagar patients',
          'Braces, Invisalign, RCT and implants',
          'Same clinical standards as Gurgaon clinic',
          'Treatment planning before procedures',
          'Easy phone, WhatsApp and map access',
        ]}
        services={services}
        areas={areas}
        relatedLinks={[
          { label: 'Main West Delhi clinic page', href: '/dentist-in-west-delhi' },
          { label: 'Sector 65 Gurgaon clinic', href: '/locations/dentist-in-sector-65-gurgaon' },
          { label: 'Braces & Invisalign planner', href: '/dental-guides/braces-invisalign-consultation-planner' },
        ]}
        consultationTitle="Find the best nearby dentist in West Delhi"
        consultationDescription="Book an evening visit, call the clinic, or get directions to Hapliv Dental Clinic in Mohan Garden, West Delhi."
      />
    </>
  );
}
