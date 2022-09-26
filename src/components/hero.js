
import Footer from '../components/footer/footer';
import Header from '../components/header/navbar';
import Image from 'next/image';
import Head from 'next/head';
import bgImage from '../../public/assets/dr_achla_desk.jpg'
import invisalignImg from '../../public/assets/invisalign-bg.jpeg'
import brokenTooth from '../../public/assets/broken_tooth_dark.png'
import clinicBg from '../../public/assets/clinic.jpg'
import clinicEntranceBg from '../../public/assets/clinic_entrance.jpg'
import achlaimg from '../../public/assets/IMG_0129.jpg'
import { useEffect, useState } from 'react';
import getSlogan from 'slogans';

export default function Hero({ heading }) {

    const message = getSlogan();
    const [bg, setBg] = useState(clinicEntranceBg);
    const [slogan, setSlogan] = useState(message);
    const [indexCounter, setIndexCounter] = useState(0);
    const bgArray = [clinicEntranceBg, bgImage, clinicBg, invisalignImg];

    useEffect(() => {
        var id = setInterval(() => {
            setIndexCounter((indexCounter + 1) % bgArray.length);
            setBg(bgArray[(indexCounter + 1) % bgArray.length]);
        }, 5000)
        return () => clearInterval(id);
    });
    return (
        <>
            <div className='flex items-center justify-center h-screen mb-12 md:bg-fixed 
     bg-center bg-cover' style={{ backgroundImage: "url(" + `${bg.src}` + ")", backgroundSize: 'cover', backgroundClip: 'border-box' }}>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[10]'></div>
                <div className='absolute right-14 bottom-14 v-screen item-center p-5 text-white bg-black z-[2] mt-[10rem]'>
                    <p className='masked-copy texture-orange text-3xl font-extrabold'>{slogan}</p>
                    {/* <p className='py-5 text-xl'>{message}</p> */}
                    {/* <button className='px-8 py-2 border'></button> */}
                </div>
            </div>
        </>
    );
}

