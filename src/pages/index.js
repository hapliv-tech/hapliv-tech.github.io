import Associations from 'components/associations';
import Hero from 'components/hero';
import Review from 'components/reviews/review';
import Head from 'next/head';
import ImageGallery from 'components/image-gallery/img-gallery';
export default function Home({ props }) {
  const images = [
    { id: 'caro-1', link:'/gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/patient15.jpeg?updatedAt=1689617021775&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 1' },
    { id: 'caro-2', link:'/gallery/our-patients',src: 'https://ik.imagekit.io/thwkz9dxk/patient14.jpeg?updatedAt=1689617021052&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 2' },
    { id: 'caro-3',link:'/gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 3' },
    { id: 'caro-4', link:'/gallery/our-patients',src: 'https://ik.imagekit.io/thwkz9dxk/patient7.jpg?updatedAt=1689617020460&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 4' }
];
  return (
    <div>
      <Head>
        <title>Best Braces, Invisalign & Root Canal Treatment near you | Hapliv Dental Clinic</title>
      </Head>
      <Hero heading='Hapliv Dental Clinic'/>
      <div className='py-4 text-center'>
        <h2 className='text-3xl font-bold underline'>Our Happy Patients</h2>
        <ImageGallery images={images}/>
      </div>
      <Review/>
      <Associations/>
      {/* <Instagram/> */}
    </div>

  );
};

