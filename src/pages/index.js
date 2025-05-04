import Associations from 'components/associations';
import Hero from 'components/hero';
import Review from 'components/reviews/review';
import Head from 'next/head';
import ImageGallery from 'components/image-gallery/img-gallery';
import WhyUsSection from 'components/why-us';
import SmileViewAssement from 'components/smile-view';
import HappyPatientSection from 'components/happy-patient-section';
import BestDentalClinicSection from 'components/best-dental-clinic';
export default function Home({ props }) {
 
  return (
    <div>
      <Head>
        <title>Best Braces, Invisalign & Root Canal Treatment in Gurgaon & West Delhi | Hapliv Dental Clinic</title>
        <meta name="description" content="Hapliv Dental Clinic offers expert dental care in Gurgaon & West Delhi, specializing in Braces, Invisalign, Root Canal Treatments, and more. Book your appointment today!" />
        <meta name="keywords" content="Braces, Invisalign, Root Canal Treatment, Dental Clinic, Gurgaon, West Delhi, Dental Care, Pediatric Dentistry, Cosmetic Dentistry, Dental Implants, Oral Health" />
        <meta name="twitter:title" content="Best Braces, Invisalign & Root Canal Treatment in Gurgaon & West Delhi | Hapliv Dental Clinic" />
        <meta name="twitter:description" content="Get expert dental treatments like Braces, Invisalign, Root Canal at Hapliv Dental Clinic in Gurgaon & West Delhi. Schedule your consultation now!" />
        <meta property="og:type" name="og:type" content="website" />
        <meta property="og:title" name="og:title" content="Best Braces, Invisalign & Root Canal Treatment in Gurgaon & West Delhi | Hapliv Dental Clinic" />
        <meta property="og:description" name="og:description" content="Hapliv Dental Clinic offers top-rated Braces, Invisalign, and Root Canal Treatment in Gurgaon & West Delhi. Book an appointment today for expert dental care!" />
      </Head>
      <Hero heading='Best Dentist in Gurgaon & West Delhi – Offering Invisalign, Root Canal Treatment, and More'/>
      <BestDentalClinicSection heading='Best Dental Clinic'/>
      <WhyUsSection heading='Why Choose Hapliv Dental Clinic for Invisalign and Dental Pain Relief?'/>
      <HappyPatientSection heading='Hear from Our Happy Patients About Our Painless Dental Treatments'/>
      <SmileViewAssement heading='Get a Free Smile Assessment – Start Your Journey to Perfect Teeth'/>
      <Review/>
      <Associations/>
      {/* <Instagram/> */}
    </div>

  );
};

