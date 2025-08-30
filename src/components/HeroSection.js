import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaPhone, FaStar, FaArrowRight, FaArrowLeft, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

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
          <div className="max-w-6xl p-16 text-center text-white">
            <h1 className="mb-6 text-2xl font-black leading-snug text-white md:text-4xl animate-fade-in drop-shadow-lg">
              {/* <h1 className="text-2xl font-semibold leading-snug text-white drop-shadow-md animate-fade-in"> */}
              {heroSlides[currentSlide].title}
            </h1>
            {/* <h2 className="mb-4 text-lg font-semibold text-orange-400 md:text-2xl"> */}
            <h2 className="mb-4 font-semibold text-gray-300 text-md md:text-lg drop-shadow animate-fade-in">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="max-w-6xl mx-auto mb-8 text-sm leading-relaxed text-gray-400 md:text-md animate-fade-in">
              {heroSlides[currentSlide].description}
            </p>

            <div className="grid items-center justify-center row-span-3 gap-4 min-w-max">
              <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
                <a target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-[#0fa457] drop-shadow-lg rounded-full hover:bg-[#28e06c] hover:scale-105"
                ><FaWhatsapp className="inline-block w-5 h-5 mr-2" />Book Consultation
                </a></Link>

              <Link href={'tel:+919810471255'}>
                <a
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform border-2 border-white rounded-full text-text min-w-max hover:bg-white hover:text-black hover:scale-105">
                  <FaPhoneAlt className="inline-block w-5 h-5 mr-2" />
                  Call Now <span className='hidden md:inline-block'>: +91-9810471255</span> 
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute z-20 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full left-4 top-1/2 bg-opacity-20 hover:bg-opacity-30"
        >
          <FaArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-20 p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full right-4 top-1/2 bg-opacity-20 hover:bg-opacity-30"
        >
          <FaArrowRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute z-20 flex space-x-3 transform -translate-x-1/2 bottom-6 left-1/2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-white bg-opacity-50'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;