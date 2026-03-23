import ClinicTourGalleryClient from 'components/app-pages/gallery/ClinicTourGalleryClient';

export const metadata = {
  title: 'Dental Clinic Tour | Modern Dental Facility in Sector 65, Gurgaon',
  description:
    'Take a virtual tour of Hapliv Dental Clinic in Sector 65, Gurgaon. Explore our state-of-the-art dental facility with modern equipment, comfortable treatment rooms, and advanced technology for comprehensive dental care.',
  keywords:
    'Dental clinic tour, Hapliv Dental Clinic Gurgaon, Modern dental facility, Dental clinic Sector 65 Gurgaon, Dental clinic interior, Advanced dental equipment, Dental clinic photos',
  alternates: { canonical: '/gallery/dental-clinic-tour' },
  openGraph: {
    description:
      'Virtual tour of our modern dental clinic in Sector 65, Gurgaon. See our state-of-the-art facility and advanced dental equipment.',
    url: 'https://haplivdentalclinic.com/gallery/dental-clinic-tour',
    images: ['https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Explore our modern dental facility in Sector 65, Gurgaon with state-of-the-art equipment.',
    images: ['https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg'],
  },
};

export default function ClinicTourPage() {
  return <ClinicTourGalleryClient />;
}
