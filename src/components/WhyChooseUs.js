import React from 'react';
import { FaAward, FaUsers, FaClock, FaShieldAlt, FaHeart, FaStar } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: FaAward,
      title: "10+ Years of Excellence",
      description: "Extensive experience in orthodontics and general dentistry with proven track record of successful treatments."
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified orthodontists and dental specialists committed to providing the highest quality care."
    },
    {
      icon: FaClock,
      title: "Convenient Locations",
      description: "Two strategically located clinics in Gurgaon Sector 65 and West Delhi for your convenience."
    },
    {
      icon: FaShieldAlt,
      title: "Latest Technology",
      description: "State-of-the-art equipment including digital X-rays, 3D imaging, and laser dentistry for precise treatments."
    },
    {
      icon: FaHeart,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans focused on patient comfort, safety, and achieving the best possible outcomes."
    },
    {
      icon: FaStar,
      title: "Affordable Excellence",
      description: "Competitive pricing with flexible payment options and insurance acceptance for quality dental care."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Choose <span className="text-[#5A09A4]">Hapliv Dental Clinic?</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-orange-500"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover what makes us the preferred choice for orthodontics and dental care 
            in Gurgaon and West Delhi.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 text-center transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl group hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 group-hover:scale-110">
                <reason.icon className="w-10 h-10 text-[#5A09A4]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#5A09A4]">
                {reason.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="p-8 mt-16 bg-white shadow-lg rounded-2xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-[#5A09A4]">2000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-600">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-[#5A09A4]">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-600">2</div>
              <div className="text-gray-600">Clinic Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;