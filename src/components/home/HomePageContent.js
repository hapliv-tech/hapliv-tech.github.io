import dynamic from "next/dynamic";
import Link from "next/link";
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
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
      </div>
    ),
  }
);

export default function HomePageContent() {
  return (
    <div>
      <HeroSection heading="Braces & Invisalign in Gurgaon & West Delhi — certified provider, two locations" />
      <AboutSection />
      <BestDentalClinicSection heading="Best Dental Clinic" />
      <WhyChooseUsSection />
      <section className="px-4 py-14 bg-slate-50 border-y border-slate-100">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            Planning treatment in Gurgaon?
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Use our free{' '}
            <Link href="/dental-guides" className="font-semibold text-primary underline hover:text-primary-dark">
              dental guides
            </Link>{' '}
            — plan the right Braces, Invisalign, or Dental Implant consultation, then book or WhatsApp our Sector 65 clinic.
          </p>
        </div>
      </section>
      <SmileViewAssement heading="Get a Free Smile Assessment – Start Your Journey to Perfect Teeth" />
      <TestimonialsMarqueeWrapper />
      <HappyPatientSection heading="Hear from Our Happy Patients About Their Dental Care at Hapliv" />
      <ContactSection />
      <Associations />
    </div>
  );
}
