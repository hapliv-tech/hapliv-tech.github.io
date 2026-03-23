import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import JsonLdScripts from 'components/seo/JsonLdScripts';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import TrustStrip from 'components/seo/TrustStrip';
import {
  SITE_URL,
  PHONE_TEL,
  WHATSAPP_E164,
  DEFAULT_WHATSAPP_MSG,
  CLINIC_SCHEMA_NAME,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from 'lib/seo';

/**
 * Reusable high-intent local landing page layout.
 * @param {object} props
 */
export default function LocalMoneyPage({
  path,
  breadcrumbItems,
  h1,
  heroSub,
  heroImage = '/assets/hapliv_dental_operatory.webp',
  heroImageAlt,
  serviceSchema,
  faqs = [],
  introParagraphs = [],
  benefits = [],
  whoNeeds = [],
  processSteps = [],
  pricingTitle = 'Pricing guidance',
  pricingLines = [],
  whyChoose = [],
  doctorTitle = 'Meet your dentist',
  doctorText = '',
  galleryHref = '/gallery/treatment-results',
  galleryLabel = 'View treatment results',
  areasServed = [],
  emergencyBlurb = true,
  finalCtaTitle = 'Book your visit at Hapliv Dental Clinic',
}) {
  const fullUrl = `${SITE_URL}${path}`;
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;
  const schemas = [buildBreadcrumbJsonLd(breadcrumbItems)];
  if (serviceSchema) {
    const proc = { ...serviceSchema, url: fullUrl };
    const t = proc['@type'];
    if (t === 'MedicalProcedure' || t === 'Service') {
      proc.provider = {
        '@type': 'Dentist',
        name: CLINIC_SCHEMA_NAME,
        url: SITE_URL,
        telephone: PHONE_TEL,
      };
    }
    schemas.push(proc);
  }
  if (faqs.length) schemas.push(buildFaqJsonLd(faqs));

  return (
    <>
      <JsonLdScripts schemas={schemas} />
      <PageBreadcrumbs items={breadcrumbItems} />
      <div className="min-h-screen pb-20 bg-white md:pb-0">
        <section className="relative px-4 py-16 text-white md:py-24 bg-primary-dark">
          <div className="container mx-auto max-w-7xl">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {h1}
                </h1>
                <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-100 md:text-xl">
                  {heroSub}
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="money-page-hero"
                    className="px-8 py-3.5 text-base font-semibold tracking-wide transition-all bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:shadow-xl"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="money-page-hero"
                    className="px-8 py-3.5 text-base font-semibold tracking-wide text-white border-2 border-white rounded-button hover:bg-white/10"
                  >
                    Call Now
                  </a>
                  <BookAppointmentLink
                    href="/appointment"
                    data-cta="appointment"
                    data-cta-location="money-page-hero"
                    className="px-8 py-3.5 text-base font-semibold tracking-wide transition-all bg-white/10 rounded-button text-white border-2 border-white/80 hover:bg-white hover:text-primary"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        <TrustStrip />

        <section className="px-4 py-16 bg-gray-50">
          <div className="container grid items-start gap-12 mx-auto max-w-7xl md:grid-cols-2">
            <SlideUp delay={0.05}>
              <div>
                {introParagraphs.map((p, i) => (
                  <div key={i} className="mb-4 text-lg leading-relaxed text-gray-700">
                    {p}
                  </div>
                ))}
                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900">Benefits</h2>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  {benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </SlideUp>
            <SlideUp delay={0.1}>
              <div className="relative w-full h-56 overflow-hidden md:h-72 rounded-card shadow-soft-lg">
                <Image src={heroImage} alt={heroImageAlt || h1} layout="fill" objectFit="cover" className="rounded-card" />
              </div>
            </SlideUp>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-900 md:text-3xl">Who needs this treatment?</h2>
            <ul className="max-w-3xl mx-auto space-y-2 text-lg text-gray-700 list-disc list-inside">
              {whoNeeds.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-12 text-2xl font-semibold text-center text-gray-900 md:text-3xl">Treatment process</h2>
            <StaggerChildren staggerDelay={0.08}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {processSteps.map((s, idx) => (
                  <SlideUp key={idx} delay={idx * 0.05}>
                    <div className="h-full p-6 bg-white border border-gray-100 rounded-card shadow-soft">
                      <div className="mb-2 text-2xl font-semibold text-primary">{String(idx + 1).padStart(2, '0')}</div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">{s.title}</h3>
                      <p className="text-gray-700">{s.desc}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">{pricingTitle}</h2>
            <ul className="inline-block mb-6 space-y-2 text-left text-gray-700">
              {pricingLines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              Final cost depends on your case after consultation.{' '}
              <BookAppointmentLink className="font-semibold underline text-primary">
                Book a consultation
              </BookAppointmentLink>{' '}
              for an exact quote.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900 md:text-3xl">Why choose Hapliv</h2>
            <ul className="grid max-w-3xl gap-3 mx-auto md:grid-cols-2">
              {whyChoose.map((w, i) => (
                <li key={i} className="flex gap-2 text-gray-700">
                  <span className="font-bold text-primary">✓</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container items-center mx-auto max-w-7xl md:flex md:gap-12">
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{doctorTitle}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{doctorText}</p>
              <Link href="/about-us" className="inline-block mt-4 font-semibold text-primary hover:underline">
                About our team →
              </Link>
            </div>
            <div className="flex-1 p-6 bg-gray-50 rounded-card">
              <h3 className="mb-2 font-semibold text-gray-900">Before &amp; after</h3>
              <p className="mb-4 text-gray-600">See real outcomes from our Gurgaon and West Delhi clinics.</p>
              <Link href={galleryHref} className="font-semibold text-primary hover:underline">
                {galleryLabel} →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container mx-auto text-center max-w-7xl">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">What patients say</h2>
            <p className="mb-2 text-gray-700">4.98★ average rating from 100+ Google reviews.</p>
            <Link href="/about-us" className="font-semibold text-primary hover:underline">
              About our clinic →
            </Link>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="pb-6 border-b border-gray-100">
                  <h3 className="mb-2 font-semibold text-gray-900">{f.question}</h3>
                  <p className="leading-relaxed text-gray-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">Areas we serve</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areasServed.map((a) => (
                <span key={a} className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full">
                  {a}
                </span>
              ))}
            </div>
            <div className="grid max-w-4xl gap-6 mx-auto mt-10 text-center md:grid-cols-2">
              <Link
                href="/locations/dentist-in-sector-65-gurgaon"
                className="p-6 bg-white border border-gray-100 rounded-card shadow-soft hover:border-primary"
              >
                <strong className="text-primary">Gurgaon Sector 65</strong>
                <p className="mt-2 text-sm text-gray-600">M3M Tee Point, Golf Course Ext Rd</p>
              </Link>
              <Link href="/dentist-in-west-delhi" className="p-6 bg-white border border-gray-100 rounded-card shadow-soft hover:border-primary">
                <strong className="text-primary">West Delhi</strong>
                <p className="mt-2 text-sm text-gray-600">Mohan Garden — evening appointments</p>
              </Link>
            </div>
          </div>
        </section>

        {emergencyBlurb && (
          <section className="px-4 py-12 bg-white border-t border-gray-100">
            <div className="container max-w-3xl mx-auto text-center text-gray-700">
              <p className="mb-2">
                <strong>Tooth pain or urgent care?</strong>{' '}
                <Link href="/emergency-dentist-gurgaon" className="font-semibold text-primary hover:underline">
                  Emergency dentist in Gurgaon
                </Link>
              </p>
              <p>
                Looking for a{' '}
                <Link href="/best-orthodontist-gurgaon" className="font-semibold text-primary hover:underline">
                  nearby orthodontist
                </Link>{' '}
                or general{' '}
                <Link href="/locations/nearby-dentist-gurgaon" className="font-semibold text-primary hover:underline">
                  dentist near me in Gurgaon
                </Link>
                ?
              </p>
            </div>
          </section>
        )}

        <section className="px-4 py-20 text-white bg-primary-dark">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{finalCtaTitle}</h2>
            <p className="mb-8 text-gray-100">Same-week slots often available. WhatsApp us for the fastest reply — or call or book online.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-cta-location="money-page-footer"
                className="px-8 py-3.5 bg-emerald-500 text-white font-semibold rounded-button shadow-lg hover:bg-emerald-600"
              >
                WhatsApp Now
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                data-cta="call"
                data-cta-location="money-page-footer"
                className="px-8 py-3.5 text-white border-2 border-white rounded-button font-semibold hover:bg-white/10"
              >
                Call {PHONE_TEL.replace('+91', '+91 ')}
              </a>
              <BookAppointmentLink
                href="/appointment"
                data-cta="appointment"
                data-cta-location="money-page-footer"
                className="px-8 py-3.5 bg-white/10 text-white border-2 border-white/80 rounded-button font-semibold hover:bg-white hover:text-primary"
              >
                Book Appointment
              </BookAppointmentLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
