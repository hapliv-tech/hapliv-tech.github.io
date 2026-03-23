import TreatmentResultsGalleryClient from 'components/app-pages/gallery/TreatmentResultsGalleryClient';

export const metadata = {
  title: 'Dental Treatment Results | Before & After Photos',
  description:
    'View impressive before and after photos of dental treatments at Hapliv Dental Clinic. See real results from braces, Invisalign, root canal, implants, teeth whitening, and cosmetic dentistry procedures in Gurgaon and West Delhi.',
  keywords:
    'Dental treatment results, Before and after dental photos, Braces results, Invisalign results, Root canal results, Dental implant results, Teeth whitening results, Cosmetic dentistry results, Dental transformation photos, Hapliv Dental Clinic results',
  alternates: { canonical: '/gallery/treatment-results' },
  openGraph: {
    description:
      'See real before and after photos of successful dental treatments at Hapliv Dental Clinic in Gurgaon and West Delhi.',
    url: 'https://haplivdentalclinic.com/gallery/treatment-results',
    images: ['https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/hapliv-patient21.jpeg?updatedAt=1736269834863'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'View impressive before and after photos of our dental treatments.',
    images: ['https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/hapliv-patient21.jpeg?updatedAt=1736269834863'],
  },
};

export default function TreatmentResultsPage() {
  return <TreatmentResultsGalleryClient />;
}
