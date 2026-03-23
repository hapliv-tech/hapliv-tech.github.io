import InvisalignPageClient from 'components/app-pages/InvisalignPageClient';

export const metadata = {
  title: 'Invisalign Clear Aligners | Certified Provider',
  description:
    'How Invisalign works: digital scan, clear trays, candidacy, and treatment process. Certified Invisalign provider at clinics in Gurgaon & West Delhi. For Invisalign in Gurgaon (local), see our Gurgaon page; for cost, see Invisalign cost page. Book a consult.',
  keywords:
    'Invisalign Gurgaon, Best Invisalign provider Gurgaon, Clear aligner Gurgaon, Aligner treatment Gurgaon, Invisible braces Gurgaon, Invisalign West Delhi, Clear aligner West Delhi, Best orthodontist Invisalign, Certified Invisalign provider, Invisalign near me, Clear aligner near me, Invisible braces treatment, Teeth straightening aligner, Removable braces, Invisalign cost Gurgaon',
  twitter: {
    description:
      'Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
  },
  openGraph: {
    type: 'article',
    description:
      'Invisalign treatment process, candidacy, and certified care in Gurgaon & West Delhi. Book a consultation.',
    url: 'https://haplivdentalclinic.com/invisalign',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
    siteName: 'Hapliv Dental Clinic',
  },
  alternates: { canonical: '/invisalign' },
};

export default function InvisalignPage() {
  return <InvisalignPageClient />;
}
