"use client";
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaPhone, FaStar, FaPhoneAlt, FaWhatsapp, FaUserMd, FaChild } from 'react-icons/fa';
import BannerCarousel from './banner/BannerCarousel';

const HeroSection = () => {
  const whatsappNumber = "919810471255";
  const preFilledMsg = encodeURIComponent("Hello! I would like to book an appointment at Hapliv Dental Clinic.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${preFilledMsg}`;
  
  // Fallback banners (used if API fails or no banners available)
  const fallbackBanners = [
    {
      title: "Transform Your Smile with Expert Orthodontics",
      subtitle: "Leading Orthodontist in Gurgaon Sector 65 & West Delhi",
      description: "Get the perfect smile you deserve with our advanced braces and Invisalign treatments",
      images: {
        web: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/dr_achla_treating_braces_patients.webp?updatedAt=1752513111323",
        mobile: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/dr_achla_treating_braces_patients.webp?updatedAt=1752513111323"
      }
    },
    {
      title: "Invisalign Specialists in Gurgaon & Delhi",
      subtitle: "Clear Aligners for a Confident Smile",
      description: "Straighten your teeth discreetly with our certified Invisalign treatments",
      images: {
        web: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/dr_achla_patients_invisalign.webp?updatedAt=1756481350176",
        mobile: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/dr-achla-patient-m.webp?updatedAt=1756485089732"
      }
    },
    {
      title: "Complete Dental Care for Your Family",
      subtitle: "From Kids to Adults - We Care for All Ages",
      description: "Comprehensive dental services including implants, laser dentistry, and preventive care",
      images: {
        web: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/hapliv_dental_clinic_reception.webp?updatedAt=1752513111204",
        mobile: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/hapliv_dental_clinic_reception.webp?updatedAt=1752513111204"
      }
    },
    {
      title: "Modern Technology, Gentle Care",
      subtitle: "State-of-the-Art Dental Clinic",
      description: "Experience pain-free dental treatments with the latest technology and techniques",
      images: {
        web: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/modern_dental_clinic_hapliv.webp?updatedAt=1752513494142",
        mobile: "https://ik.imagekit.io/thwkz9dxk/Home%20Page%20Banner/modern_dental_clinic_hapliv.webp?updatedAt=1752513494142"
      }
    }
  ];

  // Custom content overlay with CTAs and trust indicators - positioned at bottom
  const customContent = (
    <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20 pointer-events-none">
      <div className="max-w-6xl px-4 text-center text-white pointer-events-auto md:px-8">
        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-success rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaWhatsapp className="inline-block w-5 h-5 mr-2" />Book Consultation
          </a>

          <a
            href={'tel:+919810471255'}
            className="px-8 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform border-2 border-white rounded-button text-white min-w-max hover:bg-white hover:text-gray-900 hover:scale-[1.02] active:scale-[0.98]"
            rel="nofollow"
          >
            <FaPhoneAlt className="inline-block w-5 h-5 mr-2" />
            Call Now <span className='hidden md:inline-block'>: +91-9810471255</span>
          </a>
        </div>

        {/* micro-trust row */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 md:text-sm">
          <div className="flex items-center gap-1.5">
            <FaStar className="w-3 h-3 text-accent" />
            4.9/5 Google Rating
          </div>
          <div className="flex items-center gap-1.5">
            <FaUserMd className="w-3 h-3 text-accent" />
            Expert Orthodontists
          </div>
          <div className="flex items-center gap-1.5">
            <FaChild className="w-3 h-3 text-accent" />
            Kids-friendly
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <BannerCarousel 
      position="homepage-hero"
      fallbackBanners={fallbackBanners}
      enableAnalytics={true}
      showDefaultCTA={false}
      customContent={customContent}
    />
  );
};

export default HeroSection;
