import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Braces Cost Gurgaon | Typical ₹45K–₹80K | Sector 65',
  description:
    'Straight talk on braces pricing in Gurgaon — metal, ceramic & self-ligating. Many full cases land ~₹45,000–₹80,000; exact fee after Dr. Achla Verma’s exam. West Delhi evenings too. WhatsApp +91 98104 71255.',
  alternates: { canonical: '/braces-cost-gurgaon' },
  openGraph: {
    description:
      'See typical braces cost ranges before your visit — book a consult in Sector 65. WhatsApp or call +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/braces-cost-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/braces.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      '₹45K–₹80K typical range for many cases — metal & ceramic. Book: WhatsApp or +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/braces.webp'],
  },
};

const path = '/braces-cost-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Braces cost Gurgaon', path },
      ]}
      h1="Braces cost in Gurgaon (Sector 65)"
      heroSub="Metal, ceramic, and advanced braces options — clear pricing conversation and treatment by an experienced orthodontist."
      heroImage="/assets/braces.webp"
      heroImageAlt="Braces treatment cost Gurgaon Hapliv Dental"
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Orthodontic braces — Gurgaon',
        description: 'Braces treatment with cost guidance in Gurgaon.',
        procedureType: 'Orthodontic treatment',
        medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Orthodontics' },
      }}
      introParagraphs={[
        <>
          <strong>Braces cost in Gurgaon</strong> varies by appliance type (metal vs ceramic), case complexity,
          and treatment length. At Hapliv we align expectations before brackets go on.
        </>,
        <>
          Full treatment details:{' '}
          <Link href="/treatments/braces" className="text-primary font-semibold underline">
            braces treatment page
          </Link>
          .
        </>,
      ]}
      benefits={[
        'Predictable tooth movement for complex bites',
        'Often more economical than aligners for tough cases',
        'Metal and aesthetic ceramic choices',
        'Orthodontist-led care at Sector 65',
      ]}
      whoNeeds={[
        'Teenagers and adults with crowding or spacing',
        'Deep bite, open bite, or crossbite',
        'Patients who prefer fixed appliances over aligners',
      ]}
      processSteps={[
        { title: 'Records & plan', desc: 'Photos, X-rays, and treatment roadmap.' },
        { title: 'Bracket day', desc: 'Braces placed; care instructions given.' },
        { title: 'Adjustments', desc: 'Regular visits until teeth are aligned.' },
        { title: 'Retention', desc: 'Retainers to keep your smile stable.' },
      ]}
      pricingTitle="Braces pricing (guidance)"
      pricingLines={[
        'Many full braces cases in our practice fall roughly in the ₹45,000–₹80,000 range depending on type and duration.',
        'Ceramic (tooth-coloured) brackets are typically higher than metal.',
        'Exact fee after clinical exam.',
      ]}
      whyChoose={[
        'Transparent orthodontics — no mystery bills',
        '8+ years focused experience',
        'West Delhi clinic for evening visits when needed',
      ]}
      doctorTitle="Orthodontist in Gurgaon"
      doctorText="Dr. Achla Verma plans braces cases for function and aesthetics — so your investment matches your smile goals."
      faqs={[
        {
          question: 'Are metal braces cheaper than ceramic in Gurgaon?',
          answer:
            'Usually yes. Metal braces are often the most cost-effective; ceramic braces cost more due to materials and aesthetics.',
        },
        {
          question: 'How long do I pay for braces?',
          answer:
            'Payment is typically structured over the treatment period. We explain the schedule at consultation.',
        },
        {
          question: 'Braces vs Invisalign cost?',
          answer:
            'Simple rule: mild cases may compare closely; complex cases are often more efficient with braces. We advise after seeing your bite.',
        },
      ]}
      areasServed={['Sector 65', 'South City', 'Golf Course Ext', 'Mohan Garden', 'Dwarka']}
    />
  );
}
