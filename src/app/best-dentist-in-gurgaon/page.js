import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Best Dentist in Gurgaon Sector 65 | Family Dental | Hapliv',
  description:
    'Top-rated family dentist in Gurgaon Sector 65 (M3M Tee Point). Braces, Invisalign, RCT, implants, kids dentistry. 4.98★ — book by call or WhatsApp.',
  alternates: { canonical: '/best-dentist-in-gurgaon' },
  openGraph: {
    title: 'Best Dentist Gurgaon Sector 65 | Hapliv Dental',
    url: 'https://haplivdentalclinic.com/best-dentist-in-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
};

const path = '/best-dentist-in-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Best dentist in Gurgaon', path },
      ]}
      h1="Best dentist in Gurgaon — Sector 65"
      heroSub="Full-service dental clinic near Golf Course Extension: orthodontics, painless RCT, implants, cosmetic work, and kids’ dentistry."
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Family dentistry — Gurgaon Sector 65',
        description: 'General and family dental care in Gurgaon Sector 65.',
        serviceType: 'Dentistry',
      }}
      introParagraphs={[
        <>
          If you are looking for the <strong>best dentist in Gurgaon</strong> near Sector 65, Hapliv combines
          specialist-led orthodontics with experienced general and restorative care — one team for your
          family.
        </>,
        <>
          Visit our{' '}
          <Link href="/locations/dentist-in-sector-65-gurgaon" className="text-primary font-semibold underline">
            Sector 65 location page
          </Link>{' '}
          for map and directions, or{' '}
          <Link href="/emergency-dentist-gurgaon" className="text-primary font-semibold underline">
            emergency dentist
          </Link>{' '}
          for urgent pain.
        </>,
      ]}
      benefits={[
        '4.98★ Google rating with 100+ reviews',
        'Two locations: Gurgaon + West Delhi',
        'Modern equipment and strict sterilisation',
        'Clear pricing on major treatments',
      ]}
      whoNeeds={[
        'Families needing one trusted dental home',
        'Professionals seeking Invisalign or braces',
        'Patients needing implants or root canal',
        'Children — see our pediatric dentist page',
      ]}
      processSteps={[
        { title: 'Book', desc: 'Call, WhatsApp, or online appointment.' },
        { title: 'Exam', desc: 'Thorough check and digital records if needed.' },
        { title: 'Plan', desc: 'Treatment options with costs explained.' },
        { title: 'Care', desc: 'Treatment completed with follow-up support.' },
      ]}
      pricingTitle="Consultation"
      pricingLines={[
        'Consultation fees are communicated when you book.',
        'Treatment prices (braces, RCT, implants) discussed after diagnosis.',
      ]}
      whyChoose={[
        'Led by Dr. Achla Verma — orthodontics & comprehensive dentistry',
        'Convenient Sector 65 address (M3M Tee Point)',
        'Evening clinic in Mohan Garden for Delhi patients',
      ]}
      doctorTitle="Experienced team"
      doctorText="Our dentists and staff focus on painless, ethical dentistry — we recommend only what you need."
      faqs={[
        {
          question: 'Why choose Hapliv over a big chain?',
          answer:
            'You get direct access to experienced clinicians, transparent pricing on key treatments, and continuity of care — not a rotating locum model.',
        },
        {
          question: 'Do you treat children?',
          answer:
            'Yes. Visit our pediatric dentist in Gurgaon page for kids dentistry and early orthodontic checks.',
        },
        {
          question: 'Is parking available?',
          answer:
            'Sector 65 clinic is in a commercial complex with visitor parking nearby; we share landmark directions when you book.',
        },
      ]}
      areasServed={[
        'Sector 65',
        'South City',
        'M3M',
        'Golf Course Ext',
        'Sushant Lok',
        'DLF',
      ]}
    />
  );
}
