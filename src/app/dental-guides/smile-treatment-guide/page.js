import ToolPageShell from 'components/tools/ToolPageShell';
import SmileTreatmentMatcherClient from 'components/tools/SmileTreatmentMatcherClient';
import { TOOL_SLUG } from 'lib/tools/constants';

const path = `/dental-guides/${TOOL_SLUG.SMILE_MATCHER}`;

export const metadata = {
  title: 'Crooked Teeth & Smile Makeover Gurgaon | What to Discuss First',
  description:
    'Crooked teeth, gaps, yellow teeth, or smile design in Gurgaon? See likely first topics for your consult — braces, aligners, whitening, or cosmetic planning. Book at Hapliv Sector 65.',
  alternates: { canonical: path },
  openGraph: {
    url: `https://haplivdentalclinic.com${path}`,
    title: 'Smile options in Gurgaon — Hapliv',
    description: 'Explore your next consult path before you visit.',
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
        { name: 'Smile treatment guide', path },
      ]}
      h1="Smile goals in Gurgaon — braces, aligners, whitening, or makeover?"
      intro={
        <p className="mb-0">
          Not sure whether to start with <strong>aligners, braces, whitening, or a smile makeover</strong> in Gurgaon?
          Tell us your goal below — we suggest a <strong>likely first conversation</strong> for your visit to Hapliv
          Sector 65. Only an exam confirms what is right for you.
        </p>
      }
      whoFor={[
        'You have crooked teeth or gaps and want to understand options',
        'You are exploring smile makeover or whitening before an event',
        'You prefer invisible treatment but want to compare timelines',
      ]}
      faqs={[
        {
          question: 'Will this pick my final treatment?',
          answer:
            'No — it only highlights directions worth discussing. Your dentist decides after records and your goals.',
        },
        {
          question: 'Do you serve areas beyond Sector 65?',
          answer:
            'Many patients visit from South City, Golf Course Extension, and nearby sectors. We also offer West Delhi for some follow-ups.',
        },
      ]}
      relatedLinks={[
        { href: '/invisalign-gurgaon', label: 'Invisalign Gurgaon' },
        { href: '/best-orthodontist-gurgaon', label: 'Orthodontist' },
        { href: '/dental-implants-gurgaon', label: 'Dental implants' },
      ]}
    >
      <SmileTreatmentMatcherClient />
    </ToolPageShell>
  );
}
