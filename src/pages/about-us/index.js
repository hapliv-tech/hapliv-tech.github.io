import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import Link from 'next/link';
// import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
import Image from 'next/image';
export default function AboutUsPage({ props }) {
  return (
    <>
      <Head>
        <title>About Us | Hapliv Dental Clinic</title>
        <meta name="description" content="Hapliv Dental Clinic is the one of few Dental Clinics in Gurgaon with a full time Orthodontist." />
        <meta name="keywords" content="Dr Achla Verma, Orthodontist, Invisalign Provider, Orthodontic treatment, Cosmetic treatment" />
      </Head>
      <div className='container items-center justify-center p-4 m-auto'>
        <div className='flex items-center justify-center text-orange-900 mt-36'>
          <h1 className='text-3xl font-bold'>About Us</h1>
        </div>
        <div className='grid gap-4 p-2 font-semibold leading-8 sm:grid-cols-1 lg:grid-cols-2'>
          <div className='p-4 text-justify text-black'>
            <Image className='rounded-3xl' src='/assets/hapliv_dental_operatory.webp' layout='responsive' width={'20%'} height={'20%'} alt='Hapliv Dental Clinic: Interior'></Image>
          </div>
          <div className='text-justify text-black'>
            <p className='m-2 text-black'> Hapliv Dental Clinic is one of few Dental practice in Gurgaon with a full time Orthodontist & family Dentist. Hapliv Dental is a premium Invisalign and Orthodontic center in M3M TEE Point,  Golf course extension. We have a team of Specialized doctors.
              Dr. Achla verma who is practicing dentistry nearly 8 years+  with her passion towards dentistry to provide best dental treatment to her patients with utmost care & painless treatment. Our team of Specialized doctors is our core strength to accurate diagnosis and treatment planning & are inclined to use world's latest technology to provide our patients best treatment with utmost care and sanitization.
            </p>

            <div className='m-2 text-black'>
              <h3 className='text-xl font-semibold underline'>Best Premium Dental clinic near you in Sector 65, Gurugram</h3>
              Hapliv Dental is located in the median of Sector 65,Golf Course extension, Gurugram near one of the famous landmark Trump Towers (Delhi NCR), We cater to all kinds of dental needs to the captive gated communities of South city I and II, M3M Golf estate, M3M latitude, Emaar emerald floors premium, Emaar palm gardens, Emaar marbella villas, M3M Merlin, Nirvana country, Ireo Victory valley, Dhoot time residency, Conscient Heritage one, Ireo uptown, & SECTOR 60 to Sector 76 in Gurugram.
              Our vision is to educate and create awareness to the kids studying in schools like, DPS sec. 67A, Alpine convent, St. Xaviers, RPS school Nordic school etc regarding the oral health care from their childhood.
            </div>
            <div className='m-2 text-black'>
              {/* <h3 className='text-xl font-semibold underline'></h3> */}
              If any of your friends, family and office colleagues want the best orthodontic treatment in Gurgaon, you can suggest HAPLIV Dental Clinic.
              They will be glad with our treatment and so YOU. “HAPLIV” the name itself says HAPPY LIVING:
              So, we at Hapliv dental are keen to provide you the best dental treatment, with premium facilities and care.
            </div>
            <p className='m-2'>
              Do <Link href={'tel:+919810471255'}><a className='text-xl text-orange-700 underline'>Call us</a></Link> or <Link href={'/appointment'}><a className='text-xl text-orange-700 underline'>Book</a></Link> your appointment now.
            </p>

          </div>
        </div>


        <div className='flex items-center justify-center mt-10'>
          <h1 className='text-3xl font-bold text-center'>Know your dentist : Team Hapliv</h1>
        </div>

        <div className='items-center justify-center mt-10 md:p-4'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1'>
            <div className='rounded-lg bg-cyan-800/20'>
              <div className='grid grid-cols-1 p-10 text-sm md:grid-cols-2 lg:grid-cols-2'>
                <div className='p-1 text-center' >
                  <Image alt="Dr. Achla Verma" className='p-4 border-4 rounded-full bg-cyan-900' src='/assets/dr_achla.webp' width={340} height={340}></Image>
                  <span className='block text-3xl text-center'>Dr. Achla Verma</span>
                  <span className='block text-center'>BDS(PGIMS), MDS (Orthodontics & Dento-facial Orthopedics),<br /> Aligner provider, Associate Fellowship in LASER, WCLI (USA)</span>
                </div>
                <div className='md:p-6'>
                  <p className='text-lg text-left '>
                    Dr. Achla did her Graduation from prestigious PGIMS Rohtak, followed by her masters in the field of Orthodontics & dento-facial orthopedics.
                    She has been trained under the guidance of doctors from AIIMS. She has utmost knowledge of Jaw discrepancy,
                    underwent training in Invisalign, Self-ligation system by Damon & 3M, & pursued training in Lingual Orthodontics.
                    She is a trained Invisalign provider & is highly trained in treating patients of all age (teen invisalign & adult invisalign) with visually visible/invisible braces & aligners.
                    <br /><br />To stay up to date with the latest in orthodontic advances and better serve her patients, Dr. Achla has presented many paper, poster in national conferences and she on regular basis attends seminar,
                    conferences to get updated in her field of Orthodontics and dento-facial orthopediecs.
                  </p>
                </div>
              </div>

            </div>
            <div className='rounded-lg bg-cyan-800/20'>
              <div className='grid grid-cols-1 p-10 text-sm md:grid-cols-2 lg:grid-cols-2'>
                <div className='p-6 m-4 text-center' >
                  <Image alt="Dr. Praveen Raghav" className='p-4 rounded-full bg-cyan-900 border-stone-100' src='/assets/dr-praveen-raghav.webp' width={340} height={340}></Image>
                  <span className='block text-3xl text-center'>Dr. Praveen Raghav</span>
                  <span className='block text-center'>BDS, MDS (Orthodontics & Dento-facial Orthopedics), <br/> Certified Invisalign provider</span>
                </div>
                <div className='md:p-6'>
                  <p className='text-lg text-left '>
                    Dr. Praveen Raghav is BDS and MDS in Orthodontics and Dento-facial Orthopaedics.
                    He is practicing Dentistry more than 13 years. He has been trained in Invisalign aligner and best Invisalign provider (USA) in gurgaon.
                    <br/><br/>He is trained in Teen invisalign and adult Invisalign provider and able to handle all type of difficult cases with Invisalign.
                    Dr. Praveen Raghav is a specialised dentist and to stay upto date he using all recent technology like itero.
                  </p>
                </div>


              </div>

            </div>



          </div>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <h1 className='text-3xl font-bold text-center'>Why Hapliv?</h1>
        </div>
        <div className='items-center justify-center p-8 mt-10 md:p-8 main' >
          <ol className='grid grid-cols-1 text-xl md:grid-cols-2 gradient-list'>
            <li>Our value: Integrity, Responsibility, Ethical, Affordable, Learning, Simplicity</li>
            <li>We care for our patient to provide best  Painless dental treatment</li>
            <li>Post-graduate doctors on board</li>
            <li>One stop solution for every dental problem</li>
            <li>Strict sterilization protocol to ensure neat and clean environment</li>
            <li>Latest technology to treat dental issues to attain best results</li>
          </ol>
        </div>

        <div className='items-center justify-center mt-10 md:p-4'>
          <div className='grid grid-cols-1 text-sm md:grid-cols-2'>
            <div className='p-2 m-2 text-lg text-center rounded-lg bg-pink-800/30' >
              <h2 className='text-2xl'>Our Vision</h2>
              <p className='p-4 mt-4 text-justify'>To be the most trusted dental care brand in India, to achieve that we have molded our practice with these strict principles of high-quality treatments, world class customer service, coupled with advanced infrastructure and technology so that our patients get all dental care at one place.</p>
            </div>
            <div className='p-2 m-2 text-lg text-center rounded-lg bg-cyan-800/20'>
              <h2 className='text-2xl'>Our Mission</h2>
              <p className='p-4 mt-4 text-justify'>We want to provide painless dental care to our patients in Gurgaon. Our principal goal is to preserve your natural teeth at the earliest & at the right age. We use the most advanced dental techniques and products to maximize your dental treatment life.Our office is state of the art equipped with technology &
                powerful clinical software systems allowing us to provide accurate diagnosis and treatment plan better than ever along with our skilled and specialized doctors and staff. We are constantly upgrading our skills and knowledge that engage us in new challenges in our thinking, helping us to be one of the best frontline doctors in the dental fraternity.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

