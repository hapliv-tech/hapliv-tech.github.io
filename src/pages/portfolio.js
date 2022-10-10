import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
export default function Portfolio({props}) {
  return (
    <div className='mt-32'>
      <Head>
        <title>Hapliv Dental Clinic | Portfolio</title>
      </Head>
     <Slider slides ={SliderData}/>
      <Instagram/>
    </div>
  );
};

