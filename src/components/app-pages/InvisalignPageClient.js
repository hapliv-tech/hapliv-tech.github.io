import Image from 'next/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { ConsultationCta } from 'components/app-pages/PageSections';
import JsonLdScripts from 'components/seo/JsonLdScripts';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import { InvisalignSpecificFaq } from 'components/faq';
import {
  SITE_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_E164,
  CLINIC_SCHEMA_NAME,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from 'lib/seo';
import { FaAward, FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaWhatsapp } from 'react-icons/fa';

const whatsappLink = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
  'Hello! I would like to book an Invisalign consultation at Hapliv Dental Clinic.'
)}`;

const jumpLinks = [
  { href: '#why-invisalign', label: 'Why Invisalign' },
  { href: '#process', label: 'Process' },
  { href: '#cases', label: 'Treatable cases' },
  { href: '#results', label: 'Results' },
  { href: '#comparison', label: 'Vs braces' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#book', label: 'Book' },
];

const processSteps = [
  {
    title: 'Consultation and records',
    desc: 'Clinical exam, bite analysis, and digital records to confirm candidacy.',
  },
  {
    title: 'Digital smile planning',
    desc: '3D planning to map predictable tooth movement and expected timeline.',
  },
  {
    title: 'Aligner delivery',
    desc: 'Custom trays are issued with wear-time and hygiene instructions.',
  },
  {
    title: 'Progress reviews',
    desc: 'Regular checks and refinements ensure your treatment stays on track.',
  },
  {
    title: 'Retention and stability',
    desc: 'Retainers help maintain your final smile after active treatment.',
  },
];

const treatableCases = [
  { src: '/assets/invisalign-gallery/cross-bite-case.webp', alt: 'Cross bite aligner correction', label: 'Cross bite' },
  { src: '/assets/invisalign-gallery/crowding-case.webp', alt: 'Crowding aligner correction', label: 'Crowding' },
  { src: '/assets/invisalign-gallery/gapped-case.webp', alt: 'Gap closure with aligners', label: 'Spacing' },
  { src: '/assets/invisalign-gallery/open-bite-case.webp', alt: 'Open bite aligner correction', label: 'Open bite' },
  { src: '/assets/invisalign-gallery/over-bite-case.webp', alt: 'Deep bite aligner correction', label: 'Deep bite' },
  { src: '/assets/invisalign-gallery/under-bite-case.webp', alt: 'Underbite aligner correction', label: 'Underbite' },
];

const resultImages = [
  { src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign deep bite before and after' },
  { src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign smile alignment result' },
  { src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign crowding correction result' },
  { src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign open bite correction result' },
];

const compareRows = [
  { feature: 'Appearance', invisalign: 'Nearly invisible trays', braces: 'Visible brackets and wire' },
  { feature: 'Removability', invisalign: 'Removable for meals and brushing', braces: 'Fixed appliance' },
  { feature: 'Comfort', invisalign: 'Smooth tray edges', braces: 'Can irritate cheeks initially' },
  { feature: 'Food restrictions', invisalign: 'Minimal, trays removed while eating', braces: 'Sticky/hard foods restricted' },
  { feature: 'Hygiene', invisalign: 'Easier flossing and brushing', braces: 'More detailed cleaning needed' },
  { feature: 'Follow-up rhythm', invisalign: 'Periodic monitoring with tray changes', braces: 'Wire adjustments at visits' },
];

const faqItems = InvisalignSpecificFaq.faqs.map((item) => ({
  question: item.question,
  answer: Array.isArray(item.answers) ? item.answers[0] : '',
})).filter((item) => item.question && item.answer);

const sectionTitle = 'mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl';
const sectionDesc = 'mx-auto max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg';

export default function InvisalignPageClient() {
  const schemas = [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Invisalign', path: '/invisalign' },
    ]),
    buildFaqJsonLd(faqItems),
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Invisalign Clear Aligner Treatment',
      procedureType: 'Orthodontic aligner therapy',
      description:
        'Invisalign clear aligner treatment with digital smile planning, periodic monitoring, and retention support at Hapliv clinics in Gurgaon and West Delhi.',
      url: `${SITE_URL}/invisalign`,
      provider: {
        '@type': 'Dentist',
        name: CLINIC_SCHEMA_NAME,
        telephone: PHONE_TEL,
        url: SITE_URL,
      },
      areaServed: [
        { '@type': 'City', name: 'Gurgaon' },
        { '@type': 'City', name: 'West Delhi' },
      ],
    },
  ];

  return (
    <>
      <JsonLdScripts schemas={schemas} />
      <PageBreadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Invisalign', path: '/invisalign' }]} compact />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-4 pb-14 pt-28 md:pb-20 md:pt-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(81,36,122,0.06)_1px,_transparent_1.5px)] bg-[length:24px_24px]" aria-hidden="true" />
          <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase text-primary shadow-soft">
                <FaAward className="h-3.5 w-3.5" />
                Certified Invisalign Provider
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                Invisalign clear aligners in Gurgaon and West Delhi
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
                Understand candidacy, timeline, and treatment steps before you book. Hapliv offers specialist-led Invisalign planning with predictable digital workflow and periodic monitoring.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                Location-focused pages: <Link href="/invisalign-gurgaon" className="font-semibold text-primary underline">Invisalign Gurgaon</Link>,{' '}
                <Link href="/invisalign-sector-65-gurgaon" className="font-semibold text-primary underline">Invisalign Sector 65</Link>, and{' '}
                <Link href="/invisalign-cost-gurgaon" className="font-semibold text-primary underline">Invisalign cost guide</Link>.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="invisalign-hero"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-success px-7 py-4 text-base font-semibold text-white shadow-button transition-all hover:bg-success-hover hover:shadow-button-hover"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp for Invisalign
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="invisalign-hero"
                  className="inline-flex items-center justify-center gap-2 rounded-button border border-primary/15 bg-white px-7 py-4 text-base font-semibold text-primary shadow-soft transition-colors hover:bg-primary-lightest"
                >
                  <FaPhoneAlt className="h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-button border border-gray-200 bg-white px-3 py-2">
                  <FaStar className="h-3.5 w-3.5 text-primary" />
                  <span>4.98 Google rating</span>
                </div>
                <div className="flex items-center gap-2 rounded-button border border-gray-200 bg-white px-3 py-2">
                  <FaMapMarkerAlt className="h-3.5 w-3.5 text-primary" />
                  <span>2 clinic locations</span>
                </div>
                <div className="flex items-center gap-2 rounded-button border border-gray-200 bg-white px-3 py-2">
                  <FaAward className="h-3.5 w-3.5 text-primary" />
                  <span>Digital treatment planning</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-card border border-white bg-white p-3 shadow-premium">
              <div className="pointer-events-none absolute -left-14 top-10 h-40 w-40 rounded-full border border-primary/15" aria-hidden="true" />
              <div className="pointer-events-none absolute -left-8 top-16 h-28 w-28 rounded-full border border-primary/10" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-8 bottom-10 h-28 w-28 rounded-full border border-accent/20" aria-hidden="true" />
              <div className="pointer-events-none absolute right-6 top-6 grid grid-cols-4 gap-1.5 opacity-60" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <span key={`hero-dot-${idx}`} className="h-1 w-1 rounded-full bg-primary/30" />
                ))}
              </div>
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden="true" />
              <Image
                src="/assets/invis-box.webp"
                width={560}
                height={440}
                alt="Invisalign aligner kit at Hapliv Dental Clinic"
                className="h-auto w-full rounded-card object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="z-20 px-4 py-3 bg-white border-y border-gray-100 lg:sticky lg:top-20">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">On this page</span>
              {jumpLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="why-invisalign" className="px-4 py-14 scroll-mt-40 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className={sectionTitle}>Why patients choose Invisalign</h2>
            <p className={sectionDesc}>
              Invisalign uses staged clear aligners to move teeth without fixed brackets. For many adults and teens, it offers a quieter treatment experience with easier daily hygiene and fewer lifestyle disruptions.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                'Nearly invisible trays for work, social, and family settings',
                'Removable aligners for meals and oral hygiene',
                'Digital treatment planning with milestone visibility',
                'Comfort-focused care with specialist orthodontic oversight',
                'Predictable progress reviews and refinement planning',
                'Retention protocol for long-term stability after alignment',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-card border border-gray-100 bg-gray-50 p-4 shadow-soft">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-gray-800 md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-gray-50 px-4 py-14 scroll-mt-40 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className={sectionTitle}>Invisalign process at Hapliv</h2>
            <p className={sectionDesc}>
              This process helps you understand what to expect before starting treatment.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, idx) => (
                <article key={step.title} className="rounded-card border border-gray-100 bg-white p-6 shadow-soft">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Step {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="px-4 py-14 scroll-mt-40 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className={sectionTitle}>Treatable cases with Invisalign</h2>
            <p className={sectionDesc}>
              Invisalign can address many common orthodontic concerns when treatment is planned correctly.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {treatableCases.map((item) => (
                <article key={item.label} className="overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={480}
                    height={320}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 30vw"
                  />
                  <div className="bg-primary px-4 py-3 text-center text-sm font-semibold text-white md:text-base">
                    {item.label}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="bg-primary px-4 py-14 scroll-mt-40 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-center text-white md:text-4xl">Invisalign treatment results</h2>
            <p className="mx-auto max-w-3xl text-center text-white/90">
              Real cases from Hapliv clinics. Your plan and timeline vary based on bite complexity and adherence.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {resultImages.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-card border border-white/15 bg-white/10 shadow-soft">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={420}
                    height={560}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 24vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="bg-gray-50 px-4 py-14 scroll-mt-40 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className={sectionTitle}>Invisalign vs braces</h2>
            <p className={sectionDesc}>
              Both options are effective; suitability depends on diagnosis, treatment goals, and compliance.
            </p>
            <div className="mt-10 overflow-x-auto rounded-card border border-gray-200 bg-white shadow-soft-lg">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-primary-lightest">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-900 md:px-6">Feature</th>
                    <th className="px-4 py-3 text-sm font-semibold text-primary md:px-6">Invisalign</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-900 md:px-6">Braces</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {compareRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 md:px-6 md:text-base">{row.feature}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 md:px-6 md:text-base">{row.invisalign}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 md:px-6 md:text-base">{row.braces}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="faqs" className="px-4 py-14 scroll-mt-40 md:py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl">
              Invisalign FAQs
            </h2>
            <div className="rounded-card border border-gray-200 bg-white shadow-soft">
              {faqItems.map((item, idx) => (
                <details key={item.question} className={`p-5 ${idx > 0 ? 'border-t border-gray-100' : ''}`}>
                  <summary className="cursor-pointer list-none text-base font-semibold text-gray-900 md:text-lg">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div id="book" className="scroll-mt-40">
          <ConsultationCta
            title="Book your Invisalign consultation"
            description="Get a specialist assessment, discuss case complexity, and receive a phased treatment plan with clear next steps."
            ctaLocation="invisalign-footer"
            whatsappUrl={whatsappLink}
          />
        </div>
      </main>
    </>
  );
}
