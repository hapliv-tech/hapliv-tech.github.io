import InvisalignPageClient from 'components/app-pages/InvisalignPageClient';

export const metadata = {
  title: 'Invisalign Gurgaon & West Delhi | Certified Clear Aligner Provider',
  description:
    'Invisalign treatment planning, candidacy, process, and results by a certified provider in Gurgaon and West Delhi. Book consultation, view costs, and compare Invisalign vs braces.',
  keywords:
    'Invisalign Gurgaon, Invisalign West Delhi, Clear aligner treatment, Certified Invisalign provider, Invisalign cost Gurgaon, Invisalign vs braces, Invisible braces, Teeth alignment with aligners',
  alternates: { canonical: '/invisalign' },
  twitter: {
    title: 'Invisalign Gurgaon & West Delhi | Certified Provider',
    description:
      'Compare Invisalign vs braces, see treatment steps, and book with a certified provider in Gurgaon and West Delhi.',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
  },
  openGraph: {
    type: 'article',
    title: 'Invisalign Gurgaon & West Delhi | Certified Clear Aligner Provider',
    description:
      'Invisalign candidacy, process, results, and booking support in Gurgaon and West Delhi.',
    url: 'https://haplivdentalclinic.com/invisalign',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
    siteName: 'Hapliv Dental Clinic',
  },
};

export default function InvisalignPage() {
  return <InvisalignPageClient />;
}
