import Image from "next/image";
import Link from "next/link";
import { AiFillGoogleCircle, AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { reviewData } from "./reviewData";

export default function Review(props) {
    return (<>
    <div className='py-24 text-center'>
            <h2 className='text-3xl font-bold underline'>Testimonials</h2>
            <div class="bg-[#0F4C5C] mt-10 px-4">
                <div>
                    <div class="relative">
                        <div class="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"></div>
                        <div class="relative">
                            <div class="overflow-x-auto">
                                <div class="flex flex-nowrap space-x-4 p-4 snap-x snap-mandatory">
                                    {reviewData.map((review, index) => {
                                        return (
                                            <div key={index} className="z-10 flex-none p-6 bg-white rounded-lg shadow-lg w-80">
                                                <div class="flex items-center mb-4">
                                                   <div className='justify-center w-10 h-10 mr-4 leading-9 text-yellow-100 bg-gray-600 border-2 rounded-full border-orange-50'>{review.name.charAt(0)}{review.name.split(' ')[1].charAt(0)}</div>
                                                    <div>
                                                        <h3 class="text-lg font-semibold">{review.name}</h3>
                                                        <p class="text-gray-600"><span className="mr-2">{review.source.toLowerCase() === 'google' ? (review.source) : (<>Verified Patient</>)}</span></p>
                                                    </div>
                                                </div>
                                                <p class="text-gray-800 text-lg leading-7 mb-4">"{review.reviewText}"</p>
                                                <p class="text-blue-500 font-semibold text-xl">Rating: {review.rating}/5</p>
                                            </div>
                                        );
                                    })}
                                    <div className="self-center flex-none p-6 bg-white rounded-lg shadow-lg w-80">
                                        <p className="relative mt-4 text-xl font-bold leading-tight z-1"> <Link href='https://www.google.com/search?q=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&hl=en&gl=IN&sxsrf=APwXEdd3FKk1ylIzcXgSQv_K4gK8VLISgA%3A1680234493633&ei=_VcmZMydJqzZxc8P78aVmAk&ved=0ahUKEwiMkIehoYX-AhWsbPEDHW9jBZMQ4dUDCA8&uact=5&oq=Hapliv+Dental+Clinic%2CShop+27%2C+First+Floor%2C+North+Block%2C+M3M+Tee+Point%2C+Golf+Course+Ext+Rd%2C+Sector+65%2C+Gurugram%2C+Haryana&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAAWABghwNoAHAAeACAAQCIAQCSAQCYAQCgAQKgAQHAAQE&sclient=gws-wiz-serp#lrd=0x390d1980766a7633:0x9e9d65aada17b9a5,1,,,,
'><a target="_blank" rel="nofollow">View more &gt;&gt;</a></Link> </p>
                                        <p class="text-blue-500 font-semibold text-xl">Rating: 5/5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        

    </>);


}