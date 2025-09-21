"use client";

import Associations from "components/associations";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import BestDentalClinicSection from "components/best-dental-clinic";
import WhyChooseUsSection from "components/WhyChooseUs";
import SmileViewAssement from "components/smile-view";
import TestimonialsMarquee from "components/experiments/TestimonialMarquee";
import HappyPatientSection from "components/happy-patient-section";
import ContactSection from "components/ContactSection";
import { useIsMobile } from "utils/useIsMobile";

export default function HomePageContent() {
  const isMobile = useIsMobile();

  return (
    <div>
      <HeroSection heading="Best Dentist in Gurgaon & West Delhi – Offering Invisalign, Root Canal Treatment, and More" />
      <AboutSection />
      <BestDentalClinicSection heading="Best Dental Clinic" />
      <WhyChooseUsSection />
      <SmileViewAssement heading="Get a Free Smile Assessment – Start Your Journey to Perfect Teeth" />
      <TestimonialsMarquee
        columns={isMobile ? 1 : 3}
        speeds={isMobile ? [50] : [31, 51, 21]}
        reverseEvery={3}
      />
      <HappyPatientSection heading="Hear from Our Happy Patients About Our Painless Dental Treatments" />
      <ContactSection />
      <Associations />
    </div>
  );
}
