import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Invisalign Gurgaon Sector 65 | Clear Aligners | Hapliv Dental',
  description:
    'Invisalign in Gurgaon (Sector 65) by a certified provider. Straighten teeth discreetly. Book a scan, see your plan, and start aligners. Call or WhatsApp — consult today.',
  alternates: { canonical: '/invisalign-gurgaon' },
  openGraph: {
    title: 'Invisalign Gurgaon | Hapliv Dental',
    url: 'https://haplivdentalclinic.com/invisalign-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
};

const path = '/invisalign-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Invisalign Gurgaon', path },
      ]}
      h1="Invisalign clear aligners in Gurgaon (Sector 65)"
      heroSub="Certified Invisalign provider at M3M Tee Point, Golf Course Ext Rd — also serving West Delhi for evening consults."
      heroImage="/assets/invis-box.webp"
      heroImageAlt="Invisalign clear aligner treatment at Hapliv Dental Gurgaon"
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Invisalign Treatment — Gurgaon',
        description: 'Invisalign clear aligner orthodontic treatment in Gurgaon Sector 65.',
        procedureType: 'Orthodontic aligner treatment',
        medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Orthodontics' },
      }}
      introParagraphs={[
        <>
          <strong>Invisalign in Gurgaon</strong> is ideal if you want straighter teeth without fixed metal braces.
          At Hapliv Dental Clinic we plan your case digitally and guide you through each aligner stage.
        </>,
        <>
          For pricing details, see{' '}
          <Link href="/invisalign-cost-gurgaon" className="text-primary font-semibold underline">
            Invisalign cost in Gurgaon
          </Link>{' '}
          or our main{' '}
          <Link href="/invisalign" className="text-primary font-semibold underline">
            Invisalign treatment page
          </Link>
          .
        </>,
      ]}
      benefits={[
        'Nearly invisible — minimal impact on work and social life',
        'Removable for eating and brushing',
        'Fewer emergency visits than traditional braces',
        'Digital planning for predictable tooth movement',
      ]}
      whoNeeds={[
        'Mild to moderate crowding or spacing',
        'Relapse after previous braces',
        'Busy adults who prefer discreet orthodontics',
        'Teenagers eligible per clinical assessment',
      ]}
      processSteps={[
        { title: 'Consultation & scan', desc: 'We assess bite and discuss goals; digital records as needed.' },
        { title: 'Treatment plan', desc: 'Aligner stages planned; you see the expected journey.' },
        { title: 'Aligner delivery', desc: 'Wear aligners 20–22 hours/day; change sets on schedule.' },
        { title: 'Retention', desc: 'Retainers after treatment to protect your new smile.' },
      ]}
      pricingTitle="Invisalign investment"
      pricingLines={[
        'Total cost varies with case complexity and number of aligners.',
        'We explain fees before you commit — no pressure sales.',
        <>
          See{' '}
          <Link href="/invisalign-cost-gurgaon" className="text-primary underline font-semibold">
            dedicated cost page
          </Link>{' '}
          for ranges and factors.
        </>,
      ]}
      whyChoose={[
        'Certified Invisalign provider',
        'Orthodontist-led care in Sector 65',
        'Evening slots at West Delhi clinic',
        '4.98★ patient satisfaction on Google',
      ]}
      doctorTitle="Orthodontic expertise"
      doctorText="Led by Dr. Achla Verma, our team focuses on safe, aesthetic tooth movement with clear aligners and braces when needed."
      faqs={[
        {
          question: 'Is Invisalign available in Gurgaon at Hapliv?',
          answer:
            'Yes. Our primary Invisalign clinic is in Sector 65, Gurgaon (M3M Tee Point). West Delhi patients can book evening consultations.',
        },
        {
          question: 'How long does Invisalign take?',
          answer:
            'Many cases run about 12–18 months; simpler cases can be shorter. Your timeline is confirmed after the clinical assessment.',
        },
        {
          question: 'Invisalign vs braces — which is better?',
          answer:
            'It depends on your bite and goals. Invisalign suits many mild–moderate cases; complex cases may need braces. We recommend honestly after examination.',
        },
      ]}
      areasServed={[
        'Sector 65',
        'South City',
        'Golf Course Ext',
        'M3M',
        'Mohan Garden',
        'Dwarka',
      ]}
    />
  );
}
