import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Root Canal Cost Gurgaon Sector 65 | From ₹3,000 | Hapliv Dental',
  description:
    'Root canal treatment cost in Gurgaon (Sector 65) & West Delhi. Transparent pricing, painless RCT with modern equipment. 4.98★ rated. Call or WhatsApp to book — same-week appointments.',
  keywords:
    'root canal cost Gurgaon, RCT price Sector 65, painless root canal cost, root canal West Delhi price, endodontist Gurgaon cost',
  alternates: { canonical: '/root-canal-treatment-cost-gurgaon' },
  openGraph: {
    title: 'Root Canal Cost Gurgaon | Hapliv Dental',
    description: 'RCT pricing and painless root canal in Gurgaon Sector 65 & West Delhi. Book a consultation.',
    url: 'https://haplivdentalclinic.com/root-canal-treatment-cost-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
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
      h1="Root canal treatment cost in Gurgaon & West Delhi"
      heroSub="Clear pricing, painless RCT with apex locator & endomotor — save your natural tooth at our Sector 65 or Mohan Garden clinic."
      heroImageAlt="Painless root canal treatment at Hapliv Dental Clinic Gurgaon"
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Root Canal Treatment (RCT) — Gurgaon',
        description:
          'Painless root canal treatment in Gurgaon Sector 65 and West Delhi with transparent cost guidance.',
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
          For the full clinical guide to painless RCT, see our{' '}
          <Link href="/treatments/painless-root-canal-treatment" className="text-primary font-semibold underline">
            painless root canal treatment page
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
        'Painless approach with modern anesthesia and equipment',
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
        { title: 'Comfortable anesthesia', desc: 'Local anesthesia so the procedure is painless.' },
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
        'Experienced team with focus on painless dentistry',
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
            'With modern anesthesia and techniques, root canal treatment at our clinic is designed to be painless. Most patients feel relief after the infected nerve is treated.',
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
