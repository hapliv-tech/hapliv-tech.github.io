"use client";
import ImageGallery from 'components/image-gallery/img-gallery';
import useGalleryData from 'hooks/useGalleryData';
import { FadeIn } from 'components/animations';
import ConsultationCtaClient from 'components/app-pages/ConsultationCtaClient';
import { PageHero, SectionHeader } from 'components/app-pages/PageSections';

export default function ClinicTourGalleryClient() {
  const { imagesList, isLoading, error, retry } = useGalleryData('clinic_tour');

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
        eyebrow="Clinic tour"
        title="Dental Clinic Tour"
        description="Take a virtual tour of Hapliv Dental Clinic in Sector 65, Gurgaon. Explore the modern facility, treatment rooms, and advanced dental technology."
        secondaryHref="#gallery"
        secondaryLabel="View Tour"
        highlights={[
          'Sector 65 clinic interiors',
          'Modern treatment rooms',
          'Advanced dental equipment',
          'Sterilization and safety areas',
        ]}
      />

      {/* Gallery Section */}
      <section id="gallery" className="px-4 py-16 bg-white md:px-8 lg:py-20 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Inside Hapliv"
            title="Clinic spaces, rooms and equipment"
            description="See the Gurgaon clinic environment before you visit."
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
                Modern Dental Facility in Sector 65, Gurgaon
              </h2>
              <p>
                Welcome to <strong>Hapliv Dental Clinic</strong> in <strong>Sector 65, Gurgaon</strong>. Our modern dental facility is designed to provide a comfortable, safe, and premium dental care experience. Take a virtual tour through our clinic and discover the advanced technology and amenities we offer.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                State-of-the-Art Treatment Rooms
              </h3>
              <p>
                Our clinic features spacious, well-equipped treatment rooms designed for patient comfort and optimal treatment delivery. Each room is equipped with modern dental chairs, advanced lighting systems, and state-of-the-art dental equipment to ensure the best possible treatment experience.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Advanced Dental Technology
              </h3>
              <p>
                Our clinic is equipped with cutting-edge dental technology including <strong>digital X-ray systems</strong>, <strong>3D scanning</strong> with <strong>Itero intraoral scanner</strong>, <strong>Apex Locator</strong> for precise root canal treatment, <strong>Endomotor</strong> for efficient root canal procedures, <strong>laser dentistry</strong> equipment, and <strong>dental microscopes</strong> for enhanced precision.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Sterilization and Safety Protocols
              </h3>
              <p>
                At <strong>Hapliv Dental Clinic</strong>, we maintain the highest standards of sterilization and infection control. Our clinic follows strict protocols for instrument sterilization, surface disinfection, and patient safety to ensure a hygienic environment for all treatments.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Comfortable Waiting Area
              </h3>
              <p>
                Our clinic features a comfortable waiting area with modern amenities, providing a relaxing environment for patients and their families. We understand that dental visits can be stressful, and we've designed our space to help you feel at ease.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <ConsultationCtaClient
        title="Visit our Sector 65 clinic"
        description="Book your appointment to see the clinic in person and meet the dental team."
        ctaLocation="clinic-tour-gallery-footer"
      />
    </div>
  );
}
