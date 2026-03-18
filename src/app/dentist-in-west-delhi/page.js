import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import TrustStrip from 'components/seo/TrustStrip';
import { SITE_URL, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

export const metadata = {
  title: 'Dentist in West Delhi Mohan Garden | Braces & Invisalign | Hapliv',
  description:
    'Dental clinic in Mohan Garden, West Delhi — braces, Invisalign, root canal, implants. Evening slots Mon–Sat 5–8 PM. 4.98★ rated. Call or WhatsApp to book.',
  alternates: { canonical: '/dentist-in-west-delhi' },
  openGraph: {
    title: 'Dentist in West Delhi | Hapliv Dental Clinic',
    url: 'https://haplivdentalclinic.com/dentist-in-west-delhi',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
};

const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Hapliv Dental Clinic - West Delhi',
  image: `${SITE_URL}/assets/hapliv_dental_operatory.webp`,
  url: `${SITE_URL}/dentist-in-west-delhi`,
  telephone: `+${PHONE_TEL.replace('+', '')}`,
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
        text: 'We are at B-85/86, Pipal Wala Road, Mohan Garden, New Delhi 110059. Evening timings Mon–Sat 5 PM–8 PM.',
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

export default function DentistInWestDelhiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageBreadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Dentist in West Delhi', path: '/dentist-in-west-delhi' }]} />
      <div className="min-h-screen bg-white pb-20 md:pb-0">
        <section className="relative px-4 py-20 text-white bg-primary-dark">
          <div className="container max-w-7xl mx-auto text-center">
            <FadeIn>
              <h1 className="mb-4 text-3xl font-semibold md:text-5xl">Dentist in West Delhi — Mohan Garden</h1>
              <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
                Evening dental clinic for working professionals — braces, Invisalign, RCT, implants & family care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
                <Link
                  href="/appointment"
                  className="px-8 py-3.5 bg-white text-primary font-semibold rounded-button"
                >
                  Book Appointment
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="px-8 py-3.5 border-2 border-white rounded-button font-semibold">
                  Call Now
                </a>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border-2 border-white rounded-button font-semibold">
                  WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
        <TrustStrip />

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <SlideUp delay={0.05}>
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">Clinic address & timings</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Hapliv Dental Clinic — <strong>B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi 110059</strong>.
                  Easy access from Uttam Nagar, Dwarka, Janakpuri, Vikaspuri, and Paschim Vihar.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Mon–Sat:</strong> 5:00 PM – 8:00 PM
                </p>
                <p className="text-gray-700 mb-4">
                  Need a <Link href="/emergency-dentist-gurgaon" className="text-primary font-semibold underline">same-day dentist in Gurgaon</Link> during the day? Our Sector 65 clinic runs 10 AM–8 PM.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.6225322,77.036289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-semibold underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </SlideUp>
            <SlideUp delay={0.1}>
              <div className="relative h-64 rounded-card overflow-hidden shadow-soft-lg">
                <Image
                  src="/assets/hapliv_dental_operatory.webp"
                  alt="Hapliv Dental Clinic West Delhi — treatment room"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SlideUp>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <h2 className="mb-12 text-2xl font-semibold text-center md:text-3xl">Services in West Delhi</h2>
            <StaggerChildren staggerDelay={0.06}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: 'Braces', desc: 'Metal & ceramic — see pricing', href: '/braces-cost-gurgaon' },
                  { title: 'Invisalign', desc: 'Clear aligners', href: '/invisalign-gurgaon' },
                  { title: 'Root canal', desc: 'Painless RCT — cost guide', href: '/root-canal-treatment-cost-gurgaon' },
                  { title: 'Dental implants', desc: 'Tooth replacement', href: '/dental-implants-gurgaon' },
                  { title: 'Teeth whitening', desc: 'Professional whitening', href: '/treatments/teeth-whitening' },
                  { title: 'Kids dentist', desc: 'Pediatric care', href: '/pediatric-dentist-gurgaon' },
                ].map((s) => (
                  <SlideUp key={s.href}>
                    <Link
                      href={s.href}
                      className="block h-full p-6 border border-gray-100 rounded-card shadow-soft hover:border-primary hover:shadow-soft-lg transition-all"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
                      <span className="text-primary font-semibold text-sm">Learn more →</span>
                    </Link>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <h2 className="mb-8 text-2xl font-semibold text-center">Nearby areas we serve</h2>
          <div className="container max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
            {['Mohan Garden', 'Uttam Nagar', 'Dwarka', 'Janakpuri', 'Rajouri Garden', 'Paschim Vihar', 'Punjabi Bagh', 'Vikaspuri', 'Tilak Nagar', 'Nangloi'].map((a) => (
              <span key={a} className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200">
                {a}
              </span>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 bg-white text-center">
          <h2 className="mb-4 text-2xl font-semibold">Orthodontist near me (West Delhi)</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Looking for an <strong>orthodontist near me</strong> in West Delhi? Book an evening slot for braces or Invisalign assessment. For full-day orthodontics visits, our{' '}
            <Link href="/locations/dentist-in-sector-65-gurgaon" className="text-primary font-semibold underline">
              Gurgaon Sector 65 clinic
            </Link>{' '}
            is also available.
          </p>
        </section>

        <section className="px-4 py-20 bg-primary-dark text-white text-center">
          <h2 className="mb-6 text-2xl font-semibold">Book your West Delhi visit</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/appointment" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-button">
              Book Appointment
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="px-8 py-3.5 border-2 border-white rounded-button font-semibold">
              Call
            </a>
            <a href={wa} className="px-8 py-3.5 border-2 border-white rounded-button font-semibold">
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
