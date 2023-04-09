import Hero from 'components/hero';
import Review from 'components/reviews/review';
import Head from 'next/head';
export default function Home({ props }) {
  return (
    <div>
      <Head>
        <title>Best Braces, Invisalign & Root Canal Treatment near you | Hapliv Dental Clinic</title>
      </Head>
      <Hero heading='Hapliv Dental Clinic'/>
      {/* <Slider slides={SliderData} /> */}
      <Review/>
      {/* <Instagram/> */}
    </div>

  );
};

