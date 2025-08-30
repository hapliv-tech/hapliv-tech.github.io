import React from 'react';
import { FaMapMarkerAlt, FaAward, FaUsers, FaClock } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container p-4 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                About <span className="text-[#5A09A4]">Hapliv Dental Clinic</span>
              </h2>
              <div className="w-20 h-1 mb-6 bg-orange-500"></div>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700">
              At Hapliv Dental Clinic, we are dedicated to providing exceptional orthodontic and dental care 
              to patients across Gurgaon Sector 65 and West Delhi. Our state-of-the-art facilities and 
              experienced team ensure that every patient receives personalized, comfortable, and effective treatment.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Specializing in orthodontics, we offer advanced treatments including traditional braces, 
              Invisalign clear aligners, and comprehensive smile design. <em>Our patient-first approach</em> combines 
              modern technology with gentle care to deliver outstanding results.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#5A09A4]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Two Convenient Locations</h4>
                  <p className="text-sm text-gray-600">Gurgaon & West Delhi</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaAward className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Orthodontist</h4>
                  <p className="text-sm text-gray-600">Certified & Experienced</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <FaUsers className="w-6 h-6 text-[#5A09A4]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Family-Friendly</h4>
                  <p className="text-sm text-gray-600">Kids to Adults</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaClock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Hours</h4>
                  <p className="text-sm text-gray-600">Evening & Weekend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="https://ik.imagekit.io/thwkz9dxk/hapliv-gurgaon-best-dental-clinic6.jpeg?updatedAt=1736010425956"
                alt="Modern dental clinic interior at Hapliv Dental Clinic"
                className="object-cover w-full h-96"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute p-6 bg-white border-l-4 border-[#5A09A4] shadow-lg -bottom-6 -left-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#5A09A4]">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="absolute p-6 bg-white border-l-4 border-orange-500 shadow-lg -top-6 -right-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;