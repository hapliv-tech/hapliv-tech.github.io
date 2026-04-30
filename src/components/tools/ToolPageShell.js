import Link from 'next/link';
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
        <header className="px-4 py-14 text-white md:py-20 bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{h1}</h1>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">{intro}</div>
          </div>
        </header>

        <TrustStrip />

        {whoFor.length > 0 && (
          <section className="px-4 py-12 bg-gray-50">
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

        <section className="px-4 py-12 bg-white border-y border-gray-100">
          <div className="container max-w-3xl mx-auto">{children}</div>
        </section>

        <section className="px-4 py-12 bg-gray-50">
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
          <section className="px-4 py-12 bg-white" id="faqs">
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
          <section className="px-4 py-12 bg-gray-50">
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

        <section className="px-4 py-16 text-white bg-primary-dark">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-2xl font-semibold">Take the next step</h2>
            <p className="mb-6 text-gray-100">
              Prefer to book online? After you review your result above, use call, WhatsApp, or book — or go straight to{' '}
              <Link href="/appointment" className="font-semibold text-white underline">
                appointment booking
              </Link>
              .
            </p>
            <Link
              href="/dental-guides"
              className="inline-block text-sm font-semibold text-primary bg-white px-6 py-3 rounded-button hover:bg-gray-100"
            >
              ← All dental guides
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
