import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG, CLINIC_SCHEMA_NAME } from 'lib/seo';

const rctPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Root Canal Gurgaon & West Delhi | Save Your Tooth',
  description:
    'Comfortable RCT with local anaesthesia plus Apex Locator & Endomotor — Sector 65 & Mohan Garden. Mon–Sat. See our RCT cost page for ₹ ranges, then book on WhatsApp or call +91 98104 71255.',
  keywords:
    'Root Canal Treatment Gurgaon, Comfortable RCT Gurgaon, Best root canal Gurgaon, Root canal dentist Gurgaon, RCT treatment Gurgaon, Root canal West Delhi, Root canal cost Gurgaon, Endodontist Gurgaon, Root canal near me, Advanced root canal treatment, Apex Locator RCT, Endomotor root canal, Root canal procedure, Save natural tooth, Painless root canal Gurgaon',
  alternates: {
    canonical: '/root-canal-treatment-gurgaon',
  },
  openGraph: {
    description:
      'Save your natural tooth with modern RCT — Apex Locator & Endomotor. Two locations. Book: WhatsApp or +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/root-canal-treatment-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Tech-led root canal to relieve pain and keep your tooth. Gurgaon Sector 65 & West Delhi. WhatsApp or call +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const rootCanalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Comfortable Root Canal Treatment (RCT)',
  description:
    'Comfort-focused root canal treatment (RCT) in Gurgaon & West Delhi. Advanced RCT with Apex Locator and Endomotor for a calm, modern experience.',
  procedureType: 'Root Canal Treatment',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Endodontics',
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
      name: 'Root Canal Treatment',
      item: 'https://haplivdentalclinic.com/root-canal-treatment-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of root canal treatment in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical RCT fees depend on tooth type and complexity. For a dedicated cost breakdown and ranges at Hapliv, visit https://haplivdentalclinic.com/root-canal-treatment-cost-gurgaon — or call +91 98104 71255 for a personalised quote after examination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is root canal treatment painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern root canal treatment is done with careful local anesthesia—you should not feel sharp pain during the procedure. Our endodontist uses Apex Locator and Endomotor for efficient, precise care. Most patients say RCT feels similar to a longer filling appointment, with mild soreness for a day or two after.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does root canal treatment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Root canal treatment typically takes 1-2 appointments. A single-rooted tooth (front teeth) may take 60-90 minutes, while multi-rooted teeth (molars) may require 90-120 minutes per session. Complex cases may need 2-3 visits. Our advanced technology helps complete the procedure efficiently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I don\'t get root canal treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Without root canal treatment, the infected tooth will continue to deteriorate, causing severe pain, abscess formation, and eventual tooth loss. The infection can spread to surrounding tissues and bone. Early root canal treatment saves your natural tooth and prevents more serious complications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a crown after root canal treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a crown is usually recommended after root canal treatment to protect the treated tooth from fracture. The tooth becomes more brittle after RCT, and a crown provides strength and restores normal function. Crown placement typically occurs 1-2 weeks after root canal treatment is completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a root canal treated tooth last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A root canal treated tooth can last a lifetime with proper care. With good oral hygiene, regular dental check-ups, and a protective crown, the success rate is 85-97%. The key is maintaining the tooth with proper brushing, flossing, and avoiding hard foods that could cause fracture.',
      },
    },
  ],
};

export default function RootCanalTreatmentGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rootCanalSchema) }}
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
        <section className="relative px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Root canal in Gurgaon & West Delhi — save your natural tooth
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-gray-100 md:text-xl max-w-3xl mx-auto">
                  Comfortable RCT with local anaesthesia plus Apex Locator & Endomotor at Sector 65 (Golf Course Ext)
                  or Mohan Garden, West Delhi — Mon–Sat. Relieve pain and keep your tooth whenever clinically possible.
                </p>
                <p className="mb-10 text-base text-gray-200 max-w-2xl mx-auto">
                  Looking for <Link href="/root-canal-treatment-cost-gurgaon" className="text-white font-semibold underline">root canal cost in Gurgaon</Link>? See our pricing page. For how the procedure works, read our{' '}
                  <Link href="/treatments/painless-root-canal-treatment" className="text-white font-semibold underline">step-by-step RCT treatment guide</Link>.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={rctPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="rct-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="rct-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="rct-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white/10 border-2 border-white/80 rounded-button text-white hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Root Canal */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Why Choose Our Comfort-Focused Root Canal Treatment?
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary hover:text-primary-dark underline">Sector 65, Gurgaon</Link> & <Link href="/dentist-in-west-delhi" className="font-semibold text-primary hover:text-primary-dark underline">West Delhi</Link>, we provide <strong>modern root canal treatment (RCT)</strong>{' '}
                    using advanced technology. Our expert <strong>endodontist</strong> uses <strong>Apex Locator</strong> and <strong>Endomotor</strong>{' '}
                    for precise, efficient care and a calm <strong>root canal treatment</strong> experience.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    <strong>Root canal treatment</strong> saves your natural tooth by removing infected pulp and sealing the root canal. 
                    Our <strong>RCT</strong> workflow uses modern techniques and equipment to keep you as comfortable as possible. 
                    If <Link href="/treatments/painless-root-canal-treatment" className="font-semibold text-primary hover:text-primary-dark underline">root canal treatment</Link> cannot save your tooth, <Link href="/treatments/implant" className="font-semibold text-primary hover:text-primary-dark underline">dental implants</Link> may be an alternative option.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Advanced Technology We Use</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
                      <li><strong>Apex Locator</strong> - Precise root canal length measurement</li>
                      <li><strong>Endomotor</strong> - Motorized root canal cleaning for efficiency</li>
                      <li>Digital X-rays for accurate diagnosis</li>
                      <li>Microscope-assisted treatment for precision</li>
                      <li>Local anesthesia for complete comfort</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Comfort-focused root canal treatment in Gurgaon - Advanced RCT with Apex Locator and Endomotor"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Benefits of Root Canal Treatment</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
                      <li>Saves your natural tooth</li>
                      <li>Comfort-focused care with modern technology</li>
                      <li>Prevents tooth extraction</li>
                      <li>Restores normal chewing function</li>
                      <li>Maintains natural appearance</li>
                      <li>Long-lasting results</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Root Canal Treatment Process
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    step: '1',
                    title: 'Diagnosis & X-ray',
                    description:
                      'Our endodontist examines your tooth, takes digital X-rays, and determines if root canal treatment is needed.',
                  },
                  {
                    step: '2',
                    title: 'Local Anesthesia',
                    description:
                      'Local anesthesia is administered to ensure you feel no pain during the root canal treatment procedure.',
                  },
                  {
                    step: '3',
                    title: 'Access Opening',
                    description:
                      'A small opening is made in the tooth crown to access the infected pulp chamber and root canals.',
                  },
                  {
                    step: '4',
                    title: 'Cleaning & Shaping',
                    description:
                      'Using Apex Locator and Endomotor, infected pulp is removed and root canals are cleaned and shaped precisely.',
                  },
                  {
                    step: '5',
                    title: 'Filling & Sealing',
                    description:
                      'Cleaned root canals are filled with biocompatible material and sealed to prevent reinfection.',
                  },
                  {
                    step: '6',
                    title: 'Crown Placement',
                    description:
                      'After root canal treatment, a crown is placed to protect and restore the treated tooth.',
                  },
                ].map((item, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <div className="mb-4 text-4xl font-semibold tracking-tight text-primary">{item.step}</div>
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{item.title}</h3>
                      <p className="flex-1 text-base leading-relaxed text-gray-700">{item.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Technology Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Advanced Technology for Comfortable Root Canal Treatment
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Apex Locator',
                  description: 'Our <strong>Apex Locator</strong> technology precisely measures the root canal length, ensuring accurate cleaning and filling. This advanced tool makes <strong>root canal treatment</strong> more efficient and successful.',
                },
                {
                  title: 'Endomotor',
                  description: 'The <strong>Endomotor</strong> is a motorized system that speeds up root canal cleaning while maintaining precision. This technology makes <strong>RCT</strong> faster and more comfortable for patients.',
                },
                {
                  title: 'Digital X-rays',
                  description: 'Low-radiation digital X-rays provide clear images for accurate diagnosis and treatment planning of <strong>root canal treatment</strong>.',
                },
                {
                  title: 'Microscope-Assisted Treatment',
                  description: 'Our endodontist uses dental microscopes for enhanced visibility during <strong>root canal treatment</strong>, ensuring thorough cleaning and precise treatment.',
                },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                  <div className="flex flex-col h-full p-8 bg-white rounded-card shadow-soft-lg hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{item.title}</h3>
                    <p className="flex-1 text-base leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Related Locations Section */}
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Visit Our Root Canal Treatment Clinics
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SlideUp delay={0.3}>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Root Canal Treatment in Sector 65, Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Comfort-focused root canal treatment at our clinic in Sector 65, Gurgaon near Trump Towers. 
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
                    Root Canal Treatment in West Delhi
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Comfort-focused root canal treatment at our clinic in Mohan Garden, West Delhi. 
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
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Related Dental Treatments
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <SlideUp delay={0.3}>
                <Link
                  href="/treatments/implant"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Dental Implants
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    If root canal treatment cannot save your tooth, dental implants provide a permanent replacement solution.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/treatments/crowns-and-bridges"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Crowns & Bridges
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    After root canal treatment, a crown is placed to protect and restore the treated tooth.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.5}>
                <Link
                  href="/treatments/dental-filling"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Dental Filling
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    For less severe cases, dental fillings may be sufficient to treat tooth decay and prevent root canal.
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
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-7xl mx-auto">
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
                  href="/laser-dentistry-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    LASER Dentistry in Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Advanced laser dental treatments for gum contouring, teeth whitening, and gentle soft-tissue procedures.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Frequently Asked Questions About Root Canal Treatment
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'What is the cost of root canal treatment in Gurgaon?',
                  a: 'The cost of root canal treatment (RCT) in Gurgaon typically ranges from ₹3,000 to ₹8,000 per tooth depending on the complexity and number of root canals. Molar root canals (3-4 canals) cost more than front teeth (1-2 canals). Additional costs may include crown placement after RCT. Contact us for a detailed consultation and personalized quote.',
                },
                {
                  q: 'Is root canal treatment painful?',
                  a: 'Modern root canal treatment is done with careful local anesthesia—you should not feel sharp pain during the procedure. Our endodontist uses Apex Locator and Endomotor for efficient, precise care. Most patients say RCT feels similar to a longer filling appointment, with mild soreness for a day or two after.',
                },
                {
                  q: 'How long does root canal treatment take?',
                  a: 'Root canal treatment typically takes 1-2 appointments. A single-rooted tooth (front teeth) may take 60-90 minutes, while multi-rooted teeth (molars) may require 90-120 minutes per session. Complex cases may need 2-3 visits. Our advanced technology helps complete the procedure efficiently.',
                },
                {
                  q: 'What happens if I don\'t get root canal treatment?',
                  a: 'Without root canal treatment, the infected tooth will continue to deteriorate, causing severe pain, abscess formation, and eventual tooth loss. The infection can spread to surrounding tissues and bone. Early root canal treatment saves your natural tooth and prevents more serious complications.',
                },
                {
                  q: 'Do I need a crown after root canal treatment?',
                  a: 'Yes, a crown is usually recommended after root canal treatment to protect the treated tooth from fracture. The tooth becomes more brittle after RCT, and a crown provides strength and restores normal function. Crown placement typically occurs 1-2 weeks after root canal treatment is completed.',
                },
                {
                  q: 'How long does a root canal treated tooth last?',
                  a: 'A root canal treated tooth can last a lifetime with proper care. With good oral hygiene, regular dental check-ups, and a protective crown, the success rate is 85-97%. The key is maintaining the tooth with proper brushing, flossing, and avoiding hard foods that could cause fracture.',
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

        {/* CTA Section */}
        <section className="px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Save Your Natural Tooth Today</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Don't let tooth pain or infection lead to extraction. Book your <strong>comfort-focused root canal treatment (RCT)</strong> 
                with our expert endodontist in Gurgaon & West Delhi today.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={rctPageWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="rct-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="rct-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="rct-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white/10 border-2 border-white/80 rounded-button text-white hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Appointment
                </BookAppointmentLink>
                <Link
                  href="/treatments/painless-root-canal-treatment"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Detailed RCT Info
                </Link>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Sector 65 Clinic
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

