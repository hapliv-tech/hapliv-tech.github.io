"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "./navbarData";
import NavItemApp from "./navitem-app";
import { usePathname } from "next/navigation";
import { useAppointmentModal } from "contexts/AppointmentModalContext";

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
  const { openAppointment } = useAppointmentModal();
  const [color, setColor] = useState(navThemes.default.light.bgColor);
  const [textColor, setTextColor] = useState(navThemes.default.light.textColor);
  const [iconUrl, setIconUrl] = useState(navThemes.default.light.iconUrl);

  const handleNav = () => setNav((prev) => !prev);
  const handleOpenAppointment = () => {
    openAppointment();
    setNav(false);
  };

  const desktopNav = React.useMemo(() => {
    const order = ["/", "/about-us", "/invisalign", "/treatments", "/gallery", "/appointment"];
    return order
      .map((path) => navLinks.find((n) => n.path === path))
      .filter(Boolean);
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const shouldShowShadow = scrolled || !isHomePage;

  return (
    <div
      style={{ backgroundColor: color }}
      className={
        pathname === "/invisalign"
          ? "hidden"
          : `fixed top-0 left-0 z-30 w-full duration-300 ease-in ${
              shouldShowShadow
                ? "shadow-sm border-b border-gray-200"
                : "border-b-0 border-primary"
            }`
      }
    >
      <div className="flex items-center justify-between p-4 m-0" style={{ color: textColor }}>
        <Link href="/" aria-label="Hapliv Dental Clinic logo" key="main_logo_link">
          <div>
            <Image
              className="cursor-pointer"
              src={iconUrl}
              alt="Hapliv Dental Clinic"
              height={65}
              width={220}
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>
        </Link>
        <div className="items-center hidden lg:flex">
          {desktopNav.map((navitems, index) => {
            const isAppointment = navitems.path === "/appointment";
            if (isAppointment) {
              return (
                <button
                  key={`main_nav_${navitems.path}_${index}`}
                  onClick={handleOpenAppointment}
                  className="px-4 py-2 ml-4 text-sm font-semibold text-white transition-all duration-200 rounded-full shadow-sm bg-primary hover:bg-primary-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                >
                  Appointment
                </button>
              );
            }
            return (
              <NavItemApp 
                item={navitems} 
                key={`main_nav_${navitems.path}_${index}`}
                textColor={textColor}
              />
            );
          })}
        </div>
        <button
          onClick={handleNav}
          aria-label="Toggle navigation"
          className="z-20 block p-3 transition-all duration-200 rounded-lg lg:hidden bg-white/10 hover:bg-white/20 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          {nav ? (
            <AiOutlineClose size={24} className="text-primary-dark" />
          ) : (
            <AiOutlineMenu size={24} style={{ color: textColor }} />
          )}
        </button>
      </div>

      {/* Mobile overlay + drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition ${
          nav ? "pointer-events-auto bg-black/40 opacity-100" : "pointer-events-none bg-black/0 opacity-0"
        }`}
        aria-hidden={!nav}
        onClick={handleNav}
      />
      <div
        className={`lg:hidden fixed top-0 right-0 z-30 h-full w-[82vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!nav}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="text-lg font-semibold text-gray-900">Menu</span>
          <button
            onClick={handleNav}
            aria-label="Close navigation"
            className="p-2 rounded-lg text-primary hover:bg-primary-lightest"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-64px)] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((navitems, index) => {
              const isActive = pathname === navitems.path;
              if (navitems.path === "/appointment") {
                return (
                  <li key={`navlist-${navitems.path}-${index}`} className="px-2 py-1">
                    <button
                      type="button"
                      onClick={() => {
                        handleOpenAppointment();
                        handleNav();
                      }}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-lg font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {navitems.name}
                    </button>
                  </li>
                );
              }
              return (
                <li key={`navlist-${navitems.path}-${index}`} className="px-2 py-1">
                  <Link
                    href={navitems.path}
                    onClick={handleNav}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-lg font-semibold ${
                      isActive ? "bg-primary-lightest text-primary" : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {navitems.name}
                  </Link>
                  {Array.isArray(navitems.children) && navitems.children.length > 0 && (
                    <ul className="pl-3 mt-2 space-y-1">
                      {navitems.children.map((subItems, idx) => (
                        <li key={`${idx}-${index}`}>
                          <Link
                            href={subItems.path}
                            onClick={handleNav}
                            className="block px-3 py-2 text-base text-gray-700 rounded-md hover:text-primary hover:bg-gray-50"
                          >
                            {subItems.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="p-4 mt-auto space-y-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                handleOpenAppointment();
                handleNav();
              }}
              className="block w-full px-4 py-3 font-semibold text-center text-white transition rounded-lg shadow-sm bg-primary hover:bg-primary-dark"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919810471255"
              onClick={handleNav}
              className="block w-full px-4 py-3 font-semibold text-center transition border rounded-lg border-primary text-primary hover:bg-primary-lightest"
            >
              Call: +91 98104 71255
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NavbarApp;
