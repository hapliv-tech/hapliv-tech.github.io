import Link from 'next/link';
import { FaCalculator, FaNotesMedical, FaSmileBeam, FaTeeth } from 'react-icons/fa';
import JsonLdScripts from 'components/seo/JsonLdScripts';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import { buildBreadcrumbJsonLd } from 'lib/seo';

export const metadata = {
  title: 'Dental Guides Gurgaon | Braces, Invisalign & Implants',
  description:
    'Free dental guides for Gurgaon patients: choose the right Braces, Invisalign, or Dental Implant consultation path, then book or WhatsApp Hapliv Sector 65.',
  alternates: { canonical: '/dental-guides' },
  openGraph: {
    url: 'https://haplivdentalclinic.com/dental-guides',
    title: 'Dental guides for Braces, Invisalign & Implants — Hapliv Gurgaon',
    description:
      'Plan your consultation, WhatsApp the clinic, or book online at Hapliv Sector 65.',
    type: 'website',
  },
};

const path = '/dental-guides';

const guides = [
  {
    href: '/dental-guides/braces-invisalign-consultation-planner',
    title: 'Braces & Invisalign consultation planner',
    blurb: 'Not sure whether to book braces, Invisalign, or a comparison consult? Get a clear next step before you WhatsApp or book.',
    Icon: FaCalculator,
    priority: true,
  },
  {
    href: '/dental-guides/dental-implant-consultation-planner',
    title: 'Dental implant consultation planner',
    blurb: 'For missing teeth, see whether an implant-focused consultation is the sensible next step before your visit.',
    Icon: FaTeeth,
    priority: true,
  },
  {
    href: '/dental-guides/smile-treatment-guide',
    title: 'Smile treatment guide',
    blurb: 'Crooked teeth, gaps, whitening, or full smile refresh — likely first steps for your Gurgaon visit.',
    Icon: FaSmileBeam,
  },
  {
    href: '/dental-guides/tooth-pain-urgency-guide-gurgaon',
    title: 'Tooth pain urgency guide',
    blurb: 'Same-day vs within a few days vs routine — based on your symptoms. Not a diagnosis.',
    Icon: FaNotesMedical,
  },
];

export default function DentalGuidesHubPage() {
  const schemas = [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Planning guides', path },
    ]),
  ];

  return (
    <>
      <JsonLdScripts schemas={schemas} />
      <PageBreadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Planning guides', path },
        ]}
      />
      <div className="min-h-screen pb-20 bg-white">
        <header className="px-4 py-16 text-white md:py-20 bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
              Dental guides for Braces, Invisalign & Implants in Gurgaon
            </h1>
            <p className="text-lg text-gray-100 md:text-xl">
              Answer a few questions in private, then book online or WhatsApp Hapliv Dental Clinic at Sector 65
              (M3M Tee Point, Golf Course Extension Road). These guides help you choose the right consultation path;
              they are not a diagnosis.
            </p>
          </div>
        </header>
        <section className="px-4 py-12">
          <div className="container max-w-3xl mx-auto grid gap-6">
            {guides.map(({ href, title, blurb, Icon, priority }) => (
              <Link
                key={href}
                href={href}
                className={`group block rounded-card border bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft-lg ${
                  priority ? 'border-primary/30' : 'border-gray-200'
                }`}
              >
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-button bg-primary/10 text-primary transition group-hover:bg-primary/15">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-semibold text-primary">{title}</h2>
                    <p className="mt-2 text-gray-700">{blurb}</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:underline">
                      Start free guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="px-4 py-10 bg-gray-50">
          <div className="container max-w-3xl mx-auto text-center text-gray-700">
            <p>
              Prefer to speak to the clinic?{' '}
              <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary underline">
                Sector 65 location
              </Link>{' '}
              ·{' '}
              <Link href="/appointment" className="font-semibold text-primary underline">
                Book appointment
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
