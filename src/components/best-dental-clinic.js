import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FadeIn } from './animations';

export default function BestDentalClinicSection({ heading }) {
    return (<>
        <section className="px-4 py-16 bg-white md:py-20">
            <FadeIn>
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                            Our <span className="text-primary">Dental Services</span>
                        </h2>
                        <h3 className="relative clear-both col-span-6 p-4 text-base text-center text-gray-700 md:text-lg md:p-4">Your search for the best dentist near you ends with <span className="font-semibold text-primary">Hapliv Dental Clinic</span>.
                        We offer comfort-focused dental care tailored for kids, teens, and adults.</h3>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        <div className="grid-cols-1 p-6 bg-gray-50 border border-gray-100 rounded-card shadow-soft md:p-8">
                            <p className="text-base leading-relaxed text-gray-700 md:text-lg">Whether you're looking for braces, root canal treatment, implants, or specialized care for kids,
                                we offer comprehensive services to meet all your dental needs. Our dedicated team ensures that every patient receives the best care in a comfortable and friendly environment.
                                With advanced technology and personalized treatment plans, we're committed to enhancing your smile and oral health.</p>
                        </div>
                        <div className="grid-cols-1 p-6 bg-gray-50 border border-gray-100 rounded-card shadow-soft md:p-8">
                            <h2 className="p-4 mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Explore Our Expert Dental Treatments</h2>

                            <ul className="space-y-2 text-base font-semibold text-primary">
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Braces & Invisalign</span></li>
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Root Canal Treatment</span></li>
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Kids Dentistry</span></li>
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Laser Dentistry</span></li>
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Wisdom Tooth Extraction</span></li>
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Implants</span></li>
                                <li className="flex items-center pl-4"><FaArrowAltCircleRight className="inline-block mr-3" /><span>Veneers</span></li>
                            </ul>
                            <div className='relative z-10 self-center mt-6'>
                                <Link href={'/treatments'} className='inline-block px-6 py-3 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]'>
                                    Explore Treatments
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

    </>
    );
}

