import PatientsGalleryClient from 'components/app-pages/gallery/PatientsGalleryClient';

export const metadata = {
  title: 'Our Patients | Gallery | Hapliv Dental Clinic',
  alternates: { canonical: '/gallery/our-patients' },
  openGraph: {
    title: 'Our Patients | Gallery | Hapliv Dental Clinic',
    images: ['https://ik.imagekit.io/thwkz9dxk/Patients/1b14efe7-9e1c-40d1-aac7-021e847e7d72.jpeg?updatedAt=1736269385386'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Patients | Gallery | Hapliv Dental Clinic',
    images: ['https://ik.imagekit.io/thwkz9dxk/Patients/1b14efe7-9e1c-40d1-aac7-021e847e7d72.jpeg?updatedAt=1736269385386'],
  },
};

export default function OurPatientsGalleryPage() {
  return <PatientsGalleryClient />;
}
