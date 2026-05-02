import LocationSeoPage from 'components/app-pages/LocationSeoPage';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import { CLINIC_SCHEMA_NAME, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const sector65LocationWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;
const mapHref = 'https://www.google.com/maps/dir/?api=1&destination=28.398091,77.0634188';

export const metadata = {
  title: 'Dentist Sector 65 Gurgaon | M3M Tee Point, Book Online',
  description:
    'Dental clinic on Golf Course Extension Road — braces, Invisalign, implants, RCT, kids. 4.98★ Google. Mon–Sat 10–8 at M3M Tee Point. Book or WhatsApp +91 98104 71255.',
  keywords:
    'Dentist in Sector 65 Gurgaon, Best dentist Sector 65, Nearby dentist Sector 65, Dental clinic Sector 65 Gurgaon, Dental surgeon Sector 65, Dentist near Trump Towers, Best dental clinic Sector 65, Orthodontist Sector 65, Invisalign Sector 65, Root canal Sector 65, Dental implants Sector 65, Teeth whitening Sector 65, Cosmetic dentist Sector 65',
  alternates: {
    canonical: '/locations/dentist-in-sector-65-gurgaon',
  },
  openGraph: {
    description:
      'Braces to emergencies under one roof near Trump Towers. Highly rated on Google. Tap WhatsApp or call +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/locations/dentist-in-sector-65-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Sector 65 dentist at M3M Tee Point — book braces, Invisalign, implants & more. WhatsApp or +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/locations/dentist-in-sector-65-gurgaon',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Best dental clinic in Sector 65, Gurgaon near Trump Towers. Expert dental surgeons offering braces, Invisalign, root canal treatment, dental implants, and comprehensive dental care.',
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
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '13:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'PostalCode', postalCode: '122018' },
    { '@type': 'Place', name: 'Sector 65, Gurgaon' },
  ],
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://haplivdentalclinic.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://haplivdentalclinic.com/locations' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Dentist in Sector 65, Gurgaon',
      item: 'https://haplivdentalclinic.com/locations/dentist-in-sector-65-gurgaon',
    },
  ],
};

const services = [
  { title: 'Braces Treatment', description: 'Metal, ceramic and orthodontic treatment planning near Golf Course Extension Road.', href: '/treatments/braces' },
  { title: 'Invisalign Clear Aligners', description: 'Clear aligner assessment and smile planning with orthodontic guidance.', href: '/invisalign' },
  { title: 'Root Canal Treatment', description: 'Comfort-focused RCT with modern endodontic tools and restoration planning.', href: '/treatments/painless-root-canal-treatment' },
  { title: 'Dental Implants', description: 'Consultation for missing teeth, implant suitability, and replacement options.', href: '/treatments/implant' },
  { title: 'Teeth Whitening', description: 'Professional whitening options for patients planning a brighter smile.', href: '/treatments/teeth-whitening' },
  { title: 'Cosmetic Dentistry', description: 'Smile makeover planning, whitening, veneers, crowns and aesthetic care.', href: '/treatments' },
];

const areas = [
  'South City I & II',
  'M3M Golf Estate',
  'M3M Latitude',
  'Emaar Emerald Floors',
  'Emaar Palm Gardens',
  'M3M Merlin',
  'Nirvana Country',
  'Ireo Victory Valley',
  'Sector 60-76',
  'Trump Towers',
  'Golf Course Extension',
  'Sushant Lok',
];

export default function DentistInSector65GurgaonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageBreadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Dentist Sector 65 Gurgaon', path: '/locations/dentist-in-sector-65-gurgaon' },
        ]}
      />
      <LocationSeoPage
        eyebrow="Sector 65, Gurgaon"
        title="Dentist in Sector 65, Gurgaon at M3M Tee Point"
        description="Full-service dental clinic on Golf Course Extension Road for braces, Invisalign, implants, root canal treatment, kids dentistry, whitening, and emergency dental concerns."
        ctaLocation="location-sector65-footer"
        whatsappUrl={sector65LocationWaUrl}
        imageAlt="Hapliv Dental Clinic interior in Sector 65 Gurgaon"
        address="Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65, Gurugram 122018"
        timings="Mon-Sat, 10:00 AM - 8:00 PM; Sunday, 10:00 AM - 1:00 PM"
        landmark="Near Trump Towers, Delhi NCR"
        mapHref={mapHref}
        introTitle="Premium dental clinic in Sector 65, Gurgaon"
        introBody={[
          'Hapliv Dental Clinic is located at M3M Tee Point in Sector 65, Gurgaon, close to Trump Towers and major residential communities around Golf Course Extension Road.',
          'The clinic provides comprehensive dental care with focused planning for orthodontics, Invisalign, root canal treatment, dental implants, cosmetic dentistry, kids dentistry, and preventive care.',
          'The location is convenient for patients from South City, M3M Golf Estate, M3M Latitude, Emaar communities, Nirvana Country, Ireo Victory Valley, sectors 60-76, and nearby areas.',
        ]}
        quickFacts={[
          'Main Hapliv clinic in Sector 65',
          'Braces, Invisalign, RCT and implants',
          'Advanced equipment and sterilization',
          'Accessible from Golf Course Extension Road',
          'Emergency support when appointment slots permit',
          'Clear treatment planning before procedures',
        ]}
        services={services}
        areas={areas}
        relatedLinks={[
          { label: 'Nearby dentist Gurgaon', href: '/locations/nearby-dentist-gurgaon' },
          { label: 'Braces in Sector 65', href: '/braces-treatment-sector-65-gurgaon' },
          { label: 'Emergency dentist Gurgaon', href: '/emergency-dentist-gurgaon' },
        ]}
        consultationTitle="Ready to visit our clinic in Sector 65?"
        consultationDescription="Book your appointment, WhatsApp the clinic, or get directions to Hapliv Dental Clinic at M3M Tee Point."
      />
    </>
  );
}
