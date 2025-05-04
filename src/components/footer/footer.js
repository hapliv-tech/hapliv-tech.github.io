import Map from "components/map";
import Timings from "components/timetable";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineFacebook, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ className }) {
    return (<>
        <div className='grid items-center justify-center grid-cols-1 gap-10 p-4 mt-10 bg-black bg-center bg-cover md:grid-cols-2 lg:grid-cols-3 box'>
            <div className="self-start text-white">
                <div className="left-0 right-0 justify-center block w-full">
                    <h2 className="p-4 text-3xl font-bold text-center text-white">Quick Links</h2>
                    <div className="p-4 links md:p-8 border-b-4 border-[#C4421A]">
                        <Link href={'/'}>
                            <a className="block p-2 hover:underline">Home</a>
                        </Link>
                        <Link href={'/about-us'}>
                            <a className="block p-2 hover:underline">About Us</a>
                        </Link>
                        <Link href={'/invisalign'}>
                            <a className="block p-2 hover:underline">Invisalign</a>
                        </Link>
                        <Link href={'/blogs'}>
                            <a className="block p-2 hover:underline">Dental Blogs</a>
                        </Link>
                        <Link href={'/faqs'}>
                            <a className="block p-2 hover:underline">Frequently Asked Questions (FAQs)</a>
                        </Link>
                        <Link href={'/technology'}>
                            <a className="block p-2 hover:underline">Technologies we use</a>
                        </Link>
                        <Link href={'/treatments'}>
                            <a className="block p-2 hover:underline">Treatments</a>
                        </Link>
                        <Link href={'/gallery'}>
                            <a className="block p-2 hover:underline">Photo Gallery</a>
                        </Link>
                    </div>

                    <div className="mt-2 text-right contact">
                        <MdPhone className='inline-block m-2' width={20} height={20}></MdPhone>
                        <Link href='tel:+919810471255'><a rel="nofollow" className="ml-2">+919810471255</a></Link>
                        <span className="ml-2"> | </span>
                        <Link href='tel:+911244991640'><a rel="nofollow" className="ml-2">0124-4991640</a></Link>
                    </div>

                    <div className="mt-2 text-right twitter">
                        <AiOutlineTwitter className='inline-block m-2' width={20} height={20}></AiOutlineTwitter>
                        <Link href='https://twitter.com/HaplivDental'><a rel='nofollow' target="_blank">@HaplivDental</a></Link>
                        <span className="ml-2"> | </span>
                        <MdEmail className='inline-block m-2' width={20} height={20}></MdEmail>
                        <Link href='mailto:haplivdentalclinic@gmail.com'><a rel='nofollow'>haplivdentalclinic@gmail.com</a></Link>
                    </div>

                    <div className="mt-2 text-right fb">
                        <AiFillFacebook className='inline-block m-2' width={20} height={20}></AiFillFacebook>
                        <Link href='https://www.facebook.com/haplivdentalclinic/'><a rel='nofollow' target="_blank">haplivdentalclinic</a></Link>
                        <span className="ml-2"> | </span>
                        <AiFillInstagram className='inline-block m-2' width={20} height={20}></AiFillInstagram>
                        <Link href='https://www.instagram.com/hapliv_dental_clinic'><a rel='nofollow' target="_blank">hapliv_dental_clinic</a></Link>
                    </div>
                </div>
            </div>

            <div className="self-start text-white">
                <div className="left-0 right-0 justify-center block w-full">
                    <h2 className="p-4 text-3xl font-bold text-center text-white">Contact our clinic in Gurugram</h2>
                    {/* <div className="flex justify-center">
                        <Image alt='Hapliv Dental Clinic located at M3M Tee Point' src={'/assets/m3m_teepoint.webp'} width={'240'} height={'320'} layout="intrinsic" />
                    </div> */}
                    <div className="pb-2 mt-4 text-lg text-right address">
                        <MdLocationOn className='inline-block m-2 text-[#C4421A]' width={20} height={20}></MdLocationOn>
                        <Link href={'https://www.google.com/maps/dir/@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en'}>
                            <a target='_blank' rel="nofollow">Hapliv Dental Clinic, Shop 27, First Floor, North Block, M3M Tee Point, Golf Course Ext. Rd, Sector 65, Gurugram, Haryana - 122018</a>
                        </Link>
                        <Map height={240} location_address={'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7015.8414256647975!2d77.0806445!3d28.4518064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1980766a7633%3A0x9e9d65aada17b9a5!2sHapliv%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1647377839966!5m2!1sen!2sin'}></Map>
                        <div className="timing-gurgaon">
                            <Timings textColor='white' locationKey={'gurgaon-sec-65'}></Timings>
                        </div>
                    </div>

                </div>
            </div>
            <div className="self-start pr-8 text-white">

                <div className="left-0 right-0 justify-center block w-full">
                    <h2 className="p-4 text-3xl font-bold text-center text-white">Contact our clinic in West Delhi</h2>
                    {/* <div className="flex justify-center">
                        <Image alt='Hapliv Dental Clinic located at M3M Tee Point' src={'/assets/m3m_teepoint.webp'} width={'240'} height={'320'} layout="intrinsic" />
                    </div> */}
                    <div className="pb-2 mt-4 text-lg text-right address">
                        <MdLocationOn className='inline-block m-2 text-[#C4421A]' width={20} height={20}></MdLocationOn>
                        <Link href={"https://www.google.com/maps/dir/@28.6225073,76.9564625,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d051fdd5a0e61:0xf08aa8b6f6af9564!2m2!1d77.0388639!2d28.6225322!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"}>
                            <a target='_blank' rel="nofollow">Hapliv Dental Clinic, Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi, Delhi, 110059</a>
                        </Link>

                          <Map height={240} location_address={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.819650539252!2d77.03858084360766!3d28.62275894787752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051fdd5a0e61%3A0xf08aa8b6f6af9564!2sHapliv%20Dental%20Clinic%20%3A%20Center%20for%20Braces%7C%20Invisalign%20%7C%20General%20Dentistry%20%7C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1740830678505!5m2!1sen!2sin'}></Map>
                        <div className="timing-west-delhi">
                            <Timings textColor='white' locationKey={'west-delhi'}></Timings>
                        </div>
                    </div>
                </div>


            </div>


        </div>
        <div className='bottom-0 flex items-center justify-center w-full p-4 text-white bg-black bg-center bg-cover opacity-90'>
            <footer>&copy; 2025 Hapliv Dental Clinic</footer>
        </div>
    </>
    );
}