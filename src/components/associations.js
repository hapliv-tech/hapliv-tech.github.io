import Image from "next/image";
import Link from "next/link";

export default function Associations() {
    return (<>
        <div className='max-w-[1240px] mx-auto text-center'>
            <h2 className='text-3xl font-bold underline'>Our Associations</h2>
        </div>

        <marquee width="100%" className="relative inline-block w-full h-auto mt-10 overflow-x-auto bg-gray-200 whitespace-nowrap" behavior="scroll"  Scrollamount="16">
            <div className="inline-block p-8">
                <Image src='assets/invisalign.png' alt='invisalign' width={'380'} height={'100'} objectFit="fill"></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/damon-braces.png' alt='damon braces' width={'360'} height={'100'} objectFit="fill"></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/incognito-hidden-braces-logo.png' alt='Incognito braces' width={'360'} height={'100'} objectFit="contain"></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/IDAlogo.png' alt='IDA' width={'100%'} height={'100%'}></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/IOS.png' alt='IOS' width={'100%'} height={'100%'}></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/WCLI-512x512.png' alt='WCLI' width={'100%'} height={'100%'}></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/3m-espe-logo.jpg' alt='3M' width={'100%'} height={'100%'}></Image>
            </div> 
            <div className="inline-block p-8">
                <Image src='assets/3.Gc_.jpg' alt='GIC' width={'100'} height={'100'}></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/biolase-banner.png' alt='Biolase' width={'100%'} height={'100%'}></Image>
            </div>
            <div className="inline-block p-8">
                <Image src='assets/invisalign-teen.jpg' alt='invisalign' width={'160'} height={'100'} objectFit="fill"></Image>
            </div>
            
        </marquee>
    </>);


}