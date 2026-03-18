import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import JsonLdScripts from 'components/seo/JsonLdScripts';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import TrustStrip from 'components/seo/TrustStrip';
import { SITE_URL, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG, buildBreadcrumbJsonLd, buildFaqJsonLd } from 'lib/seo';

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
        name: 'Hapliv Dental Clinic',
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
      <div className="min-h-screen bg-white pb-20 md:pb-0">
        <section className="relative px-4 py-16 md:py-24 text-white bg-primary-dark">
          <div className="container max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {h1}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-100 md:text-xl max-w-3xl mx-auto">
                  {heroSub}
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/appointment"
                    className="px-8 py-3.5 text-base font-semibold tracking-wide transition-all bg-white rounded-button text-primary shadow-button hover:shadow-button-hover"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="px-8 py-3.5 text-base font-semibold tracking-wide text-white border-2 border-white rounded-button hover:bg-white hover:text-primary"
                  >
                    Call Now
                  </a>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 text-base font-semibold tracking-wide text-white border-2 border-white rounded-button hover:bg-white hover:text-primary"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        <TrustStrip />

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <SlideUp delay={0.05}>
              <div>
                {introParagraphs.map((p, i) => (
                  <div key={i} className="mb-4 text-lg text-gray-700 leading-relaxed">
                    {p}
                  </div>
                ))}
                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900">Benefits</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </SlideUp>
            <SlideUp delay={0.1}>
              <div className="relative w-full h-56 md:h-72 rounded-card overflow-hidden shadow-soft-lg">
                <Image src={heroImage} alt={heroImageAlt || h1} layout="fill" objectFit="cover" className="rounded-card" />
              </div>
            </SlideUp>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-900 md:text-3xl">Who needs this treatment?</h2>
            <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2 text-gray-700 text-lg">
              {whoNeeds.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <h2 className="mb-12 text-2xl font-semibold text-center text-gray-900 md:text-3xl">Treatment process</h2>
            <StaggerChildren staggerDelay={0.08}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {processSteps.map((s, idx) => (
                  <SlideUp key={idx} delay={idx * 0.05}>
                    <div className="h-full p-6 bg-white rounded-card border border-gray-100 shadow-soft">
                      <div className="text-2xl font-semibold text-primary mb-2">{String(idx + 1).padStart(2, '0')}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
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
            <ul className="text-left inline-block text-gray-700 space-y-2 mb-6">
              {pricingLines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              Final cost depends on your case after consultation.{' '}
              <Link href="/appointment" className="text-primary font-semibold underline">
                Book a consultation
              </Link>{' '}
              for an exact quote.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900 md:text-3xl">Why choose Hapliv</h2>
            <ul className="max-w-3xl mx-auto grid gap-3 md:grid-cols-2">
              {whyChoose.map((w, i) => (
                <li key={i} className="flex gap-2 text-gray-700">
                  <span className="text-primary font-bold">✓</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container max-w-7xl mx-auto md:flex md:gap-12 items-center">
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{doctorTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{doctorText}</p>
              <Link href="/about-us" className="inline-block mt-4 text-primary font-semibold hover:underline">
                About our team →
              </Link>
            </div>
            <div className="flex-1 p-6 bg-gray-50 rounded-card">
              <h3 className="font-semibold text-gray-900 mb-2">Before &amp; after</h3>
              <p className="text-gray-600 mb-4">See real outcomes from our Gurgaon and West Delhi clinics.</p>
              <Link href={galleryHref} className="text-primary font-semibold hover:underline">
                {galleryLabel} →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">What patients say</h2>
            <p className="text-gray-700 mb-2">4.98★ average rating from 100+ Google reviews.</p>
            <Link href="/about-us" className="text-primary font-semibold hover:underline">
              About our clinic →
            </Link>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">Areas we serve</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areasServed.map((a) => (
                <span key={a} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-center">
              <Link
                href="/locations/dentist-in-sector-65-gurgaon"
                className="p-6 bg-white rounded-card shadow-soft border border-gray-100 hover:border-primary"
              >
                <strong className="text-primary">Gurgaon Sector 65</strong>
                <p className="text-sm text-gray-600 mt-2">M3M Tee Point, Golf Course Ext Rd</p>
              </Link>
              <Link href="/dentist-in-west-delhi" className="p-6 bg-white rounded-card shadow-soft border border-gray-100 hover:border-primary">
                <strong className="text-primary">West Delhi</strong>
                <p className="text-sm text-gray-600 mt-2">Mohan Garden — evening appointments</p>
              </Link>
            </div>
          </div>
        </section>

        {emergencyBlurb && (
          <section className="px-4 py-12 bg-white border-t border-gray-100">
            <div className="container max-w-3xl mx-auto text-center text-gray-700">
              <p className="mb-2">
                <strong>Tooth pain or urgent care?</strong>{' '}
                <Link href="/emergency-dentist-gurgaon" className="text-primary font-semibold hover:underline">
                  Emergency dentist in Gurgaon
                </Link>
              </p>
              <p>
                Looking for a{' '}
                <Link href="/best-orthodontist-gurgaon" className="text-primary font-semibold hover:underline">
                  nearby orthodontist
                </Link>{' '}
                or general{' '}
                <Link href="/locations/nearby-dentist-gurgaon" className="text-primary font-semibold hover:underline">
                  dentist near me in Gurgaon
                </Link>
                ?
              </p>
            </div>
          </section>
        )}

        <section className="px-4 py-20 text-white bg-primary-dark">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">{finalCtaTitle}</h2>
            <p className="mb-8 text-gray-100">Same-week slots often available. Call, WhatsApp, or book online.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/appointment" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-button">
                Book Appointment
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="px-8 py-3.5 border-2 border-white rounded-button font-semibold">
                Call {PHONE_TEL.replace('+91', '+91 ')}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-white rounded-button font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
