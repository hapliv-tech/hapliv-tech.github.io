import React from 'react';
import Link from 'next/link';
import { FaAward, FaUsers, FaClock, FaShieldAlt, FaHeart, FaStar } from 'react-icons/fa';
import { FadeIn, StaggerChildren } from './animations';

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
      description: "Two strategically located clinics in Gurgaon Sector 65 and West Delhi for your convenience.",
      link: "/locations"
    },
    {
      icon: FaShieldAlt,
      title: "Latest Technology",
      description: "State-of-the-art equipment including digital X-rays, 3D imaging, and laser dentistry for precise treatments.",
      link: "/technology"
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
    <section className="px-4 py-16 bg-gray-50 md:py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Why Choose <span className="text-primary">Hapliv Dental Clinic?</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
              Discover what makes us the preferred choice for orthodontics and dental care 
              in Gurgaon and West Delhi.
            </p>
          </div>
        </FadeIn>

        {/* Reasons Grid */}
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const ContentWrapper = reason.link ? Link : 'div';
              const wrapperProps = reason.link ? { href: reason.link, className: "block" } : {};
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <ContentWrapper {...wrapperProps}>
                    <div className="p-8 text-center transition-all duration-500 bg-white shadow-soft rounded-card hover:shadow-soft-lg group hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 transition-all duration-500 rounded-2xl bg-primary-lightest group-hover:bg-primary group-hover:scale-110">
                        <reason.icon className="w-8 h-8 text-primary transition-colors duration-500 group-hover:text-white" />
                      </div>
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-primary md:text-2xl">
                        {reason.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600 text-base">
                        {reason.description}
                      </p>
                    </div>
                  </ContentWrapper>
                </FadeIn>
              );
            })}
          </div>
        </StaggerChildren>

        {/* Stats Section */}
        <FadeIn delay={0.3}>
          <div className="p-10 mt-16 bg-white border border-gray-100 shadow-soft-lg rounded-card">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 text-4xl font-semibold tracking-tight text-primary">2000+</div>
                <div className="text-gray-600 text-base">Happy Patients</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-semibold tracking-tight text-accent">10+</div>
                <div className="text-gray-600 text-base">Years Experience</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-semibold tracking-tight text-primary">99%</div>
                <div className="text-gray-600 text-base">Success Rate</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-semibold tracking-tight text-accent">2</div>
                <div className="text-gray-600 text-base">Clinic Locations</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;