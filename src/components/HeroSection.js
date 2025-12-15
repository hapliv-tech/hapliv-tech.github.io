"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaPhone, FaStar, FaArrowRight, FaArrowLeft, FaPhoneAlt, FaWhatsapp, FaUserMd, FaChild } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import {useIsMobile} from '../utils/useIsMobile';
import { FadeIn, SlideUp } from './animations';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappNumber = "919810471255";
  const preFilledMsg = encodeURIComponent("Hello! I would like to book an appointment at Hapliv Dental Clinic.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${preFilledMsg}`;
  const heroSlidesWeb = [
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

  const heroSlides = heroSlidesWeb;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${isMobile ? slide.images?.mobile : slide.images?.web})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-75" ></div>
            </div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-6xl px-4 py-16 text-center text-white md:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-hero">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="mb-6 text-base font-medium text-gray-200 drop-shadow md:text-lg lg:text-xl">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="max-w-3xl mx-auto mb-12 text-sm leading-relaxed text-gray-300 drop-shadow md:text-base lg:text-lg">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                <div className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-gray-300 md:text-sm">
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute z-20 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full left-4 top-1/2 bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-20 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full right-4 top-1/2 bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute z-20 flex space-x-2 transform -translate-x-1/2 bottom-8 left-1/2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-accent shadow-soft' 
                  : 'w-1.5 bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
