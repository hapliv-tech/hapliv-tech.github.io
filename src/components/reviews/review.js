import Image from "next/image";
import Link from "next/link";
import { AiFillGoogleCircle, AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { reviewData } from "./reviewData";

export default function Review(props) {
    return (<>
    <div className='max-w-[1240px] mx-auto text-center py-24'>
            <h2 className='text-3xl font-bold underline'>Testimonials</h2>
            <div className='grid grid-cols-1 gap-4 p-6 mt-10 overflow-x-auto md:grid-cols-3 lg:grid-cols-3'>
                {reviewData.map((review,index)=>{
                    return (<div key={index} className='relative p-8 text-white bg-orange-300 border-2 border-orange-400 border-opacity-50 rounded-lg'>
                    <FaQuoteLeft size={100} className="absolute top-0 z-0 left-4 opacity-30"/>
                    <div className="relative z-10 flex justify-start space-x-4">
                        <div className='justify-center w-10 h-10 leading-9 text-yellow-100 bg-gray-600 border-2 rounded-full border-orange-50'>{review.name.charAt(0)}{review.name.split(' ')[1].charAt(0)}</div>
                            <div>
                                <p className="text-sm font-bold name">{review.name}</p>
                                <p className="text-sm" style={{ display: "flex" }}> </p>
                                <p className="text-sm text-white" style={{ display: "flex" }}><span className="mr-2">{review.source.toLowerCase() === 'google' ? (review.source) : (<></>)}</span><span>{review.rating}</span><AiFillStar size={20} className="p-1"> </AiFillStar></p>
                            </div>
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold leading-tight text-black z-1">
                    {review.reviewText}</h3>
                    <FaQuoteRight size={100} className="absolute bottom-0 z-0 right-4 opacity-30"/>
                </div>);
                })}

                <div className='relative p-8 text-black align-middle border-2 border-orange-400 border-opacity-50 rounded-lg'>
                    <p className="relative mt-4 text-xl font-bold leading-tight z-1"> <Link href='https://www.google.com/search?q=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&hl=en&gl=IN&sxsrf=APwXEdd3FKk1ylIzcXgSQv_K4gK8VLISgA%3A1680234493633&ei=_VcmZMydJqzZxc8P78aVmAk&ved=0ahUKEwiMkIehoYX-AhWsbPEDHW9jBZMQ4dUDCA8&uact=5&oq=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAAWABghwNoAHAAeACAAQCIAQCSAQCYAQCgAQKgAQHAAQE&sclient=gws-wiz-serp#lrd=0x390d1980766a7633:0x9e9d65aada17b9a5,1,,,,
'><a target="_blank" rel="nofollow">View more &gt;&gt;</a></Link> </p>
                </div>

            </div>

        </div>

        

    </>);


}