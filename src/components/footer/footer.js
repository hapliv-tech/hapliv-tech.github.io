import Map from "components/map";
import Timings from "components/timetable";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineFacebook, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ className }) {
    return (<>
        <div className='grid items-center justify-center grid-cols-1 gap-10 p-4 mt-10 bg-center bg-cover md:grid-cols-2 lg:grid-cols-3 box' style={{ backgroundColor: '#0F4C5C' }}>
            <div className="text-white">
                <Timings textColor='white !important'> </Timings>
            </div>
            <div className="text-white v-center h-center">
                <div className="left-0 right-0 justify-center block w-full">
                    <h2 className="p-4 text-3xl font-bold text-center text-white underline">Contact Us</h2>
                    <div className="flex justify-center">
                        <Image alt='Hapliv Dental Clinic located at M3M Tee Point' src={'/assets/m3m_teepoint.webp'} width={'240'} height={'320'} layout="intrinsic" />
                    </div>
                    <div className="pb-2 mt-4 text-lg text-right border-b-4 border-[#C4421A] address">
                        <MdLocationOn className='inline-block m-2 text-[#C4421A]' width={20} height={20}></MdLocationOn>
                        <Link href={'https://www.google.com/maps/dir/@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en'}>
                            <a target='_blank' rel="nofollow">Hapliv Dental Clinic, Shop 27, First Floor, North Block, M3M Tee Point, Golf Course Ext. Rd, Sector 65, Gurugram, Haryana - 122018</a>
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
            
            <Map></Map>
        </div>
        <div className='bottom-0 flex items-center justify-center w-full p-4 text-white bg-black bg-center bg-cover opacity-90' style={{ backgroundColor: '#0F4C5C' }}>
            <footer>&copy; 2023 Hapliv Dental Clinic</footer>
        </div>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SK797L2YVG"></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-SK797L2YVG', {
                      page_path: window.location.pathname,
                    });
                  `,
            }}
        />
    </>
    );
}