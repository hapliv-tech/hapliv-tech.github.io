
import Footer from '../components/footer/footer';
import Header from '../components/header/navbar';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import bgImage from '../../public/assets/dr_achla_desk.webp'
// import invisalignImg from '../../public/assets/invisalign-bg.webp'
import invisalignImg from '../../public/assets/invisalign-1.png'
import invisImg from '../../public/assets/invis-1.jpg'
import homeImg from '../../public/assets/hapliv-home.webp'
import haplivIcon from '../../public/assets/hapliv_compressed_black.webp'
import clinicBg from '../../public/assets/clinic.webp'
import clinicEntranceBg from '../../public/assets/clinic_entrance.webp'
import texture_image from '../../public/assets/apple_text_image.webp'
//import achlaimg from '../../public/assets/IMG_0129.jpg'
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
        backgroundImage: "url(" + `${homeImg.src}` + ")",
        backgroundClip: 'content-box',
        backgrounRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '-10'
    }, {
        backgroundColor: 'black,black',
        backgroundImage: "url(" + `${invisImg.src}` + "), url(" + `${invisalignImg.src}` + ")",
        backgroundClip: 'content-box,content-box',
        backgrounRepeat: 'no-repeat,no-repeat',
        backgroundSize: 'cover,70%',
        backgroundPosition: 'center,30% 70%',
        backgroundBlendMode: 'overlay',
        display:'inline-block',
        transition:'display 1s cubic-bezier(0.1, -0.6, 0.2, 0) -1s',
        zIndex: '-10'
    }];
    const [stle, setStle] = useState(stylesPage[0]);

    useEffect(() => {
        var id = setTimeout(() => {
            setIndexCounter(indexCounter + 1);
            setStle(stylesPage[(indexCounter) % stylesPage.length]);
            console.log(indexCounter, indexCounter % stylesPage.length);
        }, 5000);
        return () => clearInterval(id);
    });
    return (<>
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='items-center justify-center h-screen col-span-3 bg-no-repeat' style={stle}>
                <div className='top-0 left-0 right-0 bottom-0 bg-cyan-400/20 z-[10] h-screen blur-lg'>
                </div>
                <div className={'absolute right-[0%] bottom-[20%] md:right-[45%] md:bottom-[10%] item-center p-4 text-white bg-black z-[2] mt-[10rem] ' + `${indexCounter % stylesPage.length == 0 ? 'hidden' : ''}`}>
                    <span className='text-3xl font-extrabold masked-copy texture-orange' style={{ backgroundImage: "url(" + `${texture_image.src}` + ")" }}>"Premium Braces and Invisalign&reg; Provider in Gurugram"</span>
                </div>
            </div>
            <div className='col-span-2 pl-12 pr-12 mt-0 text-2xl font-black leading-normal text-white bg-cyan-200/30 pb-36 md:pl-20 md:pr-20 md:text-2xl lg:text-4xl pt-36 md:pb-0 md:mt-32 lg:mt-36'>
                <p className='text-black'>Looking for the best orthodontic center in Gurugram?<br/>Look no further than <span className='text-orange-600'>Hapliv Dental Clinic</span></p>
                <div className='relative z-10 self-center mt-4 text-lg text-white bg-pink-700 border rounded-md md:hidden v-screen hover:bg-pink-500'>
                    <Link href={'tel:+919810471255'} className='text-center '><span className='self-center block p-5 text-center cursor-pointer h-fit'>Call & Book now</span></Link>
                </div>
                <div className='relative z-10 self-center mt-4 text-lg text-white bg-pink-700 border rounded-md v-screen hover:bg-pink-500'>
                    <Link href={'/appointment'} className='text-center '><span className='self-center block p-5 text-center cursor-pointer h-fit'>Book appointment</span></Link>
                </div>
            </div>
        </div>
    </>
    );
}

