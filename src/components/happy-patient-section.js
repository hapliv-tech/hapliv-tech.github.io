import Image from 'next/image';
import ImageGallery from 'components/image-gallery/img-gallery';
export default function HappyPatientSection({ heading }) {
    const images = [
        { id: 'caro-1', link:'/gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/patient15.jpeg?updatedAt=1689617021775&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 1' },
        { id: 'caro-2', link:'/gallery/our-patients',src: 'https://ik.imagekit.io/thwkz9dxk/patient14.jpeg?updatedAt=1689617021052&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 2' },
        { id: 'caro-3',link:'/gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 3' },
        { id: 'caro-4', link:'/gallery/our-patients',src: 'https://ik.imagekit.io/thwkz9dxk/patient7.jpg?updatedAt=1689617020460&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 4' }
    ];
    return (<>
        <div className='text-center bg-[#DF8142] p-6'>
            <h2 className='text-3xl font-extrabold text-white md:text-4xl'>OUR HAPPY PATIENTS</h2>
            <div className="p-4">
                <h3 className="relative clear-both col-span-6 p-4 text-sm text-center text-white md:text-sm md:p-4">Browse through our gallery to explore the results of our patients' dental transformations, a tour of our clinic, and much more. See firsthand the quality care and successful treatments we provide at Hapliv Dental Clinic.</h3>
            </div>
            <ImageGallery images={images} className='max-w-2xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'/>
        </div>
    </>
    );
}

