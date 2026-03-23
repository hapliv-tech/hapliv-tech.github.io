import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { FaTooth, FaStar, FaGraduationCap, FaBriefcase, FaBullseye, FaSmile } from 'react-icons/fa';
import { FadeIn, SlideUp } from 'components/animations';
import { CLINIC_SCHEMA_NAME, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const orthodontistPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Best Orthodontist in Gurgaon & West Delhi | Braces & Invisalign Specialist',
  description:
    'Best Orthodontist in Gurgaon & West Delhi specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for teeth straightening, bite correction, and smile transformation. Certified orthodontists with 8+ years experience. Book your consultation today!',
  keywords:
    'Best Orthodontist Gurgaon, Orthodontist Gurgaon, Best braces doctor Gurgaon, Invisalign orthodontist Gurgaon, Orthodontic specialist Gurgaon, Braces specialist Gurgaon, Clear aligner specialist Gurgaon, Best orthodontist West Delhi, Orthodontist Sector 65, Orthodontic treatment Gurgaon, Teeth straightening specialist, Bite correction specialist, Smile correction orthodontist',
  alternates: {
    canonical: '/best-orthodontist-gurgaon',
  },
  openGraph: {
    description:
      'Best Orthodontist in Gurgaon & West Delhi specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for perfect smiles.',
    url: 'https://haplivdentalclinic.com/best-orthodontist-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Best Orthodontist specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const orthodontistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/best-orthodontist-gurgaon',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  description:
    'Best Orthodontist in Gurgaon & West Delhi specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for teeth straightening and smile transformation.',
  medicalSpecialty: 'Orthodontics',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122018',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      postalCode: '110059',
      addressCountry: 'IN',
    },
  ],
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
      name: 'Best Orthodontist in Gurgaon',
      item: 'https://haplivdentalclinic.com/best-orthodontist-gurgaon',
    },
  ],
};

export default function BestOrthodontistGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orthodontistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen mt-24 bg-white">
        {/* Hero Section */}
        <section className="relative px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Best Orthodontist in Gurgaon & West Delhi
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Expert Braces & Invisalign Clear Aligner Treatment | Certified Orthodontists
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={orthodontistPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="best-orthodontist-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="best-orthodontist-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="best-orthodontist-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Consultation
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-4 py-4 bg-slate-50 border-y border-slate-100">
          <p className="container max-w-4xl mx-auto text-center text-gray-700 text-base">
            Looking for a <strong>general or family dentist</strong> (RCT, implants, kids, cleaning)? See our{' '}
            <Link href="/best-dentist-in-gurgaon" className="font-semibold text-primary underline">
              best dentist in Gurgaon
            </Link>{' '}
            page — this page focuses on <strong>orthodontics</strong> (braces &amp; Invisalign).
          </p>
        </section>

        {/* Why Best Orthodontist */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Why Choose Us as Your Best Orthodontist?
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic, we are recognized as the <strong>Best Orthodontist in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary hover:text-primary-dark underline">Gurgaon</Link> & <Link href="/dentist-in-west-delhi" className="font-semibold text-primary hover:text-primary-dark underline">West Delhi</Link></strong> for our expertise in 
                    <Link href="/treatments/braces" className="font-semibold text-primary hover:text-primary-dark underline"> <strong>Braces</strong></Link> and <Link href="/invisalign" className="font-semibold text-primary hover:text-primary-dark underline"><strong>Invisalign clear aligner</strong></Link> treatments. Our certified orthodontists have 8+ years of experience 
                    in orthodontic treatment, specializing in teeth straightening, bite correction, and smile transformation.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    As a leading <strong>orthodontist in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary hover:text-primary-dark underline">Sector 65, Gurgaon</Link></strong>, we offer comprehensive orthodontic solutions including traditional braces, 
                    ceramic braces, self-ligating braces, and Invisalign clear aligners. Our orthodontists are certified Invisalign providers, ensuring 
                    you receive the best orthodontic care available.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Our Orthodontic Expertise</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside text-base">
                      <li>Certified Invisalign Provider</li>
                      <li>Expert in Traditional & Modern Braces</li>
                      <li>8+ Years of Orthodontic Experience</li>
                      <li>Specialized in Complex Orthodontic Cases</li>
                      <li>Teen & Adult Orthodontic Treatment</li>
                      <li>Bite Correction & Smile Design</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Best Orthodontist in Gurgaon - Hapliv Dental Clinic orthodontic treatment"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Our Orthodontists</h3>
                    <p className="mb-3 text-base leading-relaxed text-gray-700">
                      <strong>Dr. Achla Verma</strong> - MDS Orthodontics, Certified Invisalign Provider, 8+ years experience
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                      <strong>Dr. Praveen Raghav</strong> - MDS Orthodontics, Certified Invisalign Provider, 13+ years experience
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Orthodontic Treatments We Offer
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Braces Treatment',
                  description: 'Expert braces treatment for teeth straightening and bite correction. Traditional metal braces, ceramic braces, and self-ligating braces.',
                  link: '/treatments/braces',
                  icon: FaTooth,
                },
                {
                  title: 'Invisalign Clear Aligner',
                  description: 'Invisible braces with Invisalign clear aligners. Removable, comfortable, and effective teeth straightening treatment.',
                  link: '/invisalign',
                  icon: FaStar,
                },
                {
                  title: 'Teen Orthodontics',
                  description: 'Specialized orthodontic treatment for teenagers. Early intervention and comprehensive teen braces programs.',
                  link: '/treatments/braces',
                  icon: FaGraduationCap,
                },
                {
                  title: 'Adult Orthodontics',
                  description: 'Orthodontic treatment for adults. Discreet options including Invisalign and ceramic braces.',
                  link: '/invisalign',
                  icon: FaBriefcase,
                },
                {
                  title: 'Bite Correction',
                  description: 'Expert treatment for overbite, underbite, crossbite, and other bite issues.',
                  link: '/treatments/braces',
                  icon: FaBullseye,
                },
                {
                  title: 'Smile Design',
                  description: 'Comprehensive smile transformation with orthodontic treatment and cosmetic dentistry.',
                  link: '/treatments',
                  icon: FaSmile,
                },
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <div className="mb-6 flex justify-center">
                        <IconComponent className="w-10 h-10 text-primary transition-colors duration-500 group-hover:text-primary-dark" />
                      </div>
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{service.title}</h3>
                      <p className="flex-1 mb-6 text-base leading-relaxed text-gray-700">{service.description}</p>
                      <Link
                        href={service.link}
                        className="text-sm font-semibold tracking-wide text-primary transition-all duration-300 hover:text-primary-dark group-hover:translate-x-1"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </SlideUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Orthodontist */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Why Choose an Orthodontist for Braces & Invisalign?
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Specialized Training',
                  description: 'Orthodontists undergo 3+ years of specialized training after dental school, focusing exclusively on teeth alignment, bite correction, and jaw development. This specialized expertise makes them the best choice for <strong>Braces</strong> and <strong>Invisalign clear aligner</strong> treatment.',
                },
                {
                  title: 'Expert Diagnosis',
                  description: 'Our orthodontists use advanced diagnostic tools including digital X-rays, 3D scans, and comprehensive bite analysis to create personalized treatment plans. This ensures the best results for your <strong>Braces</strong> or <strong>Invisalign aligner</strong> treatment.',
                },
                {
                  title: 'Certified Invisalign Provider',
                  description: 'As certified Invisalign providers, our orthodontists have completed specialized training in clear aligner treatment. This certification ensures you receive expert care for your <strong>Invisalign clear aligner</strong> treatment.',
                },
                {
                  title: 'Comprehensive Care',
                  description: 'From initial consultation to retention, our orthodontists provide complete orthodontic care. Whether you choose <strong>Braces</strong> or <strong>Invisalign aligners</strong>, we ensure optimal results and long-term success.',
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
                Visit Our Orthodontist Clinics
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SlideUp delay={0.3}>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Orthodontist in Sector 65, Gurgaon
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Expert braces and Invisalign treatment at our clinic in Sector 65, Gurgaon near Trump Towers. 
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
                    Orthodontist in West Delhi
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 mb-4 text-base leading-relaxed text-gray-700">
                    Expert braces and Invisalign treatment at our clinic in Mohan Garden, West Delhi. 
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
                Related Orthodontic Treatments
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <SlideUp delay={0.3}>
                <Link
                  href="/treatments/braces"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Braces Treatment
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Traditional and modern braces for teeth straightening. Metal, ceramic, and self-ligating braces available.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.4}>
                <Link
                  href="/invisalign"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Invisalign Clear Aligner
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Invisible braces with Invisalign clear aligners. Removable, comfortable, and effective teeth straightening.
                  </p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:text-accent group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </SlideUp>
              <SlideUp delay={0.5}>
                <Link
                  href="/treatments/teeth-whitening"
                  className="flex flex-col h-full p-8 transition-all bg-white border border-gray-200 rounded-card shadow-soft hover:shadow-soft-lg hover:border-primary group"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary md:text-2xl">
                    Teeth Whitening
                  </h3>
                  <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                  <p className="flex-1 text-base leading-relaxed text-gray-700">
                    Complete your smile transformation with professional teeth whitening after orthodontic treatment.
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

        {/* CTA Section */}
        <section className="px-4 py-28 text-white bg-primary-dark">
          <div className="container max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Ready to Transform Your Smile?</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book your consultation with the Best Orthodontist in Gurgaon & West Delhi today. 
                Whether you need Braces or Invisalign clear aligner treatment, we're here to help you achieve your perfect smile.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={orthodontistPageWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="best-orthodontist-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="best-orthodontist-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="best-orthodontist-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Consultation
                </BookAppointmentLink>
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

