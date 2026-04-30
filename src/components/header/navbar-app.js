"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { navLinks } from "./navbarData";
import NavItemApp from "./navitem-app";
import { usePathname } from "next/navigation";
import { useAppointmentModal } from "contexts/AppointmentModalContext";
import { trackGa4Event } from "lib/analytics";

const NavbarApp = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const { openAppointment } = useAppointmentModal();
  const [scrolled, setScrolled] = useState(false);
  const iconUrl = "/assets/logos/hapliv_website_light_bg_logo.png";

  const handleNav = () => setNav((prev) => !prev);
  const handleOpenAppointment = (ctaLocation = "navbar") => {
    trackGa4Event("cta_click", { cta_type: "appointment", cta_location: ctaLocation });
    openAppointment();
    setNav(false);
  };

  const desktopNav = React.useMemo(() => {
    const order = ["/", "/about-us", "/invisalign", "/treatments", "/locations", "/gallery", "/appointment"];
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={
          pathname === "/invisalign"
            ? "hidden"
            : `fixed left-0 top-0 z-30 w-full border-b duration-300 ease-in ${
                scrolled
                ? "border-primary/10 bg-white/95 shadow-soft backdrop-blur-xl"
                : "border-primary/10 bg-white/90 backdrop-blur-xl"
              }`
        }
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link href="/" aria-label="Hapliv Dental Clinic logo" key="main_logo_link">
            <div className="flex items-center">
              <Image
                className="cursor-pointer"
                src={iconUrl}
                alt="Hapliv Dental Clinic"
                height={58}
                width={196}
                style={{ objectFit: "contain" }}
                unoptimized
                priority
              />
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-pill border border-primary/10 bg-white/80 px-2 py-1 shadow-soft backdrop-blur lg:flex">
            {desktopNav.map((navitems, index) => {
              const isAppointment = navitems.path === "/appointment";
              if (isAppointment) {
                return (
                  <button
                    key={`main_nav_${navitems.path}_${index}`}
                    type="button"
                    onClick={() => handleOpenAppointment("navbar_desktop")}
                    className="ml-1 rounded-pill bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Appointment
                  </button>
                );
              }
              return (
                <NavItemApp
                  item={navitems}
                  key={`main_nav_${navitems.path}_${index}`}
                />
              );
            })}
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <a
              href="tel:+919810471255"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-soft transition hover:border-primary/30 hover:bg-primary-lightest"
              aria-label="Call Hapliv Dental Clinic"
              rel="nofollow"
            >
              <FaPhoneAlt className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={handleNav}
            aria-label="Toggle navigation"
            className="z-20 block rounded-button border border-primary/10 bg-white p-3 text-primary shadow-soft transition-all duration-200 hover:bg-primary-lightest focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:hidden"
          >
            {nav ? (
              <AiOutlineClose size={24} className="text-primary-dark" />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transition lg:hidden ${
          nav ? "pointer-events-auto bg-black/40 opacity-100" : "pointer-events-none bg-black/0 opacity-0"
        }`}
        aria-hidden={!nav}
        onClick={handleNav}
      />
      <div
        className={`fixed right-0 top-0 z-50 h-dvh w-[86vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!nav}
      >
        <div className="flex items-center justify-between border-b border-primary/10 px-4 py-3">
          <span className="text-lg font-semibold text-gray-900">Menu</span>
          <button
            onClick={handleNav}
            aria-label="Close navigation"
            className="p-2 rounded-lg text-primary hover:bg-primary-lightest"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <div className="flex h-[calc(100dvh-64px)] flex-col overflow-y-auto">
          <ul className="flex flex-col divide-y divide-primary/10">
            {navLinks.map((navitems, index) => {
              const isActive = pathname === navitems.path;
              if (navitems.path === "/appointment") {
                return (
                  <li key={`navlist-${navitems.path}-${index}`} className="px-2 py-1">
                    <button
                      type="button"
                      onClick={() => {
                        handleOpenAppointment("navbar_mobile_drawer");
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

          <div className="mt-auto space-y-3 border-t border-primary/10 p-4">
            <button
              type="button"
              onClick={() => {
                handleOpenAppointment("navbar_mobile_footer");
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
    </>
  );
};

export default NavbarApp;
