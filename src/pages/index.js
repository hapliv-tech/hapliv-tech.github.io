import Hero from 'components/hero';
import Review from 'components/reviews/review';
import Slider from 'components/slider';
import { SliderData } from 'components/sliderData';
import Timings from 'components/timetable';
import Instagram from 'components/instagram';
import Head from 'next/head';
import getSlogan from 'slogans';
export default function Home({ props }) {
  return (
    <div>
      <Head>
        <title>Braces Invisalign Implants & more | Hapliv Dental Clinic</title>
      </Head>
      <Hero heading='Hapliv Dental Clinic'/>
      {/* <Slider slides={SliderData} /> */}
      <Review/>
      {/* <Instagram/> */}
    </div>

  );
};

