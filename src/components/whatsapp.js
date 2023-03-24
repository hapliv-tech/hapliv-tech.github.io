import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WhatsappComponent(props) {
    return (<>
        <div className="fixed bottom-0 right-0 top-1/2 m-2 p-2 text-6xl z-10">
            <Link href='https://wa.me/919810471255'>
                <a target="_blank">
                <div className="text-green-600 text-clip bg-white opacity-0.4">
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                </div>
                </a>
            </Link>
            {/* <iframe src='https://g.co/kgs/VprNj6' width={100} height={100}/> */}
        </div>
    </>);
}