import Map from "components/map";
import Timings from "components/timetable";
import { MdLocationOn,MdPhone,MdEmail} from 'react-icons/md';
import { AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai';
import Link from 'next/link';

export default function Footer( { className}){
    return (<>
        <div className='grid items-center justify-center grid-cols-1 gap-10 p-4 mt-10 bg-center bg-cover md:grid-cols-2 lg:grid-cols-3 box' style={{ backgroundColor: '#0F4C5C'}}>
            <div>
                <Timings textColor='white !important'> </Timings>
            </div>
            <div className="text-white v-center h-center">
                <div className="left-0 right-0 justify-center block w-full">
                    <h2 className="p-4 text-3xl font-bold text-center text-white underline">Contact</h2>
                    <div className="mt-4 address">
                        <MdLocationOn className='inline-block m-2' width={20} height={20}></MdLocationOn>
                        <Link href={'https://www.google.com/maps/dir///@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en'}>
                            <a target='_blank'>Hapliv Dental Clinic, Shop 27, First Floor, North Block (Nathu's Tower), M3M Tee Point, Golf Course Ext. Rd, Sector 65, Gurugram, Haryana - 122018</a>
                        </Link>
                    </div>
                    <div className="mt-4 contact">
                        <MdPhone className='inline-block m-2' width={20} height={20}></MdPhone>
                        <Link href='tel:+919810471255'>+919810471255</Link>
                    </div>
                    <div className="mt-4 email">
                        <MdEmail className='inline-block m-2' width={20} height={20}></MdEmail>
                        <Link href='mailto:haplivdentalclinic@gmail.com'>haplivdentalclinic@gmail.com</Link>
                    </div>

                    <div className="mt-4 twitter">
                        <AiOutlineTwitter className='inline-block m-2' width={20} height={20}></AiOutlineTwitter>
                        <Link href='https://twitter.com/HaplivDental'>@HaplivDental</Link>
                    </div>

                    <div className="mt-4 instagram">
                        <AiFillInstagram className='inline-block m-2' width={20} height={20}></AiFillInstagram>
                        <Link href='https://www.instagram.com/hapliv_dental_clinic'>@hapliv_dental_clinc</Link>
                    </div>
                    
                </div>
            </div>
            <Map></Map>
        </div>
        <div className='bottom-0 flex items-center justify-center w-full p-4 text-white bg-black bg-center bg-cover opacity-90' style={{ backgroundColor: '#0F4C5C'}}>
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