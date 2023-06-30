import Image from "next/image";
import Link from "next/link";

export default function Associations() {
    return (<>
        <div className='max-w-[1240px] mx-auto text-center'>
            <h2 className='text-3xl font-bold underline'>Our Associations</h2>
        </div>
        <marquee width="100%" behavior="scroll" className="mt-10 bg-orange-200">
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
                <Image src='assets/3.Gc_.jpg' alt='GIC' width={'100%'} height={'100%'}></Image>
            </div>
            <div className="inline-block p-8">
                            <Image src='assets/biolase-banner.png' alt='Biolase' width={'100%'} height={'100%'}></Image>
                        </div>
        </marquee>
    </>);


}