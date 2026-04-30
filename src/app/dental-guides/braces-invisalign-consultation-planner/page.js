import ToolPageShell from 'components/tools/ToolPageShell';
import InvisalignBracesCostEstimatorClient from 'components/tools/InvisalignBracesCostEstimatorClient';
import { TOOL_SLUG } from 'lib/tools/constants';

const path = `/dental-guides/${TOOL_SLUG.COST_ESTIMATOR}`;

export const metadata = {
  title: 'Braces or Invisalign Consultation Planner | Hapliv Gurgaon',
  description:
    'Not sure whether to book braces, Invisalign, or a comparison consult? Plan your next step, then book or WhatsApp Hapliv Sector 65.',
  alternates: { canonical: path },
  openGraph: {
    url: `https://haplivdentalclinic.com${path}`,
    title: 'Braces & Invisalign consultation planner — Gurgaon',
    description: 'Choose the right orthodontic consultation path before you book or WhatsApp.',
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
        { name: 'Braces & Invisalign consultation planner', path },
      ]}
      h1="Braces or Invisalign — what should you book next?"
      intro={
        <p className="mb-0">
          If you are deciding between braces, Invisalign, or a first orthodontic visit, this guide helps you choose the
          right conversation to start with at Hapliv Sector 65. For detailed pricing, use the dedicated braces and
          Invisalign cost pages linked below.
        </p>
      }
      whoFor={[
        'You want to book or WhatsApp the clinic but are unsure which orthodontic consult to ask for',
        'You are choosing between braces, Invisalign, or a combined comparison visit',
        'You want a short private guide before speaking with the clinic team',
      ]}
      faqs={[
        {
          question: 'Is this my final orthodontic quote?',
          answer:
            'No. This guide only helps you choose what to discuss. Your quote is confirmed after the dentist reviews your bite and records.',
        },
        {
          question: 'Do you offer Invisalign at Sector 65?',
          answer:
            'Yes — Hapliv provides aligner and braces consults at M3M Tee Point, Golf Course Extension Road, Gurgaon.',
        },
        {
          question: 'Can I book straight after this?',
          answer:
            'Yes. Tap “Book appointment” on your result — we open our form with your choices carried over where possible.',
        },
      ]}
      relatedLinks={[
        { href: '/braces-cost-gurgaon', label: 'Braces cost details' },
        { href: '/invisalign-cost-gurgaon', label: 'Invisalign cost details' },
        { href: '/braces-vs-invisalign-gurgaon', label: 'Braces vs Invisalign comparison' },
        { href: '/appointment', label: 'Book appointment' },
      ]}
    >
      <InvisalignBracesCostEstimatorClient />
    </ToolPageShell>
  );
}
