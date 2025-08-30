import Link from 'next/link';
import React from 'react';
import { FaSmile, FaShieldAlt, FaBaby, FaBolt, FaCrown, FaSparkles } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: FaSmile,
      title: "Orthodontics & Braces",
      description: "Traditional metal braces and ceramic braces for perfect teeth alignment. Expert orthodontic treatment in Gurgaon and West Delhi.",
      features: ["Metal Braces", "Ceramic Braces", "Lingual Braces", "Retainers"]
    },
    {
      icon: FaSmile,
      title: "Invisalign Clear Aligners",
      description: "Invisible orthodontic treatment with custom clear aligners. Discreet teeth straightening for adults and teens.",
      features: ["Invisible Treatment", "Removable Aligners", "Custom Fit", "Fast Results"]
    },
    {
      icon: FaCrown,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions with titanium implants. Restore your smile with natural-looking dental implants.",
      features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Same Day Implants"]
    },
    {
      icon: FaShieldAlt,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, root canals, and preventive treatments for the whole family.",
      features: ["Dental Cleaning", "Fillings", "Root Canal", "Extractions"]
    },
    {
      icon: FaBaby,
      title: "Kids Dentistry",
      description: "Gentle pediatric dental care in a child-friendly environment. Making dental visits fun and comfortable for children.",
      features: ["Pediatric Cleanings", "Fluoride Treatment", "Sealants", "Early Orthodontics"]
    },
    {
      icon: FaBolt,
      title: "Laser Dentistry",
      description: "Advanced laser treatments for gum disease, teeth whitening, and precise dental procedures with minimal discomfort.",
      features: ["Gum Treatment", "Teeth Whitening", "Cavity Detection", "Soft Tissue Surgery"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our <span className="text-[#5A09A4]">Dental Services</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-orange-500"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Comprehensive orthodontic and dental care with the latest technology and techniques. 
            From braces to implants, we provide complete oral healthcare solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl hover:border-purple-200 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 group-hover:scale-110">
                {<service.icon className="w-8 h-8 text-[#5A09A4]" /> }
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#5A09A4]">
                {service.title}
              </h3>
              {/* <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p> */}

              {/* Features List */}
              {/* <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 mr-3 bg-orange-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul> */}

              {/* Learn More Link */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <button className="font-semibold text-[#5A09A4] transition-colors duration-300 hover:text-purple-700">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 text-white bg-gradient-to-r from-[#5A09A4] to-orange-500 rounded-2xl">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Ready to Transform Your Smile?
            </h3>
            <p className="mb-6 text-xl text-white opacity-90">
              Book your consultation today and take the first step towards a perfect smile
            </p>
            <Link href={'/appointment'}>
                <a className="px-8 py-4 text-lg font-semibold text-[#5A09A4] transition-all duration-300 transform bg-white rounded-full hover:bg-gray-100 hover:scale-105">
                    Schedule Appointment
                </a>
            </Link>
              
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;