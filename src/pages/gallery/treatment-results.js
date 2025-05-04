import Head from 'next/head';
// import { SliderData } from 'components/sliderData';
import ImageGallery from 'components/image-gallery/img-gallery';
import { useState, useEffect } from 'react';
export default function TreatmentResultsPage({ props }) {
   
        const [imagesList, setImagesList] = useState([])
        const [isLoading, setLoading] = useState(true)
        const baseAPIUrl = 'https://api.haplivdentalclinic.com';
        useEffect(() => {
            const endpoint = `${baseAPIUrl}/files/ls-media?key=treatment_results`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            fetch(endpoint, options).then(response => response.json()).then(data => {
                setImagesList( data.map((data, i) => { return {id: data.url, src: data.thumbnail, alt: data.name}}));
                setLoading(false);
            });
        }, []);

    return (
        <>
            <Head>
                <title>Treatment Results | Gallery | Hapliv Dental Clinic</title>
                <meta name="title" property="title" content="Treatment Results | Gallery | Hapliv Dental Clinic" />
                <meta 
                    name="description" 
                    property="description" 
                    content="Explore our treatment results gallery showcasing the transformative power of our dental procedures at Hapliv Dental Clinic. Discover real before and after photos of successful treatments." 
                />
                <meta 
                    name="keywords" 
                    property="keywords" 
                    content="Treatment Results, Dental Treatments, Before and After, Dental Gallery, Hapliv Dental Clinic, Invisalign, Orthodontics, Cosmetic Dentistry" 
                />

                {/* Open Graph / Social Sharing Tags */}
                <meta name="og:title" property="og:title" content="Treatment Results | Gallery | Hapliv Dental Clinic" />
                <meta 
                    name="og:description" 
                    property="og:description" 
                    content="View our gallery of treatment results and witness the transformative outcomes of our dental procedures at Hapliv Dental Clinic." 
                />
                <meta name="og:image" property="og:image" content="https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/22.jpg?updatedAt=1736620525345" />
                <meta name="og:type" property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" property="twitter:title" content="Treatment Results | Gallery | Hapliv Dental Clinic" />
                <meta 
                    name="twitter:description" 
                    property="twitter:description" 
                    content="Discover before and after photos of our successful dental treatments at Hapliv Dental Clinic. See real transformation stories." 
                />
                <meta name="twitter:image" property="twitter:image" content="https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/22.jpg?updatedAt=1736620525345" />

            </Head>
            {isLoading ? <p className="mt-40 text-4xl animate-bounce">Loading...</p> :  !imagesList ? <p className="mt-40 text-4xl">No profile data</p>: <div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-44'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-4xl font-bold'>Treatment Results</h1>
                    </div>
                    <ImageGallery images={imagesList}/>
                    {/* <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel> */}
                </div>
            </div>}
            
        </>
    );
};

