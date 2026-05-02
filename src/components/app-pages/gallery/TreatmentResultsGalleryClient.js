"use client";
import ImageGallery from 'components/image-gallery/img-gallery';
import useGalleryData from 'hooks/useGalleryData';
import { FadeIn } from 'components/animations';
import ConsultationCtaClient from 'components/app-pages/ConsultationCtaClient';
import { PageHero, SectionHeader } from 'components/app-pages/PageSections';

export default function TreatmentResultsGalleryClient() {
  const { imagesList, isLoading, error, retry } = useGalleryData('treatment_results');

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
      <PageHero
        eyebrow="Treatment results"
        title="Dental Treatment Results"
        description="View before and after photos of dental treatments at Hapliv Dental Clinic, including braces, Invisalign, root canal, implants, teeth whitening, and cosmetic dentistry procedures."
        secondaryHref="#gallery"
        secondaryLabel="View Results"
        highlights={[
          'Before and after cases',
          'Orthodontic transformations',
          'Restorative dental outcomes',
          'Cosmetic smile makeovers',
        ]}
      />

      {/* Gallery Section */}
      <section id="gallery" className="px-4 py-16 bg-white md:px-8 lg:py-20 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Real patient outcomes"
            title="Before and after treatment photos"
            description="Browse documented dental transformations from the Hapliv team."
          />
          <ImageGallery images={imagesList} />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="px-4 py-16 bg-gray-50 md:px-8 lg:py-20">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Real Dental Treatment Results at Hapliv Dental Clinic
              </h2>
              <p>
                Our <strong>Treatment Results Gallery</strong> showcases authentic before and after photos of successful dental treatments performed at <strong>Hapliv Dental Clinic</strong> in <strong>Gurgaon (Sector 65)</strong> and <strong>West Delhi</strong>. Each case represents our commitment to excellence and our expertise in delivering exceptional dental outcomes.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Orthodontic Treatment Results
              </h3>
              <p>
                See remarkable transformations from our <strong>braces treatment</strong> and <strong>Invisalign clear aligner</strong> therapy. Our certified orthodontists use advanced techniques to straighten teeth, correct bites, and create beautiful smiles. The results demonstrate successful treatment of crowding, spacing, overbite, underbite, and other orthodontic issues.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Restorative Dental Treatment Results
              </h3>
              <p>
                Browse through successful <strong>root canal treatment</strong> and <strong>dental implant</strong> results. Our expert endodontists and implantologists use advanced technology including <strong>Apex Locator</strong>, <strong>Endomotor</strong>, and <strong>3D imaging</strong> to ensure optimal outcomes. These results show how we save natural teeth and restore function with permanent solutions.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Cosmetic Dentistry Results
              </h3>
              <p>
                Explore stunning transformations from <strong>teeth whitening</strong>, <strong>dental veneers</strong>, <strong>crowns and bridges</strong>, and other cosmetic procedures. Our cosmetic dentistry results showcase beautiful smile makeovers that enhance both aesthetics and confidence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <ConsultationCtaClient
        title="Achieve your dream smile"
        description="Book a consultation and the team will help you understand which treatment path fits your case."
        ctaLocation="treatment-results-gallery-footer"
      />
    </div>
  );
}
