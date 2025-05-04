
import Footer from '../components/footer/footer';
import Header from '../components/header/navbar';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import bgImage from '../../public/assets/dr_achla_desk.webp'
// import invisalignImg from '../../public/assets/invisalign-bg.webp'
import invisalignImg from '../../public/assets/invisalign-1.png'
import haplivGirlImg from '../../public/assets/hapliv-girl.webp'
import invisImg from '../../public/assets/invis-1.jpg'
import homeImg from '../../public/assets/hapliv-home.webp'
import haplivIcon from '../../public/assets/hapliv_compressed_black.webp'
import clinicBg from '../../public/assets/clinic.webp'
import clinicEntranceBg from '../../public/assets/clinic_entrance.webp'
import texture_image from '../../public/assets/apple_text_image.webp'
import { useEffect, useState } from 'react';
import getSlogan from 'slogans';
import AppointmentPage from 'pages/appointment';

export default function Hero({ heading }) {
    // const message = getSlogan();
    const [bg, setBg] = useState(homeImg);
    const [slogan, setSlogan] = useState(() => getSlogan());
    const [indexCounter, setIndexCounter] = useState(1);
    // const bgArray = [homeImg, invisImg];
    const stylesPage = [{
        backgroundImage: "url(" + `${haplivGirlImg.src}` + ")",
        backgroundClip: 'padding-box',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '467px 448px',
        backgroundPosition: 'center center',
        zIndex: '10'
    },
        // {
        //     backgroundColor: 'black,black',
        //     backgroundImage: "url(" + `${haplivGirlImg.src}` + "), url(" + `${invisalignImg.src}` + ")",
        //     backgroundClip: 'padding-box,padding-box',
        //     backgroundRepeat: 'no-repeat,no-repeat',
        //     backgroundSize: '467px 448px,20%',
        //     backgroundPosition: 'center,20% 72%',
        //     backgroundBlendMode: 'overlay',
        //     display:'inline-block',
        //     transition:'display 1s cubic-bezier(0.1, -0.6, 0.2, 0) -1s',
        //     zIndex: '-10'
        // }
    ];
    const [stle, setStle] = useState(stylesPage[0]);

    useEffect(() => {
        var id = setTimeout(() => {
            setIndexCounter(indexCounter + 1);
            setStle(stylesPage[(indexCounter) % stylesPage.length]);
        }, 5000);
        return () => clearInterval(id);
    });
    
    return (<>
        <div className='relative grid items-center content-center self-center grid-cols-1 mt-36 md:mt-36 lg:mt-36 md:grid-cols-5'>
            <div className='order-2 col-span-2 pl-12 pr-12 text-2xl font-black leading-relaxed text-white left md:pl-12 md:pr-12 md:text-2xl lg:text-6xl lg:font-extrabold md:pb-0'>
                {/* <h1 className='text-black font-[1600] '>Looking for Best Braces and Invisalign Center in <span className='text-[#5A09A4]'>Gurgaon?</span> </h1>    */}
                <h1 className='text-black font-[1600] text-4xl' >Exceptional Dental Clinic for Kids, Teens, and Adults in <span className='text-[#5A09A4]'>Gurgaon & West Delhi</span> </h1>   
                {/* <h3 className='mt-4 text-lg text-black md:text-xl'>We care for your smile at <span className='text-orange-600'>Hapliv Dental Clinic</span></h3> */}
                <h2 className='mt-8 text-base font-thin text-black'>
                    Hapliv Dental offers top-notch patient dental services tailored for kids, teens, and adults, ensuring the best care for your smile.
                    Your Trusted Partner for Braces, Invisalign, Root Canal Treatment, Implants, and More
                </h2>
                <div className='grid grid-cols-1 col-span-1 pb-4 pl-0 pr-0 mt-8 text-2xl font-black leading-normal text-white md:pl-0 md:pr-0 md:text-2xl lg:text-4xl md:pb-4'>
                    <div className='relative z-10 self-center mt-4 text-lg text-black border-[#301B49] bg-white border rounded-full md:hidden v-screen hover:bg-[#301B4998] hover:text-white'>
                        <Link href={'tel:+919810471255'} className='text-center'><a rel="nofollow"><span className='self-center block p-5 text-center cursor-pointer h-fit'>Call & book now</span></a></Link>
                    </div>
                    <div className='relative z-10 self-center mt-4 text-lg text-white bg-[#301B49] border rounded-full v-screen hover:bg-[#301B4998]'>
                        <Link href={'/appointment'} className='text-center'><span className='self-center block p-5 text-center cursor-pointer h-fit'>Book appointment today</span></Link>
                    </div>
                </div>
            </div>
            <div className='order-2 h-[55vh] col-span-2 md:col-span-3 md:order-2' style={stle}>
                <div className='top-0 h-[55vh] left-0 right-0 bottom-0 z-[10] blur-lg'>
                </div>
            </div>
        </div>
    </>
    );
}

