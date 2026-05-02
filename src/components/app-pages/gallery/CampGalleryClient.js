"use client";
import ImageGallery from 'components/image-gallery/img-gallery';
import useGalleryData from 'hooks/useGalleryData';
import { FadeIn } from 'components/animations';
import ConsultationCtaClient from 'components/app-pages/ConsultationCtaClient';
import { PageHero, SectionHeader } from 'components/app-pages/PageSections';

export default function CampGalleryClient() {
  const { imagesList, isLoading, error, retry } = useGalleryData('camp');

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
        eyebrow="Community care"
        title="Oral Health Awareness Camp"
        description="View photos from Hapliv Dental Clinic's community dental education programs across Gurgaon and Delhi-NCR."
        secondaryHref="#gallery"
        secondaryLabel="View Camp Photos"
        highlights={[
          'Dental health camps',
          'Community education',
          'Free check-up programs',
          'Preventive care awareness',
        ]}
      />

      {/* Gallery Section */}
      <section id="gallery" className="px-4 py-16 bg-white md:px-8 lg:py-20 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Camp photos"
            title="Community dental education in action"
            description="Browse moments from oral health awareness programs organized by Hapliv Dental Clinic."
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
                Community Dental Health Programs
              </h2>
              <p>
                <strong>Hapliv Dental Clinic</strong> is committed to improving oral health awareness in our communities. We regularly organize <strong>Oral Health Awareness Camps</strong> in <strong>Gurgaon</strong>, <strong>Delhi-NCR</strong>, and surrounding areas to promote preventive dental care and educate people about the importance of good oral hygiene.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Our Dental Health Camp Activities
              </h3>
              <p>
                Our <strong>dental health awareness camps</strong> include free dental check-ups, oral health education sessions, demonstrations of proper brushing and flossing techniques, and information about preventive dental care. We visit schools, residential communities, corporate offices, and public spaces to reach as many people as possible.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Promoting Preventive Dental Care
              </h3>
              <p>
                Through our <strong>community dental programs</strong>, we emphasize the importance of regular dental check-ups, proper oral hygiene practices, and early detection of dental problems. Our expert dental surgeons educate participants about common dental issues, their prevention, and the benefits of maintaining good oral health.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Community Outreach Locations
              </h3>
              <p>
                We have organized dental awareness camps at various locations including <strong>Isle De Royale, Gurgaon</strong>, schools, residential societies, and community centers. Our goal is to make dental health education accessible to everyone, regardless of their background or location.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <ConsultationCtaClient
        title="Organize a dental health camp"
        description="Contact Hapliv Dental Clinic to discuss oral health awareness programs for your community, school, or organization."
        ctaLocation="camp-gallery-footer"
      />
    </div>
  );
}
