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
                <div style={{ backgroundColor: `${color}`, borderColor: '#5A09A4' }} className="fixed top-0 left-0 z-20 w-full duration-300 ease-in border-b-0">
                    <div className="flex flex-row items-end gap-2 p-2 m-0 text-white justify-evenly" style = {{backgroundColor:'#5A09A4'}}>
                        
                        <span className="text-sm hover:text-orange-500 sm:text-lg basis-1/6">
                            <Link href='mailto:haplivdentalclinic@gmail.com'>
                                <a rel="nofollow" className='flex justify-center p-2'>
                                    <AiOutlineMail size={25} />
                                    <span className="hidden m-2 md:block"></span>
                                </a>
                            </Link>
                        </span>
                        <span className="text-sm hover:text-orange-500 sm:text-base basis-1/6">
                            <Link href='https://wa.me/919810471255?text=Hi'>
                                <a target="_blank" rel="nofollow" className='flex justify-center p-2'>
                                    <FaWhatsapp size={25} />
                                </a>
                            </Link>
                        </span>
                        <span className="text-sm sm:text-base basis-1/6 hover:text-orange-500">
                            <Link href='https://www.instagram.com/hapliv_dental_clinic/'>
                                <a target="_blank" className='flex justify-center p-2'>
                                    <AiOutlineInstagram size={25} />
                                </a>
                            </Link>
                        </span>
                        <span className="text-sm text-white rounded-lg bg-[orangered] sm:text-lg group animate-pulse basis-1/6 drop-shadow-lg">
                            <Link href='tel:+919810471255'>
                                <a rel="nofollow" className='flex justify-center p-2'>
                                    <FaPhoneAlt size={25}/><span className="hidden ml-2 lg:block">+919810471255</span>
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
                        <div onClick={handleNav} className="z-10 block p-4 lg:hidden" >
                            {nav ? (<AiOutlineClose size={25} className="font-extrabold text-white"/>) : (<AiOutlineMenu size={25} style={{ color: `${textColor}` }} />)}
                        </div>
                        {/* Mobile Menu */}
                        <div className={nav ? 'lg:hidden absolute p-8 z-2 overflow-scroll top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-[#5A09A4] text-center ease-in duration-300' :
                            'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#5A09A4] text-center ease-in duration-300'}>
                            <ul>
                                {navLinks.map((navitems, index) => {
                                    return (
                                    <li key={"navlist-"+navitems.path+index} onClick={handleNav} className="p-4 text-3xl text-left font-extrabold text-[orangered]">
                                        <div className="hover:text-orange-500">
                                            <Link href={navitems.path} key={"navlink"+navitems.path+index} >
                                                {navitems.name}
                                            </Link>
                                        </div>
                                        <ul className="text-xl text-left text-white box">
                                            {navitems.children?.map((subItems,idx)=>{
                                                return (<li className="p-3 hover:text-orange-500" key={idx}>
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
