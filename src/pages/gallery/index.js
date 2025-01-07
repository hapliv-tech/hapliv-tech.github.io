import Head from 'next/head';
import ImageGallery from 'components/image-gallery/img-gallery';
export default function GalleryPage({ props }) {
    const images = [
    { id: 'our-patients', link:'gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/Patients/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patients', caption:'Our Patients' },
    { id: 'hapliv-clinic-tour', link:'gallery/dental-clinic-tour', src: 'https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1710439289110', alt: 'Hapliv Dental Clinic Tour,Sector 65 Gurgaon',caption:'Clinic Tour'},
    { id: 'hapliv-treatment-results', link:'gallery/treatment-results', src: 'https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/hapliv-patient21.jpeg?updatedAt=1736269834863', alt: 'Treatment Results',caption:'Treatment Results'},
];

    return (
        <>
            <Head>
                <title>Photo Gallery | Hapliv Dental Clinic</title>
            </Head>
            <div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-44'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Photo Gallery</h1>
                    </div>
                    <ImageGallery images={images}/>
                    {/* <Carousel images={[{id:'caro-1', src: '/assets/invisalign-gallery/invisalign-pt1.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-2', src: '/assets/invisalign-gallery/invisalign-pt3.webp', alt: 'Invisalign Deep Bite case' }, {id:'caro-3', src: '/assets/invisalign-gallery/invisalign-pt6.webp', alt: 'Invisalign Crowding before and after result' }, { id:'caro-3',src: '/assets/invisalign-gallery/invisalign-pt7.webp', alt: 'Invisalign Open Bite result' }]}></Carousel> */}
                </div>
            </div>
        </>
    );
}  