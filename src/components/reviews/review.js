import Image from "next/image";
import Link from "next/link";
import { AiFillGoogleCircle, AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { reviewData } from "./reviewData";

export default function Review(props) {
    return (<>
    <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-3xl font-bold text-orange-900 underline'>Testimonials</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6 mt-10'>
                {reviewData.map((review,index)=>{
                    return (<div className='relative bg-orange-300 text-white p-8 rounded-lg border-2 border-orange-400 border-opacity-50'>
                    <FaQuoteLeft size={100} className="absolute top-0 left-4 opacity-30 z-0"/>
                    <div className="relative z-10 flex justify-start space-x-4">
                        <div className='rounded-full h-10 w-10 bg-gray-600 border-2 border-orange-50 text-yellow-100 leading-9 justify-center'>{review.name.charAt(0)}{review.name.split(' ')[1].charAt(0)}</div>
                        <div>
                        <h2 className="font-bold name text-sm">{review.name}</h2>
                        <h3 className="text-sm" style={{ display: "flex" }}> </h3>
                        <h3 className="text-sm" style={{ display: "flex" }}><span className="mr-2">{review.source.toLowerCase()==='google'? (review.source):(<></>)}</span><span>{review.rating}</span><AiFillStar size={20} className="p-1"> </AiFillStar></h3>
                        </div>
                    </div>
                    <p className="relative z-1 mt-4 font-bold text-xl leading-tight">
                    {review.reviewText}</p>
                    <FaQuoteRight size={100} className="absolute bottom-0 right-4 opacity-30 z-0"/>
                </div>);
                })}

                <div className='relative text-black p-8 rounded-lg border-2 border-orange-400 border-opacity-50 align-middle'>
                    <p className="relative z-1 mt-4 font-bold text-xl leading-tight"> <Link href='https://www.google.com/search?hl=en-IN&gl=in&q=Hapliv+Dental+Clinic,+C-331A,+beside+ROF+Portico,+Block+C,+Sushant+Lok+Phase+I,+Sector+43,+Gurugram,+Haryana+122009&ludocid=11429403213814020517&lsig=AB86z5VqsHo9YVoE2nWpLz79-jzg&hl=en&gl=IN#lrd=0x390d1980766a7633:0x9e9d65aada17b9a5,1
'><a target="_blank">View more &gt;&gt;</a></Link> </p>
                </div>

            </div>

        </div>

        

    </>);


}