import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';
import { CLINIC_SCHEMA_NAME, PHONE_TEL } from 'lib/seo';

export const metadata = {
  title: 'Braces in Sector 65, Gurgaon | Near Trump Towers & M3M Tee Point',
  description:
    'Braces treatment at Sector 65, Gurgaon (M3M Tee Point area). Expert orthodontist — metal, ceramic, aligners. Open Mon–Sat. For typical braces pricing citywide, see our braces cost in Gurgaon page. Call +91 98104 71255.',
  keywords:
    'Braces Treatment Sector 65 Gurgaon, Best Braces Sector 65, Orthodontist Sector 65, Braces Near Trump Towers, Metal Braces Sector 65, Ceramic Braces Sector 65, Invisalign Sector 65, Teeth Straightening Sector 65, Braces Cost Sector 65, Orthodontic Treatment Sector 65, Best Orthodontist Sector 65',
  alternates: {
    canonical: '/braces-treatment-sector-65-gurgaon',
  },
  openGraph: {
    description:
      'Best Braces Treatment in Sector 65, Gurgaon near Trump Towers. Expert orthodontist offering metal braces, ceramic braces, and Invisalign. Book consultation today!',
    url: 'https://haplivdentalclinic.com/braces-treatment-sector-65-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Expert orthodontist offering braces treatment in Sector 65, Gurgaon. Metal braces, ceramic braces, and Invisalign available.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const bracesSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Braces Treatment in Sector 65, Gurgaon',
  description:
    'Best Braces Treatment in Sector 65, Gurgaon near Trump Towers. Expert orthodontist offering metal braces, ceramic braces, and Invisalign for teeth straightening.',
  procedureType: 'Orthodontic Treatment',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Orthodontics',
  },
  provider: {
    '@type': 'Dentist',
    name: CLINIC_SCHEMA_NAME,
    url: 'https://haplivdentalclinic.com',
    telephone: '+919810471255',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Gurgaon',
    },
    {
      '@type': 'Place',
      name: 'Sector 65, Gurgaon',
    },
  ],
};

const faqs = [
  {
    question: 'What is the cost of braces treatment in Sector 65, Gurgaon?',
    answer:
      'Fees vary by brace type and case length. For typical citywide ranges, see our braces cost in Gurgaon page, then book your in-person exam for an exact quote.',
  },
  {
    question: 'How long does braces treatment take?',
    answer:
      'Braces treatment typically takes 12-24 months depending on complexity. Your timeline is finalized after records and clinical examination.',
  },
  {
    question: 'What braces options are available?',
    answer:
      'We offer metal braces, ceramic braces, lingual braces, and Invisalign clear aligners. The best choice depends on clinical needs, lifestyle, and budget.',
  },
  {
    question: 'Do braces hurt?',
    answer:
      'Mild soreness is common for a few days after placement or adjustments. Most patients adapt quickly and can continue normal routines.',
  },
];

export default function BracesTreatmentSector65Page() {
  return (
    <LocalMoneyPage
      path="/braces-treatment-sector-65-gurgaon"
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Locations', path: '/locations' },
        { name: 'Braces Treatment Sector 65', path: '/braces-treatment-sector-65-gurgaon' },
      ]}
      h1="Braces in Sector 65, Gurgaon — M3M Tee Point"
      heroSub={
        <>
          Metal and ceramic braces with our orthodontist near Trump Towers. Citywide braces pricing:{' '}
          <Link href="/braces-cost-gurgaon" className="font-semibold underline">
            braces cost in Gurgaon
          </Link>
          . Treatment details:{' '}
          <Link href="/treatments/braces" className="font-semibold underline">
            braces treatment guide
          </Link>
          .
        </>
      }
      heroImage="/assets/hapliv_dental_operatory.webp"
      serviceSchema={bracesSchema}
      faqs={faqs}
      introParagraphs={[
        'At Hapliv Dental Clinic in Sector 65, Gurgaon, our orthodontist provides braces treatment for teeth alignment and bite correction with a personalized plan.',
        'We offer metal braces, ceramic braces, lingual braces, and Invisalign options after clinical assessment so treatment matches your goals and timeline.',
      ]}
      benefits={[
        'Orthodontist-led treatment planning and regular progress reviews.',
        'Multiple braces options for aesthetic and budget preferences.',
        'Convenient location near M3M Tee Point and Trump Towers.',
        'Structured follow-ups with clear next-step guidance.',
      ]}
      whoNeeds={[
        'Patients with crowding, spacing, or bite misalignment.',
        'Teens and adults who want predictable smile correction.',
        'Patients comparing braces versus Invisalign outcomes.',
      ]}
      processSteps={[
        { title: 'Consultation', desc: 'Clinical exam with records and diagnosis.' },
        { title: 'Treatment Plan', desc: 'Brace type and timeline based on your case.' },
        { title: 'Placement', desc: 'Braces are placed with comfort-focused techniques.' },
        { title: 'Adjustments', desc: 'Periodic adjustments every 4 to 8 weeks.' },
        { title: 'Finishing', desc: 'Final alignment checks and detailing.' },
        { title: 'Retention', desc: 'Retainers to maintain long-term stability.' },
      ]}
      pricingTitle="Braces treatment cost guidance in Sector 65"
      pricingLines={[
        'Metal braces: typically ₹30,000 to ₹45,000.',
        'Ceramic braces: typically ₹40,000 to ₹55,000.',
        'Lingual braces: typically ₹80,000 to ₹1,20,000.',
        'Invisalign: typically ₹2,50,000 to ₹4,00,000.',
      ]}
      whyChoose={[
        '8+ years of orthodontic experience with high-intent braces cases.',
        'Case-specific planning rather than one-size-fits-all treatment.',
        'Two-clinic access with consistent protocols and follow-ups.',
        'Transparent communication on treatment milestones and costs.',
      ]}
      doctorTitle="Expert braces care near Trump Towers"
      doctorText={`Our team focuses on practical, evidence-based orthodontic care in Sector 65. You get a clear plan, realistic timeline, and direct support from consultation to retainers. For appointments, call ${PHONE_TEL}.`}
      galleryHref="/gallery/treatment-results"
      galleryLabel="View braces and smile correction outcomes"
      areasServed={[
        'Sector 65',
        'Golf Course Extension Road',
        'M3M Tee Point',
        'Trump Towers',
        'South City',
        'Sectors 60 to 76',
      ]}
      finalCtaTitle="Book your braces consultation in Sector 65"
      heroCtaOrder="evaluative"
      relatedLinks={[
        { href: '/braces-cost-gurgaon', label: 'Braces Cost Gurgaon' },
        { href: '/invisalign-gurgaon', label: 'Invisalign Gurgaon' },
        { href: '/best-orthodontist-gurgaon', label: 'Best Orthodontist Gurgaon' },
      ]}
      heroBookLabel="Book Consultation"
      footerCtaLocation="braces-sector65-footer"
    />
  );
}

