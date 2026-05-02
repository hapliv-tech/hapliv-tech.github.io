import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { ConsultationCta, PageHero, SectionHeader } from 'components/app-pages/PageSections';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { CLINIC_SCHEMA_NAME, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const southCityPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Best Dentist in South City, Gurgaon | Nearby Dental Clinic',
  description:
    'Best Dentist in South City, Gurgaon | 4.98/5 Rating | Expert dental surgeons offering braces, Invisalign, root canal, implants, and all dental treatments. Conveniently located near South City I & II. Open Mon-Sat 10 AM-8 PM. Call +91 98104 71255. Book appointment today!',
  keywords:
    'Dentist in South City Gurgaon, Best dentist South City, Nearby dentist South City, Dental clinic South City Gurgaon, Dentist near South City I, Dentist near South City II, Best dental clinic South City, Orthodontist South City, Invisalign South City, Root canal South City, Dental implants South City, Teeth whitening South City',
  alternates: {
    canonical: '/dentist-in-south-city-gurgaon',
  },
  openGraph: {
    description:
      'Best Dentist in South City, Gurgaon. Expert dental surgeons offering comprehensive dental care including braces, Invisalign, root canal, and more.',
    url: 'https://haplivdentalclinic.com/dentist-in-south-city-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Expert dental surgeons offering comprehensive dental care in South City, Gurgaon.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/dentist-in-south-city-gurgaon',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Best dental clinic serving South City, Gurgaon. Expert dental surgeons offering braces, Invisalign, root canal treatment, dental implants, and comprehensive dental care.',
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
      '@type': 'Place',
      name: 'South City, Gurgaon',
    },
    {
      '@type': 'Place',
      name: 'South City I',
    },
    {
      '@type': 'Place',
      name: 'South City II',
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
      name: 'Dentist in South City, Gurgaon',
      item: 'https://haplivdentalclinic.com/dentist-in-south-city-gurgaon',
    },
  ],
};

export default function DentistInSouthCityGurgaonPage() {
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
      <div className="min-h-screen mt-24 bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-lightest/40 to-gray-50">
          <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden="true">
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-primary/10" />
            <div className="absolute left-10 top-40 h-96 w-96 rounded-full border border-primary/5" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(81,36,122,0.08)_1px,_transparent_1.5px)] bg-[length:22px_22px]" />
          </div>
          <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 md:px-8 lg:pb-24 lg:pt-24">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl lg:text-hero">
                  Best Dentist in South City, Gurgaon
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-700 md:text-lg">
                  Premium Dental Clinic Near South City I & II | Expert Dental Surgeons
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={southCityPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="south-city-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-success rounded-button text-white shadow-button hover:bg-success-hover hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="south-city-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-gray-900 transition-all duration-300 transform border border-gray-300 bg-white rounded-button shadow-soft hover:border-primary/30 hover:text-primary hover:shadow-soft-md hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="south-city-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:bg-primary-dark hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Location Info */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Best Dentist Near South City, Gurgaon
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Hapliv Dental Clinic is conveniently located in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>, just a short drive from South City I and II. Our clinic is easily accessible from South City and provides expert dental care for residents of South City and surrounding areas.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    We are one of the <strong>best dental clinics near South City</strong>, with expert orthodontists specializing in <strong>Braces</strong> and <strong>Invisalign clear aligner</strong> treatments. Our <strong>best dentists</strong> also provide endodontics, cosmetic dentistry, and comprehensive dental care for the whole family.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Us?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Expert dental surgeons with 8+ years of experience</li>
                      <li>State-of-the-art dental equipment and technology</li>
                      <li>Comfort-focused dental care</li>
                      <li>Convenient location near South City I & II</li>
                      <li>Easy parking and accessibility</li>
                      <li>4.98/5 rating from 100+ patients</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Best Dentist in South City, Gurgaon - Modern dental facility near South City I & II"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Clinic Address</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      Shop 27, First Floor, M3M Tee Point, North Block
                      <br />
                      Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122018
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      <strong>Distance from South City:</strong> 5-10 minutes drive
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      <strong>Landmark:</strong> Near Trump Towers (Delhi NCR)
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 bg-white py-20">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Dental Services Near South City, Gurgaon
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Braces Treatment',
                    description: 'Best braces treatment by expert orthodontists for teeth alignment and bite correction',
                    link: '/braces-treatment-sector-65-gurgaon',
                  },
                  {
                    title: 'Invisalign Clear Aligner',
                    description: 'Best Invisalign clear aligner treatment by certified orthodontists for invisible teeth straightening',
                    link: '/invisalign-sector-65-gurgaon',
                  },
                  {
                    title: 'Root Canal Treatment',
                    description: 'Comfort-focused root canal treatment with advanced technology',
                    link: '/root-canal-treatment-gurgaon',
                  },
                  {
                    title: 'Dental Implants',
                    description: 'Permanent solution for missing teeth',
                    link: '/dental-implants-gurgaon',
                  },
                  {
                    title: 'Emergency Dentist',
                    description: 'Same-day emergency dental appointments for urgent dental care',
                    link: '/emergency-dentist-gurgaon',
                  },
                  {
                    title: 'Pediatric Dentist',
                    description: 'Expert kids dentist providing gentle, child-friendly dental care',
                    link: '/pediatric-dentist-gurgaon',
                  },
                ].map((service, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{service.title}</h3>
                      <p className="flex-1 mb-6 text-base leading-relaxed text-gray-700">{service.description}</p>
                      <Link
                        href={service.link}
                        className="text-sm font-semibold tracking-wide transition-all duration-300 text-primary hover:text-primary-dark group-hover:translate-x-1"
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

        {/* Nearby Areas */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Serving Areas Near South City, Gurgaon
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                'South City I',
                'South City II',
                'Sector 65',
                'M3M Golf Estate',
                'M3M Latitude',
                'Emaar Emerald Floors',
                'Emaar Palm Gardens',
                'Trump Towers',
                'Golf Course Extension',
                'Sushant Lok',
                'Sector 60-76',
                'Nirvana Country',
              ].map((area, idx) => (
                <FadeIn key={idx} delay={0.3 + idx * 0.05}>
                  <div className="flex items-center justify-center h-full min-h-[80px] p-4 text-center bg-white rounded-card shadow-soft hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1">
                    <p className="text-sm font-medium text-gray-900 md:text-base">{area}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta
          title="Visit our clinic near South City"
          description="Book your appointment and get specialist-led dental care near South City, Gurgaon."
          ctaLocation="south-city-gurgaon-footer"
          whatsappUrl={southCityPageWaUrl}
        />
      </div>
    </>
  );
}
