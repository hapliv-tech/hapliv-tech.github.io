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