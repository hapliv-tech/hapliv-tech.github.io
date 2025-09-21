import InvisalignPageClient from 'components/app-pages/InvisalignPageClient';

export const metadata = {
  title: 'Transform your smile with invisalign in Gurgaon | Hapliv Dental Clinic',
  description:
    'Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!',
  keywords:
    'Invisalign, Invisalign in Gurgaon, Clear aligners, Invisible braces, Orthodontic treatment, Teeth straightening, Dental alignment, Clear orthodontics, Smile transformation, Custom-made aligners, Removable aligners, Dental aesthetics, Bite correction, Gum health, Oral hygiene, Dental care, Orthodontic appliances, Straighter teeth, Treatment duration',
  twitter: {
    title: 'Transform your smile with invisalign in Gurgaon | Hapliv Dental Clinic',
    description:
      'Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
  },
  openGraph: {
    type: 'article',
    title: 'Transform your smile with invisalign in Gurgaon | Hapliv Dental Clinic',
    description:
      'Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!',
    images: ['https://haplivdentalclinic.com/assets/invis-box.webp'],
  },
  alternates: { canonical: '/invisalign' },
};

export default function InvisalignPage() {
  return <InvisalignPageClient />;
}
