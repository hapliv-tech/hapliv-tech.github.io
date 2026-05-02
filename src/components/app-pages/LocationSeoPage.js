import Image from 'next/image';
import Link from 'next/link';
import TrustStrip from 'components/seo/TrustStrip';
import { ConsultationCta, PageHero, SectionHeader } from 'components/app-pages/PageSections';
import { PHONE_TEL } from 'lib/seo';
import { FaArrowRight, FaCheckCircle, FaClock, FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function InfoCard({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex h-full gap-3 rounded-card border border-primary/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-lightest text-primary">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-gray-900">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {content}
    </a>
  );
}

export default function LocationSeoPage({
  eyebrow,
  title,
  description,
  secondaryLabel = 'Get Directions',
  ctaLocation,
  whatsappUrl,
  image = '/assets/hapliv_dental_operatory.webp',
  imageAlt,
  address,
  timings,
  landmark,
  mapHref,
  introTitle,
  introBody = [],
  quickFacts = [],
  services = [],
  areas = [],
  relatedLinks = [],
  consultationTitle,
  consultationDescription,
  showTrustStrip = true,
}) {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        secondaryHref={mapHref}
        secondaryLabel={secondaryLabel}
      >
        <div className="overflow-hidden rounded-card border border-white bg-white p-3 shadow-premium">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-gray-100">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid gap-3 p-3 sm:grid-cols-2">
            {quickFacts.slice(0, 4).map((fact) => (
              <div key={fact} className="flex gap-2 rounded-card bg-primary-lightest/60 p-3">
                <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-sm font-semibold leading-relaxed text-gray-800">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      {showTrustStrip ? <TrustStrip /> : null}

      <section className="px-4 py-16 bg-white md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader eyebrow="Clinic details" title={introTitle} description={introBody[0]} align="left" />
            <div className="space-y-5 text-base leading-relaxed text-gray-700 md:text-lg">
              {introBody.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoCard icon={FaMapMarkerAlt} label="Address" value={address} href={mapHref} />
              <InfoCard icon={FaClock} label="Timings" value={timings} />
              <InfoCard icon={FaPhoneAlt} label="Phone" value="+91 98104 71255" href={`tel:${PHONE_TEL}`} />
              {landmark ? <InfoCard icon={FaLocationArrow} label="Landmark" value={landmark} href={mapHref} /> : null}
            </div>
          </div>

          <div className="rounded-card border border-primary/10 bg-primary-lightest/50 p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-950">Why patients choose this clinic</h3>
            <div className="mt-6 grid gap-4">
              {quickFacts.map((fact) => (
                <div key={fact} className="flex gap-3 rounded-card border border-primary/10 bg-white p-4">
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-semibold leading-relaxed text-gray-800">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Dental services available here"
            description="Choose a service page to understand treatment options before booking your visit."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex h-full flex-col rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg"
              >
                <h3 className="text-xl font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 md:text-base">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-white md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Nearby areas"
            title="Areas served by this clinic"
            description="Patients commonly visit from these neighborhoods and nearby residential communities."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area}
                className="flex min-h-[76px] items-center justify-center rounded-card border border-gray-100 bg-gray-50 p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white"
              >
                <p className="text-sm font-semibold text-gray-900 md:text-base">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedLinks.length ? (
        <section className="px-4 py-14 bg-gray-50 md:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="Related"
              title="Helpful planning pages"
              description="Use these local guides and service pages if you are comparing options before booking."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-card border border-gray-100 bg-white p-5 font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ConsultationCta
        title={consultationTitle}
        description={consultationDescription}
        ctaLocation={ctaLocation}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
