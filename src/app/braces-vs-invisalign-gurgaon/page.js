import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Braces vs Invisalign Gurgaon | Compare at Sector 65',
  description:
    'Braces vs clear aligners in Gurgaon — aesthetics, timelines, and cost factors at Hapliv Sector 65. Book consult or use our consultation planner.',
  alternates: { canonical: '/braces-vs-invisalign-gurgaon' },
  openGraph: {
    url: 'https://haplivdentalclinic.com/braces-vs-invisalign-gurgaon',
    title: 'Braces vs Invisalign — Gurgaon',
    description: 'Honest comparison before you choose orthodontic treatment.',
    type: 'website',
  },
};

const path = '/braces-vs-invisalign-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Braces vs Invisalign Gurgaon', path },
      ]}
      h1="Braces vs Invisalign in Gurgaon — how to choose"
      heroSub="Compare fixed braces and clear aligners at our M3M Tee Point clinic on Golf Course Extension Road — book a consult or use our consultation planner first."
      heroImage="/assets/invis-box.webp"
      relatedLinks={[
        { href: '/dental-guides/braces-invisalign-consultation-planner', label: 'Consultation planner' },
        { href: '/invisalign-gurgaon', label: 'Invisalign Gurgaon' },
        { href: '/best-orthodontist-gurgaon', label: 'Orthodontist' },
      ]}
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Orthodontic consultation — braces vs Invisalign Gurgaon',
        description: 'Comparison and treatment planning for braces and Invisalign in Gurgaon.',
        serviceType: 'Orthodontics',
      }}
      introParagraphs={[
        <>
          Choosing between <strong>braces and Invisalign in Gurgaon</strong> depends on your bite, hygiene habits,
          aesthetics, and how disciplined you can be with removable aligners.
        </>,
        <>
          Try our{' '}
          <Link href="/dental-guides/braces-invisalign-consultation-planner" className="text-primary font-semibold underline">
            consultation planner
          </Link>{' '}
          for indicative bands, then book at{' '}
          <Link href="/locations/dentist-in-sector-65-gurgaon" className="text-primary font-semibold underline">
            Sector 65
          </Link>
          .
        </>,
      ]}
      benefits={[
        'Orthodontist-led recommendations — not one-size-fits-all',
        'Digital planning for both fixed and aligner options',
        'Transparent discussion of timelines and fees',
      ]}
      whoNeeds={[
        'Adults deciding between metal/ceramic braces and clear aligners',
        'Teens and parents comparing compliance requirements',
        'Anyone researching “braces vs Invisalign cost Gurgaon”',
      ]}
      processSteps={[
        { title: 'Exam & records', desc: 'Clinical check; photos and scans as needed.' },
        { title: 'Option review', desc: 'We compare braces vs aligners for your case.' },
        { title: 'Plan & quote', desc: 'Written clarity on phases; indicative totals discussed.' },
        { title: 'Start when ready', desc: 'Begin treatment with retention planned upfront.' },
      ]}
      pricingTitle="Cost & value"
      pricingLines={[
        'Aligners often sit in a higher fee band than basic metal braces for similar complexity — your quote confirms this.',
        'Ceramic braces are a mid-ground aesthetically and financially for many patients.',
      ]}
      whyChoose={[
        'Certified Invisalign provider alongside full braces options',
        'Sector 65 access off Golf Course Extension Road',
      ]}
      doctorTitle="Still unsure?"
      doctorText="The “best” appliance is the one that fits your bite, lifestyle, and budget. We will recommend honestly after records — not from marketing brochures."
      faqs={[
        {
          question: 'Is Invisalign faster than braces?',
          answer:
            'Sometimes shorter, sometimes similar — it depends on tooth movement needed and patient compliance with wear time.',
        },
        {
          question: 'Can I switch from braces to aligners later?',
          answer:
            'Occasionally yes mid-treatment, but it is case-specific. Ask at your consult if hybrid approaches make sense.',
        },
      ]}
      areasServed={['Sector 65', 'South City', 'Golf Course Extension', 'Gurgaon']}
    />
  );
}
