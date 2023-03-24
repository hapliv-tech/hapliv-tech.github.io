import Map from "components/map";
import Timings from "components/timetable";
export default function Footer( { className}){
    return (<>
        <div className='grid items-center justify-center grid-cols-1 gap-10 p-4 mt-10 bg-center bg-cover md:grid-cols-2 lg:grid-cols-3' style={{ backgroundColor: '#0F4C5C'}}>
            <div>
                <Timings textColor='white !important'> </Timings>
            </div>
            <div className="text-white v-center h-center">
                <div className="left-0 right-0 justify-center block w-full">
                    <h2 className="p-4 text-3xl font-bold text-center text-white underline">Address</h2>
                    Hapliv Dental Clinic, <br/>Shop 27, First Floor, North Block (Nathu's Tower), M3M Tee Point, Golf Course Ext. Rd, Sector 65, Gurugram, Haryana - 122018
                </div>
            </div>
            <Map/>
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