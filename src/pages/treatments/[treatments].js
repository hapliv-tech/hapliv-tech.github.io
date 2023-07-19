import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
import { useRouter } from 'next/router';
import servicePath from '../../services.json';
import { navLinks } from 'components/header/navbarData';

export default function ServicePage(props) {
    const router = useRouter(props);
    return (
        <div className='mt-40'>
            <Head>
                <title>{props.serviceData?.name} | Treatements | Hapliv Dental Clinic </title>
            </Head>
            <div className='p-4 mx-auto'>
                <h1 className='p-4 text-3xl text-center'>{props.serviceData?.name}</h1>
                <div className='relative p-8 ml-8 text-base content-justify' dangerouslySetInnerHTML={{ __html:props.serviceData?.description}}></div>
            </div>
        </div>
    );
};

async function getData() {
    // const filePath = path.join(process.cwd(), 'services.json');
    return servicePath;
}


export async function getStaticPaths() {
    const data = navLinks.filter(item => item.path === '/treatments')[0].children;
    const pathsWithParams = data.map((star) => ({ params: { treatments: star.path.split('\/')[2] } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const itemID = context.params.treatments;
    const data = await getData();
    const foundItem = data.treatments.find((item) => itemID === item.id);
    if (!foundItem) {
        return {
            props: { hasError: false },
        }
    }
    return {
        props: {
            serviceData: foundItem
        }
    }
}