import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';

export const metadata = {
  title: 'Best Dentist in West Delhi | Nearby Dental Clinic | Hapliv Dental Clinic',
  description:
    'Looking for the best dentist in West Delhi? Hapliv Dental Clinic in Mohan Garden, West Delhi offers expert dental surgeons providing braces, Invisalign, root canal, implants, and all dental treatments. Book your appointment today!',
  keywords:
    'Dentist in West Delhi, Best dentist West Delhi, Nearby dentist West Delhi, Dental clinic West Delhi, Dental surgeon West Delhi, Dentist in Mohan Garden, Best dental clinic West Delhi, Orthodontist West Delhi, Invisalign West Delhi, Root canal West Delhi, Dental implants West Delhi, Teeth whitening West Delhi, Cosmetic dentist West Delhi, Dentist in Uttam Nagar, Dentist in Dwarka',
  alternates: {
    canonical: '/locations/dentist-in-west-delhi',
  },
  openGraph: {
    title: 'Best Dentist in West Delhi | Hapliv Dental Clinic',
    description:
      'Premium dental clinic in Mohan Garden, West Delhi. Expert dental surgeons offering comprehensive dental care including braces, Invisalign, root canal, and more.',
    url: 'https://haplivdentalclinic.com/locations/dentist-in-west-delhi',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dentist in West Delhi | Hapliv Dental Clinic',
    description: 'Premium dental clinic in West Delhi. Expert dental surgeons offering comprehensive dental care.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Hapliv Dental Clinic - West Delhi',
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/locations/dentist-in-west-delhi',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Best dental clinic in Mohan Garden, West Delhi. Expert dental surgeons offering braces, Invisalign, root canal treatment, dental implants, and comprehensive dental care.',
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
  areaServed: [
    {
      '@type': 'City',
      name: 'Delhi',
    },
    {
      '@type': 'PostalCode',
      postalCode: '110059',
    },
    {
      '@type': 'Place',
      name: 'West Delhi',
    },
    {
      '@type': 'Place',
      name: 'Mohan Garden',
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
      name: 'Dentist in West Delhi',
      item: 'https://haplivdentalclinic.com/locations/dentist-in-west-delhi',
    },
  ],
};

export default function DentistInWestDelhiPage() {
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
                  Best Dentist in West Delhi
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Premium Dental Clinic in Mohan Garden | Expert Dental Surgeons
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

        {/* Location Info */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Premium Dental Clinic in West Delhi
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Hapliv Dental Clinic is conveniently located in Mohan Garden, West Delhi. Our clinic is easily accessible from Uttam Nagar, Dwarka, and surrounding areas in West Delhi.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    We are one of the best dental clinics in West Delhi, with <strong>expert orthodontists</strong> specializing in 
                    <strong> Braces</strong> and <strong>Invisalign clear aligner</strong> treatments. Our <strong>best orthodontists</strong> also provide 
                    endodontics, cosmetic dentistry, and comprehensive dental care.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Clinic Address</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      Dr. Achla Verma, B-85/86, Pipal Wala Rd
                      <br />
                      Mohan Garden, New Delhi, Delhi 110059
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      <strong>Landmark:</strong> Mohan Garden, West Delhi
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
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
                      alt="Hapliv Dental Clinic interior in West Delhi - Modern dental facility"
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
                      <li>Painless dental treatments</li>
                      <li>Strict sterilization protocols</li>
                      <li>Convenient location in West Delhi</li>
                      <li>Easy accessibility and parking</li>
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
                Dental Services in West Delhi
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
                    description: 'Painless root canal treatment with advanced technology',
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

        {/* Nearby Areas */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
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
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Ready to Visit Our Clinic in West Delhi?</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your appointment today and experience the best dental care in West Delhi
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

