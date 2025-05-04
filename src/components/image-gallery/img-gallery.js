import Image from "next/image";
import { useState } from "react";
export default function ImageGallery({images, className}) {
   
    return (
        <div className={className?className:"max-w-2xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"}>
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map((image,idx)=>(<BlurImage key={image.id} image={image}></BlurImage>))}
            </div>
        </div>
    );
}

function cn(...clases){
    return clases.filter(Boolean).join(' ');
}
function BlurImage({image}){
    const [isLoading, setLoading] = useState(true);
    return (<a className="group" href={image.link?image.link:'#'}>
            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <Image 
                key={image.id}
                src={image}
                alt ={image.alt} layout="fill" objectFit="cover" className={cn('group-hover:opacity-75 duration-700 ease-in-out', isLoading? 'grayscale blur-2xl scale-110':'grayscale-0 blur-0 scale-100')} alt="" onLoadingComplete={()=>setLoading(false)}/>
            </div>
            {image.caption?<h2 className="mt-4 text-xl font-extrabold text-center text-gray-700">{image.caption}</h2>:<></>}
            
            {/* <p className="mt-1 text-lg font-medium text-gray-900">@hapliv_dental_clinic</p> */}
    </a>);
}