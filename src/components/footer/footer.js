export default function Footer( { className}){
    return (<>
        <div className='flex items-center justify-center bg-center bg-cover p-4 bg-black opacity-70 text-white bottom-0 w-full'>
            <footer>&copy; 2022 Hapliv Dental Clinic</footer>
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