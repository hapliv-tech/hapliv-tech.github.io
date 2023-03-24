import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlinePhone, AiTwotonePhone, AiFillPhone, AiOutlineMail, AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { navLinks } from './navbarData';
import NavItem from "./navitem";

const Navbar = (props,innerRef)=>{
        const iconUrls = { 'dark': '/assets/hapliv_compressed_black.webp', 'light': '/assets/hapliv_compressed_black.webp' }
        const navThemes = {
            'dark': {
                // 'iconUrl':'/assets/logo_hapliv_dark_bg.webp',
                // 'bgColor':'rgba(0,0,0,0.9)',
                // 'textColor':'white'
                'iconUrl': '/assets/hapliv_compressed_black.webp',
                'bgColor': '#ffffff',
                'textColor': '#000000'
            },
            'light': {
                'iconUrl': '/assets/hapliv_compressed_black.webp',
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
            };
            window.addEventListener('scroll', changeColor);
            return () => window.removeEventListener("scroll", changeColor);
        }, []);

        return (
            <>
                <div style={{ backgroundColor: `${color}`, borderColor: '#0F4C5C' }} className="fixed top-0 left-0 z-20 w-full duration-300 ease-in border-b-4">
                    <div className="flex items-end justify-end p-2 m-0 text-white" style = {{backgroundColor:'#0F4C5C'}}>
                        <span className="ml-4 text-sm sm:text-base">
                            <Link href='tel:+919810471255'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <FaPhoneAlt size={20}/><span className="hidden ml-2 md:block">+919810471255</span>
                                </div>
                            </Link>
                        </span>
                        <span className="ml-4 mr-4 text-xs sm:text-base">
                            <Link href='mailto:haplivdentalclinic@gmail.com'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <AiOutlineMail size={20} /><span className="hidden ml-2 md:block">haplivdentalclinic@gmail.com</span>
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

                    <div className="flex items-center justify-between p-4 m-0 text-white">
                        <Link href="/" key={'main_logo_link'}>
                            <div>
                                <Image src={iconUrl} alt={`Hapliv Dental Clinic`} height={65} width={240} objectFit="contain" />
                            </div>
                        </Link>
                        <div style={{ color: `${textColor}` }} className="hidden lg:flex">
                            {
                                navLinks.map((navitems, index) => {
                                    return (
                                        <NavItem item={navitems} index={index} key={'main_nav_'+navitems.path+index}></NavItem>
                                    );
                                })
                            }
                        </div>
                        {/* A*/}
                        <div onClick={handleNav} className="z-10 block lg:hidden" >
                            {nav ? (<AiOutlineClose size={20} style={{ color: '#ffffff' }} />) : (<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />)}
                        </div>
                        {/* Mobile Menu */}
                        <div className={nav ? 'lg:hidden absolute p-8 z-2 overflow-scroll top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-[#0F4C5C] text-center ease-in duration-300' :
                            'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#0F4C5C] text-center ease-in duration-300'}>
                            <ul>
                                {navLinks.map((navitems, index) => {
                                    return (
                                    <li key={"navlist-"+navitems.path+index} onClick={handleNav} className="p-4 text-4xl text-left text-orange-500 ">
                                        <div className="hover:text-gray-400">
                                            <Link href={navitems.path} key={"navlink"+navitems.path+index} >
                                                {navitems.name}
                                            </Link>
                                        </div>
                                        <ul className="text-xl text-left text-white box">
                                            {navitems.children?.map((subItems,idx)=>{
                                                return (<li className="p-3 hover:text-gray-400" key={idx}>
                                                      <Link href={subItems.path} key={idx+'-'+index}>
                                                        {subItems.name}
                                                    </Link>
                                                </li>);
                                            })}
                                        </ul>
                                    </li>);
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }


export default Navbar;
