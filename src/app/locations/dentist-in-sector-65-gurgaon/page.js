import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import TrustStrip from 'components/seo/TrustStrip';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { CLINIC_SCHEMA_NAME, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const sector65LocationWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

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
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Gurgaon',
    },
    {
      '@type': 'PostalCode',
      postalCode: '122018',
    },
    {
      '@type': 'Place',
      name: 'Sector 65, Gurgaon',
    },
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
      name: 'Dentist in Sector 65, Gurgaon',
      item: 'https://haplivdentalclinic.com/locations/dentist-in-sector-65-gurgaon',
    },
  ],
};

export default function DentistInSector65GurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageBreadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Dentist Sector 65 Gurgaon', path: '/locations/dentist-in-sector-65-gurgaon' },
        ]}
      />
      <div className="min-h-screen mt-24 bg-white">
        {/* Hero Section */}
        <section className="relative px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Dentist in Sector 65, Gurgaon — Hapliv at M3M Tee Point
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Full-service clinic on Golf Course Extension Road — braces, Invisalign, implants, kids &amp; root canal.
                  Book online, WhatsApp for timings, or call. Mon–Sat 10 AM–8 PM. Same-day emergency when we have capacity.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="location-sector65-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-primary transition-all duration-300 transform bg-white rounded-button shadow-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                  <a
                    href={sector65LocationWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="location-sector65-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp for estimate
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="location-sector65-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Clinic
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <TrustStrip />

        {/* Location Info */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Premium Dental Clinic in Sector 65, Gurgaon
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Hapliv Dental Clinic is conveniently located in Sector 65, Gurgaon, near the famous
                    Trump Towers landmark. Our clinic is easily accessible from South City I and II, M3M
                    Golf Estate, M3M Latitude, Emaar Emerald Floors, and surrounding areas in Sector 60-76.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    We are one of the best dental clinics in Sector 65, Gurgaon, with <strong>expert orthodontists</strong> specializing in 
                    <strong> Braces</strong> and <strong>Invisalign clear aligner</strong> treatments. Our <strong>best orthodontists</strong> also provide 
                    endodontics, cosmetic dentistry, and comprehensive dental care.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Clinic Address</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      Shop 27, First Floor, M3M Tee Point, North Block
                      <br />
                      Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122018
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      <strong>Landmark:</strong> Near Trump Towers (Delhi NCR)
                    </p>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Hapliv Dental Clinic interior in Sector 65, Gurgaon - Modern dental facility"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Us?</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
                      <li>Expert dental surgeons with 8+ years of experience</li>
                      <li>State-of-the-art dental equipment and technology</li>
                      <li>Comfort-focused dental care</li>
                      <li>Strict sterilization protocols</li>
                      <li>Convenient location in Sector 65, Gurgaon</li>
                      <li>Easy parking and accessibility</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Dental Services in Sector 65, Gurgaon
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Braces Treatment',
                    description: 'Best braces treatment by expert orthodontists for teeth alignment and bite correction',
                    link: '/treatments/braces',
                  },
                  {
                    title: 'Invisalign Clear Aligner',
                    description: 'Best Invisalign clear aligner treatment by certified orthodontists for invisible teeth straightening',
                    link: '/invisalign',
                  },
                  {
                    title: 'Root Canal Treatment',
                    description: 'Comfort-focused root canal treatment with advanced technology',
                    link: '/treatments/painless-root-canal-treatment',
                  },
                  {
                    title: 'Dental Implants',
                    description: 'Permanent solution for missing teeth',
                    link: '/treatments/implant',
                  },
                  {
                    title: 'Teeth Whitening',
                    description: 'Professional teeth whitening for a brighter smile',
                    link: '/treatments/teeth-whitening',
                  },
                  {
                    title: 'Cosmetic Dentistry',
                    description: 'Smile makeover and cosmetic dental procedures',
                    link: '/treatments',
                  },
                ].map((service, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{service.title}</h3>
                      <p className="flex-1 mb-6 text-base leading-relaxed text-gray-700">{service.description}</p>
                      <Link
                        href={service.link}
                        className="text-sm font-semibold tracking-wide text-primary transition-all duration-300 hover:text-primary-dark group-hover:translate-x-1"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Dental Services in Sector 65, Gurgaon
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SlideUp delay={0.3}>
                <Link
                  href="/braces-treatment-sector-65-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Braces Treatment in Sector 65
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Expert braces treatment by certified orthodontist. Metal, ceramic, and Invisalign options available.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/emergency-dentist-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Emergency Dentist
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Same-day emergency dental appointments. Available for tooth pain, broken teeth, and dental trauma.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.5}>
                <Link
                  href="/pediatric-dentist-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Pediatric Dentist
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Expert kids dentist providing gentle, child-friendly dental care. Perfect for your little ones.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-white border-t border-gray-100">
          <div className="container max-w-3xl mx-auto text-center text-gray-700">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Free guides &amp; related pages</h2>
            <p>
              <Link href="/dental-guides/tooth-pain-urgency-guide-gurgaon" className="font-semibold text-primary underline">
                Tooth pain urgency guide
              </Link>
              {' · '}
              <Link href="/dental-guides/braces-invisalign-consultation-planner" className="font-semibold text-primary underline">
                Braces &amp; Invisalign consultation planner
              </Link>
              {' · '}
              <Link href="/emergency-dentist-gurgaon" className="font-semibold text-primary underline">
                Emergency dentist Gurgaon
              </Link>
            </p>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Serving Nearby Areas in Gurgaon
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
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
              ].map((area, idx) => (
                <FadeIn key={idx} delay={0.3 + idx * 0.05}>
                  <div className="flex items-center justify-center h-full min-h-[80px] p-4 text-center bg-white rounded-card shadow-soft hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1">
                    <p className="font-medium text-gray-900 text-sm md:text-base">{area}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Ready to Visit Our Clinic in Sector 65?</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your appointment today and experience the best dental care in Sector 65, Gurgaon
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="location-sector65-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-primary transition-all duration-300 transform bg-white rounded-button shadow-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Appointment
                </BookAppointmentLink>
                <a
                  href={sector65LocationWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="location-sector65-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp for estimate
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="location-sector65-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call Clinic
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.398091,77.0634188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Directions
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
