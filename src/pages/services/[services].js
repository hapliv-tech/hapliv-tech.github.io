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
        <div className='mt-32'>
            <Head>
                <title>Hapliv Dental Clinic | Services | {props.serviceData?.name}</title>
            </Head>
            <div className='mx-auto p-4'>
                <h1 className='text-3xl p-4 text-orange-900 text-center'>{props.serviceData?.name}</h1>
                <p className='text-base p-2'>{props.serviceData?.description}</p>
            </div>
        </div>
    );
};

async function getData() {
    // const filePath = path.join(process.cwd(), 'services.json');
    return servicePath;
}


export async function getStaticPaths() {
    const data = navLinks.filter(item => item.path === '/services')[0].children;
    const pathsWithParams = data.map((star) => ({ params: { services: star.path.split('\/')[2] } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const itemID = context.params.services;
    const data = await getData();
    const foundItem = data.services.find((item) => itemID === item.id);
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