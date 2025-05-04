import Head from 'next/head';
// import { SliderData } from 'components/sliderData';
import ImageGallery from 'components/image-gallery/img-gallery';
import { useState, useEffect } from 'react';
export default function ClinicTourPage({ props }) {
    const images = [
    { id: 'hapliv-clinic-tour-1', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic1.jpeg?updatedAt=1710439289110', alt: 'Dental Clinic Tour, M3M Teepoint, Sector 65 Gurgaon' },
    { id: 'hapliv-clinic-tour-2', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1710439289110', alt: 'Hapliv Dental Clinic Tour,Sector 65 Gurgaon' },
    { id: 'hapliv-clinic-tour-3', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic3.jpeg?updatedAt=1710439289110', alt: 'Hapliv Dental Clinic Tour, M3M Teepoint Gurgaon' },
    { id: 'hapliv-clinic-tour-4', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic4.jpeg?updatedAt=1710439289110', alt: 'Dental Clinic Tour, M3M Teepoint Gurgaon' },
    { id: 'hapliv-clinic-tour-5', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic5.jpeg?updatedAt=1710439289110', alt: 'Dental Clinic Tour, Golf Course Extension, Gurgaon' },
    { id: 'hapliv-clinic-tour-6', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic6.jpeg?updatedAt=1710439289110', alt: 'Dental Clinic near Trump Tower Gurgaon' },
    { id: 'hapliv-clinic-tour-7', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic7.jpeg?updatedAt=1710439289110', alt: 'Dental Clinic near Trump Tower Gurgaon' },
    { id: 'hapliv-clinic-tour-8', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic8.jpeg?updatedAt=1710439289110', alt: 'Dental Clinic near Trump Tower Gurgaon' },
];

        const [imagesList, setImagesList] = useState([])
        const [isLoading, setLoading] = useState(true)
        const baseAPIUrl = 'https://api.haplivdentalclinic.com';
        useEffect(() => {
            const endpoint = `${baseAPIUrl}/files/ls-media?key=clinic_tour`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            fetch(endpoint, options).then(response => response.json()).then(data => {
                console.log(data);
                setImagesList( data.map((data, i) => { return {id: data.url, src: data.thumbnail, alt: data.name}}));
                setLoading(false);
            });
        }, []);
    

    return (
        <>
            <Head>
                <title>Dental Clinic Tour | Gallery | Hapliv Dental Clinic</title>
                <meta name="title" content="Dental Clinic Tour | Gallery | Hapliv Dental Clinic" />
                <meta
                    name="description"
                    content="Explore our state-of-the-art dental clinic through our interactive gallery. Visit Hapliv Dental Clinic in Gurgaon and West Delhi to experience modern dental care in a cutting-edge environment."
                />
                <meta
                    name="keywords"
                    content="Dental Clinic Tour, Dental Gallery, Hapliv Dental Clinic, Dental Clinic Gurgaon, Dental Clinic West Delhi, Modern Dental Clinic, Clinic Images, Virtual Tour"
                />
            
                <meta property="og:image" name="og:image" content="https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1736269714046" />
                {/* Open Graph / Social Sharing Tags with both name and property attributes */}
                <meta name="og:title" property="og:title" content="Dental Clinic Tour | Gallery | Hapliv Dental Clinic" />
                <meta
                    name="og:description"
                    property="og:description"
                    content="Take a virtual tour of Hapliv Dental Clinic. Our gallery showcases modern facilities in Gurgaon and West Delhi, where advanced dental care meets comfort."
                />
                
                <meta name="og:type" property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" property="twitter:title" content="Dental Clinic Tour | Gallery | Hapliv Dental Clinic" />
                <meta
                    name="twitter:description"
                    property="twitter:description"
                    content="Explore our modern dental clinic facilities in Gurgaon and West Delhi with our interactive gallery. Discover the perfect blend of advanced technology and comfort."
                />
                <meta name="twitter:image" property="twitter:image" content="https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1736269714046" />
            </Head>
            {isLoading ? <p className="mt-40 text-4xl animate-bounce">Loading...</p> :  !imagesList ? <p className="mt-40 text-4xl">No profile data</p>:<div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-40'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-4xl font-bold'>Clinic Tour</h1>
                    </div>
                    <ImageGallery images={imagesList}/>
                    {/* <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel> */}
                </div>
            </div>}
        </>
    );
};

