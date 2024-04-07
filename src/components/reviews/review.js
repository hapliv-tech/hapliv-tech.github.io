import Image from "next/image";
import Link from "next/link";
import { AiFillGoogleCircle, AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { reviewData } from "./reviewData";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

export default function Review(props) {
    return (<>
    <div className='py-4 bg-[#5A09A4] text-center'>
            <h2 className='text-3xl font-bold text-white uppercase md:text-4xl'>Testimonials</h2>
            <div className="px-4 mt-10">
                <div>
                    <p className="text-2xl text-white">
                        {[...Array(1)].map((e, i) => <span className="busterCards" key={i}><FaStar className="inline-block text-yellow-500"/></span>)} 5 out of 5 | Based on &nbsp;
                        <span className="mt-4 leading-tight underline z-1"><Link href='https://www.google.com/search?q=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&hl=en&gl=IN&sxsrf=APwXEdd3FKk1ylIzcXgSQv_K4gK8VLISgA%3A1680234493633&ei=_VcmZMydJqzZxc8P78aVmAk&ved=0ahUKEwiMkIehoYX-AhWsbPEDHW9jBZMQ4dUDCA8&uact=5&oq=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAAWABghwNoAHAAeACAAQCIAQCSAQCYAQCgAQKgAQHAAQE&sclient=gws-wiz-serp#lrd=0x390d1980766a7633:0x9e9d65aada17b9a5,1,,,,
'><a target="_blank" rel="nofollow" className="inline text-white">50+ Google Reviews</a></Link> </span>
                    </p>
                    
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-center bg-no-repeat bg-cover"></div>
                        <div className="relative">
                            <div className="overflow-x-auto">
                                <div className="flex p-4 space-x-4 flex-nowrap snap-x snap-mandatory">
                                    {reviewData.map((review, index) => {
                                        return (
                                            <div key={index} className="z-10 flex-none p-6 overflow-hidden bg-white rounded-lg shadow-lg max-h-96 hover:max-h-max w-80">
                                                <div className="flex items-center mb-4">
                                                   <div className='justify-center w-10 h-10 mr-4 leading-9 text-yellow-100 bg-gray-600 border-2 rounded-full border-orange-50'>{review.name.charAt(0)}{review.name.split(' ')[1].charAt(0)}</div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold">{review.name}</h3>
                                                        <p className="text-gray-600"><span className="inline-block mr-2">{review.source.toLowerCase() === 'google' ? (<><FcGoogle className="inline-block"/></>)  : (<>Verified Patient</>)} {[...Array(parseInt(review.rating))].map((e, i) => <span className="busterCards" key={i}><FaStar className="inline-block text-yellow-500"/></span>)}</span></p>
                                                    </div>
                                                </div>
                                                <p className="mb-4 text-lg leading-7 text-gray-800">"{review.reviewText}"</p>
                                                {/* <p className="text-xl font-semibold text-blue-500">Rating: {review.rating}/5</p> */}
                                            </div>
                                        );
                                    })}
                                    {/* <div className="self-center flex-none p-6 bg-white rounded-lg shadow-lg w-80">
                                        <p className="relative mt-4 text-xl font-bold leading-tight z-1"> <Link href='https://www.google.com/search?q=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&hl=en&gl=IN&sxsrf=APwXEdd3FKk1ylIzcXgSQv_K4gK8VLISgA%3A1680234493633&ei=_VcmZMydJqzZxc8P78aVmAk&ved=0ahUKEwiMkIehoYX-AhWsbPEDHW9jBZMQ4dUDCA8&uact=5&oq=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAAWABghwNoAHAAeACAAQCIAQCSAQCYAQCgAQKgAQHAAQE&sclient=gws-wiz-serp#lrd=0x390d1980766a7633:0x9e9d65aada17b9a5,1,,,,
'><a target="_blank" rel="nofollow">View more &gt;&gt;</a></Link> </p>
                                        <p className="text-xl font-semibold text-blue-500">Rating: 5/5</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        

    </>);


}