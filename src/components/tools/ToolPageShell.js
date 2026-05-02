import Link from 'next/link';
import { ConsultationCta } from 'components/app-pages/PageSections';
import JsonLdScripts from 'components/seo/JsonLdScripts';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import TrustStrip from 'components/seo/TrustStrip';
import { locations } from 'data/locations';
import { SITE_URL, PHONE_DISPLAY, buildBreadcrumbJsonLd, buildFaqJsonLd } from 'lib/seo';

export default function ToolPageShell({
  path,
  breadcrumbItems,
  h1,
  intro,
  whoFor = [],
  faqs = [],
  relatedLinks = [],
  children,
}) {
  const g = locations.gurgaon;
  const schemas = [buildBreadcrumbJsonLd(breadcrumbItems)];
  if (faqs.length) schemas.push(buildFaqJsonLd(faqs));

  return (
    <>
      <JsonLdScripts schemas={schemas} />
      <PageBreadcrumbs items={breadcrumbItems} />
      <article className="min-h-screen pb-16 bg-white">
        <header className="relative overflow-hidden bg-gradient-to-b from-white via-primary-lightest/50 to-gray-50 px-4 py-16 md:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(126,87,194,0.13),transparent_30%),radial-gradient(circle_at_84%_8%,rgba(245,185,66,0.18),transparent_24%)]" />
          <div className="container relative mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft">
              Dental planning guide
            </span>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">{h1}</h1>
            <div className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">{intro}</div>
          </div>
        </header>

        <TrustStrip />

        {whoFor.length > 0 && (
          <section className="px-4 py-16 bg-gray-50">
            <div className="container max-w-3xl mx-auto">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Is this right for you?</h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {whoFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="container max-w-3xl mx-auto">{children}</div>
        </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Hapliv in Gurgaon (Sector 65)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Hapliv Dental Clinic — {g.address.street}, {g.address.city}. {PHONE_DISPLAY}.{' '}
              <strong>{g.openingHours.weekdays}</strong>. We serve patients from Golf Course Extension Road, M3M Tee Point,
              South City, and nearby sectors. Final treatment advice always follows an in-person exam.
            </p>
            <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary underline">
              Sector 65 clinic details →
            </Link>
          </div>
        </section>

        {faqs.length > 0 && (
          <section className="px-4 py-16 bg-white" id="faqs">
            <div className="container max-w-3xl mx-auto">
              <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">FAQs</h2>
              <div className="space-y-6">
                {faqs.map((f, i) => (
                  <div key={i} className="pb-6 border-b border-gray-100">
                    <h3 className="mb-2 font-semibold text-gray-900">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedLinks.length > 0 && (
          <section className="px-4 py-16 bg-gray-50">
            <div className="container max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Related links</h2>
              <p className="flex flex-wrap justify-center gap-3 text-primary font-semibold">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="underline hover:text-primary-dark">
                    {l.label}
                  </Link>
                ))}
              </p>
            </div>
          </section>
        )}

        <ConsultationCta
          title="Take the next step"
          description="Prefer to book online? After you review your result above, call, WhatsApp, or book an appointment with the clinic."
          ctaLocation="tool-page-footer"
        />
      </article>
    </>
  );
}
