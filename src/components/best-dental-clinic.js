
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
export default function BestDentalClinicSection({ heading }) {

    return (<>
        <div className="bg-[#5A09A4] bg-gradient-to-b from-[#5A09A4] to-[#000000]
     p-6 items-center justify-center">
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                    Our <span className="text-orange-500">Dental Services</span>
                </h2>
                <div className="w-20 h-1 mx-auto mb-6 bg-orange-500"></div>
                 <h3 className="relative clear-both col-span-6 p-4 text-sm text-center text-white md:text-sm md:p-4">Your search for the best dentist near you ends with <span className="text-[#FF861D]">Hapliv Dental Clinic</span>.
                We offer painless dental treatments tailored for kids, teens, and adults.</h3>
            </div>
            <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid-cols-1 p-4 font-bold text-white md:p-4 md:text-xl">
                   
                    <p className="p-4 text-base text-white md:text-lg font-extralight">Whether you're looking for braces, root canal treatment, implants, or specialized care for kids,
                        we offer comprehensive services to meet all your dental needs. Our dedicated team ensures that every patient receives the best care in a comfortable and friendly environment.
                        With advanced technology and personalized treatment plans, we're committed to enhancing your smile and oral health.</p>
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

