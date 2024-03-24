
import Image from 'next/image';
import Link from 'next/link';
export default function SmileViewAssement({ heading }) {

    return (<>
        <div className="grid grid-cols-1 p-6 md:grid-cols-2" height={64} width={64}>
            <div className='grid col-span-1 text-3xl font-extrabold md:text-4xl md:col-span-1'>
                <span className='flex cols-span-1'>Take a smiling selfie and see what Invisalign treatment could do for you!</span>
                <div className='col-span-1 m-auto mt-2 md:col-span-2'>
                    <Image src='../assets/smile-view-before-after.webp' width={'320'} height={'240'} layout='fixed'></Image>
                </div>
            </div>
            <div className='col-span-2 text-2xl rounded-lg md:text-4xl md:col-span-1'>
                <Image src='../assets/hand-iphone-qr.webp' width={12} height={10} layout='responsive' className='object-fill'></Image>
                <p className='flex items-center justify-center text-lg'>Invisalign SmileView simulates your new smile!</p>
                <Link href={'https://providerbio-apac.invisalign.com/sv/1581342'}><a className='block bg-[#00C920] hover:bg-[#00C92098] sm:hidden p-4 text-center text-white rounded-xl' target='_blank'>Take Smile Assessment</a></Link>
            </div>
        </div>
    </>
    );
}

