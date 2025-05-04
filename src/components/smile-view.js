
import Image from 'next/image';
import Link from 'next/link';
export default function SmileViewAssement({ heading }) {

    return (<>
        <div className='p-6 text-center'>
            <div className='flex justify-center'>
                <h2 className="relative clear-none col-span-6 text-3xl font-extrabold text-center text-[#301B49] md:text-4xl">Take a Smiling Selfie and See What Invisalign Can Do For You!</h2>
            </div>

            <div className="p-4">
                <h3 className="relative clear-both col-span-6 p-4 text-sm text-center text-[#301B49] md:text-sm md:p-4">Discover how Invisalign can transform your smile! Simply upload a smiling selfie, and let us show you how this discreet treatment can help you achieve the smile you've always wanted. Our team will provide personalized recommendations based on your unique needs.</h3>
            </div>

            <div className="grid grid-cols-1 p-6 md:grid-cols-2" height={64} width={64}>
                <div className='grid col-span-1 text-3xl font-extrabold md:text-4xl md:col-span-1'>
                    <div className='col-span-1 m-auto mt-2 md:col-span-2'>
                        <Image src='../assets/smile-view-before-after.webp' width={'320'} height={'240'} layout='fixed'></Image>
                    </div>
                </div>
                <div className='col-span-2 text-2xl rounded-lg md:text-4xl md:col-span-1'>
                    <Image src='../assets/hand-iphone-qr.webp' width={12} height={10} layout='responsive' className='object-fill'></Image>
                    <p className='flex items-center justify-center text-lg'>Invisalign SmileView simulates your new smile!</p>
                    <Link href={'https://providerbio-apac.invisalign.com/sv/1581342'}><a rel="nofollow" className='block bg-[#301B49] hover:bg-[#301B4998] text-2xl p-4 text-center text-white rounded-full' target='_blank'>Take Smile Assessment</a></Link>
                </div>
            </div>

        </div>
    </>
    );
}

