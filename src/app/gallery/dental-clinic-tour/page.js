import ClinicTourGalleryClient from 'components/app-pages/gallery/ClinicTourGalleryClient';

export const metadata = {
  title: 'Dental Clinic Tour | Gallery | Hapliv Dental Clinic',
  alternates: { canonical: '/gallery/dental-clinic-tour' },
  openGraph: {
    title: 'Dental Clinic Tour | Gallery | Hapliv Dental Clinic',
    type: 'website',
  },
};

export default function ClinicTourPage() {
  return <ClinicTourGalleryClient />;
}
