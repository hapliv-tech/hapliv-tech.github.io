import Head from 'next/head';
// import { SliderData } from 'components/sliderData';
import ImageGallery from 'components/image-gallery/img-gallery';
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
    return (
        <>
            <Head>
                <title>Dental Clinic Tour | Gallery | Hapliv Dental Clinic</title>
            </Head>
            <div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-44'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-4xl font-bold'>Clinic Tour</h1>
                    </div>
                    <ImageGallery images={images}/>
                    {/* <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel> */}
                </div>
            </div>
        </>
    );
};

