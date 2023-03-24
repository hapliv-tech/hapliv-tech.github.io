
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
        backgroundBlendMode: 'overlay',
        zIndex: '-10'
    }, {
        backgroundImage: "url(" + `${invisImg.src}` + "), url(" + `${invisalignImg.src}` + ")",
        backgroundClip: 'content-box,content-box',
        backgrounRepeat: 'no-repeat,no-repeat',
        backgroundSize: 'cover,50%',
        backgroundPosition: 'center,50% 85%',
        backgroundBlendMode: 'overlay',
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
            <div className='items-center justify-center h-screen col-span-5 bg-no-repeat' style={stle}>

                <div className='top-0 left-0 right-0 bottom-0 bg-cyan-900/20 z-[10]  h-screen'>
                </div>

                <div className={'absolute right-14 bottom-14 v-screen item-center p-5 text-white bg-black z-[2] mt-[10rem] ' + `${indexCounter % stylesPage.length == 0 ? 'hidden' : ''}`}>
                    <span className='text-3xl font-extrabold masked-copy texture-orange' style={{ backgroundImage: "url(" + `${texture_image.src}` + ")" }}>"Premium Braces and Invisalign<sup className='text-lg font-extrabold masked-copy texture-orange' style={{ backgroundImage: "url(" + `${texture_image.src}` + ")" }}>&reg;</sup> Provider in Gurugram"</span>
                    <p className='py-5 text-xl'></p>
                </div>
            </div>
            <div className='absolute right-14 bottom-14 v-screen self-center md:w-1/5 bg-[#0F4C5C] text-white border z-10 mt-[10rem] block'>
                <Link href={'tel:+919810471255'} className='text-center' ><span className='block w-full h-full p-5 text-center cursor-pointer'>Call & Book</span></Link>
            </div>


        </div>
    </>
    );
}

