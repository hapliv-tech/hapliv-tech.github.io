import React from 'react';
// import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaClock, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { FadeIn } from './animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-gray-900">
      {/* Main Footer Content */}
      <div className="container px-4 py-20 mx-auto max-w-7xl">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <FadeIn>
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-accent">Hapliv Dental Clinic</h3>
                <p className="leading-relaxed text-gray-300 text-base">
                  Leading orthodontist and dental care provider in Gurgaon Sector 65 and West Delhi.
                  Transforming smiles with advanced treatments and personalized care.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-gray-400">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/haplivdentalclinic/"
                    className="p-3 transition-all duration-300 bg-gray-800 rounded-full hover:bg-blue-600 hover:scale-110 active:scale-95"
                    aria-label="Facebook" target='_blank'
                  >
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/hapliv_dental_clinic"
                    className="p-3 transition-all duration-300 bg-gray-800 rounded-full hover:bg-pink-600 hover:scale-110 active:scale-95"
                    aria-label="Instagram" target='_blank'
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/HaplivDental"
                    className="p-3 transition-all duration-300 bg-gray-800 rounded-full hover:bg-blue-400 hover:scale-110 active:scale-95"
                    aria-label="Twitter" target='_blank'
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@HaplivDental"
                    className="p-3 transition-all duration-300 bg-gray-800 rounded-full hover:bg-red-600 hover:scale-110 active:scale-95"
                    aria-label="YouTube" target='_blank'
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div>
              <h4 className="mb-6 text-sm font-semibold tracking-wide uppercase text-gray-400">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href={'/'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Home</Link>
                </li>
                <li>
                  <Link href={'/about-us'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">About Us</Link>
                </li>
                <li>
                  <Link href={'/invisalign'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Invisalign</Link>
                </li>
                <li>
                  <Link href={'/blogs'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Dental Blogs</Link>
                </li>
                <li>
                  <Link href={'/faqs'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Frequently Asked Questions (FAQs)</Link>
                </li>
                <li>
                  <Link href={'/technology'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Technologies we use</Link>
                </li>
                <li>
                  <Link href={'/treatments'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Treatments</Link>
                </li>
                <li>
                  <Link href={'/gallery'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Photo Gallery</Link>
                </li>
                <li>
                  <Link href={'/locations'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Our Locations</Link>
                </li>
                <li>
                  <Link href={'/appointment'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Book Appointment</Link>
                </li>
                <li>
                  <Link href={'/sitemap'} className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Sitemap</Link>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <h4 className="mb-6 text-sm font-semibold tracking-wide uppercase text-gray-400">Our Services</h4>
              <ul className="space-y-3">
                <li><Link href="/best-orthodontist-gurgaon" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Best Orthodontist</Link></li>
                <li><Link href="/treatments/braces" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Braces Treatment</Link></li>
                <li><Link href="/invisalign" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Invisalign Clear Aligners</Link></li>
                <li><Link href="/dental-implants-gurgaon" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Dental Implants</Link></li>
                <li><Link href="/root-canal-treatment-gurgaon" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Root Canal Treatment</Link></li>
                <li><Link href="/laser-dentistry-gurgaon" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">LASER Dentistry</Link></li>
                <li><Link href="/treatments/teeth-whitening" className="text-gray-300 transition-colors duration-200 hover:text-white text-base">Teeth Whitening</Link></li>
              </ul>
            </div>
          </FadeIn>
          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div>
              <h4 className="mb-6 text-sm font-semibold tracking-wide uppercase text-gray-400">Contact Information</h4>
            <div className="space-y-4">
              {/* Gurgaon Location */}
              <div>
                <h5 className="mb-2 font-semibold text-purple-400">Gurgaon Sector 65</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <FaMapMarkerAlt className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0 inline-block" />
                    <Link target='_blank' href={'https://www.google.com/maps/dir/@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en'}>
                        <span className="text-gray-300">Shop No. 27, First Floor, North Block, M3M Teepoint, Sector 65, Gurgaon</span>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhoneAlt className="flex-shrink-0 w-4 h-4 text-purple-400" />
                    <a href="tel:+919810471255" className="text-gray-300 hover:text-white">+91-9810471255</a>
                  </div>
                </div>
                
              </div>
              {/* Hours */}
              <div className="flex items-start space-x-2">
                <FaClock className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Mon-Sat: 10 AM - 8 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>

              {/* West Delhi Location */}
              <div>
                <h5 className="mb-2 font-semibold text-purple-400">West Delhi</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <FaMapMarkerAlt className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <a target='_blank' href={'https://www.google.com/maps/dir/@28.6225073,76.9564625,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d051fdd5a0e61:0xf08aa8b6f6af9564!2m2!1d77.0388639!2d28.6225322!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'}>
                      <span className="text-gray-300">B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi, Delhi, 110059</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhoneAlt className="flex-shrink-0 w-4 h-4 text-purple-400" />
                    <a href="tel:+919810471255" className="text-gray-300 hover:text-white">+91-9810471255</a>
                  </div>
                </div>
              </div>
              {/* Hours */}
              <div className="flex items-start space-x-2">
                <FaClock className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Mon-Sat: 5 PM - 8 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <FaEnvelope className="flex-shrink-0 w-4 h-4 text-orange-500" />
                <a href="mailto:haplivdentalclinic@gmail.com" className="text-gray-300 hover:text-white">haplivdentalclinic@gmail.com</a>
              </div>

              
            </div>
          </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Hapliv Dental Clinic. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 transition-colors duration-300 hover:text-white">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 transition-colors duration-300 hover:text-white">Terms of Service</a>
              <a href="#sitemap" className="text-gray-400 transition-colors duration-300 hover:text-white">Sitemap</a>
            </div> */}
          </div>

          {/* SEO Footer Text */}
          <div className="pt-6 mt-6 text-xs text-center text-gray-500 border-t border-gray-800">
            <p className='text-gray-500 leading-relaxed'>
              Best Orthodontist in Gurgaon Sector 65 and West Delhi | Braces, Invisalign, Dental Implants |
              Top Dental Clinic in Gurgaon and Delhi NCR | Affordable Orthodontic Treatment |
              Kids Dentistry and Family Dental Care
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org LocalBusiness Markup */}
      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DentistOffice",
          "name": "Hapliv Dental Clinic",
          "description": "Leading orthodontist and dental care provider in Gurgaon and West Delhi specializing in braces, Invisalign, and comprehensive dental treatments.",
          "url": "https://haplivdentalclinic.com",
          "telephone": ["+91-9810471255"],
          "email": "haplivdentalclinic@gmail.com",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Shop No. 27, First Floor, North Block, M3M Teepoint, Sector 65, Gurgaon",
              "addressLocality": "Gurgaon",
              "addressRegion": "Haryana",
              "postalCode": "122011",
              "addressCountry": "IN"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi, Delhi, 110059",
              "addressLocality": "West Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110059",
              "addressCountry": "IN"
            }
          ],
          "openingHours": "Mo-Sa 09:00-20:00, Su 10:00-18:00",
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, UPI, Debit Card",
          "currenciesAccepted": "INR"
        })}
      </script> */}
    </footer>
  );
};

export default Footer;
