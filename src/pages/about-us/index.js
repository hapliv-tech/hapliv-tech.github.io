import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
import Image from 'next/image';
export default function AboutUsPage({ props }) {
  return (
    <div className='mt-32 p-4 justify-center items-center '>
      <Head>
        <title>Hapliv Dental Clinic | About Us</title>
      </Head>
      <div className='flex justify-center items-center text-orange-900'>
        <h1 className='text-3xl font-bold'>About Us</h1>
      </div>
      <div className='text-base text-justify'>
        <p className='m-2'>
          Hapliv Dental Clinic, is the first Dental Clinic in Gurgaon with a full time Orthodontist. At Hapliv we use, world’s latest technology to provide our patients best treatment with utmost care and sanitisation. Clinic is located in Sushant Lok, Phase 1 & cater to the captive gated communities like The Maple heights, The Sushant Apartments, DLF phase 5 (The Aralias, The Magnolias, The Princeton, The Carlton Estates, The Summit, Trinity Towers, The Belaire, Park Place) & SECTOR 40 to Sector 57 etc.
          If any of your friends or family want best orthodontic treatment in Gurgaon, you can suggest HAPLIV Dental Clinic. They will be glad with our treatment and so YOU.
        </p>
        <p className='m-2'>
          “HAPLIV” the name itself says HAPPY LIVING: So, we at Hapliv dentals are keen to provide you the best dental treatment, with premium facilities and care.
        </p>
      </div>

      <div className='flex justify-center items-center mt-10 text-orange-900'>
        <h1 className='text-3xl text-center font-bold'>Know your dentist : Team Hapliv</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-10 justify-center items-center'>
        <div>

        </div>
        <div>
          <div className='flex'>
            <div className='justify-center items-center p-6' >
              <Image className='rounded-full border-b-orange-400 p-4 border-solid border-2' src='/assets/dr_achla_verma.webp' width={240} height={240}></Image>
              
            </div>
            <p className='text-2xl p-10'>Meet <h4 className='text-3xl text-orange-900'>Dr. Achla Verma</h4></p>
         
          </div>
          <div>
              <p className='text-base text-center'>
                Dr. Achla did her Graduation from prestigious PGIMS Rohtak, followed by her masters in field of Orthodontics & dento-facial orthopedics.
                She has been trained under the guidance of doctors from AIIMS. She has utmost knowledge of Jaw discrepancy,
                underwent training in Invisalign, Self-ligation system by Damon & 3M, & pursued training in Lingual Orthodontics.
                She is a trained Invisalign provider & is highly trained in treating patients of all age (teen invisalign & adult invisalign) with visually visible/invisible braces & aligners.
                To stay up to date with the latest in orthodontic advances and better serve her patients, Dr. Achla has presented many paper, poster in national conferences and she on regular basis attends seminar, conferences to get updated in her field of Orthodontics and dento-facial orthopediecs.
              </p>
            </div>

        </div>
        <div>

        </div>

      </div>




    </div>
  );
};

