import Head from 'next/head';
// import { SliderData } from 'components/sliderData';
import ImageGallery from 'components/image-gallery/img-gallery';
export default function GalleryPage({ props }) {
    const images = [
    { id: 'caro-1', src: 'https://ik.imagekit.io/thwkz9dxk/patient15.jpeg?updatedAt=1689617021775&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 1' },
    { id: 'caro-2', src: 'https://ik.imagekit.io/thwkz9dxk/patient14.jpeg?updatedAt=1689617021052&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 2' },
    { id: 'caro-3', src: 'https://ik.imagekit.io/thwkz9dxk/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 3' },
    { id: 'caro-4', src: 'https://ik.imagekit.io/thwkz9dxk/patient7.jpg?updatedAt=1689617020460&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 4' },
    { id: 'caro-5', src: 'https://ik.imagekit.io/thwkz9dxk/patient1.jpg?updatedAt=1689617664417', alt: 'Out Happy Patient 5' },
    { id: 'caro-6', src: 'https://ik.imagekit.io/thwkz9dxk/patient10.jpeg?updatedAt=1689617020289&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 6' },
    { id: 'caro-7', src: 'https://ik.imagekit.io/thwkz9dxk/patient5.JPG?updatedAt=1689617020285&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 7' },
    { id: 'caro-8', src: 'https://ik.imagekit.io/thwkz9dxk/patient3.jpg?updatedAt=1689617020239&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 8' },
    { id: 'caro-9', src: 'https://ik.imagekit.io/thwkz9dxk/patient2.jpg?updatedAt=1689617020239&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 9' },
    { id: 'caro-10', src: 'https://ik.imagekit.io/thwkz9dxk/patient13.jpeg?updatedAt=1689617019783&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 10' },
    { id: 'caro-11', src: 'https://ik.imagekit.io/thwkz9dxk/patient9.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 11' },
    { id: 'caro-12', src: 'https://ik.imagekit.io/thwkz9dxk/patient8.JPG?updatedAt=1689617017859&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 12' },
    { id: 'caro-13', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient16.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 13' },
    { id: 'caro-14', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient17.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 14' },
    { id: 'caro-15', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient18.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 15' },
    { id: 'caro-16', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient19.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 16' },
    { id: 'caro-17', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient20.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 17' },
    { id: 'caro-18', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient21.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 18' },
    { id: 'caro-19', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient22.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 19' },
    { id: 'caro-20', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient23.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 20' },
    { id: 'caro-21', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient24.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 21' },
    { id: 'caro-22', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient25.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 22' },
    { id: 'caro-23', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient26.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 23' },
    { id: 'caro-24', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient27.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 24' },
    { id: 'caro-25', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient28.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 25' },
    { id: 'caro-26', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient29.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 26' },
    { id: 'caro-27', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient30.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 27' },
    { id: 'caro-28', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient31.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 28' },
    { id: 'caro-29', src: 'https://ik.imagekit.io/thwkz9dxk/hapliv-patient32.jpeg?updatedAt=1689617018532&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Out Happy Patient 29' },    

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
};

