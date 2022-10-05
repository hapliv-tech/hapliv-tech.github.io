import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
export default function AppointmentPage({props}) {
  return (
    <div className='mt-32'>
      <Head>
        <title>Hapliv Dental Clinic | Appointment</title>
      </Head>
      <div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9ZSs9itHmVPgsSSjO-a5LddAjx7hRZR9N9BwRYR84cGK2Ng/viewform?embedded=true" width="100%" height="1191" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
};

