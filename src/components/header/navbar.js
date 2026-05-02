import Link from "next/link";
import Image from "next/legacy/image";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { navLinks } from './navbarData';
import NavItem from "./navitem";
import { useRouter } from "next/router";

const Navbar = (props, innerRef) => {
    const iconUrls = { 'dark': '/assets/hapliv_compressed_black.webp', 'light': '/assets/hapliv_compressed_black.webp' }
    const navThemes = {
        home: {
            dark: {
                iconUrl: '/assets/logos/hapliv_website_dark_bg_logo.png',
                bgColor: '#ffffff00',
                textColor: '#ffffff'
            },
            light: {
                iconUrl: '/assets/logos/hapliv_website_light_bg_logo.png',
                bgColor: '#ffffff',
                textColor: '#000000'
            }
        },
        default: {
            light: {
                iconUrl: '/assets/logos/hapliv_website_light_bg_logo.png',
                bgColor: '#ffffff',
                textColor: '#000000'
            }
        }
        // Add custom routes if you want: "about", "contact", etc.
    };
    const router = useRouter();
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState(navThemes.default.light.bgColor);
    const [textColor, setTextColor] = useState(navThemes.default.light.textColor);
    const [iconUrl, setIconUrl] = useState(navThemes.default.light.iconUrl);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        function changeColor() {
            if (router.asPath === '/') {
                if (window.scrollY >= 90) {
                    setColor(navThemes.home.light.bgColor);
                    setTextColor(navThemes.home.light.textColor);
                    setIconUrl(navThemes.home.light.iconUrl);
                } else {
                    setColor(navThemes.home.dark.bgColor);
                    setTextColor(navThemes.home.dark.textColor);
                    setIconUrl(navThemes.home.dark.iconUrl);
                }
            } else {
                setColor(navThemes.default.light.bgColor);
                setTextColor(navThemes.default.light.textColor);
                setIconUrl(navThemes.default.light.iconUrl);
            }
        }
        window.addEventListener('scroll', changeColor);
        changeColor(); // Run once on mount and on route change!
        return () => window.removeEventListener("scroll", changeColor);
    }, [router.asPath]);


    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className="fixed top-0 left-0 z-30 w-full duration-300 ease-in border-b-0 border-primary">

                <div className="flex items-center justify-between p-4 m-0 text-white">
                    <Link href="/" key={'main_logo_link'}>
                        <div>
                            <Image className="cursor-pointer" src={iconUrl} alt={`Hapliv Dental Clinic`} height={65} width={240} objectFit="contain" />
                        </div>
                    </Link>
                    <div style={{ color: `${textColor}` }} className="hidden lg:flex">
                        {
                            navLinks.map((navitems, index) => {
                                return (
                                    <NavItem item={navitems} index={index} key={'main_nav_' + navitems.path + index}></NavItem>
                                );
                            })
                        }
                    </div>
                    {/* A*/}
                    <div onClick={handleNav} className="z-10 block p-4 lg:hidden" >
                        {nav ? (<AiOutlineClose size={25} className="font-extrabold text-primary-dark" />) : (<AiOutlineMenu size={25} style={{ color: `${textColor}` }} />)}
                    </div>
                    {/* Mobile Menu */}
                    <div className={nav ? 'lg:hidden absolute p-8 z-2 overflow-scroll top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-bg-tertiary text-center ease-in duration-300' :
                        'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-bg-tertiary text-center ease-in duration-300'}>
                        <ul>
                            {navLinks.map((navitems, index) => {
                                return (
                                    <li key={"navlist-" + navitems.path + index} onClick={handleNav} className="p-4 text-3xl text-left font-extrabold text-accent-dark">
                                        <div className="hover:text-accent">
                                            <Link href={navitems.path} key={"navlink" + navitems.path + index} >
                                                {navitems.name}
                                            </Link>
                                        </div>
                                        <ul className="text-xl text-left text-primary-dark box">
                                            {navitems.children?.map((subItems, idx) => {
                                                return (<li className="p-3 hover:text-accent" key={idx}>
                                                    <Link href={subItems.path} key={idx + '-' + index}>
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
