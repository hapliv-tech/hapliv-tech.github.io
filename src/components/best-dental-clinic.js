
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
export default function BestDentalClinicSection({ heading }) {

    return (<>
        <div className="bg-[#5A09A4] bg-gradient-to-b from-[#5A09A4] to-[#000000]
     p-6 items-center justify-center">
            <div className='flex justify-center'>
                {/* <Image src='../assets/dots-16.png' height={64} width={64} className='object-contain col-span-1'/> */}
                <h2 className="relative clear-none col-span-6 text-3xl font-extrabold text-center text-white md:text-4xl">Best Dentist in Gurgaon for Braces, Invisalign, RCT & More</h2>
                {/* <Image src='../assets/dots-16.png' height={64} width={64} className='float-right object-contain'/> */}
            </div>

            <div className="p-4">
                <h3 className="relative clear-both col-span-6 p-4 text-sm text-center text-white md:text-sm md:p-4">Your search for the best dentist near you ends with <span className="text-[#FF861D]">Hapliv Dental Clinic</span>.
                We offer painless dental treatments tailored for kids, teens, and adults.</h3>
            </div>
            {/* <div>

                <h3> <p className="p-4 text-base text-white md:text-lg font-extralight">Your search for the best dentist near you ends with <span className="text-[#FF861D]">Hapliv Dental Clinic</span>.
                We offer painless dental treatments tailored for kids, teens, and adults.</p></h3>
            </div> */}
            <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid-cols-1 p-4 font-bold text-white md:p-4 md:text-xl">
                   
                    <p className="p-4 text-base text-white md:text-lg font-extralight">Whether you're looking for braces, root canal treatment, implants, or specialized care for kids,
                        we offer comprehensive services to meet all your dental needs. Our dedicated team ensures that every patient receives the best care in a comfortable and friendly environment.
                        With advanced technology and personalized treatment plans, we’re committed to enhancing your smile and oral health.</p>
                    {/* <div className='relative z-10 self-center mt-4 text-lg text-[#301B49] bg-white rounded-full v-screen hover:bg-[#c59ef6]'>
                        <Link href={'/appointment'} className='text-center'><span className='self-center block p-5 text-center cursor-pointer h-fit'>Schedule appointment now</span></Link>
                    </div> */}
                </div>
                <div className="grid-cols-1 p-4 font-bold text-white md:p-4 md:text-xl">
                    <h2 className="p-4 text-xl font-bold text-white">Explore Our Expert Dental Treatments</h2>

                    <ul className="text-[#FF861D] text-lg font-black">
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Braces & Invisalign</span></li>
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Root Canal Treatment</span></li>
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Kids Dentistry</span></li>
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Laser Dentistry</span></li>
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Wisdom Tooth Extraction</span></li>
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Implants</span></li>
                        <li className="pl-4 align-middle"><FaArrowAltCircleRight className="inline-block" /><span className="inline-block pl-4">Veneers</span></li>
                    </ul>
                    <div className='relative z-10 self-center mt-4 text-lg text-white rounded-full v-screen hover:underline'>
                        <Link href={'/treatments'}><span className='block p-5 cursor-pointer h-fit'>More &gt;&gt;</span></Link>
                    </div>
                </div>

            </div>

        </div>

    </>
    );
}

