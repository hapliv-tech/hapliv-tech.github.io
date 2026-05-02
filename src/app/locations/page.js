import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { ConsultationCta, SectionHeader } from 'components/app-pages/PageSections';
import { locations as clinicLocations } from 'data/locations';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const locationsIndexWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Our Locations | Dental Clinics in Gurgaon & West Delhi',
  description:
    'Find Hapliv Dental Clinic locations in Gurgaon (Sector 65) and West Delhi. Expert dental surgeons offering braces, Invisalign, root canal, implants, and comprehensive dental care. Book your appointment today!',
  keywords:
    'Dental clinic locations, Dentist in Gurgaon, Dentist in West Delhi, Dental clinic Sector 65, Nearby dentist, Dental surgeon locations, Hapliv Dental Clinic locations',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    description:
      'Find our dental clinic locations in Gurgaon (Sector 65) and West Delhi. Expert dental care near you.',
    url: 'https://haplivdentalclinic.com/locations',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
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

const locationCards = [
  {
    key: 'gurgaon',
    label: 'Main clinic',
    name: 'Sector 65, Gurgaon',
    summary:
      'Full-service dental clinic near M3M Tee Point for braces, Invisalign, root canal, implants, laser dentistry and family care.',
    image: '/assets/clinic_entrance.webp',
    link: clinicLocations.gurgaon.pages.main,
    nearbyLink: clinicLocations.gurgaon.pages.nearby,
    mapHref: `https://www.google.com/maps/dir/?api=1&destination=${clinicLocations.gurgaon.coordinates.lat},${clinicLocations.gurgaon.coordinates.lng}`,
    focus: ['Braces & Invisalign', 'Root canal', 'Dental implants', 'Laser dentistry'],
  },
  {
    key: 'westDelhi',
    label: 'Evening clinic',
    name: 'Mohan Garden, West Delhi',
    summary:
      'Convenient evening dental care in West Delhi with the same Hapliv treatment planning and follow-up standards.',
    image: '/assets/hapliv_dental_operatory.webp',
    link: clinicLocations.westDelhi.pages.main,
    nearbyLink: clinicLocations.westDelhi.pages.nearby,
    mapHref: `https://www.google.com/maps/dir/?api=1&destination=${clinicLocations.westDelhi.coordinates.lat},${clinicLocations.westDelhi.coordinates.lng}`,
    focus: ['Orthodontics', 'General dentistry', 'Root canal', 'Preventive care'],
  },
];

const nearbyPages = [
  {
    href: '/locations/dentist-in-sector-65-gurgaon',
    title: 'Dentist in Sector 65, Gurgaon',
    body: 'Clinic details, landmark guidance and service information for Sector 65.',
  },
  {
    href: '/locations/nearby-dentist-gurgaon',
    title: 'Nearby Dentist in Gurgaon',
    body: 'Find us from Golf Course Extension Road, South City, M3M Golf Estate and nearby sectors.',
  },
  {
    href: '/dentist-in-south-city-gurgaon',
    title: 'Dentist in South City, Gurgaon',
    body: 'Convenient access from South City I and II to our Sector 65 clinic.',
  },
  {
    href: '/dentist-in-west-delhi',
    title: 'West Delhi Clinic (Mohan Garden)',
    body: 'Main West Delhi clinic page with evening timings, treatment coverage and booking options.',
  },
  {
    href: '/locations/nearby-dentist-west-delhi',
    title: 'Nearby Dentist in West Delhi',
    body: 'Area-focused page for Uttam Nagar, Dwarka, Janakpuri and nearby neighborhoods.',
  },
  {
    href: '/emergency-dentist-gurgaon',
    title: 'Emergency Dentist in Gurgaon',
    body: 'Same-day guidance for tooth pain, swelling, broken teeth and urgent dental concerns.',
  },
  {
    href: '/pediatric-dentist-gurgaon',
    title: 'Pediatric Dentist in Gurgaon',
    body: 'Gentle child-friendly dental care for families around Sector 65 and nearby areas.',
  },
];

function formatSundayHours(sundayHours) {
  if (!sundayHours) return null;
  if (typeof sundayHours === 'string') return sundayHours;
  if (sundayHours.opens && sundayHours.closes) {
    return `${sundayHours.day || 'Sunday'}: 10:00 AM - 1:00 PM`;
  }
  return null;
}

function LocationCard({ item }) {
  const location = clinicLocations[item.key];
  const fullAddress = `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.postalCode}`;
  const visibleAreas = location.nearbyAreas.slice(0, 6);
  const sundayHours = formatSundayHours(location.openingHours.sunday);

  return (
    <article className="overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium">
      <div className="relative aspect-[16/10] bg-gray-100">
        <Image
          src={item.image}
          alt={`${item.name} Hapliv Dental Clinic location`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute left-5 top-5 rounded-pill bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary shadow-soft backdrop-blur">
          {item.label}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">{item.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-gray-700">{item.summary}</p>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <FaMapMarkerAlt className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-gray-950">Address</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{fullAddress}</p>
              <p className="mt-1 text-sm text-gray-500">{location.landmark}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaClock className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-gray-950">Clinic hours</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{location.openingHours.weekdays}</p>
              {sundayHours && <p className="mt-1 text-sm text-gray-500">{sundayHours}</p>}
            </div>
          </div>
          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-gray-950">Phone</p>
              <a href={`tel:${PHONE_TEL}`} className="mt-1 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
                {location.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-950">Common visits here</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.focus.map((service) => (
              <span key={service} className="rounded-pill bg-primary-lightest px-3 py-1.5 text-xs font-semibold text-primary">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-950">Nearby areas</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {visibleAreas.map((area) => (
              <span key={area} className="rounded-pill border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={item.link}
            className="inline-flex items-center justify-center gap-2 rounded-button bg-primary px-5 py-3 text-sm font-semibold text-white shadow-button transition-all duration-300 hover:bg-primary-dark hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            View Clinic <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={item.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-button border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:bg-primary-lightest hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaLocationArrow className="h-3.5 w-3.5" />
            Directions
          </a>
          <Link
            href={item.nearbyLink}
            className="inline-flex items-center justify-center rounded-button border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-soft transition-all duration-300 hover:border-primary/30 hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
          >
            Nearby Dentist
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen mt-24 overflow-hidden bg-white">
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-lightest/50 to-gray-50 px-4 py-16 md:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(81,36,122,0.08)_1px,_transparent_1.5px)] bg-[length:24px_24px]" aria-hidden="true" />
          <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase text-primary shadow-soft">
                <FaMapMarkerAlt className="h-3.5 w-3.5" />
                Gurgaon & West Delhi
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">
                Find Hapliv Dental Clinic near you
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">
                Two clinic locations, one specialist-led dental team. Choose Sector 65, Gurgaon for full-day care or Mohan Garden, West Delhi for evening appointments.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookAppointmentLink
                  href="/appointment"
                  data-cta="appointment"
                  data-cta-location="locations-index-hero"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-primary px-7 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-primary-dark hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaCalendarCheck className="h-4 w-4" />
                  Book Appointment
                </BookAppointmentLink>
                <a
                  href={locationsIndexWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="locations-index-hero"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-success px-7 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-success-hover hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="locations-index-hero"
                  className="inline-flex items-center justify-center gap-2 rounded-button border border-gray-300 bg-white px-7 py-4 text-base font-semibold text-gray-900 shadow-soft transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-soft-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaPhoneAlt className="h-4 w-4 text-primary" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="relative z-10 overflow-hidden rounded-card border border-white bg-white shadow-premium">
                <Image
                  src="/assets/clinic_entrance.webp"
                  width={900}
                  height={675}
                  alt="Hapliv Dental Clinic entrance in Gurgaon"
                  priority
                  unoptimized
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-5 left-5 z-20 max-w-[15rem] rounded-card border border-white/80 bg-white/90 p-4 shadow-soft-lg backdrop-blur">
                <div className="text-xs font-semibold uppercase text-primary">2 clinic locations</div>
                <div className="mt-1 text-sm leading-snug text-gray-700">Braces, Invisalign, RCT, implants and family dental care.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-8">
          <div className="container mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
            {[
              ['Sector 65', 'Gurgaon main clinic'],
              ['Mohan Garden', 'West Delhi evening clinic'],
              ['Mon-Sat', 'Appointment-led care'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-card border border-primary/10 bg-white p-5 shadow-soft">
                <FaCheckCircle className="h-4 w-4 text-primary" />
                <div className="mt-3 text-2xl font-semibold text-gray-950">{value}</div>
                <div className="mt-1 text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-14 md:px-8 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Clinic locations"
              title="Choose the clinic that works for your schedule"
              description="Both clinics follow Hapliv's calm, specialist-led approach with clear treatment planning before procedures begin."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {locationCards.map((item) => (
                <LocationCard key={item.key} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:px-8 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Find care nearby"
              title="Location pages for specific needs"
              description="Use these pages when you are searching by area, urgency or family dental care need."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {nearbyPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex h-full flex-col rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-primary">
                    {page.title}
                  </h3>
                  <div className="mt-4 h-0.5 w-12 bg-accent" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">{page.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open page <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta
          title="Need help choosing a clinic?"
          description="Message or call us and we will guide you to the right Hapliv location for your treatment and schedule."
          ctaLocation="locations-index-footer"
          whatsappUrl={locationsIndexWaUrl}
        />
      </main>
    </>
  );
}
