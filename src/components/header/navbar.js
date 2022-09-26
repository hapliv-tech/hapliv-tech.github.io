import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlinePhone, AiTwotonePhone, AiFillPhone, AiOutlineMail, AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { navLinks } from './navbarData';
import NavItem from "./navitem";

export default function Navbar() {
    const iconUrls = { 'dark': '/assets/logo_hapliv_dark_bg.webp', 'light': '/assets/hapliv_dental_clinic_white_bg.webp' }
    const navThemes = {
        'dark': {
            // 'iconUrl':'/assets/logo_hapliv_dark_bg.webp',
            // 'bgColor':'rgba(0,0,0,0.9)',
            // 'textColor':'white'
            'iconUrl': '/assets/hapliv_dental_clinic_white_bg.webp',
            'bgColor': '#ffffff',
            'textColor': '#000000'
        },
        'light': {
            'iconUrl': '/assets/hapliv_dental_clinic_white_bg.webp',
            'bgColor': '#ffffff',
            'textColor': '#000000'
        }
    }
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState(navThemes['dark']['bgColor']);
    const [textColor, setTextColor] = useState(navThemes['dark']['textColor']);
    const [iconUrl, setIconUrl] = useState(navThemes['dark']['iconUrl']);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor(navThemes['light']['bgColor']);
                setTextColor(navThemes['light']['textColor']);
                setIconUrl(navThemes['light']['iconUrl']);
            } else {
                setColor(navThemes['dark']['bgColor']);
                setTextColor(navThemes['dark']['textColor']);
                setIconUrl(navThemes['dark']['iconUrl']);
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-20 ease-in duration-300 border-amber-500 border-b-2">
                <div className="m-0 flex justify-end items-end p-2 text-white bg-yellow-900">
                    <span className="ml-4 text-sm sm:text-base">
                        <Link href='tel:+919810471255'>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <FaPhoneAlt size={20} /><span className="ml-2">+919810471255</span>
                            </div>
                        </Link>
                    </span>
                    <span className="ml-4 mr-4 text-xs sm:text-base">

                        <Link href='mailto:haplivdentalclinic@gmail.com'>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <AiOutlineMail size={20} /><span className="ml-2">haplivdentalclinic@gmail.com</span>
                            </div>
                        </Link>
                    </span>
                    <span className="ml-1 text-sm sm:text-base">
                        <Link href='https://wa.me/919810471255'>
                            <a target="_blank">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <FaWhatsapp size={20} />
                                </div>
                            </a>
                        </Link>
                    </span>
                    <span className="ml-2 text-sm sm:text-base">

                        <Link href='https://www.instagram.com/hapliv_dental_clinic/'>
                            <a target="_blank">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <AiOutlineInstagram size={20} />
                                </div>
                            </a>
                        </Link>
                    </span>
                </div>
                {/* <div className="m-0 flex justify-end items-end p-2 text-white bg-amber-800">
                    
                </div> */}

                <div className="m-0 flex justify-between items-center p-4 text-white">
                    <Link href='/'>
                        <Image src={iconUrl} alt={`Hapliv Dental`} height={60} width={240} objectFit='contain' />
                    </Link>

                    <div style={{ color: `${textColor}` }} className="hidden lg:flex">
                        {navLinks.map((navitems, index) => {
                            return (
                                <NavItem item={navitems} index={index} key={index}></NavItem>
                            );

                        })}

                    </div>
                    <div onClick={handleNav} className="block lg:hidden z-10" >
                        {nav ? (<AiOutlineClose size={20} style={{ color: '#ffffff' }} />) : (<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />)}
                    </div>
                    {/* Mobile Menu */}
                    <div className={nav ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-900 text-center ease-in duration-300' :
                        'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-900 text-center ease-in duration-300'}>
                        <ul>
                            {navLinks.map((navitems, index) => {
                                return (<li key={index} onClick={handleNav} className="p-4 text-4xl hover:text-gray-400"><Link href={navitems.path}>{navitems.name}</Link></li>);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
