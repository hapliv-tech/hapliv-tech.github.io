import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG, CLINIC_SCHEMA_NAME } from 'lib/seo';

const implantsPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Dental Implants Gurgaon & West Delhi | From ₹25,000',
  description:
    'Missing a tooth? Implant planning in Sector 65 & Mohan Garden — typical single-tooth indication ₹25,000–₹70,000 (plan & crown depend on your case). Mon–Sat. WhatsApp or call +91 98104 71255 for eligibility check.',
  keywords:
    'Dental Implants Gurgaon, Best dental implants Gurgaon, Implant treatment Gurgaon, Tooth implant Gurgaon, Dental implant cost Gurgaon, Implantologist Gurgaon, Dental implants West Delhi, Implant dentist Gurgaon, Single tooth implant, Multiple dental implants, Full mouth implants, Implant near me, Titanium dental implants, Permanent tooth replacement, Implant surgery Gurgaon',
  alternates: {
    canonical: '/dental-implants-gurgaon',
  },
  openGraph: {
    description:
      'Titanium implants, clear staging & pricing after assessment. Two NCR locations. WhatsApp or call +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/dental-implants-gurgaon',
    images: ['https://ik.imagekit.io/thwkz9dxk/Treatments/implant-gurgaon-delhi.webp?updatedAt=1757907822214'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'From ₹25K indicative for many single-tooth cases. Book assessment: WhatsApp or +91 98104 71255.',
    images: ['https://ik.imagekit.io/thwkz9dxk/Treatments/implant-gurgaon-delhi.webp?updatedAt=1757907822214'],
  },
};

const implantSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Dental Implants',
  description:
    'Best Dental Implants in Gurgaon & West Delhi. Permanent tooth replacement with titanium dental implants by expert implantologist.',
  procedureType: 'Dental Implant Surgery',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Oral and Maxillofacial Surgery',
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
      name: 'Dental Implants',
      item: 'https://haplivdentalclinic.com/dental-implants-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of dental implants in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of dental implants in Gurgaon ranges from ₹25,000 to ₹70,000 per implant depending on the type and complexity. Single implant (post only) costs ₹25,000-₹50,000, while single implant with crown costs ₹35,000-₹70,000. Final pricing depends on bone condition, number of implants, and crown material. Contact us for a detailed consultation and personalized quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do dental implants last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental implants are designed to last a lifetime with proper care. The titanium implant post fuses with your jawbone (osseointegration) and becomes a permanent part of your mouth. With good oral hygiene and regular dental check-ups, dental implants can last 20-30 years or more. The crown may need replacement after 10-15 years due to normal wear.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dental implant surgery painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental implant surgery is performed under local anesthesia, so you should not feel pain during the procedure. Most patients report minimal discomfort, similar to a tooth extraction. Post-surgery, mild swelling and discomfort may occur for 2-3 days, which can be managed with prescribed medications. Our expert implantologist ensures a comfortable experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the dental implant process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The complete dental implant process typically takes 3-6 months. After implant placement, there is a healing period of 3-6 months for osseointegration (bone fusion). Once healed, the abutment and crown are placed, which takes 2-4 weeks. The timeline may vary based on individual healing and bone condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is a good candidate for dental implants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Good candidates for dental implants have healthy gums, adequate jawbone density, and good overall health. Patients with uncontrolled diabetes, heavy smokers, or those with insufficient bone may need additional procedures. Our expert implantologist in Sector 65, Gurgaon will evaluate your condition and determine if dental implants are right for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the success rate of dental implants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental implants have a success rate of 95-98% when performed by experienced implantologists. Success depends on proper placement, good oral hygiene, and patient health. At Hapliv Dental Clinic, our expert implantologist uses advanced techniques and quality implants to ensure optimal results.',
      },
    },
  ],
};

export default function DentalImplantsGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(implantSchema) }}
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
                  Dental implants in Gurgaon & West Delhi
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Replace missing teeth with titanium implants — staged planning at Sector 65 & Mohan Garden. Many
                  single-tooth plans fall in the ₹25,000–₹70,000 range; full quote after CBCT & assessment. Mon–Sat.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={implantsPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="implants-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="implants-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="implants-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white/10 border-2 border-white/80 rounded-button text-white hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Consultation
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Dental Implants */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Why Choose Dental Implants?
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    <strong>Dental Implants</strong> are the best permanent solution for replacing missing teeth. 
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary hover:text-primary-dark underline">Sector 65, Gurgaon</Link> & <Link href="/dentist-in-west-delhi" className="font-semibold text-primary hover:text-primary-dark underline">West Delhi</Link>, our expert <strong>implantologist</strong> provides 
                    <strong> dental implants</strong> that look, feel, and function like your natural teeth.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our <strong>dental implants</strong> are made from biocompatible titanium that fuses with your jawbone, 
                    providing a stable foundation for replacement teeth. Unlike <Link href="/treatments/crowns-and-bridges" className="font-semibold text-primary hover:text-primary-dark underline">dentures or bridges</Link>, <strong>dental implants</strong> 
                    preserve bone health and prevent jawbone deterioration.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Benefits of Dental Implants</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
                      <li>Permanent tooth replacement solution</li>
                      <li>Natural look and feel</li>
                      <li>Preserves jawbone health</li>
                      <li>No damage to adjacent teeth</li>
                      <li>Long-lasting (often lifetime)</li>
                      <li>Restores full chewing function</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="https://ik.imagekit.io/thwkz9dxk/Treatments/implant-gurgaon-delhi.webp?updatedAt=1757907822214"
                      alt="Best Dental Implants in Gurgaon - Permanent tooth replacement treatment"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Types of Dental Implants</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
                      <li><strong>Single Tooth Implant</strong> - Replace one missing tooth</li>
                      <li><strong>Multiple Implants</strong> - Replace several missing teeth</li>
                      <li><strong>Full Mouth Implants</strong> - Complete tooth replacement</li>
                      <li><strong>Implant-Supported Bridge</strong> - Multiple teeth on fewer implants</li>
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
                Dental Implant Treatment Process
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  {
                    step: '1',
                    title: 'Consultation & Planning',
                    description:
                      'Our expert implantologist evaluates your oral health, takes X-rays and 3D scans, and creates a personalized treatment plan for your dental implants.',
                  },
                  {
                    step: '2',
                    title: 'Implant Placement',
                    description:
                      'Titanium implant post is surgically placed into your jawbone under local anesthesia. The procedure is straightforward and minimally invasive for most patients.',
                  },
                  {
                    step: '3',
                    title: 'Healing & Integration',
                    description:
                      'The implant fuses with your jawbone over 3-6 months (osseointegration), creating a strong foundation for your replacement tooth.',
                  },
                  {
                    step: '4',
                    title: 'Abutment Placement',
                    description:
                      'After healing, an abutment is attached to the implant, which will hold your custom crown or bridge.',
                  },
                  {
                    step: '5',
                    title: 'Crown/Bridge Placement',
                    description:
                      'Your custom-made crown or bridge is placed on the abutment, completing your dental implant treatment with a natural-looking result.',
                  },
                  {
                    step: '6',
                    title: 'Follow-up Care',
                    description:
                      'Regular check-ups ensure your dental implants remain healthy and functional for years to come.',
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

        {/* Related Locations Section */}
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Visit Our Dental Implant Clinics
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SlideUp delay={0.3}>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Dental Implants in Sector 65, Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Expert dental implant treatment at our clinic in Sector 65, Gurgaon near Trump Towers. 
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
                    Dental Implants in West Delhi
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Expert dental implant treatment at our clinic in Mohan Garden, West Delhi. 
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
                  href="/treatments/crowns-and-bridges"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Crowns & Bridges
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Alternative tooth replacement option with crowns and bridges. Non-surgical solution for missing teeth.
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
                    Save your natural tooth with comfort-focused root canal treatment before considering dental implants.
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
                    Maintain oral health and prevent tooth loss with regular professional cleaning and scaling.
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
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Dental Implant Cost in Gurgaon
              </h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <SlideUp delay={0.3}>
                <div className="p-8 bg-white rounded-card shadow-soft-lg">
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    The cost of <strong>dental implants</strong> in Gurgaon depends on several factors including the number of implants, 
                    bone condition, and crown material. Our expert <strong>implantologist</strong> will provide a detailed cost estimate 
                    after your consultation. For detailed pricing, <BookAppointmentLink href="/appointment" className="font-semibold text-primary hover:text-primary-dark underline">book a consultation</BookAppointmentLink> with our expert dentists in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary hover:text-primary-dark underline">Sector 65, Gurgaon</Link> or <Link href="/dentist-in-west-delhi" className="font-semibold text-primary hover:text-primary-dark underline">West Delhi</Link>.
                  </p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 font-semibold tracking-tight text-gray-900 text-lg">Single Implant (Post Only)</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹25,000 – ₹50,000</p>
                    </div>
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 font-semibold tracking-tight text-gray-900 text-lg">Single Implant with Crown</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹35,000 – ₹70,000</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-gray-600">
                    *Final cost depends on individual case evaluation. Contact us for a personalized quote.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Frequently Asked Questions About Dental Implants
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'What is the cost of dental implants in Gurgaon?',
                  a: 'The cost of dental implants in Gurgaon ranges from ₹25,000 to ₹70,000 per implant depending on the type and complexity. Single implant (post only) costs ₹25,000-₹50,000, while single implant with crown costs ₹35,000-₹70,000. Final pricing depends on bone condition, number of implants, and crown material. Contact us for a detailed consultation and personalized quote.',
                },
                {
                  q: 'How long do dental implants last?',
                  a: 'Dental implants are designed to last a lifetime with proper care. The titanium implant post fuses with your jawbone (osseointegration) and becomes a permanent part of your mouth. With good oral hygiene and regular dental check-ups, dental implants can last 20-30 years or more. The crown may need replacement after 10-15 years due to normal wear.',
                },
                {
                  q: 'Is dental implant surgery painful?',
                  a: 'Dental implant surgery is performed under local anesthesia, so you should not feel pain during the procedure. Most patients report minimal discomfort, similar to a tooth extraction. Post-surgery, mild swelling and discomfort may occur for 2-3 days, which can be managed with prescribed medications. Our expert implantologist ensures a comfortable experience.',
                },
                {
                  q: 'How long does the dental implant process take?',
                  a: 'The complete dental implant process typically takes 3-6 months. After implant placement, there is a healing period of 3-6 months for osseointegration (bone fusion). Once healed, the abutment and crown are placed, which takes 2-4 weeks. The timeline may vary based on individual healing and bone condition.',
                },
                {
                  q: 'Who is a good candidate for dental implants?',
                  a: 'Good candidates for dental implants have healthy gums, adequate jawbone density, and good overall health. Patients with uncontrolled diabetes, heavy smokers, or those with insufficient bone may need additional procedures. Our expert implantologist in Sector 65, Gurgaon will evaluate your condition and determine if dental implants are right for you.',
                },
                {
                  q: 'What is the success rate of dental implants?',
                  a: 'Dental implants have a success rate of 95-98% when performed by experienced implantologists. Success depends on proper placement, good oral hygiene, and patient health. At Hapliv Dental Clinic, our expert implantologist uses advanced techniques and quality implants to ensure optimal results.',
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
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Ready for Permanent Tooth Replacement?</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your consultation with our expert implantologist in Gurgaon & West Delhi today. 
                Get the best dental implants for a natural, permanent smile.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={implantsPageWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="implants-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="implants-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="implants-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white/10 border-2 border-white/80 rounded-button text-white hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Consultation
                </BookAppointmentLink>
                <Link
                  href="/treatments/implant"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Detailed Implant Info
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

