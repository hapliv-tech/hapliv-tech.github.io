import Image from 'next/legacy/image';
import Link from 'next/link';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';

export const metadata = {
  title: 'Best Invisalign in Sector 65, Gurgaon | Clear Aligner Treatment Near Trump Towers | Hapliv Dental',
  description:
    'Best Invisalign in Sector 65, Gurgaon | Cost ₹2,50,000-₹4,00,000 | 4.98/5 Rating | Expert orthodontist near Trump Towers. Invisible clear aligner treatment. 8+ years experience. Open Mon-Sat 10 AM-8 PM. Call +91 98104 71255. Book consultation today!',
  keywords:
    'Invisalign Sector 65 Gurgaon, Best Invisalign Sector 65, Clear Aligner Sector 65, Invisalign Near Trump Towers, Invisible Braces Sector 65, Invisalign Cost Sector 65, Invisalign Provider Sector 65, Clear Aligner Treatment Sector 65, Invisalign Orthodontist Sector 65, Best Invisalign Doctor Sector 65',
  alternates: {
    canonical: '/invisalign-sector-65-gurgaon',
  },
  openGraph: {
    title: 'Best Invisalign in Sector 65, Gurgaon | Hapliv Dental',
    description:
      'Best Invisalign in Sector 65, Gurgaon near Trump Towers. Expert orthodontist offering invisible clear aligner treatment. Book consultation today!',
    url: 'https://haplivdentalclinic.com/invisalign-sector-65-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Invisalign in Sector 65, Gurgaon | Hapliv Dental',
    description: 'Expert orthodontist offering Invisalign clear aligner treatment in Sector 65, Gurgaon.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const invisalignSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Invisalign Clear Aligner Treatment in Sector 65, Gurgaon',
  description:
    'Best Invisalign in Sector 65, Gurgaon near Trump Towers. Expert orthodontist offering invisible clear aligner treatment for teeth straightening.',
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
      name: 'Invisalign Sector 65',
      item: 'https://haplivdentalclinic.com/invisalign-sector-65-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of Invisalign in Sector 65, Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fees depend on case complexity. For a dedicated Invisalign cost breakdown at Hapliv, see https://haplivdentalclinic.com/invisalign-cost-gurgaon — book a consult at our M3M Tee Point clinic for a personalised quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Invisalign treatment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign treatment typically takes 12-18 months for most cases. Simple cases may take 6-12 months, while complex cases may require 18-24 months. Our expert orthodontist in Sector 65, Gurgaon will provide a personalized treatment timeline during your consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Invisalign better than braces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign offers several advantages: virtually invisible, removable for eating and cleaning, more comfortable, and fewer office visits. However, traditional braces may be better for very complex cases. Our orthodontist will recommend the best option based on your specific needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do I need to wear Invisalign aligners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign aligners should be worn 20-22 hours per day for optimal results. You can remove them for eating, drinking (except water), brushing, and flossing. Consistent wear is essential for successful treatment and timely completion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Invisalign hurt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign may cause mild discomfort when you switch to a new set of aligners, but this is usually minimal and temporary. Most patients adapt within 1-2 days. The smooth plastic aligners are more comfortable than traditional braces with metal brackets and wires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is a good candidate for Invisalign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign is suitable for most orthodontic cases including crowded teeth, gaps, overbite, underbite, and crossbite. It works well for teens and adults. Very complex cases may require traditional braces. Our orthodontist will evaluate your case and determine if Invisalign is right for you.',
      },
    },
  ],
};

export default function InvisalignSector65Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(invisalignSchema) }}
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
                  Best Invisalign in Sector 65, Gurgaon
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Invisible clear aligners at M3M Tee Point — Sector 65 only. Broader Gurgaon Invisalign:{' '}
                  <Link href="/invisalign-gurgaon" className="text-white font-semibold underline">
                    Invisalign in Gurgaon
                  </Link>
                  .
                </p>
                <p className="mb-10 text-base text-gray-200">
                  Invisalign cost:{' '}
                  <Link href="/invisalign-cost-gurgaon" className="text-white font-semibold underline">
                    pricing page
                  </Link>
                  . How aligners work:{' '}
                  <Link href="/invisalign" className="text-white font-semibold underline">
                    Invisalign treatment guide
                  </Link>
                  .
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

        {/* Why Invisalign Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Expert Invisalign Treatment in Sector 65, Gurgaon
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>, near Trump Towers, our expert <strong>orthodontist</strong> provides the <strong>best Invisalign treatment</strong> for invisible teeth straightening. <strong>Invisalign</strong> uses clear, removable aligners that are virtually invisible, making it the perfect choice for adults and teens who want to straighten their teeth discreetly.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our <strong>Invisalign treatment</strong> in Sector 65 is performed by certified orthodontists with 8+ years of experience. Whether you have crowded teeth, gaps, or bite issues, <Link href="/invisalign" className="font-semibold underline text-primary hover:text-primary-dark">Invisalign clear aligners</Link> can help you achieve your perfect smile without the visibility of traditional braces.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Invisalign?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Virtually invisible - no one will notice</li>
                      <li>Removable for eating and cleaning</li>
                      <li>More comfortable than traditional braces</li>
                      <li>Fewer office visits required</li>
                      <li>No food restrictions</li>
                      <li>Easy to maintain oral hygiene</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Best Invisalign in Sector 65, Gurgaon - Invisible clear aligner treatment near Trump Towers"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Invisalign Treatment Process</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li><strong>Consultation</strong> - 3D scan and treatment plan</li>
                      <li><strong>Custom Aligners</strong> - Made specifically for you</li>
                      <li><strong>Wear Aligners</strong> - 20-22 hours per day</li>
                      <li><strong>Regular Check-ups</strong> - Every 6-8 weeks</li>
                      <li><strong>New Aligners</strong> - Switch every 1-2 weeks</li>
                      <li><strong>Perfect Smile</strong> - Results in 12-18 months</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Benefits of Invisalign Treatment
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Virtually Invisible',
                    description: 'Clear aligners are nearly invisible, so you can straighten your teeth without anyone noticing.',
                  },
                  {
                    title: 'Removable',
                    description: 'Take out your aligners to eat, drink, brush, and floss. No food restrictions like with braces.',
                  },
                  {
                    title: 'Comfortable',
                    description: 'Smooth plastic aligners are more comfortable than metal braces with no sharp edges or wires.',
                  },
                  {
                    title: 'Effective',
                    description: 'Invisalign can treat most orthodontic issues including crowding, gaps, and bite problems.',
                  },
                  {
                    title: 'Convenient',
                    description: 'Fewer office visits compared to traditional braces. Check-ups every 6-8 weeks.',
                  },
                  {
                    title: 'Hygienic',
                    description: 'Easy to clean your teeth since aligners are removable. Better oral hygiene during treatment.',
                  },
                ].map((benefit, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{benefit.title}</h3>
                      <p className="flex-1 text-base leading-relaxed text-gray-700">{benefit.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Cost Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Invisalign Cost in Sector 65, Gurgaon
              </h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <SlideUp delay={0.3}>
                <div className="p-8 bg-white rounded-card shadow-soft-lg">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Simple Cases</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹2,50,000 – ₹3,00,000</p>
                      <p className="mt-2 text-sm text-gray-600">6-12 months treatment</p>
                    </div>
                    <div className="flex flex-col justify-center h-full p-6 rounded-card bg-primary-lightest shadow-soft">
                      <h4 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Complex Cases</h4>
                      <p className="text-3xl font-semibold tracking-tight text-primary">₹3,50,000 – ₹4,00,000</p>
                      <p className="mt-2 text-sm text-gray-600">18-24 months treatment</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-gray-600">
                    *Final cost depends on case complexity and treatment duration. We offer flexible payment plans. For detailed pricing, <Link href="/appointment" className="font-semibold underline text-primary hover:text-primary-dark">book a consultation</Link> with our expert orthodontist in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Visit Our Invisalign Clinic in Sector 65, Gurgaon
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
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Frequently Asked Questions About Invisalign
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'What is the cost of Invisalign in Sector 65, Gurgaon?',
                  a: 'The cost of Invisalign in Sector 65, Gurgaon ranges from ₹2,50,000 to ₹4,00,000 depending on case complexity and treatment duration. Simple cases may cost ₹2,50,000-₹3,00,000, while complex cases may cost ₹3,50,000-₹4,00,000. We offer flexible payment plans. Contact us for a detailed consultation and personalized quote.',
                },
                {
                  q: 'How long does Invisalign treatment take?',
                  a: 'Invisalign treatment typically takes 12-18 months for most cases. Simple cases may take 6-12 months, while complex cases may require 18-24 months. Our expert orthodontist in Sector 65, Gurgaon will provide a personalized treatment timeline during your consultation.',
                },
                {
                  q: 'Is Invisalign better than braces?',
                  a: 'Invisalign offers several advantages: virtually invisible, removable for eating and cleaning, more comfortable, and fewer office visits. However, traditional braces may be better for very complex cases. Our orthodontist will recommend the best option based on your specific needs.',
                },
                {
                  q: 'How often do I need to wear Invisalign aligners?',
                  a: 'Invisalign aligners should be worn 20-22 hours per day for optimal results. You can remove them for eating, drinking (except water), brushing, and flossing. Consistent wear is essential for successful treatment and timely completion.',
                },
                {
                  q: 'Does Invisalign hurt?',
                  a: 'Invisalign may cause mild discomfort when you switch to a new set of aligners, but this is usually minimal and temporary. Most patients adapt within 1-2 days. The smooth plastic aligners are more comfortable than traditional braces with metal brackets and wires.',
                },
                {
                  q: 'Who is a good candidate for Invisalign?',
                  a: 'Invisalign is suitable for most orthodontic cases including crowded teeth, gaps, overbite, underbite, and crossbite. It works well for teens and adults. Very complex cases may require traditional braces. Our orthodontist will evaluate your case and determine if Invisalign is right for you.',
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
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Get Your Invisible Smile Transformation</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your consultation with our expert orthodontist in Sector 65, Gurgaon today. Experience the <strong>best Invisalign treatment</strong> near Trump Towers.
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

