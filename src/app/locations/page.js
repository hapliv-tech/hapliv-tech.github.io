import Link from 'next/link';
import Image from 'next/legacy/image';
import { FadeIn, SlideUp } from 'components/animations';

export const metadata = {
  title: 'Our Locations | Dental Clinics in Gurgaon & West Delhi | Hapliv Dental Clinic',
  description:
    'Find Hapliv Dental Clinic locations in Gurgaon (Sector 65) and West Delhi. Expert dental surgeons offering braces, Invisalign, root canal, implants, and comprehensive dental care. Book your appointment today!',
  keywords:
    'Dental clinic locations, Dentist in Gurgaon, Dentist in West Delhi, Dental clinic Sector 65, Nearby dentist, Dental surgeon locations, Hapliv Dental Clinic locations',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Our Locations | Hapliv Dental Clinic - Gurgaon & West Delhi',
    description:
      'Find our dental clinic locations in Gurgaon (Sector 65) and West Delhi. Expert dental care near you.',
    url: 'https://haplivdentalclinic.com/locations',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Locations | Hapliv Dental Clinic',
    description: 'Find our dental clinic locations in Gurgaon and West Delhi.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
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
  ],
};

export default function LocationsPage() {
  const locations = [
    {
      name: 'Gurgaon - Sector 65',
      address: 'Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65',
      city: 'Gurugram, Haryana 122018',
      landmark: 'Near Trump Towers (Delhi NCR)',
      phone: '+91 98104 71255',
      link: '/locations/dentist-in-sector-65-gurgaon',
      nearbyLink: '/locations/nearby-dentist-gurgaon',
      coordinates: { lat: 28.398091, lng: 77.0634188 },
      areas: [
        'South City I & II',
        'M3M Golf Estate',
        'M3M Latitude',
        'Emaar Emerald Floors',
        'Sector 60-76',
        'Trump Towers',
      ],
    },
    {
      name: 'West Delhi',
      address: 'Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden',
      city: 'New Delhi, Delhi 110059',
      landmark: 'Mohan Garden, West Delhi',
      phone: '+91 98104 71255',
      link: '/locations/dentist-in-west-delhi',
      nearbyLink: '/locations/nearby-dentist-west-delhi',
      coordinates: { lat: 28.6225322, lng: 77.036289 },
      areas: ['Mohan Garden', 'West Delhi', 'Uttam Nagar', 'Dwarka'],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen mt-24 bg-white">
        {/* Hero Section */}
        <section className="relative px-4 text-white py-28 bg-primary-dark">
          <div className="container mx-auto text-center max-w-7xl">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">Our Locations</h1>
              <p className="text-lg leading-relaxed text-gray-100 md:text-xl">
                Find Hapliv Dental Clinic Near You in Gurgaon & West Delhi
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {locations.map((location, idx) => (
                <SlideUp key={idx} delay={idx * 0.1}>
                  <div className="overflow-hidden transition-all duration-500 bg-white rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1">
                    <div className="p-8">
                      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{location.name}</h2>
                      <div className="mb-6 space-y-3 text-gray-700">
                        <p className="text-base leading-relaxed">
                          <strong>Address:</strong> {location.address}
                        </p>
                        <p className="text-base leading-relaxed">{location.city}</p>
                        {location.landmark && (
                          <p className="text-sm leading-relaxed text-gray-600">
                            <strong>Landmark:</strong> {location.landmark}
                          </p>
                        )}
                        <p className="text-base leading-relaxed">
                          <strong>Phone:</strong>{' '}
                          <a
                            href={`tel:${location.phone.replace(/\s/g, '')}`}
                            className="transition-colors duration-300 text-primary hover:text-primary-dark"
                          >
                            {location.phone}
                          </a>
                        </p>
                      </div>
                      <div className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Serving Areas:</h3>
                        <div className="flex flex-wrap gap-2">
                          {location.areas.map((area, areaIdx) => (
                            <span
                              key={areaIdx}
                              className="px-3 py-1 text-sm font-medium rounded-full bg-primary-lightest text-primary"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        {location.link !== '#' && (
                          <>
                            <Link
                              href={location.link}
                              className="px-6 py-3 text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] font-semibold"
                            >
                              View Details
                            </Link>
                            {location.nearbyLink && (
                              <Link
                                href={location.nearbyLink}
                                className="px-6 py-3 text-center text-primary transition-all duration-300 transform border-2 border-primary rounded-button hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] font-semibold"
                              >
                                Nearby Dentist
                              </Link>
                            )}
                          </>
                        )}
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 text-center text-primary transition-all duration-300 transform border-2 border-primary rounded-button hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] font-semibold"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Find Dentist Near You
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SlideUp delay={0.3}>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="block p-8 transition-all duration-500 border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
                >
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    Dentist in Sector 65, Gurgaon
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Best dental clinic in Sector 65, Gurgaon near Trump Towers. Expert dental
                    surgeons offering comprehensive dental care.
                  </p>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/dentist-in-south-city-gurgaon"
                  className="block p-8 transition-all duration-500 border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
                >
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    Dentist in South City, Gurgaon
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Best dentist near South City I & II, Gurgaon. Conveniently located just 5-10 minutes drive from South City with expert dental care.
                  </p>
                </Link>
              </SlideUp>
              <SlideUp delay={0.5}>
                <Link
                  href="/locations/nearby-dentist-gurgaon"
                  className="block p-8 transition-all duration-500 border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
                >
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    Nearby Dentist in Gurgaon
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Find the best nearby dentist in Gurgaon. Conveniently located in Sector 65 with
                    easy accessibility from all major areas.
                  </p>
                </Link>
              </SlideUp>
              <SlideUp delay={0.6}>
                <Link
                  href="/emergency-dentist-gurgaon"
                  className="block p-8 transition-all duration-500 border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
                >
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    Emergency Dentist in Gurgaon
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Same-day emergency dental appointments. Expert emergency dentists available for tooth pain, broken teeth, and dental emergencies.
                  </p>
                </Link>
              </SlideUp>
              <SlideUp delay={0.7}>
                <Link
                  href="/pediatric-dentist-gurgaon"
                  className="block p-8 transition-all duration-500 border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
                >
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    Pediatric Dentist in Gurgaon
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Expert kids dentist providing gentle, child-friendly dental care. Perfect for your little ones with a comfortable, fun environment.
                  </p>
                </Link>
              </SlideUp>
              <SlideUp delay={0.8}>
                <Link
                  href="/locations/dentist-in-west-delhi"
                  className="block p-8 transition-all duration-500 border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
                >
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    Dentist in West Delhi
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Best dental clinic in Mohan Garden, West Delhi. Expert dental surgeons offering comprehensive dental care.
                  </p>
                </Link>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 text-white py-28 bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Book Your Appointment Today</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Visit our clinic in Gurgaon or West Delhi for expert dental care
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
                  Call: +91 98104 71255
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

