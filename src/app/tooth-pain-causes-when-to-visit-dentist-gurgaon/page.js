import Link from 'next/link';
import LocalMoneyPage from 'components/app-pages/LocalMoneyPage';

export const metadata = {
  title: 'Tooth Pain Causes & When to Visit Dentist Gurgaon',
  description:
    'Toothache causes, warning signs, and when to see a dentist in Gurgaon. Sector 65 emergency care — use our urgency guide and book online.',
  alternates: { canonical: '/tooth-pain-causes-when-to-visit-dentist-gurgaon' },
  openGraph: {
    url: 'https://haplivdentalclinic.com/tooth-pain-causes-when-to-visit-dentist-gurgaon',
    title: 'Tooth pain — when to visit dentist Gurgaon',
    type: 'website',
  },
};

const path = '/tooth-pain-causes-when-to-visit-dentist-gurgaon';

export default function Page() {
  return (
    <LocalMoneyPage
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Tooth pain guide Gurgaon', path },
      ]}
      heroCtaOrder="emergency"
      heroBookLabel="Book Appointment"
      footerCtaLocation="tooth-pain-guide-footer"
      h1="Tooth pain causes and when to visit a dentist in Gurgaon"
      heroSub="From sensitivity to swelling — know when to call our Sector 65 clinic (M3M Tee Point) versus scheduling a routine visit."
      relatedLinks={[
        { href: '/dental-guides/tooth-pain-urgency-guide-gurgaon', label: 'Tooth pain urgency guide' },
        { href: '/emergency-dentist-gurgaon', label: 'Emergency dentist' },
        { href: '/root-canal-treatment-cost-gurgaon', label: 'RCT cost' },
      ]}
      serviceSchema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Emergency & urgent dental evaluation — Gurgaon',
        description: 'Guidance and urgent dental visits for tooth pain in Gurgaon Sector 65.',
        serviceType: 'General dentistry',
      }}
      introParagraphs={[
        <>
          <strong>Tooth pain</strong> can come from decay, cracks, gum issues, or bite trauma. Mild sensitivity differs
          from throbbing pain with swelling — the second group often needs prompt care.
        </>,
        <>
          Use our{' '}
          <Link href="/dental-guides/tooth-pain-urgency-guide-gurgaon" className="text-primary font-semibold underline">
            urgency guide
          </Link>{' '}
          for a quick triage suggestion, then call or WhatsApp Hapliv on Golf Course Extension Road.
        </>,
      ]}
      benefits={[
        'Same-day urgency prioritisation Mon–Sat when capacity allows',
        'Comfort-first approach with clear next steps',
        'Root canal and restorative options on-site',
      ]}
      whoNeeds={[
        'Sharp pain when biting or with hot/cold',
        'Swelling, bad taste, or fever',
        'Pain after recent dental work or trauma',
      ]}
      processSteps={[
        { title: 'Triage', desc: 'Call or WhatsApp — we advise timing.' },
        { title: 'Exam', desc: 'Identify tooth, gum, or bite cause.' },
        { title: 'Relief plan', desc: 'Treatment or medication as appropriate.' },
        { title: 'Follow-up', desc: 'Definitive fix scheduled if needed.' },
      ]}
      pricingTitle="Fees"
      pricingLines={[
        'Exam and emergency visit fees depend on what is required — we explain before proceeding.',
      ]}
      whyChoose={[
        'Mon–Sat hours at Sector 65 near M3M Tee Point',
        'Experienced team for pain and infection management',
      ]}
      doctorTitle="When to seek same-day care"
      doctorText="Severe pain, spreading swelling, fever, or trauma usually should not wait. When in doubt, call — we help you decide."
      faqs={[
        {
          question: 'Can tooth pain go away on its own?',
          answer:
            'Sometimes sensitivity improves, but infection-related pain often returns worse. A dental exam confirms whether you need treatment.',
        },
        {
          question: 'Do you treat tooth pain on weekends?',
          answer: 'We are open Monday–Saturday. Call early for the next available urgent slot.',
        },
      ]}
      areasServed={['Sector 65', 'Gurgaon', 'South City', 'Golf Course Extension']}
      emergencyBlurb={false}
    />
  );
}
