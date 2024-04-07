
import Image from 'next/image';
export default function WhyUsSection({ heading }) {
    
    return (<>
    <div className="bg-[#5A09A4] p-6 items-center justify-center">
        <div className='flex justify-between'>
            <Image src='../assets/dots-16.png' height={64} width={64} className='object-contain col-span-1'/>
            <h2 className="relative clear-none col-span-6 text-3xl font-extrabold text-center text-white md:text-4xl">WHY CHOOSE US?</h2>
            <Image src='../assets/dots-16.png' height={64} width={64} className='float-right object-contain'/>
        </div>
        
        <div className="justify-center grid grid-cols-2 text-[#D45500] md:grid-cols-4 gap-4">
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                    <div className='w-full p-4'>
                        <span className='block text-5xl font-extrabold text-center'>8+</span>
                        <span className='block text-base text-center'>Doctors</span>
                    </div>
            </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>1500+</span>
                    <span className='block text-base text-center'>Invisalign/Braces</span>
                </div>
           </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>5000+</span>
                    <span className='block text-base text-center'>OPDs</span>
                </div>
            </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>2500+</span>
                    <span className='block text-base text-center'>RCTs</span>
                </div>
            </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>3000+</span>
                    <span className='block text-base text-center'>Crowns</span>
                </div>
            </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>9+</span>
                    <span className='block text-base text-center'>Dental Speciality</span>
                </div>
            </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
                <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>500+</span>
                    <span className='block text-base text-center'>Extractions & Dental Surgeries</span>
                </div>
            </div>
            <div className="box-content flex items-center justify-center w-40 h-40 mt-8 mb-8 ml-auto mr-auto shadow-2xl bg-purple-50 shadow-slate-400 rounded-xl">
               <div className='w-full p-4'>
                    <span className='block text-5xl font-extrabold text-center'>10+</span>
                    <span className='block text-base text-center'>Years of Experience</span>
                </div>
            </div>
        </div>
        
    </div>
       
    </>
    );
}

