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
    
        if (isLoading) return <p className="mt-40 text-4xl animate-bounce">Loading...</p>
        if (!imagesList) return <p className="mt-40 text-4xl">No profile data</p>

    return (
        <>
            <Head>
                <title>Treatment Results | Gallery | Hapliv Dental Clinic</title>
            </Head>
            <div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-44'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-4xl font-bold'>Treatment Results</h1>
                    </div>
                    <ImageGallery images={imagesList}/>
                    {/* <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel> */}
                </div>
            </div>
        </>
    );
};

