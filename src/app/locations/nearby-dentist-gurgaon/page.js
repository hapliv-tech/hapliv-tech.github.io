import LocationSeoPage from 'components/app-pages/LocationSeoPage';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import { CLINIC_SCHEMA_NAME, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const nearbyGurgaonWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;
const mapHref = 'https://www.google.com/maps/dir/?api=1&destination=28.398091,77.0634188';

export const metadata = {
  title: 'Nearby Dentist in Gurgaon | Best Dental Clinic Near Me',
  description:
    'Looking for a nearby dentist in Gurgaon? Hapliv Dental Clinic in Sector 65 is one of the best dental clinics near you. Expert dental surgeons offering braces, Invisalign, root canal, implants, and all dental treatments. Book your appointment today!',
  keywords:
    'Nearby dentist Gurgaon, Dentist near me Gurgaon, Best dentist near me, Dental clinic near me, Nearby dental surgeon, Dentist in Gurgaon, Dental clinic Sector 65, Best dentist Gurgaon, Orthodontist near me, Invisalign near me, Root canal near me, Dental implants near me',
  alternates: {
    canonical: '/locations/nearby-dentist-gurgaon',
  },
  openGraph: {
    description:
      'Find the best nearby dentist in Gurgaon. Hapliv Dental Clinic in Sector 65 offers expert dental care including braces, Invisalign, root canal, and more.',
    url: 'https://haplivdentalclinic.com/locations/nearby-dentist-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Find the best nearby dentist in Gurgaon. Expert dental care near you.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/locations/nearby-dentist-gurgaon',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Best nearby dentist in Gurgaon. Expert dental surgeons offering braces, Invisalign, root canal treatment, dental implants, and comprehensive dental care in Sector 65, Gurgaon.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122018',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.398091,
    longitude: 77.0634188,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Gurgaon',
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
      name: 'Nearby Dentist in Gurgaon',
      item: 'https://haplivdentalclinic.com/locations/nearby-dentist-gurgaon',
    },
  ],
};

const services = [
  { title: 'Braces Treatment', description: 'Orthodontic treatment near Sector 65 for alignment and bite correction.', href: '/treatments/braces' },
  { title: 'Invisalign', description: 'Clear aligner consultation and planning for discreet teeth straightening.', href: '/invisalign' },
  { title: 'Root Canal Treatment', description: 'Comfort-focused RCT planning with modern diagnostic and endodontic tools.', href: '/treatments/painless-root-canal-treatment' },
  { title: 'Dental Implants', description: 'Consultation for missing tooth replacement and long-term restoration planning.', href: '/treatments/implant' },
  { title: 'Teeth Whitening', description: 'Professional whitening options for patients looking for a brighter smile.', href: '/treatments/teeth-whitening' },
  { title: 'General Dentistry', description: 'Routine checkups, cleaning, fillings, crowns, and family dental care.', href: '/treatments' },
];

const areas = [
  'Sector 60-76',
  'South City I & II',
  'M3M Golf Estate',
  'M3M Latitude',
  'Emaar Emerald',
  'Emaar Palm Gardens',
  'M3M Merlin',
  'Nirvana Country',
  'Ireo Victory Valley',
  'Trump Towers',
  'Golf Course Extension',
  'Sushant Lok',
  'DLF Phase 1-5',
  'Sector 43-57',
  'Cyber City',
  'MG Road',
];

export default function NearbyDentistGurgaonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageBreadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Nearby Dentist Gurgaon', path: '/locations/nearby-dentist-gurgaon' },
        ]}
      />
      <LocationSeoPage
        eyebrow="Nearby dentist in Gurgaon"
        title="Nearby Dentist in Gurgaon"
        description="Hapliv Dental Clinic in Sector 65 is easily accessible from Golf Course Extension Road, South City, M3M communities, Trump Towers, and nearby Gurgaon sectors."
        ctaLocation="nearby-dentist-gurgaon-footer"
        whatsappUrl={nearbyGurgaonWaUrl}
        imageAlt="Hapliv Dental Clinic operatory in Sector 65 Gurgaon"
        address="Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65, Gurugram 122018"
        timings="Mon-Sat, 10:00 AM - 8:00 PM; Sunday, 10:00 AM - 1:00 PM"
        landmark="Near Trump Towers, Golf Course Extension Road"
        mapHref={mapHref}
        introTitle="Best nearby dentist in Gurgaon"
        introBody={[
          'Looking for a nearby dentist in Gurgaon? Hapliv Dental Clinic in Sector 65 is positioned for quick access from major residential communities and business areas around Golf Course Extension Road.',
          'The clinic provides comprehensive dental care with treatment planning for braces, Invisalign, root canal treatment, dental implants, whitening, and routine family dentistry.',
          'Patients commonly visit from South City, M3M Golf Estate, Emaar communities, Nirvana Country, Trump Towers, and sectors 60-76.',
        ]}
        quickFacts={[
          'Full-service Sector 65 dental clinic',
          'Braces, Invisalign, RCT and implants',
          'Modern dental equipment and sterilization',
          'Easy access from Golf Course Extension Road',
          'Same-day emergency support when slots are available',
          'Clear consultation-first treatment planning',
        ]}
        services={services}
        areas={areas}
        relatedLinks={[
          { label: 'Sector 65 clinic details', href: '/locations/dentist-in-sector-65-gurgaon' },
          { label: 'Emergency dentist Gurgaon', href: '/emergency-dentist-gurgaon' },
          { label: 'Tooth pain urgency guide', href: '/dental-guides/tooth-pain-urgency-guide-gurgaon' },
        ]}
        consultationTitle="Find us near you in Gurgaon"
        consultationDescription="Book an appointment, call the clinic, or get directions to Hapliv Dental Clinic in Sector 65, Gurgaon."
      />
    </>
  );
}
