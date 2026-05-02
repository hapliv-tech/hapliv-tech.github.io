import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { ConsultationCta } from 'components/app-pages/PageSections';
import { FaStar, FaTooth, FaMicroscope, FaPills, FaSmile, FaBolt } from 'react-icons/fa';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG, CLINIC_SCHEMA_NAME } from 'lib/seo';

const laserPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Laser Dental Treatment Gurgaon | Gums & Whitening | From ₹5,000',
  description:
    'Precise laser gum contouring, gingivectomy & laser-assisted whitening in Sector 65 & West Delhi. Typical ₹5,000–₹20,000 by procedure — quote after consult. Mon–Sat. WhatsApp +91 98104 71255.',
  keywords:
    'LASER Dentistry Gurgaon, Laser dental treatment Gurgaon, Best laser dentist Gurgaon, Laser teeth whitening Gurgaon, Laser gum treatment Gurgaon, Laser dentistry West Delhi, Gentle laser dentistry, Laser dental procedures, Laser near me, Advanced laser dentistry, Minimally invasive laser, Laser gum contouring, Laser whitening, Laser disinfection, Laser gingivectomy',
  alternates: {
    canonical: '/laser-dentistry-gurgaon',
  },
  openGraph: {
    description:
      'Minimally invasive laser gum & whitening — two NCR locations. From ₹5K indicative. Book via WhatsApp or call.',
    url: 'https://haplivdentalclinic.com/laser-dentistry-gurgaon',
    images: ['https://ik.imagekit.io/thwkz9dxk/Treatments/laser-treatment.webp?updatedAt=1757871340801'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Laser gum contouring & whitening in Gurgaon & West Delhi. From ₹5,000. WhatsApp or call +91 98104 71255.',
    images: ['https://ik.imagekit.io/thwkz9dxk/Treatments/laser-treatment.webp?updatedAt=1757871340801'],
  },
};

const laserSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'LASER Dental Treatments',
  description:
    'Best LASER Dentistry in Gurgaon & West Delhi. Advanced laser dental treatments for gum contouring, teeth whitening, disinfection, and minimally invasive procedures.',
  procedureType: 'Laser Dentistry',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Dentistry',
  },
  provider: {
    '@type': 'Dentist',
    name: CLINIC_SCHEMA_NAME,
    url: 'https://haplivdentalclinic.com',
    telephone: '+919810471255',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Gurgaon',
    },
    {
      '@type': 'City',
      name: 'Delhi',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://haplivdentalclinic.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'LASER Dentistry',
      item: 'https://haplivdentalclinic.com/laser-dentistry-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is LASER dentistry and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LASER dentistry uses focused light beams to perform precise dental procedures. The laser energy can cut, shape, or remove tissue with minimal discomfort. LASER dental treatment is used for gum contouring, teeth whitening, disinfection, and various soft tissue procedures. It offers a gentle, minimally invasive alternative to traditional dental methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LASER dentistry safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, LASER dentistry is FDA-approved and safe when performed by trained professionals. Our expert dentists at Hapliv Dental Clinic use advanced laser technology with proper safety protocols. LASER dental treatment reduces bleeding, minimizes discomfort, and promotes faster healing compared to conventional methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of LASER dentistry in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of LASER dentistry in Gurgaon varies by procedure. Laser gingival procedures range from ₹5,000 to ₹15,000, while laser-assisted whitening typically ranges ₹10,000 to ₹20,000. Final pricing depends on the specific treatment and individual case evaluation. Contact us for a detailed consultation and personalized quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does LASER dentistry hurt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LASER dentistry is often very comfortable and may need less anesthesia than traditional methods. Most patients experience minimal discomfort during laser dental treatment. The procedure is faster, causes less bleeding, and promotes faster healing, making it a calm option for dental care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What LASER dental treatments are available at Hapliv Dental Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer various LASER dental treatments including laser gum contouring/gingivectomy, laser teeth whitening, laser disinfection in root canal and periodontal treatment, laser ulcer healing, laser TMJ treatment, and laser smile design. Our expert dentists in Sector 65, Gurgaon and West Delhi provide comprehensive laser dental care.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does LASER dental treatment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LASER dental treatment is typically faster than traditional methods. Most laser procedures take 30-60 minutes depending on the complexity. For example, laser gum contouring may take 30-45 minutes, while laser teeth whitening can be completed in 60-90 minutes. Recovery time is also significantly reduced.',
      },
    },
  ],
};

export default function LaserDentistryGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laserSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen mt-24 bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-lightest/40 to-gray-50">
          <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden="true">
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-primary/10" />
            <div className="absolute left-10 top-40 h-96 w-96 rounded-full border border-primary/5" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(81,36,122,0.08)_1px,_transparent_1.5px)] bg-[length:22px_22px]" />
          </div>
          <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 md:px-8 lg:pb-24 lg:pt-24">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl lg:text-hero">
                  Laser dental treatment in Gurgaon & West Delhi
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-700 md:text-lg">
                  Gum contouring, laser-assisted whitening & adjunct disinfection — precise, minimally invasive care at
                  Sector 65 & Mohan Garden. Indicative fees from ₹5,000 by procedure; exact quote after consult. Mon–Sat.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={laserPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="laser-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-success rounded-button text-white shadow-button hover:bg-success-hover hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="laser-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-gray-900 transition-all duration-300 transform border border-gray-300 bg-white rounded-button shadow-soft hover:border-primary/30 hover:text-primary hover:shadow-soft-md hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="laser-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform border border-primary/20 bg-white rounded-button text-primary shadow-soft hover:bg-primary-lightest hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Consultation
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Laser Dentistry */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Why Choose LASER Dentistry?
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link> & <Link href="/dentist-in-west-delhi" className="font-semibold underline text-primary hover:text-primary-dark">West Delhi</Link>, we offer the <strong>best LASER dentistry</strong> 
                    treatments using advanced laser technology. <strong>Laser dental treatment</strong> provides a gentle, 
                    minimally invasive alternative to traditional dental procedures with faster healing and better results.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our <strong>laser dentistry</strong> procedures are FDA-approved and safe. <strong>Laser dental treatment</strong> 
                    reduces bleeding, minimizes discomfort, and promotes faster healing compared to conventional methods. 
                    Our <Link href="/treatments/laser-dental-treatments" className="font-semibold underline text-primary hover:text-primary-dark">laser dental treatments</Link> are available for various procedures including gum contouring and <Link href="/treatments/teeth-whitening" className="font-semibold underline text-primary hover:text-primary-dark">teeth whitening</Link>.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Benefits of LASER Dentistry</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Gentle and minimally invasive</li>
                      <li>Faster healing and recovery</li>
                      <li>Reduced bleeding during procedures</li>
                      <li>Precise and targeted treatment</li>
                      <li>Less need for anesthesia</li>
                      <li>Lower risk of infection</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="https://ik.imagekit.io/thwkz9dxk/Treatments/laser-treatment.webp?updatedAt=1757871340801"
                      alt="Best LASER Dentistry in Gurgaon - Advanced laser dental treatment"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">LASER Treatments We Offer</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li><strong>Laser Gum Contouring</strong> - Reshape gums for better smile</li>
                      <li><strong>Laser Teeth Whitening</strong> - Fast, effective whitening</li>
                      <li><strong>Laser Disinfection</strong> - In RCT and periodontal treatment</li>
                      <li><strong>Laser Gingivectomy</strong> - Remove excess gum tissue</li>
                      <li><strong>Laser Ulcer Healing</strong> - Accelerate healing</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 bg-white py-20">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                LASER Dental Treatments Available
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Laser Gum Contouring / Gingivectomy',
                    description:
                      'Reshape your gums for a more balanced smile using precise laser technology. Minimally invasive with minimal discomfort.',
                    icon: FaStar,
                  },
                  {
                    title: 'Laser Teeth Whitening',
                    description:
                      'Fast and effective teeth whitening using laser technology. Achieve a brighter smile in less time with laser-assisted whitening.',
                    icon: FaTooth,
                  },
                  {
                    title: 'Laser Disinfection',
                    description:
                      'Advanced laser disinfection in root canal treatment and periodontal pockets for better treatment outcomes.',
                    icon: FaMicroscope,
                  },
                  {
                    title: 'Laser Ulcer Healing',
                    description:
                      'Accelerate healing of mouth ulcers and sores using therapeutic laser treatment for faster recovery.',
                    icon: FaPills,
                  },
                  {
                    title: 'Laser TMJ Treatment',
                    description:
                      'Laser-assisted care for TMJ (temporomandibular joint) pain and discomfort.',
                    icon: FaSmile,
                  },
                  {
                    title: 'Laser Smile Design',
                    description:
                      'Precise laser gum depigmentation and contouring for smile makeover procedures.',
                    icon: FaBolt,
                  },
                ].map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <SlideUp key={idx} delay={idx * 0.1}>
                      <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                        <div className="flex justify-center mb-6">
                          <IconComponent className="w-10 h-10 transition-colors duration-500 text-primary group-hover:text-primary-dark" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{service.title}</h3>
                        <p className="flex-1 text-base leading-relaxed text-gray-700">{service.description}</p>
                      </div>
                    </SlideUp>
                  );
                })}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                How LASER Dentistry Works
              </h2>
            </FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    step: '1. Consultation',
                    description: 'Our dentist evaluates your condition and determines if <strong>laser dental treatment</strong> is suitable for your case.',
                  },
                  {
                    step: '2. Preparation',
                    description: 'Protective eyewear is provided, and the treatment area is prepared for <strong>laser dentistry</strong> procedure.',
                  },
                  {
                    step: '3. Laser Application',
                    description: 'Precise <strong>laser dental treatment</strong> is applied to the target area with minimal discomfort and bleeding.',
                  },
                  {
                    step: '4. Recovery',
                    description: 'Faster healing and recovery compared to traditional methods. Most <strong>laser dentistry</strong> procedures have minimal downtime.',
                  },
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{item.step}</h3>
                      <p className="flex-1 text-base leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Locations Section */}
        <section className="px-4 bg-white py-20">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Visit Our LASER Dentistry Clinics
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SlideUp delay={0.3}>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    LASER Dentistry in Sector 65, Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Advanced laser dental treatments at our clinic in Sector 65, Gurgaon near Trump Towers. 
                    Conveniently located for patients from South City, M3M Golf Estate, and surrounding areas.
                  </p>
                  <span className="inline-block font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Visit Clinic →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/dentist-in-west-delhi"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    LASER Dentistry in West Delhi
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Advanced laser dental treatments at our clinic in Mohan Garden, West Delhi. 
                    Easily accessible from Uttam Nagar, Dwarka, and surrounding areas.
                  </p>
                  <span className="inline-block font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Visit Clinic →
                  </span>
                </Link>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Related Treatments Section */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Related Dental Treatments
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <SlideUp delay={0.3}>
                <Link
                  href="/treatments/teeth-whitening"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Teeth Whitening
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Laser-assisted teeth whitening for faster and more effective results. Achieve a brighter smile with laser technology.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/treatments/painless-root-canal-treatment"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Root Canal Treatment
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Laser disinfection in root canal treatment for better outcomes. Comfortable RCT with advanced laser technology.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.5}>
                <Link
                  href="/treatments/scaling-and-polishing"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Scaling & Polishing
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Laser gum treatment and professional cleaning. Maintain oral health with advanced laser procedures.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Related Location Pages Section */}
        <section className="px-4 bg-white py-20">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Other Dental Services in Gurgaon
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SlideUp delay={0.3}>
                <Link
                  href="/best-orthodontist-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Best Orthodontist in Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Expert braces and Invisalign treatment in Sector 65, Gurgaon. Certified orthodontists for teeth straightening.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/dental-implants-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Dental Implants in Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Permanent tooth replacement with titanium dental implants. Expert implantologist in Sector 65, Gurgaon.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.5}>
                <Link
                  href="/root-canal-treatment-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Root Canal Treatment in Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Comfort-focused root canal treatment with Apex Locator and Endomotor. Save your natural tooth.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                LASER Dentistry Cost in Gurgaon
              </h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <SlideUp delay={0.3}>
                <div className="p-8 bg-gray-50 rounded-card shadow-soft-lg">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center h-full p-6 bg-white rounded-card shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Laser Gingival Procedure</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹5,000 - ₹15,000</p>
                    </div>
                    <div className="flex flex-col justify-center h-full p-6 bg-white rounded-card shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Laser-assisted whitening</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹10,000 - ₹20,000</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-gray-600">
                    *Final cost depends on the specific <strong>laser dental treatment</strong> and individual case evaluation. 
                    For detailed pricing, <BookAppointmentLink href="/appointment" className="font-semibold underline text-primary hover:text-primary-dark">book a consultation</BookAppointmentLink> with our expert dentists in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link> or <Link href="/dentist-in-west-delhi" className="font-semibold underline text-primary hover:text-primary-dark">West Delhi</Link>.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Frequently Asked Questions About LASER Dentistry
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'What is LASER dentistry and how does it work?',
                  a: 'LASER dentistry uses focused light beams to perform precise dental procedures. The laser energy can cut, shape, or remove tissue with minimal discomfort. LASER dental treatment is used for gum contouring, teeth whitening, disinfection, and various soft tissue procedures. It offers a gentle, minimally invasive alternative to traditional dental methods.',
                },
                {
                  q: 'Is LASER dentistry safe?',
                  a: 'Yes, LASER dentistry is FDA-approved and safe when performed by trained professionals. Our expert dentists at Hapliv Dental Clinic use advanced laser technology with proper safety protocols. LASER dental treatment reduces bleeding, minimizes discomfort, and promotes faster healing compared to conventional methods.',
                },
                {
                  q: 'What is the cost of LASER dentistry in Gurgaon?',
                  a: 'The cost of LASER dentistry in Gurgaon varies by procedure. Laser gingival procedures range from ₹5,000 to ₹15,000, while laser-assisted whitening typically ranges ₹10,000 to ₹20,000. Final pricing depends on the specific treatment and individual case evaluation. Contact us for a detailed consultation and personalized quote.',
                },
                {
                  q: 'Does LASER dentistry hurt?',
                  a: 'LASER dentistry is often very comfortable and may need less anesthesia than traditional methods. Most patients experience minimal discomfort during laser dental treatment. The procedure is faster, causes less bleeding, and promotes faster healing, making it a calm option for dental care.',
                },
                {
                  q: 'What LASER dental treatments are available at Hapliv Dental Clinic?',
                  a: 'We offer various LASER dental treatments including laser gum contouring/gingivectomy, laser teeth whitening, laser disinfection in root canal and periodontal treatment, laser ulcer healing, laser TMJ treatment, and laser smile design. Our expert dentists in Sector 65, Gurgaon and West Delhi provide comprehensive laser dental care.',
                },
                {
                  q: 'How long does LASER dental treatment take?',
                  a: 'LASER dental treatment is typically faster than traditional methods. Most laser procedures take 30-60 minutes depending on the complexity. For example, laser gum contouring may take 30-45 minutes, while laser teeth whitening can be completed in 60-90 minutes. Recovery time is also significantly reduced.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="p-5 transition-colors group hover:bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer group-hover:text-primary">{faq.q}</summary>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta
          title="Experience gentle LASER dentistry"
          description="Book a laser dentistry consultation in Gurgaon or West Delhi and understand whether a minimally invasive option fits your case."
          ctaLocation="laser-gurgaon-footer"
          whatsappUrl={laserPageWaUrl}
        />
      </div>
    </>
  );
}
