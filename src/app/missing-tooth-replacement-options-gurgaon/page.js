import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Missing Tooth Replacement Options Gurgaon | Implants & More',
  description:
    'Compare implants, bridges, and dentures for missing teeth in Gurgaon. Book implant consult at Hapliv Sector 65 or use our consultation planner.',
  alternates: { canonical: '/missing-tooth-replacement-options-gurgaon' },
  openGraph: {
    url: 'https://haplivdentalclinic.com/missing-tooth-replacement-options-gurgaon',
    title: 'Missing tooth options — Gurgaon',
    type: 'website',
  },
};

const path = '/missing-tooth-replacement-options-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Missing tooth options Gurgaon', path },
      ]}
      h1="Missing tooth replacement options in Gurgaon"
      heroSub="Implants, bridges, and removable solutions — we explain trade-offs at M3M Tee Point, Sector 65, after bone and bite assessment."
      relatedLinks={[
        { href: '/dental-guides/dental-implant-consultation-planner', label: 'Implant consultation planner' },
        { href: '/dental-implants-gurgaon', label: 'Dental implants Gurgaon' },
        { href: '/appointment', label: 'Book appointment' },
      ]}
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Tooth replacement consultation — Gurgaon',
        description: 'Dental implants, bridges, and prosthetic options in Gurgaon.',
        serviceType: 'Restorative dentistry',
      }}
      introParagraphs={[
        <>
          If you have a <strong>missing tooth in Gurgaon</strong>, common paths include single-tooth implants,
          tooth-supported bridges, or partial dentures — suitability depends on bone, neighboring teeth, and budget.
        </>,
        <>
          Try our{' '}
          <Link href="/dental-guides/dental-implant-consultation-planner" className="text-primary font-semibold underline">
            implant consultation planner
          </Link>{' '}
          before your visit — it does not replace imaging.
        </>,
      ]}
      benefits={[
        'Implant consults with discussion of bone/graft needs',
        'Bridge and denture options when surgery is not ideal',
        'Same clinical standards at Sector 65 and coordinated West Delhi care',
      ]}
      whoNeeds={[
        'Single missing tooth after extraction',
        'Multiple gaps needing a strategic plan',
        'Patients comparing fixed vs removable replacement',
      ]}
      processSteps={[
        { title: 'Assessment', desc: 'Clinical exam and imaging as needed.' },
        { title: 'Option matrix', desc: 'Implant vs bridge vs denture pros/cons.' },
        { title: 'Staging', desc: 'Timeline and phased fees discussed.' },
        { title: 'Treatment', desc: 'Executed once you approve the plan.' },
      ]}
      pricingTitle="Investment snapshot"
      pricingLines={[
        'Implants often have higher upfront cost than bridges but spare adjacent teeth when indicated.',
        'Final plans require CBCT/bone evaluation — online content is guidance only.',
      ]}
      whyChoose={[
        'Focused discussion — no one-path-for-all pressure',
        'Sector 65 accessibility from Golf Course Extension communities',
      ]}
      doctorTitle="Start with facts, not fear"
      doctorText="Missing teeth affect chewing and alignment over time. We prioritise function, longevity, and what fits your lifestyle."
      faqs={[
        {
          question: 'How long do implants take?',
          answer:
            'Many cases need a few months from placement to final crown — exact timing depends on healing and bone.',
        },
      ]}
      areasServed={['Sector 65', 'Gurgaon', 'Delhi NCR']}
    />
  );
}
