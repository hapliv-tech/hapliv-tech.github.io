import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Root Canal Cost Factors Gurgaon | RCT Price Explained',
  description:
    'What changes root canal cost in Gurgaon — tooth type, complexity, crown needs. Transparent guidance at Hapliv Sector 65 & West Delhi.',
  alternates: { canonical: '/root-canal-cost-factors-gurgaon' },
  openGraph: {
    url: 'https://haplivdentalclinic.com/root-canal-cost-factors-gurgaon',
    title: 'RCT cost factors — Gurgaon',
    type: 'website',
  },
};

const path = '/root-canal-cost-factors-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'RCT cost factors Gurgaon', path },
      ]}
      h1="Root canal cost factors in Gurgaon"
      heroSub="Understand what drives RCT pricing before you sit in the chair — then get a written estimate after exam & X-ray at our Sector 65 or West Delhi clinic."
      relatedLinks={[
        { href: '/root-canal-treatment-cost-gurgaon', label: 'RCT cost guide' },
        { href: '/dental-guides/tooth-pain-urgency-guide-gurgaon', label: 'Tooth pain urgency guide' },
        { href: '/root-canal-treatment-gurgaon', label: 'Root canal in Gurgaon' },
      ]}
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Root canal treatment planning — Gurgaon',
        description: 'Factors affecting root canal cost and treatment in Gurgaon.',
        procedureType: 'Root Canal Treatment',
        medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Endodontics' },
      }}
      introParagraphs={[
        <>
          <strong>Root canal cost in Gurgaon</strong> varies by tooth position (front vs molar), number of canals,
          complexity, and whether a crown is planned after treatment.
        </>,
        <>
          See our{' '}
          <Link href="/root-canal-treatment-cost-gurgaon" className="text-primary font-semibold underline">
            main RCT cost page
          </Link>{' '}
          for typical ranges at Hapliv.
        </>,
      ]}
      benefits={[
        'Written estimate after examination',
        'Modern apex locator and rotary workflow where appropriate',
        'Both Sector 65 and Mohan Garden clinics',
      ]}
      whoNeeds={[
        'You were quoted very different RCT prices elsewhere',
        'You want to know why molars cost more than front teeth',
        'You need RCT and a crown plan in one roadmap',
      ]}
      processSteps={[
        { title: 'X-ray & testing', desc: 'Confirms tooth and complexity.' },
        { title: 'Cost breakdown', desc: 'RCT vs crown phases explained.' },
        { title: 'Treatment', desc: 'Canal cleaning and disinfection.' },
        { title: 'Restoration', desc: 'Filling or crown as advised.' },
      ]}
      pricingTitle="Main cost drivers"
      pricingLines={[
        'Molar teeth usually need more time and materials than incisors.',
        'Re-treatment or curved canals can increase complexity.',
        'Crowns protect back teeth after RCT — quoted separately.',
      ]}
      whyChoose={[
        'Clear written estimates after exam and X-ray',
        'Comfort-led anesthesia and modern RCT workflow',
      ]}
      doctorTitle="Accurate quotes only after exam"
      doctorText="Phone estimates without X-rays are guesses. We prefer honest ranges online and exact numbers in clinic."
      faqs={[
        {
          question: 'Is a root canal always followed by a crown?',
          answer:
            'Most back teeth need crowns for strength; some front teeth may only need a filling if enough structure remains.',
        },
      ]}
      areasServed={['Sector 65', 'Gurgaon', 'West Delhi']}
    />
  );
}
