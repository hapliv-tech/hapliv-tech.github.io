import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RequestForCallback from 'components/request-for-callback';
import Footer from 'components/footer/footer';
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'
import Carousel from 'components/carousel';
import {InvisalignFaqItem} from 'components/faq-item';
import { InvisalignSpecificFaq } from 'components/faq';

export default function InvisalignPage({ props }) {

  const questions = [{
    "q": "Are you self-conscious about your smile?"
  }, {
    "q": "Do you want to straighten your teeth without anyone noticing?"
  }, {
    "q": "Do you prefer a removable orthodontic option?"
  }, {
    "q": "Are you looking for a more comfortable alternative to metal braces?"
  }, {
    "q": "Are you committed to maintaining good oral hygiene during treatment?"
  }];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('Congratulations!! Invisalign is a great choice for you. Contact us for a personalized consultation and start your journey towards a confident smile.');

  const [userSubmissions, setUserSubmissions] = useState([]);
  const [score, setScore] = useState(0);

  function chooseAnswer(e, qIndex, answer) {
    userSubmissions.push({ 'question': questions[qIndex].q, 'answer': answer });
    console.log(userSubmissions);
    var currScore = score;
    if ("yes" == answer) {
      currScore = currScore + 1;
      setScore(currScore);
      console.log(currScore);
    }
    if (isLastQuestion(qIndex)) {
      if (currScore < 3) {
        setResult("Invisalign isn't the ideal option for you, don't worry. Contact us for a consultation, and we'll help you explore alternative treatments that suit your needs. Your smile is our priority, and we're here to guide you towards the best solution.")
      }
      setShowResult(true);
      scrolltoHash('discover-invis');
    }

    setQuestionIndex(qIndex + 1);
  }

  function isLastQuestion(qIndex) {
    return qIndex == questions.length - 1 || qIndex == questions.length;
  }

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
      <div>
        <Head>
          <title>Transform your smile with invisalign in Gurgaon | Hapliv Dental Clinic</title>
          <meta name="description" content="Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!"/>
          <meta name="keywords"
                    content="Invisalign, Invisalign in Gurgaon, Clear aligners, Invisible braces, Orthodontic treatment, Teeth straightening, Dental alignment, Clear orthodontics, Smile transformation, Custom-made aligners, Removable aligners, Dental aesthetics, Bite correction, Gum health, Oral hygiene, Dental care, Orthodontic appliances, Straighter teeth, Treatment duration" />
          <meta name="twitter:title" content="Transform your smile with invisalign in Gurgaon | Hapliv Dental Clinic" />
          <meta name="twitter:description" content="Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!" />
                <meta name="twitter:image" content="https://haplivdentalclinic.com/assets/invis-box.webp" />
                <meta property="og:type" name="og:type" content="article" />
                <meta property="og:title" name="og:title" content="Transform your smile with invisalign in Gurgaon | Hapliv Dental Clinic" />
                <meta property="og:description" name="og:description" content="Transform your smile with Invisalign, the discreet and effective clear aligner solution. Straighten teeth, correct bite issues, and improve oral health. Discover the benefits of Invisalign today!" />
                <meta property="og:image" name="og:image" content="https://haplivdentalclinic.com/assets/invis-box.webp" />          
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": InvisalignSpecificFaq.faqs.map((faq) => {
                return {
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answers[0]
                  }
                };
              }
              )
            })
          }}></script>
        </Head>
        <div className='grid w-full grid-cols-2 border border-b-2 shadow-md'>
          <Link href="/" key={'main_logo_link'}>
            <div className='inline-block p-4'>
              <Image src={'/assets/hapliv_compressed_black.webp'} alt={`Hapliv Dental Clinic`} height={70} width={240} objectFit="contain" />
            </div>
          </Link>
          <div className='flex call-btn items-center justify-end p-4 text-[#6b3a15] hover:text-[#ac6834]'>
            <Link href={'tel:+919810471255'}>
              <div className='flex items-center justify-center grid-cols-2 p-2 text-xl border border-[#6b3a15] rounded-lg cursor-pointer md:text-3xl'>
                <FaPhoneAlt size={30} className='p-1 mr-2 text-white bg-green-500 rounded-full' /><span>09810471255</span></div>
            </Link>
          </div>
        </div>

        <div className="hero-section w-full flex ml-0 mr-0 bg-right-bottom bg-no-repeat bg-contain top-40 backdrop-blur-lg md:min-h-[40vh]">
          <div className='flex items-center md:p-8 '>
            <div className='left-0 items-center basis-2/3'>
              <h1 className='left-0 items-center inline-block p-8 mt-8 text-3xl font-extrabold text-[#0090C9] top-40 md:text-7xl md:top-36 bg-gradient-to-r from-white to-purple-800 bg-clip-text'>
                Transform Your Smile with <span className='text-black'>invisalign</span> in Gurgaon
              </h1>
              <p className='inline-block pb-8 pl-8 text-lg'>Discover the clear and comfortable way to straighten your teeth and achieve the smile you've always wanted.</p>

            </div>
            <div className='items-center'>
              <Image src='/assets/invis-box.webp' width={320} height={290} className='z-10' alt='invisalign' />
            </div>
          </div>
        </div>
        <div className='block bg-[#DF8142] p-4' id='discover-invis'>
          <h2 className='flex items-center justify-center p-1 text-2xl font-bold text-center text-white basis-full md:text-4xl'>Discover If Invisalign is Right for You</h2>
          <div className='flex flex-wrap'>
            {showResult ?
              <h3 className='flex items-center justify-center col-span-4 p-2 m-2 text-xl font-bold text-blue-900 whitespace-pre-line rounded-lg grow md:text-3xl basis-full'>
                {result}
              </h3> :
              <h3 className='flex items-center justify-center col-span-4 p-2 m-2 text-2xl text-black whitespace-pre-line grow md:text-3xl question basis-full'>
                {questions[questionIndex].q}
              </h3>}
            {showResult ? <></> : <button className='items-center justify-center basis-1/3 grow md:basis-1/6 m-2 p-2 text-2xl bg-[#7e4b24] text-center rounded-lg text-[white] border-2 border-[#7e4b24] hover:bg-[#ac6834] focus:bg-[#7e4b24] cursor-pointer' onClick={e => chooseAnswer(e, questionIndex, "yes")}>Yes</button>}
            {showResult ? <></> : <button className='items-center justify-center basis-1/3 grow md:basis-1/6 text-center p-2 m-2 text-2xl bg-[#7e4b24] rounded-lg text-[white] border-2 border-[#7e4b24] hover:bg-[#ac6834] focus:bg-[#7e4b24] cursor-pointer' onClick={e => chooseAnswer(e, questionIndex, 'no')}>No</button>}
          </div>

          {/* <button className='p-8 float-right m-8 flex bg-[#0F4C5C] text-white rounded-md font-bold' onClick={goToAppointmentPage}>Book an Invisalign Scan</button> */}
        </div>
        <div className='justify-center border-b-4 border-[#DF8142] text-black whitespace-pre-line pb-8' id='fill-detail'>
          <h3 className='p-4 text-3xl text-center text-[#0090C9]'>Ready to achieve a stunning smile with Invisalign?</h3>
          <div className='p-4 text-center md:hidden'>
            <Link href={'tel:+919810471255'}>
              <div className='flex items-center justify-center grid-cols-2 p-2 text-xl text-black border border-green-600 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white md:text-3xl'>
                <span>Call us</span></div>
            </Link>
          </div>
          <div className='p-4'>
            <span className='md:hidden'>Or, You can also </span> Provide your name and phone number below, and our team will call back for your complimentary consultation. Let's start your smile transformation today!
          </div>
          <RequestForCallback src={'invisalign'} cta={'Request for Complimentary Consultation'} userQuestions={userSubmissions} className='flex' />
          {/* <div className='text-center'>
            <button id="learnMoreButton" className="learn mb-8 font-bold text-[#DF8142] underline p-2" onClick={e => { e.target.classList.add('hidden'); document.querySelector('.all-about-invisalign').classList.remove('hidden'); scrolltoHash('all-about-invisalign') }}>Learn More about Invisalign</button>
          </div> */}
        </div>

        <div id='all-about-invisalign' className='m-auto all-about-invisalign'>
          <section className='p-4 mt-4'>
            <h2 className='text-4xl font-extrabold text-center'>The Clear Path to a Straighter Smile</h2>
            <div className='mt-4 text-lg'>
              <p className='italic'>Are you tired of hiding your smile due to crooked teeth or gaps? </p>
              <p>Invisalign offers a discreet and convenient solution to help you achieve the smile you've always wanted. Invisalign uses a series of virtually invisible aligners that are custom-made for your teeth. These aligners gradually and gently shift your teeth into the desired position, giving you a confident smile without the need for traditional metal braces.</p>
            </div>
            <div className='mt-2'>
              <h3 className='text-2xl text-[#0090C9] items-center font-extrabold'>With invisalign you can:</h3>
              <ol className='text-lg'>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">1</div>
                  <div className="flex items-center justify-center font-extrabold">Get straighter teeth without anyone even knowing you're undergoing treatment</div>
                </li>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">2</div>
                  <div className="flex items-center justify-center font-extrabold">Enjoy the freedom to remove your aligners when eating, brushing, and flossing</div>
                </li>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">3</div>
                  <div className="flex items-center justify-center font-extrabold">Experience greater comfort compared to metal braces, as there are no wires or brackets</div>
                </li>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">4</div>
                  <div className="flex items-center justify-center font-extrabold">Save time with fewer visits to the orthodontist, as Invisalign requires less frequent adjustments</div>
                </li>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">5</div>
                  <div className="flex items-center justify-center font-extrabold">Access treatment options suitable for children, teenagers, and adults alike</div>
                </li>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">6</div>
                  <div className="flex items-center justify-center font-extrabold">Safeguard against gum disease for improved oral health</div>
                </li>
                <li className="flex m-4">
                  <div className="rounded-full p-4 mr-4 flex w-4 h-4 items-center justify-center text-white bg-[#0090C9]">7</div>
                  <div className="flex items-center justify-center font-extrabold">Attain your desired smile within a short period of 12-18 months</div>
                </li>

              </ol>
            </div>
            <Link href={'tel:+919810471255'}>
              <div className='flex items-center justify-center p-2 text-xl text-center text-black align-middle border border-green-600 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white md:text-3xl'>
                <span>Call to Schedule a Consultation</span></div>
            </Link>
          </section>
          <section className='p-4 mt-4 bg-[#DF8142]'>
            <h3 className='p-4 mb-4 text-3xl font-extrabold text-center text-white'>Invisalign Results</h3>
            <div className='block lg:hidden'>
              <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel>
            </div>
            <div className='hidden grid-cols-2 gap-4 p-4 lg:grid md:gap-12 lg:grid-cols-4'>
              <Image src={'/assets/invisalign-gallery/invisalign-pt1.webp'} width={100} height={100} layout='responsive' alt='Invisalign Deep Bite case'></Image>
              <Image src={'/assets/invisalign-gallery/invisalign-pt3.webp'} width={100} height={100} layout='responsive' alt='Invisalign Deep Bite case'></Image>
              <Image src={'/assets/invisalign-gallery/invisalign-pt6.webp'} width={100} height={100} layout='responsive' alt='Invisalign Crowding before and after result'></Image>
              <Image src={'/assets/invisalign-gallery/invisalign-pt7.webp'} width={100} height={100} layout='responsive' alt='Invisalign Open Bite result'></Image>
            </div>
          </section>

          <section className='mt-4'>
            <h2 className='text-3xl font-extrabold text-[#009ace] text-center mb-4'>Invisalign vs Traditional Braces</h2>
            <table className="m-auto table w-[90%] table-auto">
              <thead className='border bg-slate-100'>
                <tr >
                  <th className="px-4 py-2">Features</th>
                  <th className="px-4 py-2">Invisalign</th>
                  <th className="px-4 py-2">Traditional Braces</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border bg-slate-100">Appearance</td>
                  <td className="px-4 py-2 border">Nearly Invisible</td>
                  <td className="px-4 py-2 border">Visible </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border bg-slate-100">Removability</td>
                  <td className="px-4 py-2 border">Removable </td>
                  <td className="px-4 py-2 border">Fixed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border bg-slate-100">Comfort</td>
                  <td className="px-4 py-2 border">Smooth and Comfortable </td>
                  <td className="px-4 py-2 border">May Cause Discomfort</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border bg-slate-100">Treatment Time</td>
                  <td className="px-4 py-2 border">Varies</td>
                  <td className="px-4 py-2 border">Varies</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border bg-slate-100">Dietary Restrictions</td>
                  <td className="px-4 py-2 border">None</td>
                  <td className="px-4 py-2 border">Certain Foods Restricted</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border bg-slate-100">Oral Hygiene</td>
                  <td className="px-4 py-2 border">Easy to Maintain</td>
                  <td className="px-4 py-2 border">Requires Extra Care</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className='grid items-center gap-2 mt-10 md:grid-cols-4 bg-slate-50'>
            <div className='flex-col p-8 md:col-span-1 '>
              <h2 className='text-3xl font-bold text-center text-[#009ace] p-4'>Why Hapliv Dental Clinic?</h2>
              <Link href={'tel:+919810471255'}>
                <div className='flex items-center justify-center p-2 text-sm text-center text-black align-middle border border-green-600 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white md:text-lg'>
                  <span>Contact us</span></div>
              </Link>
            </div>
            <div className='p-4 bg-slate-300 md:col-span-3'>
              <div className='grid grid-flow-row gap-5 md:grid-cols-2'>
                <div className='p-2 text-black'>
                  <div className='text-4xl text-orange-500'>01.</div>
                  <div className='text-2xl'>Experienced Orthodontist</div>
                </div>
                <div className='p-2 text-black'>
                  <div className='text-4xl text-orange-500'>02.</div>
                  <div className='text-2xl'>
                    Free Smile assessment with invisalign at Hapliv that will give you an instant idea
                  </div>
                </div>
                <div className='p-2 text-black'>
                  <div className='text-4xl text-orange-500'>03.</div>
                  <div className='text-2xl'>3D Scan with Itero intraoral scanner that will give you almost 100% idea of your final treatment outcome</div>
                </div>
                <div className='p-2 text-black'>
                  <div className='text-4xl text-orange-500'>04.</div>
                  <div className='text-2xl'>
                    Invisalign Treatment for all age groups from Teens to Adults at Hapliv
                  </div>
                </div>
                <div className='p-2 text-black'>
                  <div className='text-4xl text-orange-500'>05.</div>
                  <div className='text-2xl'>
                    Easy EMI option available
                  </div>
                </div>
                <div className='p-2 text-black'>
                  <div className='text-4xl text-orange-500'>06.</div>
                  <div className='text-2xl'>
                    Best Price in Gurgaon for all orthodontic option
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='items-center p-4 mt-10 text-center'>
            <h2 className='text-4xl font-bold text-[#009ace]'>Learn more about Invisalign</h2>
            <div className='grid grid-cols-1 gap-10 mt-4 md:grid-cols-1 lg:grid-cols-2'>
              <div>
                <iframe className='w-[100%] h-[315px]' src="https://www.youtube-nocookie.com/embed/vM__W-2ict4" title="The Future of your Teen's Smile - Invisalign India" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen" ></iframe>
              </div>
              <div>
                <iframe className='w-[100%] h-[315px]' src="https://www.youtube-nocookie.com/embed/gbRhNoFRKoA" title="Transforming smiles, changing lives | Invisalign India" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen" ></iframe>
              </div>
            </div>
          </section>

          <section className='items-center p-8 mt-10 bg-zinc-200'>
            <h2 className='text-4xl font-bold text-center text-[#009ace]'>Treatable cases with Invisalign : A clear braces</h2>
            <div className='mt-4 text-lg'>
              Invisalign aligners have been proven to work from simple to complex cases.The proprietary SmartForce technology and SmartTrack material enable results on which you can rely.
            </div>
            <div className='mt-4'>
              <span className='block mb-4 text-3xl font-extrabold text-orange-500'>Let's look at the case that is relevant to you</span>
              <div className='grid grid-cols-2 gap-2 md:grid-cols-3 row-dense'>
                <div>
                  <Image alt='Cross Bite' src={'/assets/invisalign-gallery/cross-bite-case.webp'} width={75} height={50} layout='responsive' />
                  <span className='block text-xl text-center text-white bg-black caption'>Cross Bite</span>
                </div>
                <div>
                  <Image alt='Overly crowded' src={'/assets/invisalign-gallery/crowding-case.webp'} width={75} height={50} layout='responsive' />
                  <span className='block text-xl text-center text-white bg-black caption'>Overly crowded</span>
                </div>
                <div>
                  <Image alt='Gapped Teeth' src={'/assets/invisalign-gallery/gapped-case.webp'} width={75} height={50} layout='responsive' />
                  <span className='block text-xl text-center text-white bg-black caption'>Gapped Teeth</span>
                </div>
                <div>
                  <Image alt='Open Bite' src={'/assets/invisalign-gallery/open-bite-case.webp'} width={75} height={50} layout='responsive' />
                  <span className='block text-xl text-center text-white bg-black caption'>Open Bite</span>
                </div>
                <div>
                  <Image alt='Deep Bite' src={'/assets/invisalign-gallery/over-bite-case.webp'} width={75} height={50} layout='responsive' />
                  <span className='block text-xl text-center text-white bg-black caption'>Deep Bite</span>
                </div>
                <div>
                  <Image alt='Reverse Bite' src={'/assets/invisalign-gallery/under-bite-case.webp'} width={75} height={50} layout='responsive' />
                  <span className='block text-xl text-center text-white bg-black caption'>Reverse Bite</span>
                </div>
              </div>
            </div>
            <div className='m-4'>
              <div className='p-4'>
                If you are facing any of the above problems, Contact us and schedule your appointment with our Invisalign Provider today.
              </div>
              <Link href={'tel:+919810471255'}>
                <div className='flex items-center justify-center p-2 text-lg text-center text-white align-middle bg-green-500 rounded-lg cursor-pointer hover:bg-green-600 md:text-lg'>
                  <span>Call and Schedule your appointment</span></div>
              </Link>
            </div>

          </section>

          <section id='invis-faq' className='items-center p-4 mt-10 text-center'>
            <h2 className='text-4xl font-bold text-center text-[#009ace]'>Frequently Asked Questions about Invisalign</h2>
            <div className='pt-2 pb-2 mt-2'>
            {InvisalignSpecificFaq
              .faqs.map((faq, idx) => {
                  return <InvisalignFaqItem faq={faq} key={idx}></InvisalignFaqItem>
              })}
            </div>
            
          </section>
        </div>
      </div>
  );
};

