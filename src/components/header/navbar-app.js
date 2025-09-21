"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "./navbarData";
import NavItemApp from "./navitem-app";
import { usePathname } from "next/navigation";
import { path } from "framer-motion/client";

const NavbarApp = () => {

  const navThemes = {
    home: {
      dark: {
        iconUrl: "/assets/logos/hapliv_website_dark_bg_logo.png",
        bgColor: "#ffffff00",
        textColor: "#ffffff",
      },
      light: {
        iconUrl: "/assets/logos/hapliv_website_light_bg_logo.png",
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
    default: {
      light: {
        iconUrl: "/assets/logos/hapliv_website_light_bg_logo.png",
        bgColor: "#ffffff",
        textColor: "#000000",
      },
    },
  };

  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(navThemes.default.light.bgColor);
  const [textColor, setTextColor] = useState(navThemes.default.light.textColor);
  const [iconUrl, setIconUrl] = useState(navThemes.default.light.iconUrl);

  const handleNav = () => setNav((prev) => !prev);

  useEffect(() => {
    const changeColor = () => {
      if (pathname === "/") {
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
    };
    

    window.addEventListener("scroll", changeColor);
    changeColor();
    return () => window.removeEventListener("scroll", changeColor);
  }, [pathname]);

  return (
    <div
      style={{ backgroundColor: color }}
      className={pathname === '/invisalign' ? 'hidden':"fixed top-0 left-0 z-30 w-full duration-300 ease-in border-b-0 border-primary" }
    >
      <div className="flex items-center justify-between p-4 m-0 text-white">
        <Link href="/" aria-label="Hapliv Dental Clinic logo" key="main_logo_link">
          <div>
            <Image
              className="cursor-pointer"
              src={iconUrl}
              alt="Hapliv Dental Clinic"
              height={65}
              width={240}
              objectFit="contain"
            />
          </div>
        </Link>
        <div style={{ color: textColor }} className="hidden lg:flex">
          {navLinks.map((navitems, index) => (
            <NavItemApp item={navitems} key={`main_nav_${navitems.path}_${index}`} />
          ))}
        </div>
        <div onClick={handleNav} className="z-10 block p-4 lg:hidden">
          {nav ? (
            <AiOutlineClose size={25} className="font-extrabold text-[#4B1282]" />
          ) : (
            <AiOutlineMenu size={25} style={{ color: textColor }} />
          )}
        </div>
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 z-20 flex h-screen w-full items-center justify-center overflow-scroll bg-[#e8e7ec] p-8 text-center duration-300 ease-in"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-[#e8e7ec] text-center duration-300 ease-in"
          }
        >
          <ul>
            {navLinks.map((navitems, index) => (
              <li
                key={`navlist-${navitems.path}-${index}`}
                onClick={handleNav}
                className="p-4 text-left text-3xl font-extrabold text-[orangered]"
              >
                <div className="hover:text-orange-500">
                  <Link href={navitems.path}>{navitems.name}</Link>
                </div>
                <ul className="box text-left text-xl text-[#4B1282]">
                  {navitems.children?.map((subItems, idx) => (
                    <li className="p-3 hover:text-orange-500" key={`${idx}-${index}`}>
                      <Link href={subItems.path}>{subItems.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarApp;
