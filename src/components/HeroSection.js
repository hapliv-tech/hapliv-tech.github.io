import Image from 'next/image';
import React from 'react';
import {
  FaAward,
  FaChild,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaUserMd,
  FaWhatsapp,
} from 'react-icons/fa';

const HeroSection = () => {
  const whatsappNumber = "919810471255";
  const preFilledMsg = encodeURIComponent("Hello! I would like to book an appointment at Hapliv Dental Clinic.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${preFilledMsg}`;

  const trustSignals = [
    {
      icon: FaStar,
      label: "4.9/5 Google Rating",
    },
    {
      icon: FaAward,
      label: "Certified Invisalign Provider",
    },
    {
      icon: FaChild,
      label: "Kids & Adults",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Gurgaon + West Delhi",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-lightest/40 to-gray-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full border border-primary/10" />
        <div className="absolute left-10 top-44 h-96 w-96 rounded-full border border-primary/5" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(81,36,122,0.08)_1px,_transparent_1.5px)] bg-[length:22px_22px]" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-24 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-24 lg:pt-28 xl:pb-28">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase text-primary shadow-soft">
            <FaUserMd className="h-3.5 w-3.5 text-primary" />
            Certified Invisalign provider in Gurgaon & West Delhi
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">
            Braces & Invisalign care designed around your smile
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">
            Plan braces, Invisalign, and clear aligner treatment with Hapliv Dental Clinic in Sector 65 Gurgaon and West Delhi. Book a consultation to understand the right path for your smile.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-success px-7 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-success-hover hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaWhatsapp className="h-5 w-5" />
              Book Consultation
            </a>

            <a
              href="tel:+919810471255"
              className="inline-flex items-center justify-center gap-2 rounded-button border border-gray-300 bg-white px-7 py-4 text-base font-semibold text-gray-900 shadow-soft transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-soft-md hover:scale-[1.02] active:scale-[0.98]"
              rel="nofollow"
            >
              <FaPhoneAlt className="h-4 w-4 text-primary" />
              Call Now <span className="hidden md:inline">: +91-9810471255</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-700 sm:flex sm:flex-wrap sm:gap-4">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-2 rounded-button border border-gray-200 bg-white/80 px-3 py-2 shadow-soft backdrop-blur"
              >
                <signal.icon className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                <span className="leading-snug">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div
            className="pointer-events-none absolute -inset-5 z-0 rounded-[2rem] border border-primary/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-4 -top-6 z-20 h-28 w-44 rounded-[100%] border-t-2 border-primary/45"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-5 left-8 z-20 h-20 w-64 rounded-[100%] border-b-2 border-primary/50"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-8 top-8 z-20 grid grid-cols-3 gap-2"
            aria-hidden="true"
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-white/80 shadow-soft"
              />
            ))}
          </div>

          <div className="relative z-10 overflow-hidden rounded-card border border-white bg-white shadow-premium">
            <div className="aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/assets/hapliv-home.webp"
                alt="Hapliv Dental Clinic doctor consulting on braces and Invisalign treatment"
                width={996}
                height={664}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 z-20 max-w-[13rem] rounded-card border border-white/80 bg-white/90 p-4 shadow-soft-lg backdrop-blur">
            <div className="text-xs font-semibold uppercase text-primary">
              Smile planning
            </div>
            <div className="mt-1 text-sm leading-snug text-gray-700">
              Clear guidance before braces or aligners begin.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
