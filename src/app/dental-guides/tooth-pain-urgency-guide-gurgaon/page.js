import ToolPageShell from 'components/tools/ToolPageShell';
import ToothPainUrgencyClient from 'components/tools/ToothPainUrgencyClient';
import { TOOL_SLUG } from 'lib/tools/constants';

const path = `/dental-guides/${TOOL_SLUG.TOOTH_PAIN}`;

export const metadata = {
  title: 'Tooth Pain Gurgaon | When to See Dentist — Same Day or Wait?',
  description:
    'Severe toothache, swelling, or broken tooth in Gurgaon? Quick guidance on same-day dental care vs within a few days vs routine booking — then call or WhatsApp Hapliv Sector 65. Not a diagnosis.',
  alternates: { canonical: path },
  openGraph: {
    url: `https://haplivdentalclinic.com${path}`,
    title: 'Tooth pain — when to see a dentist | Gurgaon',
    description: 'Informational triage for dental pain — not a diagnosis.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <ToolPageShell
      path={path}
      breadcrumbItems={[
        { name: 'Home', path: '/' },
        { name: 'Dental guides', path: '/dental-guides' },
        { name: 'Tooth pain urgency guide', path },
      ]}
      h1="Tooth pain in Gurgaon — should you see a dentist today?"
      intro={
        <p className="mb-0">
          Unsure if you need a <strong>same-day dentist in Gurgaon</strong> for toothache, swelling, or a cracked tooth?
          Answer a few quick questions — we suggest how soon to visit Hapliv at Sector 65 (M3M Tee Point). This is not
          medical advice or a diagnosis.
        </p>
      }
      whoFor={[
        'You have tooth pain and are looking for an “emergency dentist Gurgaon” or same-day help',
        'You are unsure whether to call now, WhatsApp, or book online',
        'You had swelling, a broken tooth, or fever and want plain-language guidance on timing',
      ]}
      faqs={[
        {
          question: 'Does this replace speaking to a dentist?',
          answer:
            'No. If you feel very unwell, have trouble breathing, or swelling spreads quickly, seek urgent medical care and contact a dentist.',
        },
        {
          question: 'Can I get a same-day slot in Sector 65?',
          answer:
            'We prioritise urgent cases Mon–Sat during clinic hours. Call or WhatsApp first so we can triage and offer the next available time.',
        },
        {
          question: 'What if I need root canal cost information?',
          answer: 'See our dedicated root canal cost page linked from emergency and RCT content.',
        },
      ]}
      relatedLinks={[
        { href: '/emergency-dentist-gurgaon', label: 'Emergency dentist Gurgaon' },
        { href: '/root-canal-treatment-cost-gurgaon', label: 'RCT cost Gurgaon' },
        { href: '/locations/dentist-in-sector-65-gurgaon', label: 'Sector 65 clinic' },
      ]}
    >
      <ToothPainUrgencyClient />
    </ToolPageShell>
  );
}
