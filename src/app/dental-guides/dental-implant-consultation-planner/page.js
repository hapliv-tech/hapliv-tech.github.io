import ToolPageShell from 'components/tools/ToolPageShell';
import DentalImplantCandidacyClient from 'components/tools/DentalImplantCandidacyClient';
import { TOOL_SLUG } from 'lib/tools/constants';

const path = `/dental-guides/${TOOL_SLUG.IMPLANT}`;

export const metadata = {
  title: 'Dental Implant Consultation Planner | Hapliv Gurgaon',
  description:
    'Missing a tooth or several? See whether an implant consultation is the right next step, then book or WhatsApp Hapliv Sector 65.',
  alternates: { canonical: path },
  openGraph: {
    url: `https://haplivdentalclinic.com${path}`,
    title: 'Dental implant consultation planner — Gurgaon',
    description: 'Understand whether an implant-focused consult is the logical next step.',
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
        { name: 'Dental implant consultation planner', path },
      ]}
      h1="Dental implant consultation — is this the right next step?"
      intro={
        <p className="mb-0">
          If you have a missing tooth or recent extraction, this guide helps you decide whether to book an
          implant-focused consultation. Bone height, gum health, and imaging still decide the final plan at our
          Sector 65 clinic.
        </p>
      }
      whoFor={[
        'You want to book or WhatsApp the clinic about missing tooth replacement',
        'You want a clearer picture before an implant consultation',
        'You are weighing fixed teeth versus removable options',
      ]}
      faqs={[
        {
          question: 'Does “likely suitable” mean I will get an implant?',
          answer:
            'Not always. It means a consultation is reasonable — the dentist still verifies bone height, gum health, and medical factors.',
        },
        {
          question: 'Do you offer full-arch options?',
          answer:
            'Full-arch cases usually need an in-person discussion of implants vs other solutions — book so we can review imaging and goals.',
        },
      ]}
      relatedLinks={[
        { href: '/dental-implants-gurgaon', label: 'Dental implant treatment details' },
        { href: '/missing-tooth-replacement-options-gurgaon', label: 'Missing tooth replacement options' },
        { href: '/locations/dentist-in-sector-65-gurgaon', label: 'Sector 65 clinic' },
        { href: '/appointment', label: 'Book appointment' },
      ]}
    >
      <DentalImplantCandidacyClient />
    </ToolPageShell>
  );
}
