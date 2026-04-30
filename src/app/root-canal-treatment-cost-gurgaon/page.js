import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Root Canal Cost Gurgaon | ₹3k–₹8k Guide, Sector 65',
  description:
    'Transparent RCT cost in Gurgaon (Sector 65) & West Delhi — typical ₹3,000–₹8,000; written estimate after exam & X-ray. Book or WhatsApp +91 98104 71255.',
  keywords:
    'root canal cost Gurgaon, RCT price Sector 65, comfortable root canal cost, root canal West Delhi price, endodontist Gurgaon cost, painless root canal cost',
  alternates: { canonical: '/root-canal-treatment-cost-gurgaon' },
  openGraph: {
    description:
      'Transparent RCT pricing in Gurgaon & West Delhi. Typical ₹3K–₹8K by tooth — exact quote after your check-up. Book on WhatsApp or call.',
    url: 'https://haplivdentalclinic.com/root-canal-treatment-cost-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Root canal cost guide: ₹3,000–₹8,000 typical range. Sector 65 & Mohan Garden. WhatsApp or call +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const path = '/root-canal-treatment-cost-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Root canal cost Gurgaon', path },
      ]}
      h1="Root canal treatment cost in Gurgaon — transparent RCT pricing"
      heroSub="Typical root canal cost ₹3,000–₹8,000 depending on the tooth; you get a written estimate after exam & X-ray at our Sector 65 (Golf Course Extension Road) or Mohan Garden clinic — book online or message us."
      relatedLinks={[
        { href: '/dental-guides/tooth-pain-urgency-guide-gurgaon', label: 'Tooth pain urgency guide' },
        { href: '/root-canal-cost-factors-gurgaon', label: 'What changes RCT cost' },
        { href: '/root-canal-treatment-gurgaon', label: 'Root canal in Gurgaon' },
        { href: '/appointment', label: 'Book an appointment' },
      ]}
      heroImageAlt="Root canal treatment at Hapliv Dental Clinic Gurgaon"
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Root Canal Treatment (RCT) — Gurgaon',
        description:
          'Root canal (RCT) cost guidance and comfortable treatment in Gurgaon Sector 65 and West Delhi — transparent estimates after consultation.',
        procedureType: 'Root Canal Treatment',
        medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Endodontics' },
      }}
      introParagraphs={[
        <>
          If you are searching for <strong>root canal cost in Gurgaon</strong>, you are in the right place. At
          Hapliv Dental Clinic we publish starting ranges and explain what changes the final fee — so you are
          not surprised at the chair.
        </>,
        <>
          For the full clinical guide to root canal treatment, see our{' '}
          <Link href="/treatments/painless-root-canal-treatment" className="text-primary font-semibold underline">
            root canal treatment guide
          </Link>{' '}
          or{' '}
          <Link href="/root-canal-treatment-gurgaon" className="text-primary font-semibold underline">
            root canal in Gurgaon overview
          </Link>
          .
        </>,
      ]}
      benefits={[
        'Save your natural tooth instead of extracting',
        'Comfort-focused approach with modern anesthesia and equipment',
        'Same clinics in Sector 65, Gurgaon and Mohan Garden, West Delhi',
        'Clear cost discussion before treatment starts',
      ]}
      whoNeeds={[
        'Deep decay or infection reaching the nerve',
        'Severe toothache, sensitivity to hot/cold',
        'Swelling or abscess near a tooth',
        'Cracked tooth with pulp involvement',
      ]}
      processSteps={[
        { title: 'Examination & X-ray', desc: 'We assess the tooth and explain cost before starting.' },
        { title: 'Comfortable anesthesia', desc: 'Careful local anesthesia so you stay numb and relaxed during treatment.' },
        { title: 'Cleaning & shaping', desc: 'Canals cleaned using rotary instruments and apex locator.' },
        { title: 'Filling & restoration', desc: 'Sealed canals; crown planned if needed for strength.' },
      ]}
      pricingTitle="What does root canal cost?"
      pricingLines={[
        'Typical range in our clinics: about ₹3,000–₹8,000 depending on tooth position and complexity.',
        'Front teeth often cost less than molars (more canals).',
        'Crown or cap, if required, is quoted separately.',
      ]}
      whyChoose={[
        'Experienced team with focus on comfort-first dentistry',
        'Advanced RCT workflow (apex locator, endomotor)',
        'Transparent pricing — no hidden charges',
        'Evening clinic in West Delhi for working professionals',
      ]}
      doctorTitle="Expert care for your tooth"
      doctorText="Dr. Achla Verma and our team combine clinical skill with clear communication so you understand your root canal cost and options in Gurgaon or West Delhi."
      faqs={[
        {
          question: 'How much does a root canal cost in Gurgaon?',
          answer:
            'At Hapliv Dental Clinic, root canal treatment often starts from around ₹3,000 and can go up to about ₹8,000 depending on which tooth it is and how complex the case is. Molars usually cost more than front teeth. We give you a written estimate after examination.',
        },
        {
          question: 'Is root canal painful?',
          answer:
            'With modern anesthesia and techniques, root canal treatment at our clinic is designed for your comfort—most people find it similar to a longer filling visit. Many feel relief once the infected nerve is treated.',
        },
        {
          question: 'Do I need a crown after root canal?',
          answer:
            'Back teeth usually need a crown for strength after RCT. Front teeth may sometimes need only a filling. We will advise based on how much tooth structure remains.',
        },
        {
          question: 'Which Hapliv clinic should I visit for RCT?',
          answer:
            'You can book at our Sector 65, Gurgaon clinic (M3M Tee Point) or our Mohan Garden, West Delhi location — whichever is closer. Same standards at both.',
        },
      ]}
      areasServed={[
        'Sector 65',
        'Golf Course Extension',
        'South City',
        'M3M Tee Point',
        'Mohan Garden',
        'Uttam Nagar',
        'Dwarka',
        'Janakpuri',
      ]}
    />
  );
}
