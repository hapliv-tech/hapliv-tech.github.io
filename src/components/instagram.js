import React from 'react';
import InstagramImg from './instagramimg';
import braces1 from '../../public/assets/braces.jpg';
import rct1 from '../../public/assets/treatment/rct/abscessed-tooth-254x300.jpg';
import rct2 from '../../public/assets/treatment/rct/Healed-Tooth-Following-Root-Canal-300x273.jpg';
import dental_model from '../../public/assets/dental_model.jpg';
import hand_mirror from '../../public/assets/hand-mirror.jpg';

export default function Instagram(){
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold'> Follow us on Instagram</p>
            <p className='pb-4'>@hapliv_dental_clinic</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImg={braces1}/>
                <InstagramImg socialImg={rct1}/>
                <InstagramImg socialImg={rct2}/>
                <InstagramImg socialImg={dental_model}/>
                <InstagramImg socialImg={hand_mirror}/>
            </div>
    
        </div>
    )
}