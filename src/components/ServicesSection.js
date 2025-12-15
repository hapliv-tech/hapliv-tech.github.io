import Link from 'next/link';
import React from 'react';
import { FaSmile, FaShieldAlt, FaBaby, FaBolt, FaCrown, FaSparkles } from 'react-icons/fa';
import { FadeIn, StaggerChildren } from './animations';

const ServicesSection = () => {
  const services = [
    {
      icon: FaSmile,
      title: "Orthodontics & Braces",
      description: "Traditional metal braces and ceramic braces for perfect teeth alignment. Expert orthodontic treatment in Gurgaon and West Delhi.",
      features: ["Metal Braces", "Ceramic Braces", "Lingual Braces", "Retainers"],
      link: "/treatments/braces",
      locationLink: "/braces-treatment-sector-65-gurgaon"
    },
    {
      icon: FaSmile,
      title: "Invisalign Clear Aligners",
      description: "Invisible orthodontic treatment with custom clear aligners. Discreet teeth straightening for adults and teens.",
      features: ["Invisible Treatment", "Removable Aligners", "Custom Fit", "Fast Results"],
      link: "/invisalign",
      locationLink: "/invisalign-sector-65-gurgaon"
    },
    {
      icon: FaCrown,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions with titanium implants. Restore your smile with natural-looking dental implants.",
      features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Same Day Implants"],
      link: "/treatments/implant",
      locationLink: "/dental-implants-gurgaon"
    },
    {
      icon: FaShieldAlt,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, root canals, and preventive treatments for the whole family.",
      features: ["Dental Cleaning", "Fillings", "Root Canal", "Extractions"],
      link: "/treatments",
      locationLink: "/locations"
    },
    {
      icon: FaBaby,
      title: "Kids Dentistry",
      description: "Gentle pediatric dental care in a child-friendly environment. Making dental visits fun and comfortable for children.",
      features: ["Pediatric Cleanings", "Fluoride Treatment", "Sealants", "Early Orthodontics"],
      link: "/treatments",
      locationLink: "/pediatric-dentist-gurgaon"
    },
    {
      icon: FaBolt,
      title: "Laser Dentistry",
      description: "Advanced laser treatments for gum disease, teeth whitening, and precise dental procedures with minimal discomfort.",
      features: ["Gum Treatment", "Teeth Whitening", "Cavity Detection", "Soft Tissue Surgery"],
      link: "/treatments/laser-dental-treatments",
      locationLink: "/laser-dentistry-gurgaon"
    }
  ];

  return (
    <section className="bg-white py-28">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-hero-sm">
              Our <span className="text-primary">Dental Services</span>
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
              Comprehensive orthodontic and dental care with the latest technology and techniques. 
              From braces to implants, we provide complete oral healthcare solutions.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 group rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6 transition-all duration-500 w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-primary-lightest group-hover:scale-110">
                    <service.icon className="transition-colors duration-500 w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-primary md:text-2xl">
                    {service.title}
                  </h3>

                  {/* Learn More Links */}
                  <div className="pt-6 mt-auto border-t border-gray-100">
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                      <Link 
                        href={service.link}
                        className="inline-block text-sm font-medium tracking-wide transition-all duration-300 text-primary hover:text-primary-dark group-hover:translate-x-1"
                      >
                        Learn More →
                      </Link>
                      {service.locationLink && (
                        <Link 
                          href={service.locationLink}
                          className="inline-block text-sm font-medium tracking-wide transition-all duration-300 text-accent hover:text-accent-dark group-hover:translate-x-1"
                        >
                          View Location →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerChildren>

        {/* CTA Section */}
        <FadeIn delay={0.3}>
          <div className="mt-24 text-center">
            <div className="relative p-12 overflow-hidden text-white bg-gradient-primary-horizontal rounded-card shadow-premium">
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Ready to Transform Your Smile?
              </h3>
              <p className="mb-8 text-lg text-white opacity-95 md:text-xl">
                Book your consultation today and take the first step towards a perfect smile
              </p>
              <Link 
                href={'/appointment'} 
                className="inline-block px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;