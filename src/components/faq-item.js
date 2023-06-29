import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
export default function FaqItem({ faq }) {
    return (
        <article className='p-4'>
            <h2 className='text-2xl font-bold'>{faq.question}</h2>
            <p className='mt-4'>
                {faq.answers[0]}
            </p>
        </article>
    );
}

export function InvisalignFaqItem({ faq }) {
    return (
        <div className="p-2 leading-8 text-left">
            <div className="inline text-2xl font-bold text-left text-orange-600 question">Q. {faq.question}</div>
            <div className="ml-6 text-xl answer">A. {faq.answers[0]}</div>
        </div>
    );

}