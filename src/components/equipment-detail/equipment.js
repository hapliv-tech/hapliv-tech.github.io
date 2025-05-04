import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import styles from './equipment.module.css';

export default function EquipmentDetail({ title, description, imgList }) {
    return (
        <div className='relative p-4 text-left border group'>
            <div className="flex justify-center">
                {imgList?.map((img, idx) => {
                    return (<Image alt={img.alt} src={img.src} key={title + "-img-" + idx} objectFit="contain" width={200} height={200} loader={1} />);
                })}
            </div>
            <span className="block space-x-0 font-bold text-center group-hover:text-xl">{title}</span>
            <div className="font-medium text-teal-900 text-md group-hover:text-l" dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center hover:bg-black/5'>
                <p className='hidden text-gray-300 group-hover:block'></p>
            </div>
        
        </div>
    );
}