import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';

export const metadata = {
  title: 'Braces in Sector 65, Gurgaon | Near Trump Towers & M3M Tee Point | Hapliv',
  description:
    'Braces treatment at Sector 65, Gurgaon (M3M Tee Point area). Expert orthodontist — metal, ceramic, aligners. Open Mon–Sat. For typical braces pricing citywide, see our braces cost in Gurgaon page. Call +91 98104 71255.',
  keywords:
    'Braces Treatment Sector 65 Gurgaon, Best Braces Sector 65, Orthodontist Sector 65, Braces Near Trump Towers, Metal Braces Sector 65, Ceramic Braces Sector 65, Invisalign Sector 65, Teeth Straightening Sector 65, Braces Cost Sector 65, Orthodontic Treatment Sector 65, Best Orthodontist Sector 65',
  alternates: {
    canonical: '/braces-treatment-sector-65-gurgaon',
  },
  openGraph: {
    title: 'Best Braces Treatment in Sector 65, Gurgaon | Hapliv Dental',
    description:
      'Best Braces Treatment in Sector 65, Gurgaon near Trump Towers. Expert orthodontist offering metal braces, ceramic braces, and Invisalign. Book consultation today!',
    url: 'https://haplivdentalclinic.com/braces-treatment-sector-65-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Braces Treatment in Sector 65, Gurgaon | Hapliv Dental',
    description: 'Expert orthodontist offering braces treatment in Sector 65, Gurgaon. Metal braces, ceramic braces, and Invisalign available.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const bracesSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Braces Treatment in Sector 65, Gurgaon',
  description:
    'Best Braces Treatment in Sector 65, Gurgaon near Trump Towers. Expert orthodontist offering metal braces, ceramic braces, and Invisalign for teeth straightening.',
  procedureType: 'Orthodontic Treatment',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Orthodontics',
  },
  provider: {
    '@type': 'Dentist',
    name: 'Hapliv Dental Clinic',
    url: 'https://haplivdentalclinic.com',
    telephone: '+919810471255',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Gurgaon',
    },
    {
      '@type': 'Place',
      name: 'Sector 65, Gurgaon',
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
      name: 'Locations',
      item: 'https://haplivdentalclinic.com/locations',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Braces Treatment Sector 65',
      item: 'https://haplivdentalclinic.com/braces-treatment-sector-65-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of braces treatment in Sector 65, Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fees vary by brace type and case length. For Hapliv’s typical braces cost ranges in Gurgaon, see https://haplivdentalclinic.com/braces-cost-gurgaon — book at our Sector 65 clinic for a personalised quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does braces treatment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Braces treatment typically takes 12-24 months depending on the complexity of the case. Simple cases may take 12-18 months, while complex cases may require 18-24 months. Our expert orthodontist in Sector 65, Gurgaon will provide a personalized treatment timeline during your consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of braces are available in Sector 65, Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer various types of braces including traditional metal braces, ceramic braces (tooth-colored), lingual braces (behind teeth), and Invisalign clear aligners. Our expert orthodontist will recommend the best option based on your needs, lifestyle, and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do braces hurt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Braces may cause mild discomfort initially and after adjustments, but this is usually manageable with over-the-counter pain relievers. Most patients adapt within a few days. Our orthodontist uses gentle techniques and provides tips to minimize discomfort during braces treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best age for braces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal age for braces is typically 10-14 years when most permanent teeth have erupted. However, braces can be effective at any age. Early orthodontic evaluation (age 7) can identify problems that may need early intervention. Adults can also get braces successfully.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do I need to visit for braces adjustments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Braces adjustments are typically needed every 4-8 weeks. During these visits, our orthodontist in Sector 65, Gurgaon will tighten wires, replace bands, and monitor progress. Regular visits are essential for successful treatment and optimal results.',
      },
    },
  ],
};

export default function BracesTreatmentSector65Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bracesSchema) }}
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
        <section className="relative px-4 text-white py-28 bg-primary-dark">
          <div className="container mx-auto max-w-7xl">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Braces in Sector 65, Gurgaon — M3M Tee Point
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Metal & ceramic braces with our orthodontist near Trump Towers. Citywide braces pricing:{' '}
                  <Link href="/braces-cost-gurgaon" className="text-white font-semibold underline">
                    braces cost in Gurgaon
                  </Link>
                  . Types &amp; process:{' '}
                  <Link href="/treatments/braces" className="text-white font-semibold underline">
                    braces treatment guide
                  </Link>
                  .
                </p>
                <p className="mb-10 text-base text-gray-200">
                  General Invisalign in Gurgaon: <Link href="/invisalign-gurgaon" className="text-white font-semibold underline">Invisalign Gurgaon</Link>.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="/appointment"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="tel:+919810471255"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Braces Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Expert Braces Treatment in Sector 65, Gurgaon
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>, near Trump Towers, our expert <strong>orthodontist</strong> provides the <strong>best braces treatment</strong> for teeth straightening and bite correction. We offer various types of braces including metal braces, ceramic braces, and <Link href="/invisalign" className="font-semibold underline text-primary hover:text-primary-dark">Invisalign clear aligners</Link>.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our <strong>braces treatment</strong> in Sector 65 is performed by certified orthodontists with 8+ years of experience. Whether you need traditional <Link href="/treatments/braces" className="font-semibold underline text-primary hover:text-primary-dark">metal braces</Link> or prefer discreet ceramic braces, we provide personalized treatment plans to achieve your perfect smile.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Our Braces Treatment?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Expert orthodontist with 8+ years experience</li>
                      <li>Multiple braces options (Metal, Ceramic, Invisalign)</li>
                      <li>Convenient location in Sector 65, near Trump Towers</li>
                      <li>Personalized treatment plans</li>
                      <li>Flexible payment options</li>
                      <li>Regular follow-ups and adjustments</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Best Braces Treatment in Sector 65, Gurgaon - Expert orthodontist near Trump Towers"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Types of Braces We Offer</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li><strong>Metal Braces</strong> - Traditional, effective, affordable</li>
                      <li><strong>Ceramic Braces</strong> - Tooth-colored, less visible</li>
                      <li><strong>Lingual Braces</strong> - Behind teeth, completely hidden</li>
                      <li><strong>Invisalign</strong> - Clear, removable aligners</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Types of Braces Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Types of Braces Available in Sector 65, Gurgaon
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: 'Metal Braces',
                    description: 'Traditional metal braces are the most common and affordable option. Highly effective for all types of orthodontic problems.',
                    cost: '₹30,000 - ₹45,000',
                  },
                  {
                    title: 'Ceramic Braces',
                    description: 'Tooth-colored ceramic braces blend with your teeth for a more discreet appearance while maintaining effectiveness.',
                    cost: '₹40,000 - ₹55,000',
                  },
                  {
                    title: 'Lingual Braces',
                    description: 'Braces placed behind your teeth for complete invisibility. Custom-made for each patient.',
                    cost: '₹80,000 - ₹1,20,000',
                  },
                  {
                    title: 'Invisalign',
                    description: 'Clear, removable aligners that are virtually invisible. Comfortable and convenient for adults and teens.',
                    cost: '₹2,50,000 - ₹4,00,000',
                  },
                ].map((brace, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{brace.title}</h3>
                      <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">{brace.description}</p>
                      <p className="text-lg font-semibold text-primary">{brace.cost}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Braces Treatment Process
              </h2>
            </FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    step: '1. Consultation',
                    description: 'Our orthodontist evaluates your teeth, takes X-rays and impressions, and discusses your treatment options.',
                  },
                  {
                    step: '2. Treatment Planning',
                    description: 'A personalized treatment plan is created based on your specific needs, including braces type and estimated duration.',
                  },
                  {
                    step: '3. Braces Placement',
                    description: 'Braces are carefully placed on your teeth. The procedure is painless and takes 1-2 hours.',
                  },
                  {
                    step: '4. Regular Adjustments',
                    description: 'You\'ll visit every 4-8 weeks for adjustments to gradually move your teeth into the correct position.',
                  },
                  {
                    step: '5. Treatment Completion',
                    description: 'Once your teeth are properly aligned, braces are removed. This typically takes 12-24 months.',
                  },
                  {
                    step: '6. Retainers',
                    description: 'Retainers are provided to maintain your new smile and prevent teeth from shifting back.',
                  },
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{item.step}</h3>
                      <p className="flex-1 text-base leading-relaxed text-gray-700">{item.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Braces Treatment Cost in Sector 65, Gurgaon
              </h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <SlideUp delay={0.3}>
                <div className="p-8 bg-white rounded-card shadow-soft-lg">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Metal Braces</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹30,000 – ₹45,000</p>
                    </div>
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Ceramic Braces</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹40,000 – ₹55,000</p>
                    </div>
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Lingual Braces</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹80,000 – ₹1,20,000</p>
                    </div>
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Invisalign</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹2,50,000 – ₹4,00,000</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-gray-600">
                    *Final cost depends on case complexity and treatment duration. For detailed pricing, <Link href="/appointment" className="font-semibold underline text-primary hover:text-primary-dark">book a consultation</Link> with our expert orthodontist in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Visit Our Orthodontist in Sector 65, Gurgaon
              </h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <SlideUp delay={0.3}>
                <div className="p-8 bg-white border border-gray-200 rounded-card shadow-soft-lg">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
                    Hapliv Dental Clinic - Sector 65, Gurgaon
                  </h3>
                  <div className="mb-6 space-y-3 text-gray-700">
                    <p className="text-base leading-relaxed">
                      <strong>Address:</strong> Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122018
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Landmark:</strong> Near Trump Towers (Delhi NCR)
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Phone:</strong>{' '}
                      <a
                        href="tel:+919810471255"
                        className="font-semibold text-primary hover:text-primary-dark"
                      >
                        +91 98104 71255
                      </a>
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Hours:</strong> Monday - Saturday, 10:00 AM - 8:00 PM
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/appointment"
                      className="px-6 py-3 text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] font-semibold"
                    >
                      Book Consultation
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=28.398091,77.0634188"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-center text-primary transition-all duration-300 transform border-2 border-primary rounded-button hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] font-semibold"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 bg-white py-28">
          <div className="container max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Frequently Asked Questions About Braces Treatment
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'What is the cost of braces treatment in Sector 65, Gurgaon?',
                  a: 'The cost of braces treatment in Sector 65, Gurgaon ranges from ₹30,000 to ₹60,000 depending on the type of braces. Metal braces cost ₹30,000-₹45,000, ceramic braces cost ₹40,000-₹55,000, and Invisalign costs ₹2,50,000-₹4,00,000. Final pricing depends on case complexity and treatment duration. Contact us for a detailed consultation and personalized quote.',
                },
                {
                  q: 'How long does braces treatment take?',
                  a: 'Braces treatment typically takes 12-24 months depending on the complexity of the case. Simple cases may take 12-18 months, while complex cases may require 18-24 months. Our expert orthodontist in Sector 65, Gurgaon will provide a personalized treatment timeline during your consultation.',
                },
                {
                  q: 'What types of braces are available in Sector 65, Gurgaon?',
                  a: 'We offer various types of braces including traditional metal braces, ceramic braces (tooth-colored), lingual braces (behind teeth), and Invisalign clear aligners. Our expert orthodontist will recommend the best option based on your needs, lifestyle, and budget.',
                },
                {
                  q: 'Do braces hurt?',
                  a: 'Braces may cause mild discomfort initially and after adjustments, but this is usually manageable with over-the-counter pain relievers. Most patients adapt within a few days. Our orthodontist uses gentle techniques and provides tips to minimize discomfort during braces treatment.',
                },
                {
                  q: 'What is the best age for braces?',
                  a: 'The ideal age for braces is typically 10-14 years when most permanent teeth have erupted. However, braces can be effective at any age. Early orthodontic evaluation (age 7) can identify problems that may need early intervention. Adults can also get braces successfully.',
                },
                {
                  q: 'How often do I need to visit for braces adjustments?',
                  a: 'Braces adjustments are typically needed every 4-8 weeks. During these visits, our orthodontist in Sector 65, Gurgaon will tighten wires, replace bands, and monitor progress. Regular visits are essential for successful treatment and optimal results.',
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
        <section className="px-4 text-white py-28 bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Get Your Perfect Smile with Braces</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your consultation with our expert orthodontist in Sector 65, Gurgaon today. Experience the <strong>best braces treatment</strong> near Trump Towers.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="/appointment"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:+919810471255"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <Link
                  href="/best-orthodontist-gurgaon"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Learn More About Orthodontics
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

