import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import bg from '../../../public/assets/girl_with_yellow_bg.webp';
import Router from 'next/router';
import RequestForCallback from 'components/request-for-callback';

export default function AboutUsPage({ props }) {

  function goToAppointmentPage(e) {
    Router.push('/appointment');
  }

  return (
    <div>
      <Head>
        <title>Say Goodbye to Crooked teeth with Top 1% invisalign Provider Gurgaon | Hapliv Dental Clinic</title>
      </Head>
      <div className="w-full ml-0 mr-0 bg-center bg-no-repeat bg-cover top-40 backdrop-blur-lg" style={{
        backgroundImage: "url(" + `${bg.src}` + ")",
        minHeight: '40em'
      }}>
        <div className='relative block md:p-8'>
          <h1 className='absolute left-0 inline-block p-8 mt-8 text-5xl font-extrabold text-transparent top-40 md:text-7xl md:top-36 bg-gradient-to-r from-white to-purple-800 bg-clip-text'>
            Say Goodbye to Crooked teeth with Invisalign
          </h1>
          <div className='absolute right-[10%] md:right-20 grid p-4 bg-orange-300 top-[28em]'>
            <Image src={'/assets/invisalign-1.png'} height={100} width={300} layout='fixed' />
            <div className='pt-4 text-sm font-bold text-pink-700 md:text-pink-700 md:text-lg'>Top 1% Invisalign Provider in Gurugram</div>
          </div>
        </div>
      </div>
      <div className='block prose bg-gradient-to-r from-white via-orange-50 to-orange-400'>
        <h2 className='container p-4'>Request for Callback</h2>
        <RequestForCallback src={'invisalign'} cta={'Book an Invisalign Scan'}/>
        {/* <button className='p-8 float-right m-8 flex bg-[#0F4C5C] text-white rounded-md font-bold' onClick={goToAppointmentPage}>Book an Invisalign Scan</button> */}
      </div>
      <div className='container p-4 m-auto'>
        <div>
          <div className='relative p-4 mt-10 bg-[#009ace]'>
            <div className='m-4 text-3xl leading-10 prose text-white md:w-2/3'>
              You have dreamt of a beautiful smile for as long as you can remember. It's not too late, From TEENS (Invisalign first) to Adults, that beautiful smile is just an Invisalign away!
              <br /><br />We are more than happy to give you your brand new smile just with invisalign treatment.
              See why more than 14 million people have chosen invisalign aligners to help their smile transformation.
              <br /><br />Call Hapliv Dental Clinic today at <Link href={'tel://+919810471255'}><a className='underline'>+919810471255</a></Link> to see what invisalign treatment can do for you,
              As we at Hapliv using Invisalign as treatment plan in many of our Orthodontically treated patients.
            </div>
            <div className='absolute top-0 right-0 mt-4'>
              <Image src='/assets/invis-box.webp' width={320} height={320} className='z-10 opacity-40' />
            </div>
          </div>

          <div className='relative p-4 mt-10 bg-[#ffa300]'>
            <h2 className='m-4 text-4xl font-extrabold text-black'>What is Invisalign? - It's Just Invisible Braces!</h2>
            <div className='m-4 text-2xl leading-10 prose text-black'>
              <p className=''>Invisalign is a breakthrough technology which is Comfortable and more discreet option for our patients who are searching for alternative  treatment to traditional Braces and wire treatment.
                Invisalign(Invisible clear aligner) is transparent and uses  3D virtual technology that digitally decides your tooth movement.
                The patient has to wear a series of custom made computer generated smart track aligners tray to straighten the smile.</p>
              <p className='mt-4 '>Invisalign aligner( invisible braces) are effective in straightening the vast majority of dental problems in adults and teens including crowded teeth, midline spacing or widely-spaced teeth,
                having different bites like overbite, underbite, and even crossbite & last not the least the invisalign first for children Jaw correction are the new addition to invisi family.
                Invisalign orthodontic treatment helps to fight against  unhealthy gum disease caused due to spacing in between their teeth. Straighter and properly aligned teeth help gums adhere properly around each tooth and they become easier to clean.
                At the same time using Invisalign you can continue to brush and floss your teeth as usual. Invisalign is designed in such a way that each set of aligner will lead to small changes everyday and patient is asked to change aligner in every 1-2 weeks
                which helps your teeth to move gradually and gently into the their proper position in as little as 12-18 months duration to give you that dream smile.
              </p>

            </div>

          </div>
        </div>
        <div className='p-4 mt-4'>
          <h3 className='text-3xl text-[#009ace] underline'>Features</h3>
          <ul className='text-2xl mt-4 text-[#ffa300] list-disc'>
            <li><span className='text-black'>Straighten crowded teeth, midline space and various spaces and maligned teeth.</span></li>
            <li><span className='text-black'>Sheer and convenient.</span></li>
            <li><span className='text-black'>Comfortable.</span></li>
            <li><span className='text-black'>Custom made to every smile.</span></li>
            <li><span className='text-black'>Invisalign Results are faster.</span></li>
            <li><span className='text-black'>Prevent unhealthy gum diseases in between teeth with spaces.</span></li>
            <li><span className='text-black'>No Food restriction.</span></li>
          </ul>
        </div>
        <div className='items-center p-8 mt-10 bg-slate-300'>
          <h2 className='text-4xl font-bold text-center text-[#009ace]'>Why Hapliv Dental Clinic For Invisalign?</h2>
          <div className='mt-4'>
            <ul className='p-2 text-2xl list-disc text-[#ffa300]'>
              <li><span className='text-black'>Hapliv Dental Clinic has 2 best Orthodontists, who have been practicing dentistry over a decade.</span></li>
              <li><span className='text-black'>Free Smile assessment with invisalign at Hapliv that will give you an instant idea, even we can provide you this feature at home to assess your beautiful smile makeover.</span></li>
              <li><span className='text-black'>3D Scan with Itero intraoral scanner that will give you almost 100%  idea of your final treatment outcome.</span></li>
              <li><span className='text-black'>We are doing Invisalign Treatment From Invisalign TEEN to Invisalign Adult, Invisalign Treatment for all age at Hapliv.</span></li>
              <li><span className='text-black'>Easy EMI option available.</span></li>
            </ul>
          </div>
        </div>
        <div className='items-center p-8 mt-10 bg-slate-300'>
          <h2 className='text-4xl font-bold text-center text-[#009ace]'>Treatable cases with Invisalign : A clear braces</h2>
          <div className='mt-4'>
            Invisalign aligners have been proven to work from simple to complex cases.The proprietary SmartForce technology and SmartTrack material enable results on which you can rely.
          </div>
          <div className='mt-4'>
            <span className='text-[#ffa300] font-extrabold text-3xl mb-4 block'>Let's look at the case that is relevant to you</span>
            <Image src={'/assets/invis_treatable_cases.webp'} layout='responsive' height={50} width={'100%'} />
          </div>

        </div>

        <div className='items-center mt-10 text-center'>
          <h2 className='text-4xl font-bold text-[#009ace]'>Learn more about Invisalign</h2>
          <div className='grid grid-cols-1 gap-10 mt-4 md:grid-cols-1 lg:grid-cols-2'>
            <div>
              <iframe className='w-[100%] h-[315px]' src="https://www.youtube-nocookie.com/embed/vM__W-2ict4" title="The Future of your Teen's Smile - Invisalign India" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen" ></iframe>
            </div>
            <div>
              <iframe className='w-[100%] h-[315px]' src="https://www.youtube-nocookie.com/embed/gbRhNoFRKoA" title="Transforming smiles, changing lives | Invisalign India" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen" ></iframe>
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

