import PatientsGalleryClient from 'components/app-pages/gallery/PatientsGalleryClient';

export const metadata = {
  title: 'Our Happy Patients | Dental Treatment Results Gallery | Hapliv Dental Clinic',
  description:
    'View our gallery of happy patients at Hapliv Dental Clinic. See real before and after photos of successful dental treatments including braces, Invisalign, root canal, implants, and cosmetic dentistry in Gurgaon and West Delhi.',
  keywords:
    'Happy patients, Dental treatment results, Before and after dental photos, Patient testimonials, Dental success stories, Braces results, Invisalign results, Dental transformation, Hapliv Dental Clinic patients',
  alternates: { canonical: '/gallery/our-patients' },
  openGraph: {
    title: 'Our Happy Patients | Dental Treatment Results | Hapliv Dental Clinic',
    description:
      'Gallery of happy patients showcasing successful dental treatments at Hapliv Dental Clinic in Gurgaon and West Delhi.',
    url: 'https://haplivdentalclinic.com/gallery/our-patients',
    images: ['https://ik.imagekit.io/thwkz9dxk/Patients/1b14efe7-9e1c-40d1-aac7-021e847e7d72.jpeg?updatedAt=1736269385386'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Happy Patients | Hapliv Dental Clinic',
    description: 'See real patient results from our dental treatments in Gurgaon and West Delhi.',
    images: ['https://ik.imagekit.io/thwkz9dxk/Patients/1b14efe7-9e1c-40d1-aac7-021e847e7d72.jpeg?updatedAt=1736269385386'],
  },
};

export default function OurPatientsGalleryPage() {
  return <PatientsGalleryClient />;
}
