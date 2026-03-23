import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { CLINIC_SCHEMA_NAME, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const nearbyGurgaonWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

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

export default function NearbyDentistGurgaonPage() {
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
        <section className="relative px-4 text-white py-28 bg-primary-dark">
          <div className="container mx-auto max-w-7xl">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Nearby Dentist in Gurgaon
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Best Dental Clinic Near You | Expert Dental Surgeons | Sector 65, Gurgaon
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={nearbyGurgaonWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="nearby-dentist-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="nearby-dentist-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="nearby-dentist-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Best Nearby Dentist in Gurgaon
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Looking for a nearby dentist in Gurgaon? Hapliv Dental Clinic in Sector 65 is
                    conveniently located and easily accessible from all major areas in Gurgaon. We are
                    one of the best dental clinics near you, offering comprehensive dental care with
                    expert dental surgeons.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our clinic is strategically located in Sector 65, near Trump Towers, making it
                    easily accessible from South City, M3M Golf Estate, Emaar properties, and all
                    sectors from 60-76 in Gurgaon.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Quick Contact</h3>
                    <p className="mb-2 text-base leading-relaxed text-gray-700">
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+919810471255" className="transition-colors duration-300 text-primary hover:text-primary-dark">
                        +91 98104 71255
                      </a>
                    </p>
                    <p className="mb-2 text-base leading-relaxed text-gray-700">
                      <strong>Location:</strong> Sector 65, Gurgaon (Near Trump Towers)
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                      <strong>Timings:</strong> Mon-Sat, 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Hapliv Dental Clinic - Best nearby dentist in Gurgaon, Sector 65"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Us?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Expert dental surgeons with years of experience</li>
                      <li>Convenient location in Sector 65, Gurgaon</li>
                      <li>State-of-the-art dental equipment</li>
                      <li>Comfort-focused dental care</li>
                      <li>Easy parking and accessibility</li>
                      <li>Flexible appointment timings</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Dental Services Available Near You
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Braces Treatment',
                    description: 'Expert orthodontic treatment near you',
                    link: '/treatments/braces',
                  },
                  {
                    title: 'Invisalign',
                    description: 'Clear aligner treatment available nearby',
                    link: '/invisalign',
                  },
                  {
                    title: 'Root Canal Treatment',
                    description: 'Comfort-focused root canal treatment near you',
                    link: '/treatments/painless-root-canal-treatment',
                  },
                  {
                    title: 'Dental Implants',
                    description: 'Dental implant treatment nearby',
                    link: '/treatments/implant',
                  },
                  {
                    title: 'Teeth Whitening',
                    description: 'Professional teeth whitening near you',
                    link: '/treatments/teeth-whitening',
                  },
                  {
                    title: 'General Dentistry',
                    description: 'Complete dental care near you',
                    link: '/treatments',
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
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                We Serve All Nearby Areas in Gurgaon
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
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

        {/* CTA Section */}
        <section className="px-4 text-white py-28 bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Find Us Near You in Gurgaon</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your appointment today and visit our clinic in Sector 65, Gurgaon
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={nearbyGurgaonWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="nearby-dentist-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="nearby-dentist-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="nearby-dentist-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Appointment
                </BookAppointmentLink>
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

