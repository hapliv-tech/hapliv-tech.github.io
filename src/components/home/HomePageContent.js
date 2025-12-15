import dynamic from "next/dynamic";
import Associations from "components/associations";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import BestDentalClinicSection from "components/best-dental-clinic";
import WhyChooseUsSection from "components/WhyChooseUs";
import SmileViewAssement from "components/smile-view";
import HappyPatientSection from "components/happy-patient-section";
import ContactSection from "components/ContactSection";

// Lazy load TestimonialsMarquee - heavy component with animations
const TestimonialsMarqueeWrapper = dynamic(
  () => import("components/home/TestimonialsMarqueeWrapper"),
  {
    loading: () => (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent"></div>
      </div>
    ),
  }
);

export default function HomePageContent() {
  return (
    <div>
      <HeroSection heading="Best Dentist in Gurgaon & West Delhi – Offering Invisalign, Root Canal Treatment, and More" />
      <AboutSection />
      <BestDentalClinicSection heading="Best Dental Clinic" />
      <WhyChooseUsSection />
      <SmileViewAssement heading="Get a Free Smile Assessment – Start Your Journey to Perfect Teeth" />
      <TestimonialsMarqueeWrapper />
      <HappyPatientSection heading="Hear from Our Happy Patients About Our Painless Dental Treatments" />
      <ContactSection />
      <Associations />
    </div>
  );
}
