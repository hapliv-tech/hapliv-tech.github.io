import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';

export const metadata = {
  title: 'Best Dentist in South City, Gurgaon | Nearby Dental Clinic | Hapliv Dental Clinic',
  description:
    'Best Dentist in South City, Gurgaon | 4.98/5 Rating | Expert dental surgeons offering braces, Invisalign, root canal, implants, and all dental treatments. Conveniently located near South City I & II. Open Mon-Sat 10 AM-8 PM. Call +91 98104 71255. Book appointment today!',
  keywords:
    'Dentist in South City Gurgaon, Best dentist South City, Nearby dentist South City, Dental clinic South City Gurgaon, Dentist near South City I, Dentist near South City II, Best dental clinic South City, Orthodontist South City, Invisalign South City, Root canal South City, Dental implants South City, Teeth whitening South City',
  alternates: {
    canonical: '/dentist-in-south-city-gurgaon',
  },
  openGraph: {
    title: 'Best Dentist in South City, Gurgaon | Hapliv Dental Clinic',
    description:
      'Best Dentist in South City, Gurgaon. Expert dental surgeons offering comprehensive dental care including braces, Invisalign, root canal, and more.',
    url: 'https://haplivdentalclinic.com/dentist-in-south-city-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dentist in South City, Gurgaon | Hapliv Dental Clinic',
    description: 'Expert dental surgeons offering comprehensive dental care in South City, Gurgaon.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Hapliv Dental Clinic - Serving South City, Gurgaon',
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
        <section className="relative px-4 text-white py-28 bg-primary-dark">
          <div className="container mx-auto max-w-7xl">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Best Dentist in South City, Gurgaon
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Premium Dental Clinic Near South City I & II | Expert Dental Surgeons
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
                      <li>Painless dental treatments</li>
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
        <section className="px-4 bg-white py-28">
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
                    description: 'Painless root canal treatment with advanced technology',
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
        <section className="px-4 py-28 bg-gray-50">
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

        {/* CTA Section */}
        <section className="px-4 text-white py-28 bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Visit Our Clinic Near South City</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your appointment today and experience the best dental care near South City, Gurgaon
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
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Clinic Details
                </Link>
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

