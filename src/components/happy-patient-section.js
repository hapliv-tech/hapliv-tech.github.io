import Image from 'next/legacy/image';
import ImageGallery from 'components/image-gallery/img-gallery';
export default function HappyPatientSection({ heading }) {
    const images = [
        { id: 'caro-1', link:'/gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/patient15.jpeg?updatedAt=1689617021775&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 1' },
        { id: 'caro-2', link:'/gallery/our-patients',src: 'https://ik.imagekit.io/thwkz9dxk/patient14.jpeg?updatedAt=1689617021052&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 2' },
        { id: 'caro-3',link:'/gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 3' },
        { id: 'caro-4', link:'/gallery/our-patients',src: 'https://ik.imagekit.io/thwkz9dxk/patient7.jpg?updatedAt=1689617020460&tr=w-1080%2Ch-1080%2Cfo-auto', alt: 'Our Happy Patient 4' }
    ];
    return (<>
        <section className='px-4 py-16 text-center text-white bg-primary-dark md:py-20'>
            <div className='container mx-auto max-w-7xl'>
            {/* <h2 className='text-3xl font-extrabold text-white md:text-4xl'>Our Happy Patients</h2> */}
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                        Our <span className="text-accent-light">Happy Patients</span>
                    </h2>
            <div className="p-4">
                <h3 className="relative clear-both col-span-6 p-4 text-base leading-relaxed text-center text-white/90 md:text-lg md:p-4">Browse real smile transformations, clinic moments, and treatment journeys from Hapliv Dental Clinic.</h3>
            </div>
            <ImageGallery images={images} className='max-w-2xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'/>
            </div>
        </section>
    </>
    );
}

