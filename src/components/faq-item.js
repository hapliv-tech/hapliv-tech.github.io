import { FaInstagram } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
export default function FaqItem({ faq }) {
    return (
        // <article className='p-4'>
        //     <h2 className='text-2xl font-bold'>{faq.question}</h2>
        //     <p className='mt-4'>
        //         {faq.answers[0]}
        //     </p>
        // </article>
         <div className="relative p-2 m-2 leading-8 text-left border card">
         <input type="checkbox" className="absolute opacity-0 peer" id={faq.question}></input>
         {/* Questions */}
         <label for={faq.question} className="flex items-center text-xl font-bold text-left text-orange-600 basis-3/4 md:text-2xl question">Q. {faq.question}</label>
         <label for={faq.question} className="ml-2 absolute top-[30px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200"><FaAngleDown></FaAngleDown></label>
         <p className="overflow-hidden text-base md:text-xl answer max-h-0 peer-checked:max-h-full">A. {faq.answers[0]}</p>
     </div>
    );
}

export function InvisalignFaqItem({ faq }) {
    return (
        <div className="relative p-2 m-2 leading-8 text-left border card">
            <input type="checkbox" className="absolute opacity-0 peer" id={faq.question}></input>
            {/* Questions */}
            <label for={faq.question} className="flex items-center text-xl font-bold text-left text-orange-600 basis-3/4 md:text-2xl question">Q. {faq.question}</label>
            <label for={faq.question} className="ml-2 absolute top-[30px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200"><FaAngleDown></FaAngleDown></label>
            <p className="overflow-hidden text-base md:text-xl answer max-h-0 peer-checked:max-h-full">A. {faq.answers[0]}</p>
        </div>
    );

}

export function AppointmentPageFAQItem({ faq }) {
    return (
        <div className="relative p-2 m-2 leading-8 text-left border card">
            <input type="checkbox" className="absolute opacity-0 peer" id={faq.question}></input>
            {/* Questions */}
            <label for={faq.question} className="flex items-center text-lg font-bold text-left text-[#5A09A4] basis-3/4 md:text-lg question">Q. {faq.question}</label>
            <label for={faq.question} className="ml-2 absolute top-[30px] right-[10px] rotate-0 peer-checked:rotate-180 duration-200"><FaAngleDown></FaAngleDown></label>
            <p className="overflow-hidden text-base md:text-lg answer max-h-0 peer-checked:max-h-full">A. {faq.answers[0]}</p>
        </div>
    );

}