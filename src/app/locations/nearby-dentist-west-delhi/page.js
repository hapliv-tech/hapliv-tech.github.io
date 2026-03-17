import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';

export const metadata = {
  title: 'Nearby Dentist in West Delhi | Best Dental Clinic Near Me | Hapliv Dental Clinic',
  description:
    'Looking for a nearby dentist in West Delhi? Hapliv Dental Clinic in Mohan Garden is one of the best dental clinics near you. Expert dental surgeons offering braces, Invisalign, root canal, implants, and all dental treatments. Book your appointment today!',
  keywords:
    'Nearby dentist West Delhi, Dentist near me West Delhi, Best dentist near me, Dental clinic near me, Nearby dental surgeon, Dentist in West Delhi, Dental clinic Mohan Garden, Best dentist West Delhi, Orthodontist near me, Invisalign near me, Root canal near me, Dental implants near me, Dentist in Uttam Nagar, Dentist in Dwarka',
  alternates: {
    canonical: '/locations/nearby-dentist-west-delhi',
  },
  openGraph: {
    title: 'Nearby Dentist in West Delhi | Best Dental Clinic Near Me | Hapliv Dental Clinic',
    description:
      'Find the best nearby dentist in West Delhi. Hapliv Dental Clinic in Mohan Garden offers expert dental care including braces, Invisalign, root canal, and more.',
    url: 'https://haplivdentalclinic.com/locations/nearby-dentist-west-delhi',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nearby Dentist in West Delhi | Hapliv Dental Clinic',
    description: 'Find the best nearby dentist in West Delhi. Expert dental care near you.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Hapliv Dental Clinic - Nearby Dentist in West Delhi',
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

export default function NearbyDentistWestDelhiPage() {
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
        <section className="relative px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Nearby Dentist in West Delhi
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Best Dental Clinic Near You | Expert Dental Surgeons | Mohan Garden, West Delhi
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="/appointment"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="tel:+919810471255"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Best Nearby Dentist in West Delhi
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Looking for a nearby dentist in West Delhi? Hapliv Dental Clinic in Mohan Garden is
                    conveniently located and easily accessible from all major areas in West Delhi. We are
                    one of the best dental clinics near you, offering comprehensive dental care with
                    expert dental surgeons.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our clinic is strategically located in Mohan Garden, making it easily accessible from
                    Uttam Nagar, Dwarka, Janakpuri, and surrounding areas in West Delhi.
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
                      <strong>Location:</strong> Mohan Garden, West Delhi
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                      <strong>Timings:</strong> Mon-Sat, 5:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Hapliv Dental Clinic - Best nearby dentist in West Delhi, Mohan Garden"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Us?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Expert dental surgeons with years of experience</li>
                      <li>Convenient location in Mohan Garden, West Delhi</li>
                      <li>State-of-the-art dental equipment</li>
                      <li>Painless dental treatments</li>
                      <li>Easy accessibility and parking</li>
                      <li>Flexible appointment timings</li>
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
                    description: 'Painless root canal treatment near you',
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

        {/* Nearby Areas */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Serving Nearby Areas in West Delhi
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                'Mohan Garden',
                'Uttam Nagar',
                'Dwarka',
                'Janakpuri',
                'Rajouri Garden',
                'Paschim Vihar',
                'Punjabi Bagh',
                'Rohini',
                'Nangloi',
                'Nazafgarh',
                'Vikaspuri',
                'Tilak Nagar',
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
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Find the Best Nearby Dentist in West Delhi</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your appointment today and experience expert dental care near you in West Delhi
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="/appointment"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+919810471255"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.6225322,77.036289"
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

