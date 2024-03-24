import Associations from 'components/associations';
import Hero from 'components/hero';
import Review from 'components/reviews/review';
import Head from 'next/head';
import ImageGallery from 'components/image-gallery/img-gallery';
import WhyUsSection from 'components/why-us';
import SmileViewAssement from 'components/smile-view';
import HappyPatientSection from 'components/happy-patient-section';
export default function Home({ props }) {
 
  return (
    <div>
      <Head>
        <title>Best Braces, Invisalign & Root Canal Treatment near you | Hapliv Dental Clinic</title>
      </Head>
      <Hero heading='Hapliv Dental Clinic'/>
      <WhyUsSection heading='Why Choose Us?'/>
      <SmileViewAssement heading='Smile Assessment'/>
      <HappyPatientSection heading='Our Happy Patient'/>
      <Review/>
      <Associations/>
      {/* <Instagram/> */}
    </div>

  );
};

