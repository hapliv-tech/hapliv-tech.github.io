import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Invisalign Cost Gurgaon | Sector 65 Scan & Quote Guide',
  description:
    'Indicative Invisalign and aligner pricing in Gurgaon — what changes cost, EMI options, and your quote after clinical scan at Sector 65 (M3M Tee Point). Book or WhatsApp +91 98104 71255.',
  alternates: { canonical: '/invisalign-cost-gurgaon' },
  openGraph: {
    description:
      'No guesswork: what changes Invisalign cost + EMI. Book a consult: WhatsApp or +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/invisalign-cost-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Transparent aligner pricing & EMI. Sector 65 consults. WhatsApp or +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
  },
};

const path = '/invisalign-cost-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Invisalign cost Gurgaon', path },
      ]}
      h1="Invisalign cost in Gurgaon"
      heroSub="Straight answers on aligner pricing at our Sector 65 clinic (M3M Tee Point, Golf Course Extension Road) — book a consult for an accurate quote after your clinical scan."
      relatedLinks={[
        { href: '/dental-guides/braces-invisalign-consultation-planner', label: 'Not sure what to book? Use the consultation planner' },
        { href: '/braces-vs-invisalign-gurgaon', label: 'Braces vs Invisalign' },
        { href: '/invisalign-gurgaon', label: 'Invisalign in Gurgaon' },
        { href: '/locations/dentist-in-sector-65-gurgaon', label: 'Dentist in Sector 65' },
      ]}
      heroImage="/assets/invis-box.webp"
      heroImageAlt="Invisalign treatment cost consultation Gurgaon"
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Invisalign clear aligners — Gurgaon',
        description: 'Invisalign clear aligner treatment with transparent cost guidance in Gurgaon.',
        serviceType: 'Orthodontics',
      }}
      introParagraphs={[
        <>
          Searching for <strong>Invisalign cost in Gurgaon</strong>? Total fees depend on case complexity,
          number of aligners, and whether refinements are needed. We explain this clearly before you start.
        </>,
        <>
          Ready to straighten your smile? See{' '}
          <Link href="/invisalign-gurgaon" className="text-primary font-semibold underline">
            Invisalign in Gurgaon
          </Link>{' '}
          (local) or{' '}
          <Link href="/invisalign" className="text-primary font-semibold underline">
            how Invisalign treatment works
          </Link>{' '}
          (process &amp; candidacy).
        </>,
      ]}
      benefits={[
        'Transparent discussion of fees upfront',
        'Certified Invisalign provider',
        'Digital planning — pay for what your case needs',
        'Optional EMI discussions where applicable',
      ]}
      whoNeeds={[
        'Anyone comparing Invisalign quotes in Gurgaon',
        'Patients who want cost before committing',
        'Adults and teens considering clear aligners',
      ]}
      processSteps={[
        { title: 'Consult', desc: 'Clinical check and suitability for aligners.' },
        { title: 'Quote', desc: 'Written clarity on inclusions and phases.' },
        { title: 'Start', desc: 'Aligners fabricated; treatment begins.' },
        { title: 'Finish', desc: 'Retention to protect results.' },
      ]}
      pricingTitle="How much does Invisalign cost?"
      pricingLines={[
        'Invisalign typically ranges from roughly ₹1.5 lakh to ₹3.5 lakh+ in the NCR depending on complexity (indicative only).',
        'Simple limited cases may fall lower; comprehensive bite correction may be higher.',
        'Your quote after scan/plan is the accurate number for your mouth.',
      ]}
      whyChoose={[
        'No hidden lab or surprise add-ons explained at consult',
        'Same doctor continuity in Sector 65',
        'West Delhi evening option for follow-ups',
      ]}
      doctorTitle="Why quotes differ"
      doctorText="Two patients rarely need the same number of aligners. That is why we do not quote one flat Instagram price — we protect you with an honest plan tied to your bite."
      faqs={[
        {
          question: 'What is the cheapest Invisalign in Gurgaon?',
          answer:
            'Be wary of prices that seem too low — they may exclude scans, refinements, or retention. We itemise what is included so you can compare fairly.',
        },
        {
          question: 'Does insurance cover Invisalign?',
          answer:
            'Most Indian dental plans do not cover orthodontics fully. We can discuss payment timing at your visit.',
        },
        {
          question: 'Can I pay in instalments?',
          answer:
            'Many patients split payment by phase. Ask during your consultation for current options.',
        },
      ]}
      areasServed={['Sector 65', 'Gurgaon', 'Delhi NCR', 'West Delhi']}
    />
  );
}
