import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaAward, FaUsers, FaClock } from 'react-icons/fa';
import { FadeIn, SlideUp } from './animations';

const AboutSection = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:gap-20 md:grid-cols-2">
          {/* Left Content */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-hero-sm">
                  About <span className="text-primary">Hapliv Dental Clinic</span>
                </h2>
                <div className="w-16 h-0.5 mb-8 bg-accent"></div>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                At Hapliv Dental Clinic, we are the <strong>Best Orthodontist in Gurgaon & West Delhi</strong>, dedicated to providing exceptional orthodontic care 
                to patients across Gurgaon Sector 65 and West Delhi. Our state-of-the-art facilities and 
                experienced team of orthodontists ensure that every patient receives personalized, comfortable, and effective treatment.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                As one of the <strong>best orthodontists in Sector 65, Gurgaon</strong>, we specialize in <Link href="/treatments/braces" className="text-primary hover:underline font-semibold transition-colors duration-200">Braces</Link> and <Link href="/invisalign" className="text-primary hover:underline font-semibold transition-colors duration-200">Invisalign clear aligner</Link> treatments. 
                Our expert orthodontists offer advanced treatments including traditional braces, ceramic braces, self-ligating braces, and 
                Invisalign clear aligners for invisible teeth straightening. We also provide comprehensive dental care including <Link href="/treatments/implant" className="text-primary hover:underline font-semibold transition-colors duration-200">dental implants</Link>, <Link href="/treatments/painless-root-canal-treatment" className="text-primary hover:underline font-semibold transition-colors duration-200">root canal treatment</Link>, and <Link href="/treatments/laser-dental-treatments" className="text-primary hover:underline font-semibold transition-colors duration-200">LASER dentistry</Link>. <em>Our patient-first approach</em> combines 
                modern technology with gentle care delivered by our certified orthodontists to deliver outstanding results.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <SlideUp delay={0.1}>
                  <Link href="/locations" className="flex items-start space-x-4 transition-all duration-300 hover:scale-105 group">
                    <div className="flex-shrink-0 p-3 transition-all duration-300 bg-primary-lightest rounded-2xl group-hover:bg-primary group-hover:scale-110">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-primary">Two Convenient Locations</h4>
                      <p className="text-sm text-gray-600">Gurgaon & West Delhi</p>
                    </div>
                  </Link>
                </SlideUp>
                
                <SlideUp delay={0.15}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 transition-all duration-300 bg-accent-lighter rounded-2xl group-hover:scale-110">
                      <FaAward className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold tracking-tight text-gray-900">Expert Dental Surgeons</h4>
                      <p className="text-sm text-gray-600">Certified & Experienced</p>
                    </div>
                  </div>
                </SlideUp>
                
                <SlideUp delay={0.2}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 transition-all duration-300 bg-primary-lightest rounded-2xl group-hover:scale-110">
                      <FaUsers className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold tracking-tight text-gray-900">Family-Friendly</h4>
                      <p className="text-sm text-gray-600">Kids to Adults</p>
                    </div>
                  </div>
                </SlideUp>
                
                <SlideUp delay={0.25}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 transition-all duration-300 bg-accent-lighter rounded-2xl group-hover:scale-110">
                      <FaClock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold tracking-tight text-gray-900">Flexible Hours</h4>
                      <p className="text-sm text-gray-600">Evening & Weekend</p>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <SlideUp delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden shadow-soft-lg rounded-card">
                <img
                  src="https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic6.jpeg?updatedAt=1736010425956"
                  alt="Modern dental clinic interior at Hapliv Dental Clinic"
                  className="object-cover w-full h-96 transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute p-6 bg-white border-l-4 border-primary shadow-soft-lg -bottom-6 -left-6 rounded-card backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-semibold tracking-tight text-primary">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="absolute p-6 bg-white border-l-4 border-accent shadow-soft-lg -top-6 -right-6 rounded-card backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-semibold tracking-tight text-accent">2000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;