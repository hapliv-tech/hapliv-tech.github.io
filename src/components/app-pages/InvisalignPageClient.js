"use client";
import Image from 'next/legacy/image';
import Link from 'next/link';
import Carousel from 'components/carousel';
import { InvisalignSpecificFaq } from 'components/faq';
import { InvisalignFaqItem } from 'components/faq-item';
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import RequestForCallback from 'components/request-for-callback';
import { FadeIn, SlideUp } from 'components/animations';
import BannerSingle from 'components/banner/BannerSingle';

export default function InvisalignPageClient() {
  const questions = [
    { q: 'Are you self-conscious about your smile?' },
    { q: "Do you want to straighten your teeth without anyone noticing?" },
    { q: 'Do you prefer a removable orthodontic option?' },
    { q: 'Are you looking for a more comfortable alternative to metal braces?' },
    { q: 'Are you committed to maintaining good oral hygiene during treatment?' },
  ];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(
    "Congratulations!! Invisalign is a great choice for you. Contact us for a personalized consultation and start your journey towards a confident smile."
  );
  const [userSubmissions] = useState([]);
  const [score, setScore] = useState(0);

  function chooseAnswer(e, qIndex, answer) {
    userSubmissions.push({ question: questions[qIndex].q, answer });
    let currScore = score;
    if (answer === 'yes') currScore = currScore + 1;
    setScore(currScore);
    if (isLastQuestion(qIndex)) {
      if (currScore < 3) {
        setResult(
          "Invisalign isn't the ideal option for you, don't worry. Contact us for a consultation, and we'll help you explore alternative treatments that suit your needs. Your smile is our priority, and we're here to guide you towards the best solution."
        );
      }
      setShowResult(true);
      const el = document.getElementById('discover-invis');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    setQuestionIndex(qIndex + 1);
  }
  function isLastQuestion(qIndex) {
    return qIndex === questions.length - 1 || qIndex === questions.length;
  }

  return (
    <div>
    <div className='grid w-full grid-cols-2 bg-white border-b border-gray-200 shadow-soft'>
          <Link href="/" key={'main_logo_link'}>
            <div className='inline-block p-6'>
              <Image src={'/assets/hapliv_compressed_black.webp'} alt={`Hapliv Dental Clinic`} height={70} width={240} objectFit="contain" className='cursor-pointer'/>
            </div>
          </Link>
          <div className='flex items-center justify-end p-6 call-btn'>
            <Link href={'tel:+919810471255'}>
              <div className='flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer md:text-lg'>
                <FaPhoneAlt size={20} className='text-white' /><span>09810471255</span></div>
            </Link>
          </div>
        </div>

        <div className="w-full py-20 bg-white md:py-28">
          <div className='container px-4 mx-auto max-w-7xl'>
            <div className='flex flex-col items-center gap-8 md:flex-row md:items-center'>
              <FadeIn>
                <div className='flex-1'>
                  <h1 className='mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-hero'>
                    Transform Your Smile with <span className='text-primary'>Invisalign</span> in Gurgaon
                  </h1>
                  <p className='text-lg leading-relaxed text-gray-700 md:text-xl'>Discover the clear and comfortable way to straighten your teeth and achieve the smile you've always wanted.</p>
                </div>
              </FadeIn>
              <SlideUp delay={0.2}>
                <div className='flex-shrink-0'>
                  <Image src='/assets/invis-box.webp' width={320} height={290} className='z-10' alt='invisalign' />
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
        
        {/* Invisalign Top Banner - Full Width */}
        <div className="w-full py-6">
          <BannerSingle position="invisalign-top" className="w-full" />
        </div>
        
        <div className='block px-4 py-16 bg-accent' id='discover-invis'>
          <div className='container max-w-4xl mx-auto'>
            <FadeIn>
              <h2 className='mb-8 text-2xl font-semibold tracking-tight text-center text-white md:text-4xl'>Discover If Invisalign is Right for You</h2>
              <div className='flex flex-col items-center gap-6'>
                {showResult ?
                  <h3 className='p-6 text-xl font-semibold text-center text-white whitespace-pre-line rounded-card bg-white/10 backdrop-blur-sm md:text-2xl'>
                    {result}
                  </h3> :
                  <h3 className='p-6 text-xl font-semibold text-center text-white whitespace-pre-line rounded-card bg-white/10 backdrop-blur-sm md:text-2xl'>
                    {questions[questionIndex].q}
                  </h3>}
                {showResult ? <></> : (
                  <div className='flex w-full gap-4 sm:w-auto'>
                    <button className='flex-1 sm:flex-none px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-accent-dark rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer md:text-lg' onClick={e => chooseAnswer(e, questionIndex, "yes")}>Yes</button>
                    <button className='flex-1 sm:flex-none px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-accent-dark rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer md:text-lg' onClick={e => chooseAnswer(e, questionIndex, 'no')}>No</button>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className='justify-center px-4 py-16 whitespace-pre-line bg-white border-b-4 border-accent' id='fill-detail'>
          <div className='container max-w-4xl mx-auto'>
            <FadeIn>
              <h3 className='mb-8 text-3xl font-semibold tracking-tight text-center text-primary md:text-4xl'>Ready to achieve a stunning smile with Invisalign?</h3>
              <div className='mb-6 text-center md:hidden'>
                <Link href={'tel:+919810471255'}>
                  <div className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer'>
                    <span>Call us</span></div>
                </Link>
              </div>
              <p className='mb-8 text-lg leading-relaxed text-center text-gray-700'>
                <span className='md:hidden'>Or, You can also </span> Provide your name and phone number below, and our team will call back for your complimentary consultation. Let's start your smile transformation today!
              </p>
              <RequestForCallback src={'invisalign'} cta={'Request for Complimentary Consultation'} userQuestions={userSubmissions} className='flex' />
            </FadeIn>
          </div>
        </div>

        <div id='all-about-invisalign' className='m-auto all-about-invisalign'>
          <section className='px-4 py-16 mt-4 bg-white'>
            <div className='container mx-auto max-w-7xl'>
              <FadeIn>
                <h2 className='mb-8 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>The Clear Path to a Straighter Smile</h2>
                <div className='max-w-3xl mx-auto text-lg leading-relaxed text-gray-700'>
                  <p className='mb-4 italic'>Are you tired of hiding your smile due to crooked teeth or gaps? </p>
                  <p>Invisalign offers a discreet and convenient solution to help you achieve the smile you've always wanted. Invisalign uses a series of virtually invisible aligners that are custom-made for your teeth. These aligners gradually and gently shift your teeth into the desired position, giving you a confident smile without the need for traditional metal braces.</p>
                </div>
              </FadeIn>
              <div className='max-w-4xl mx-auto mt-12'>
                <h3 className='mb-8 text-2xl font-semibold tracking-tight text-primary md:text-3xl'>With Invisalign you can:</h3>
                <ol className='space-y-4 text-lg'>
                  {[
                    "Get straighter teeth without anyone even knowing you're undergoing treatment",
                    "Enjoy the freedom to remove your aligners when eating, brushing, and flossing",
                    "Experience greater comfort compared to metal braces, as there are no wires or brackets",
                    "Save time with fewer visits to the orthodontist, as Invisalign requires less frequent adjustments",
                    "Access treatment options suitable for children, teenagers, and adults alike",
                    "Safeguard against gum disease for improved oral health",
                    "Attain your desired smile within a short period of 12-18 months",
                  ].map((text, idx) => (
                    <SlideUp key={idx} delay={idx * 0.1}>
                      <li className="flex items-start gap-4 p-6 transition-all duration-300 bg-gray-50 rounded-card shadow-soft hover:shadow-soft-md hover:bg-white hover:-translate-y-1 group">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-semibold text-white transition-transform duration-300 rounded-full bg-primary group-hover:scale-110">{idx + 1}</div>
                        <div className="flex-1 font-medium leading-relaxed text-gray-900 transition-colors duration-300 group-hover:text-primary">{text}</div>
                      </li>
                    </SlideUp>
                  ))}
                </ol>
              </div>
              <div className='mt-10 text-center'>
                <Link href={'tel:+919810471255'}>
                  <div className='inline-flex items-center justify-center px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer md:text-lg'>
                    <span>Call to Schedule a Consultation</span></div>
                </Link>
              </div>
            </div>
          </section>
          <section className='px-4 py-28 bg-accent'>
            <div className='container mx-auto max-w-7xl'>
              <FadeIn>
                <h3 className='mb-16 text-3xl font-semibold tracking-tight text-center text-white md:text-4xl lg:text-hero-sm'>Invisalign Results</h3>
              </FadeIn>
              <div className='block lg:hidden'>
                <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel>
              </div>
              <div className='hidden grid-cols-2 gap-6 lg:grid md:gap-8 lg:grid-cols-4'>
                {[
                  { src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' },
                  { src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' },
                  { src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' },
                  { src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' },
                ].map((img, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className='overflow-hidden transition-all duration-500 rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1'>
                      <Image src={img.src} width={100} height={100} layout='responsive' alt={img.alt}></Image>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </section>

          <section className='px-4 py-28 bg-gray-50'>
            <div className='container mx-auto max-w-7xl'>
              <FadeIn>
                <h2 className='mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>Invisalign vs Traditional Braces</h2>
              </FadeIn>
              <div className='max-w-5xl mx-auto overflow-hidden bg-white rounded-card shadow-soft-lg'>
                <table className="w-full table-auto">
                  <thead className='bg-primary-lightest'>
                    <tr>
                      <th className="px-6 py-4 font-semibold tracking-tight text-left text-gray-900">Features</th>
                      <th className="px-6 py-4 font-semibold tracking-tight text-center text-primary">Invisalign</th>
                      <th className="px-6 py-4 font-semibold tracking-tight text-center text-gray-900">Traditional Braces</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {[
                      { feature: 'Appearance', invisalign: 'Nearly Invisible', braces: 'Visible' },
                      { feature: 'Removability', invisalign: 'Removable', braces: 'Fixed' },
                      { feature: 'Comfort', invisalign: 'Smooth and Comfortable', braces: 'May Cause Discomfort' },
                      { feature: 'Treatment Time', invisalign: 'Varies', braces: 'Varies' },
                      { feature: 'Dietary Restrictions', invisalign: 'None', braces: 'Certain Foods Restricted' },
                      { feature: 'Oral Hygiene', invisalign: 'Easy to Maintain', braces: 'Requires Extra Care' },
                    ].map((row, idx) => (
                      <tr key={idx} className='transition-colors duration-200 hover:bg-gray-50'>
                        <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.invisalign}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.braces}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className='px-4 bg-white py-28'>
            <div className='container mx-auto max-w-7xl'>
              <div className='grid gap-8 md:grid-cols-4'>
                <FadeIn>
                  <div className='p-8 bg-primary-lightest rounded-card shadow-soft-lg md:col-span-1'>
                    <h2 className='mb-6 text-3xl font-semibold tracking-tight text-center text-primary md:text-2xl'>Why Hapliv Dental Clinic?</h2>
                    <Link href={'tel:+919810471255'}>
                      <div className='flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-center text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer md:text-base'>
                        <span>Contact us</span></div>
                    </Link>
                  </div>
                </FadeIn>
                <div className='p-8 bg-gray-50 rounded-card shadow-soft-lg md:col-span-3'>
                  <div className='grid gap-6 md:grid-cols-2'>
                    {[
                      { num: '01.', title: 'Experienced Orthodontist' },
                      { num: '02.', title: 'Free Smile assessment with invisalign at Hapliv that will give you an instant idea' },
                      { num: '03.', title: '3D Scan with Itero intraoral scanner that will give you almost 100% idea of your final treatment outcome' },
                      { num: '04.', title: 'Invisalign Treatment for all age groups from Teens to Adults at Hapliv' },
                      { num: '05.', title: 'Easy EMI option available' },
                      { num: '06.', title: 'Best Price in Gurgaon for all orthodontic option' },
                    ].map((item, idx) => (
                      <SlideUp key={idx} delay={idx * 0.1}>
                        <div className='p-6 transition-all duration-300 bg-white rounded-card shadow-soft hover:shadow-soft-md hover:-translate-y-1'>
                          <div className='mb-3 text-3xl font-semibold tracking-tight text-accent'>{item.num}</div>
                          <div className='text-lg font-medium leading-relaxed text-gray-900'>{item.title}</div>
                        </div>
                      </SlideUp>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='px-4 py-28 bg-gray-50'>
            <div className='container mx-auto max-w-7xl'>
              <FadeIn>
                <h2 className='mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>Learn more about Invisalign</h2>
              </FadeIn>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                {[
                  { src: "https://www.youtube-nocookie.com/embed/vM__W-2ict4", title: "The Future of your Teen's Smile - Invisalign India" },
                  { src: "https://www.youtube-nocookie.com/embed/gbRhNoFRKoA", title: "Transforming smiles, changing lives | Invisalign India" },
                ].map((video, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className='overflow-hidden transition-all duration-500 rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1'>
                      <iframe className='w-full h-[315px]' src={video.src} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen" ></iframe>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </section>

          <section className='px-4 bg-white py-28'>
            <div className='container mx-auto max-w-7xl'>
              <FadeIn>
                <h2 className='mb-6 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>Treatable cases with Invisalign: A clear braces</h2>
                <p className='max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-center text-gray-700'>
                  Invisalign aligners have been proven to work from simple to complex cases. The proprietary SmartForce technology and SmartTrack material enable results on which you can rely.
                </p>
              </FadeIn>
              <div className='mb-12'>
                <h3 className='mb-8 text-2xl font-semibold tracking-tight text-center text-accent md:text-3xl'>Let's look at the case that is relevant to you</h3>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                  {[
                    { src: '/assets/invisalign-gallery/cross-bite-case.webp', alt: 'Cross Bite', title: 'Cross Bite' },
                    { src: '/assets/invisalign-gallery/crowding-case.webp', alt: 'Overly crowded', title: 'Overly crowded' },
                    { src: '/assets/invisalign-gallery/gapped-case.webp', alt: 'Gapped Teeth', title: 'Gapped Teeth' },
                    { src: '/assets/invisalign-gallery/open-bite-case.webp', alt: 'Open Bite', title: 'Open Bite' },
                    { src: '/assets/invisalign-gallery/over-bite-case.webp', alt: 'Deep Bite', title: 'Deep Bite' },
                    { src: '/assets/invisalign-gallery/under-bite-case.webp', alt: 'Reverse Bite', title: 'Reverse Bite' },
                  ].map((caseItem, idx) => (
                    <SlideUp key={idx} delay={idx * 0.1}>
                      <div className='overflow-hidden transition-all duration-500 bg-white rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1 group'>
                        <div className='relative overflow-hidden'>
                          <Image alt={caseItem.alt} src={caseItem.src} width={75} height={50} layout='responsive' className='transition-transform duration-500 group-hover:scale-105' />
                        </div>
                        <div className='p-4 text-center bg-primary-dark'>
                          <span className='text-lg font-semibold tracking-tight text-white'>{caseItem.title}</span>
                        </div>
                      </div>
                    </SlideUp>
                  ))}
                </div>
              </div>
              <div className='max-w-2xl mx-auto text-center'>
                <p className='mb-8 text-lg leading-relaxed text-gray-700'>
                  If you are facing any of the above problems, Contact us and schedule your appointment with our Invisalign Provider today.
                </p>
                <Link href={'tel:+919810471255'}>
                  <div className='inline-flex items-center justify-center px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] cursor-pointer md:text-lg'>
                    <span>Call and Schedule your appointment</span></div>
                </Link>
              </div>
            </div>
          </section>

          <section id='invis-faq' className='px-4 py-28 bg-gray-50'>
            <div className='container max-w-4xl mx-auto'>
              <FadeIn>
                <h2 className='mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>Frequently Asked Questions about Invisalign</h2>
              </FadeIn>
              <div className='space-y-4'>
                {InvisalignSpecificFaq
                  .faqs.map((faq, idx) => {
                      return <InvisalignFaqItem faq={faq} key={idx}></InvisalignFaqItem>
                  })}
              </div>
            </div>
          </section>
          
          {/* Invisalign Sidebar Banner */}
          <div className="container max-w-6xl px-4 py-6 mx-auto">
            <BannerSingle position="invisalign-sidebar" className="max-w-md mx-auto" />
          </div>
        </div>
    </div>
  );
}
