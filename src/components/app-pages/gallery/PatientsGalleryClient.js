"use client";
import ImageGallery from 'components/image-gallery/img-gallery';
import useGalleryData from 'hooks/useGalleryData';
import { FadeIn } from 'components/animations';
import Link from 'next/link';

import BookAppointmentLink from 'components/seo/BookAppointmentLink';
export default function PatientsGalleryClient() {
  const { imagesList, isLoading, error, retry } = useGalleryData('patients');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-lg text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex flex-col items-center justify-center min-h-[600px] px-4">
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-lg text-gray-800 mb-2 font-semibold">Unable to load gallery</p>
          <p className="text-sm text-gray-600 mb-4 text-center max-w-md">{error}</p>
          <button
            onClick={retry}
            className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!imagesList || imagesList.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <p className="text-lg text-gray-600">No images available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-28 text-white bg-primary-dark">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                Our Happy Patients
              </h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
                View our gallery of happy patients at Hapliv Dental Clinic. See real before and after photos of successful dental treatments including braces, Invisalign, root canal, implants, and cosmetic dentistry.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <ImageGallery images={imagesList} />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="px-4 py-28 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Real Patient Success Stories at Hapliv Dental Clinic
              </h2>
              <p>
                Our <strong>Patients Gallery</strong> showcases the smiles and success stories of our valued patients at <strong>Hapliv Dental Clinic</strong> in <strong>Gurgaon (Sector 65)</strong> and <strong>West Delhi</strong>. These authentic before and after photos demonstrate the transformative results we achieve through our expert dental care.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Orthodontic Treatment Success Stories
              </h3>
              <p>
                See the remarkable transformations from our <strong>braces treatment</strong> and <strong>Invisalign clear aligner</strong> therapy. Our certified orthodontists have helped hundreds of patients achieve straighter teeth and beautiful smiles. From teenagers to adults, our patients have experienced life-changing results through our orthodontic treatments.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Restorative Treatment Results
              </h3>
              <p>
                Browse through successful <strong>root canal treatment</strong> and <strong>dental implant</strong> cases. Our expert endodontists and implantologists use advanced technology to save natural teeth and restore function. These patient photos show how we've helped people regain their confidence and oral health.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Cosmetic Dentistry Transformations
              </h3>
              <p>
                Explore stunning smile makeovers from our <strong>teeth whitening</strong>, <strong>dental veneers</strong>, <strong>crowns and bridges</strong>, and other cosmetic procedures. Our cosmetic dentistry results showcase beautiful transformations that enhance both aesthetics and self-confidence.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Patient-Centered Care
              </h3>
              <p>
                At <strong>Hapliv Dental Clinic</strong>, our patients are at the heart of everything we do. We take pride in building lasting relationships with our patients and helping them achieve their dental health goals. Each patient in our gallery represents our commitment to excellence and our dedication to delivering exceptional dental outcomes.
              </p>
              <div className="mt-12 p-8 bg-white rounded-card shadow-soft-lg">
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-primary">
                  Join Our Success Stories
                </h3>
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  Ready to transform your smile? Our expert dental surgeons at <strong>Hapliv Dental Clinic</strong> are here to help you achieve the results you see in our patient gallery. Book your consultation today and take the first step towards a healthier, more beautiful smile.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <BookAppointmentLink href="/appointment"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Consultation
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

