import CampGalleryClient from 'components/app-pages/gallery/CampGalleryClient';

export const metadata = {
  title: 'Oral Health Awareness Camp | Community Dental Education',
  description:
    'Hapliv Dental Clinic organizes oral health awareness camps in Gurgaon and Delhi-NCR. View photos from our community dental education programs promoting dental hygiene and preventive care.',
  keywords:
    'Oral health awareness camp, Dental health camp, Community dental program, Dental education, Preventive dental care, Dental awareness Gurgaon, Hapliv Dental Clinic camp, Dental health education',
  alternates: { canonical: '/gallery/oral-health-awareness-camp' },
  openGraph: {
    description:
      'Community dental education programs organized by Hapliv Dental Clinic promoting oral health awareness in Gurgaon and Delhi-NCR.',
    url: 'https://haplivdentalclinic.com/gallery/oral-health-awareness-camp',
    images: ['https://ik.imagekit.io/thwkz9dxk/Camp/hapliv-dental-camp-at-isle-de-royale-gurgaon8.jpeg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Community dental education programs promoting oral health awareness.',
    images: ['https://ik.imagekit.io/thwkz9dxk/Camp/hapliv-dental-camp-at-isle-de-royale-gurgaon8.jpeg'],
  },
};

export default function OralHealthAwarenessCampPage() {
  return <CampGalleryClient />;
}
