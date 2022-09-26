import Footer from 'components/footer/footer';
import Header from 'components/header/navbar';
import Hero from 'components/hero';
import Slider from 'components/slider';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
import getSlogan from 'slogans';
import Timings from 'components/timetable';
import Map from 'components/map';
import Review from 'components/reviews/review';
export default function Home({props}) {
  return (
    <div>
      <Head>
        <title>Hapliv Dental Clinic</title>
        {/* <meta name='description'>
          Hapliv Dental Clinic is gurgaon's one of the premium dental clinic and is equipped with modern technology for providing best in class treatment experience.
          </meta> */}
      </Head>
      <Hero heading='Hapliv Dental Clinic'/>
      <Timings/>
      <Slider slides ={SliderData}/>
      <Review/>
      {/* <Instagram/> */}
    </div>

  );
};

