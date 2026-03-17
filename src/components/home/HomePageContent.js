import dynamic from "next/dynamic";
import Associations from "components/associations";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import BestDentalClinicSection from "components/best-dental-clinic";
import WhyChooseUsSection from "components/WhyChooseUs";
import SmileViewAssement from "components/smile-view";
import HappyPatientSection from "components/happy-patient-section";
import ContactSection from "components/ContactSection";
import BannerSingle from "components/banner/BannerSingle";

// Lazy load TestimonialsMarquee - heavy component with animations
const TestimonialsMarqueeWrapper = dynamic(
  () => import("components/home/TestimonialsMarqueeWrapper"),
  {
    loading: () => (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
      </div>
    ),
  }
);

export default function HomePageContent() {
  return (
    <div>
      <HeroSection heading="Best Dentist in Gurgaon & West Delhi – Offering Invisalign, Root Canal Treatment, and More" />
      <AboutSection />
      
      {/* Homepage Sidebar Banner */}
      <div className="container max-w-6xl px-4 py-8 mx-auto">
        <BannerSingle position="homepage-sidebar" className="max-w-md mx-auto" />
      </div>
      
      <BestDentalClinicSection heading="Best Dental Clinic" />
      <WhyChooseUsSection />
      <SmileViewAssement heading="Get a Free Smile Assessment – Start Your Journey to Perfect Teeth" />
      <TestimonialsMarqueeWrapper />
      <HappyPatientSection heading="Hear from Our Happy Patients About Our Painless Dental Treatments" />
      
      {/* Homepage Bottom Banner - Full Width */}
      <div className="w-full py-8">
        <BannerSingle position="homepage-bottom" className="w-full" />
      </div>
      
      <ContactSection />
      <Associations />
    </div>
  );
}
