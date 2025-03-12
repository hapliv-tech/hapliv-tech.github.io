import Head from 'next/head';
// import { SliderData } from 'components/sliderData';
import ImageGallery from 'components/image-gallery/img-gallery';
import { useState, useEffect } from 'react';
export default function OurPatientsGalleryPage({ props }) {
    const images = [
        { id: 'caro-1', src: 'https://ik.imagekit.io/thwkz9dxk/patient15.jpeg?updatedAt=1689617021775&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 1' },
        { id: 'caro-2', src: 'https://ik.imagekit.io/thwkz9dxk/patient14.jpeg?updatedAt=1689617021052&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 2' },
        { id: 'caro-3', src: 'https://ik.imagekit.io/thwkz9dxk/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 3' },
        { id: 'caro-4', src: 'https://ik.imagekit.io/thwkz9dxk/patient7.jpg?updatedAt=1689617020460&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 4' },
        { id: 'caro-5', src: 'https://ik.imagekit.io/thwkz9dxk/patient1.jpg?updatedAt=1689617664417&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 5' },
        { id: 'caro-6', src: 'https://ik.imagekit.io/thwkz9dxk/patient10.jpeg?updatedAt=1689617020289&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 6' },
        { id: 'caro-7', src: 'https://ik.imagekit.io/thwkz9dxk/patient5.JPG?updatedAt=1689617020285&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 7' },
        { id: 'caro-8', src: 'https://ik.imagekit.io/thwkz9dxk/patient3.jpg?updatedAt=1689617020239&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 8' },
        { id: 'caro-9', src: 'https://ik.imagekit.io/thwkz9dxk/patient2.jpg?updatedAt=1689617020239&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 9' },
        { id: 'caro-10', src: 'https://ik.imagekit.io/thwkz9dxk/patient13.jpeg?updatedAt=1689617019783&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 10' },
        { id: 'caro-11', src: 'https://ik.imagekit.io/thwkz9dxk/patient9.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 11' },
        { id: 'caro-12', src: 'https://ik.imagekit.io/thwkz9dxk/patient8.JPG?updatedAt=1689617017859&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 12' },
        { id: 'caro-13', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient16.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 13' },
        { id: 'caro-14', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient17.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 14' },
        { id: 'caro-15', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient18.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 15' },
        { id: 'caro-16', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient19.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 16' },
        { id: 'caro-17', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient20.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 17' },
        { id: 'caro-18', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient21.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 18' },
        { id: 'caro-19', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient22.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 19' },
        { id: 'caro-20', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient23.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 20' },
        { id: 'caro-21', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient24.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 21' },
        { id: 'caro-22', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient25.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 22' },
        { id: 'caro-23', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient26.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 23' },
        { id: 'caro-24', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient27.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 24' },
        { id: 'caro-25', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient28.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 25' },
        { id: 'caro-26', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient29.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 26' },
        { id: 'caro-27', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient30.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 27' },
        { id: 'caro-28', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient31.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 28' },
        { id: 'caro-29', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient32.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patient 29' },

    ];

    const [imagesList, setImagesList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const baseAPIUrl = 'https://api.haplivdentalclinic.com';
        useEffect(() => {
            const endpoint = `${baseAPIUrl}/files/ls-media?key=patients`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
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
                <title>Our Patients | Gallery | Hapliv Dental Clinic</title>
                 {/* Basic Meta Tags */}
                <meta name="title" property="title" content="Our Patients | Gallery | Hapliv Dental Clinic" />
                <meta
                    name="description"
                    property="description"
                    content="View our patients' gallery showcasing their smiles and the results of our dental treatments at Hapliv Dental Clinic. Our gallery features happy patients from our clinics in Gurgaon and West Delhi."
                />
                <meta
                    name="keywords"
                    property="keywords"
                    content="Our Patients, Dental Gallery, Patient Smiles, Hapliv Dental Clinic, Dental Clinic Gurgaon, Dental Clinic West Delhi, Dental Treatments, Patient Success"
                />
                {/* Open Graph / Social Sharing Tags */}
                <meta name="og:title" property="og:title" content="Our Patients | Gallery | Hapliv Dental Clinic" />
                <meta
                    name="og:description"
                    property="og:description"
                    content="Explore our patients' gallery and witness the success stories of dental treatments at Hapliv Dental Clinic. Our patients' smiles speak volumes."
                />
                <meta name="og:image" property="og:image" content="https://ik.imagekit.io/thwkz9dxk/Patients/1b14efe7-9e1c-40d1-aac7-021e847e7d72.jpeg?updatedAt=1736269385386" />
                <meta name="og:type" property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" property="twitter:title" content="Our Patients | Gallery | Hapliv Dental Clinic" />
                <meta
                    name="twitter:description"
                    property="twitter:description"
                    content="Browse our gallery of happy patients at Hapliv Dental Clinic, showcasing our expertise in delivering exceptional dental care."
                />
                <meta name="twitter:image" property="twitter:image" content="https://ik.imagekit.io/thwkz9dxk/Patients/1b14efe7-9e1c-40d1-aac7-021e847e7d72.jpeg?updatedAt=1736269385386" />

            </Head>
            {isLoading ? <p className="mt-40 text-4xl animate-bounce">Loading...</p> :  !imagesList ? <p className="mt-40 text-4xl">No profile data</p>:<div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-44'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Our Patients</h1>
                    </div>
                    <ImageGallery images={imagesList} />
                    {/* <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel> */}
                </div>
            </div>}
        </>
    );
};

