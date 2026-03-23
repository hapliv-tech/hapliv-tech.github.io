import ImageGallery from "components/image-gallery/img-gallery";
import { FadeIn } from "components/animations";
import Link from "next/link";

import BookAppointmentLink from 'components/seo/BookAppointmentLink';
const images = [
  {
    id: "our-patients",
    link: "gallery/our-patients",
    src: "https://ik.imagekit.io/thwkz9dxk/Patients/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-custom",
    alt: "Happy patients at Hapliv Dental Clinic in Gurgaon - Before and after dental treatment results",
    caption: "Our Patients",
  },
  {
    id: "hapliv-clinic-tour",
    link: "gallery/dental-clinic-tour",
    src: "https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1710439289110",
    alt: "Hapliv Dental Clinic tour - Modern dental clinic interior in Sector 65, Gurgaon with state-of-the-art equipment",
    caption: "Clinic Tour",
  },
  {
    id: "hapliv-treatment-results",
    link: "gallery/treatment-results",
    src: "https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/hapliv-patient21.jpeg?updatedAt=1736269834863",
    alt: "Dental treatment results at Hapliv Dental Clinic - Successful braces, Invisalign, and cosmetic dentistry transformations",
    caption: "Treatment Results",
  },
  {
    id: "hapliv-oral-health-awareness-camp",
    link: "gallery/oral-health-awareness-camp",
    src: "https://ik.imagekit.io/thwkz9dxk/Camp/hapliv-dental-camp-at-isle-de-royale-gurgaon8.jpeg?tr=n-ik_ml_thumbnail%2Cw-1080%2Ch-1080%2Cfo-custom&updatedAt=1736269834863",
    alt: "Oral health awareness camp organized by Hapliv Dental Clinic at Isle De Royale, Gurgaon - Community dental education program",
    caption: "Oral Health Awareness Camp",
  },
];

export const metadata = {
  title: "Photo Gallery | Patient Results, Clinic Tour & More",
  description:
    "Explore our comprehensive photo gallery featuring happy patients, modern clinic tours, impressive treatment results, and community oral health awareness programs at Hapliv Dental Clinic in Gurgaon and West Delhi.",
  keywords:
    "Photo Gallery, Dental Gallery, Patient Photos, Clinic Tour, Treatment Results, Before and After Photos, Oral Health Camp, Hapliv Dental Clinic Gallery, Dental Clinic Gurgaon, Dental Clinic West Delhi",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    description:
      "Discover our photo gallery featuring real patient smiles, modern clinic tours, and stunning treatment results at Hapliv Dental Clinic.",
    url: "https://haplivdentalclinic.com/gallery",
    images: ["https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg"],
    type: "website",
    siteName: "Hapliv Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Browse our photo gallery at Hapliv Dental Clinic and witness the journey of our patients, clinic tours, and treatment results from our state-of-the-art facilities.",
    images: ["https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-28 text-white bg-primary-dark">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                Photo Gallery
              </h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
                Explore our comprehensive photo gallery featuring happy patients, modern clinic tours, impressive treatment results, and community oral health awareness programs at Hapliv Dental Clinic in Gurgaon and West Delhi.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <ImageGallery images={images} />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="px-4 py-28 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Explore Our Dental Clinic Gallery
              </h2>
              <p>
                Welcome to the <strong>Hapliv Dental Clinic Photo Gallery</strong>, where we showcase the journey of our patients, our state-of-the-art facilities, and our commitment to excellence in dental care. Our gallery provides a comprehensive view of the exceptional dental treatments and services we offer at our clinics in <strong>Gurgaon (Sector 65)</strong> and <strong>West Delhi</strong>.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Our Patients Gallery
              </h3>
              <p>
                Our <strong>Patients Gallery</strong> features real before and after photos of successful dental treatments. See the transformative results from our <strong>braces treatment</strong>, <strong>Invisalign clear aligner</strong> therapy, <strong>root canal treatment</strong>, <strong>dental implants</strong>, <strong>teeth whitening</strong>, and <strong>cosmetic dentistry</strong> procedures. These authentic patient photos demonstrate our expertise and commitment to delivering exceptional dental outcomes.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Treatment Results Gallery
              </h3>
              <p>
                Browse through our <strong>Treatment Results Gallery</strong> to see impressive before and after photos showcasing successful dental transformations. From orthodontic treatments like <strong>braces</strong> and <strong>Invisalign</strong> to restorative procedures such as <strong>dental implants</strong> and <strong>root canal treatment</strong>, our results speak for themselves. Each case represents our dedication to achieving optimal dental health and beautiful smiles.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Dental Clinic Tour
              </h3>
              <p>
                Take a virtual <strong>Dental Clinic Tour</strong> of our modern facility in <strong>Sector 65, Gurgaon</strong>. Our clinic features state-of-the-art dental equipment, comfortable treatment rooms, and advanced technology including <strong>Apex Locator</strong>, <strong>Endomotor</strong>, <strong>3D scanning</strong>, and <strong>laser dentistry</strong> equipment. Experience the premium environment where we provide comprehensive dental care.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Oral Health Awareness Camp
              </h3>
              <p>
                Our <strong>Oral Health Awareness Camp</strong> gallery showcases our community outreach programs in <strong>Gurgaon</strong> and <strong>Delhi-NCR</strong>. We organize dental health camps to promote preventive dental care, educate communities about oral hygiene, and provide free dental check-ups. These camps reflect our commitment to improving dental health awareness in the community.
              </p>
              <div className="mt-12 p-8 bg-white rounded-card shadow-soft-lg">
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-primary">
                  Visit Our Dental Clinics
                </h3>
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  Experience our premium dental care at our clinics in <strong>Gurgaon (Sector 65)</strong> and <strong>West Delhi</strong>. Our expert dental surgeons specialize in <strong>orthodontics</strong>, <strong>endodontics</strong>, <strong>prosthodontics</strong>, and <strong>cosmetic dentistry</strong>. Book your appointment today to begin your journey towards a healthier, more beautiful smile.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <BookAppointmentLink href="/appointment"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                  <Link
                    href="tel:+919810471255"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-center text-primary transition-all duration-300 transform border-2 border-primary rounded-button hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call: +91 98104 71255
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
