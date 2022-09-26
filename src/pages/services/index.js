import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
import n from 'components/instagram';
import { navLinks } from 'components/header/navbarData';
import Link from 'next/link';
export default function ServicePage({ props }) {

  const services = navLinks.filter((item) => item.path === '/services');
  return (
    <div className='mt-32'>
      <Head>
        <title>Hapliv Dental Clinic | Services</title>
      </Head>
      <div className='mx-auto p-4'>
        <h1 className='text-3xl p-4 text-orange-900 text-center'>Services</h1>
        <ul className='list-disc p-4 items-center' >
      {services[0].children.map((item,idx)=>{
      return ( 
        <li key={idx} className="hover:cursor-pointer">
        <Link href={item?.path} ><p className='text-base p-2'>{item?.name}</p></Link> 
        </li>
       );
      })}
      </ul>
       </div>
     
    </div>
  );
};



