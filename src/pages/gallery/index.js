import Head from 'next/head';
import ImageGallery from 'components/image-gallery/img-gallery';
export default function GalleryPage({ props }) {
    const images = [
    { id: 'our-patients', link:'gallery/our-patients', src: 'https://ik.imagekit.io/thwkz9dxk/Patients/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-custom', alt: 'Our Happy Patients', caption:'Our Patients' },
    { id: 'hapliv-clinic-tour', link:'gallery/dental-clinic-tour', src: 'https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1710439289110', alt: 'Hapliv Dental Clinic Tour,Sector 65 Gurgaon',caption:'Clinic Tour'},
    { id: 'hapliv-treatment-results', link:'gallery/treatment-results', src: 'https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/hapliv-patient21.jpeg?updatedAt=1736269834863', alt: 'Treatment Results',caption:'Treatment Results'},
    { id: 'hapliv-oral-health-awareness-camp', link:'gallery/oral-health-awareness-camp', src: 'https://ik.imagekit.io/thwkz9dxk/Camp/hapliv-dental-camp-at-isle-de-royale-gurgaon8.jpeg?tr=n-ik_ml_thumbnail%2Cw-1080%2Ch-1080%2Cfo-custom&updatedAt=1736269834863', alt: 'Oral Health Awareness Camp at Isle De Royale, Gurgaon',caption:'Oral Health Awareness Camp'},
];

    return (
        <>
            <Head>
                <title>Photo Gallery | Hapliv Dental Clinic</title>
                <meta name="title" property="title" content="Photo Gallery | Hapliv Dental Clinic" />
                <meta 
                    name="description" 
                    property="description" 
                    content="Explore our extensive photo gallery featuring our happy patients, innovative clinic tours, effective treatment results, and oral health events at Hapliv Dental Clinic in Gurgaon and West Delhi." 
                />
                <meta 
                    name="keywords" 
                    property="keywords" 
                    content="Photo Gallery, Dental Gallery, Hapliv Dental Clinic, Our Patients, Clinic Tour, Treatment Results, Oral Health, Gurgaon, West Delhi" 
                />
        

                {/* Open Graph / Social Sharing Tags */}
                <meta name="og:title" property="og:title" content="Photo Gallery | Hapliv Dental Clinic" />
                <meta 
                    name="og:description" 
                    property="og:description" 
                    content="Discover our photo gallery featuring real patient smiles, modern clinic tours, and stunning treatment results at Hapliv Dental Clinic." 
                />
    
                <meta name="og:image" property="og:image" content="https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg" />
                <meta name="og:type" property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" property="twitter:title" content="Photo Gallery | Hapliv Dental Clinic" />
                <meta 
                    name="twitter:description" 
                    property="twitter:description" 
                    content="Browse our photo gallery at Hapliv Dental Clinic and witness the journey of our patients, clinic tours, and treatment results from our state-of-the-art facilities." 
                />
                <meta name="twitter:image" property="twitter:image" content="https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg" />


            </Head>
            <div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-40'>
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