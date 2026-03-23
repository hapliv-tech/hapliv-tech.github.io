import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { CLINIC_SCHEMA_NAME, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const pediatricPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Best Pediatric Dentist in Gurgaon | Kids Dentist | Child Dental Care',
  description:
    'Best Pediatric Dentist in Gurgaon | Kids Dentist | 4.98/5 Rating | Expert child dental care for kids. Gentle pediatric dentistry, fluoride treatment, sealants, early orthodontics. Child-friendly clinic in Sector 65. Open Mon-Sat 10 AM-8 PM. Call +91 98104 71255. Book appointment today!',
  keywords:
    'Pediatric Dentist Gurgaon, Kids Dentist Gurgaon, Child Dentist Gurgaon, Children Dentist Gurgaon, Best Pediatric Dentist Gurgaon, Kids Dental Care Gurgaon, Child Dental Clinic Gurgaon, Pediatric Dentistry Gurgaon, Kids Orthodontist Gurgaon, Child Teeth Cleaning Gurgaon, Baby Dentist Gurgaon, Toddler Dentist Gurgaon, Kids Root Canal Gurgaon',
  alternates: {
    canonical: '/pediatric-dentist-gurgaon',
  },
  openGraph: {
    description:
      'Best Pediatric Dentist in Gurgaon. Expert child dental care for kids with gentle pediatric dentistry. Child-friendly clinic in Sector 65. Book appointment today!',
    url: 'https://haplivdentalclinic.com/pediatric-dentist-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Expert child dental care for kids with gentle pediatric dentistry. Child-friendly clinic in Sector 65.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const pediatricDentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/pediatric-dentist-gurgaon',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Best Pediatric Dentist in Gurgaon providing expert child dental care. Gentle pediatric dentistry for kids including cleanings, fluoride treatment, sealants, and early orthodontics.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122018',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.398091,
    longitude: 77.0634188,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
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
  medicalSpecialty: [
    'Pediatric Dentistry',
    'General Dentistry',
    'Orthodontics',
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
      name: 'Pediatric Dentist',
      item: 'https://haplivdentalclinic.com/pediatric-dentist-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'At what age should my child first visit a pediatric dentist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The American Academy of Pediatric Dentistry recommends that children should visit a pediatric dentist by their first birthday or within 6 months of their first tooth appearing. Early dental visits help prevent dental problems and establish good oral health habits from a young age.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does a pediatric dentist provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pediatric dentist in Gurgaon provides comprehensive child dental care including dental cleanings, fluoride treatments, dental sealants, cavity fillings, root canal treatment for children, early orthodontic evaluation, space maintainers, and emergency dental care for kids. We specialize in making dental visits comfortable and fun for children.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is pediatric dentistry different from regular dentistry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pediatric dentists specialize in treating children from infancy through adolescence. They have additional training in child psychology, behavior management, and child-specific dental issues. Our pediatric dentist uses child-friendly techniques, explains procedures in simple terms, and creates a comfortable, non-threatening environment for kids.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of pediatric dental treatment in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pediatric dental treatment costs vary based on the procedure. Regular cleanings cost ₹500-₹1,500, fluoride treatment ₹500-₹1,000, dental sealants ₹1,000-₹2,000 per tooth, and fillings ₹1,000-₹3,000. We offer transparent pricing and flexible payment options. Contact us for a detailed consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you make dental visits comfortable for children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We create a child-friendly environment with colorful decor, toys, and games. Our pediatric dentist uses gentle techniques, explains procedures in simple terms, and uses positive reinforcement. We take time to build trust with each child and make dental visits a positive experience. Parents are welcome to stay with their children during treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide braces for children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide early orthodontic evaluation and treatment for children. Early intervention can guide jaw growth, correct bite issues, and prevent more serious problems later. We offer traditional braces and Invisalign for teens. Our expert orthodontist will evaluate your child\'s needs and recommend the best treatment option.',
      },
    },
  ],
};

export default function PediatricDentistGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pediatricDentistSchema) }}
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
                  Best Pediatric Dentist in Gurgaon
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Expert Kids Dentist | Child-Friendly Dental Care | Gentle Pediatric Dentistry
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={pediatricPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="pediatric-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="pediatric-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now: +91 98104 71255
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="pediatric-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Pediatric Dentist */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Expert Pediatric Dentist for Your Child
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>, our expert <strong>pediatric dentist</strong> specializes in providing gentle, child-friendly dental care. We understand that children need special attention and care, which is why we create a comfortable, fun environment for your little ones.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Our <strong>kids dentist</strong> provides comprehensive pediatric dental services including regular cleanings, fluoride treatments, dental sealants, cavity fillings, and early orthodontic evaluation. We make dental visits a positive experience for children, helping them develop good oral health habits that last a lifetime.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Our Pediatric Dentist?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Child-friendly environment with toys and games</li>
                      <li>Gentle, child-friendly dental procedures</li>
                      <li>Expert pediatric dentist with specialized training</li>
                      <li>Early orthodontic evaluation and treatment</li>
                      <li>Preventive care to avoid future problems</li>
                      <li>Positive reinforcement and behavior management</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Best Pediatric Dentist in Gurgaon - Child-friendly dental care"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Pediatric Dental Services</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li><strong>Dental Cleanings</strong> - Regular preventive care</li>
                      <li><strong>Fluoride Treatment</strong> - Strengthen tooth enamel</li>
                      <li><strong>Dental Sealants</strong> - Protect against cavities</li>
                      <li><strong>Cavity Fillings</strong> - Restore damaged teeth</li>
                      <li><strong>Early Orthodontics</strong> - Guide jaw growth</li>
                      <li><strong>Space Maintainers</strong> - Preserve space for adult teeth</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Pediatric Dental Services We Provide
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Dental Cleanings for Kids',
                    description: 'Regular preventive dental cleanings to keep your child\'s teeth healthy and cavity-free. Our pediatric dentist uses gentle techniques to make cleanings comfortable.',
                  },
                  {
                    title: 'Fluoride Treatment',
                    description: 'Professional fluoride application to strengthen tooth enamel and prevent cavities. Safe and effective for children of all ages.',
                  },
                  {
                    title: 'Dental Sealants',
                    description: 'Protective sealants applied to back teeth to prevent cavities. Quick, easy procedure that can protect teeth for years.',
                  },
                  {
                    title: 'Cavity Fillings',
                    description: 'Gentle cavity fillings using child-friendly materials. We ensure minimal discomfort and quick recovery for your child.',
                  },
                  {
                    title: 'Early Orthodontic Evaluation',
                    description: 'Early assessment of your child\'s bite and jaw development. Early intervention can prevent more serious orthodontic problems later.',
                  },
                  {
                    title: 'Space Maintainers',
                    description: 'Devices to preserve space for permanent teeth when baby teeth are lost early. Prevents crowding and alignment issues.',
                  },
                ].map((service, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">{service.title}</h3>
                      <p className="flex-1 text-base leading-relaxed text-gray-700">{service.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* When to Visit Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                When Should Your Child Visit a Pediatric Dentist?
              </h2>
            </FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    age: 'First Birthday',
                    description: 'First dental visit should be by age 1 or within 6 months of first tooth appearing. Early visits help prevent problems and establish good habits.',
                  },
                  {
                    age: 'Every 6 Months',
                    description: 'Regular check-ups every 6 months for preventive care, cleanings, and early detection of dental issues.',
                  },
                  {
                    age: 'Age 7',
                    description: 'Early orthodontic evaluation to assess bite and jaw development. Early intervention can prevent serious problems.',
                  },
                  {
                    age: 'As Needed',
                    description: 'Visit immediately for tooth pain, dental trauma, broken teeth, or any dental emergency. We provide emergency pediatric dental care.',
                  },
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{item.age}</h3>
                      <p className="flex-1 text-base leading-relaxed text-gray-700">{item.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Visit Our Pediatric Dental Clinic
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
                    <BookAppointmentLink href="/appointment"
                      className="px-6 py-3 text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] font-semibold"
                    >
                      Book Appointment
                    </BookAppointmentLink>
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
                Frequently Asked Questions About Pediatric Dentistry
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'At what age should my child first visit a pediatric dentist?',
                  a: 'The American Academy of Pediatric Dentistry recommends that children should visit a pediatric dentist by their first birthday or within 6 months of their first tooth appearing. Early dental visits help prevent dental problems and establish good oral health habits from a young age.',
                },
                {
                  q: 'What services does a pediatric dentist provide?',
                  a: 'Our pediatric dentist in Gurgaon provides comprehensive child dental care including dental cleanings, fluoride treatments, dental sealants, cavity fillings, root canal treatment for children, early orthodontic evaluation, space maintainers, and emergency dental care for kids. We specialize in making dental visits comfortable and fun for children.',
                },
                {
                  q: 'How is pediatric dentistry different from regular dentistry?',
                  a: 'Pediatric dentists specialize in treating children from infancy through adolescence. They have additional training in child psychology, behavior management, and child-specific dental issues. Our pediatric dentist uses child-friendly techniques, explains procedures in simple terms, and creates a comfortable, non-threatening environment for kids.',
                },
                {
                  q: 'What is the cost of pediatric dental treatment in Gurgaon?',
                  a: 'Pediatric dental treatment costs vary based on the procedure. Regular cleanings cost ₹500-₹1,500, fluoride treatment ₹500-₹1,000, dental sealants ₹1,000-₹2,000 per tooth, and fillings ₹1,000-₹3,000. We offer transparent pricing and flexible payment options. Contact us for a detailed consultation.',
                },
                {
                  q: 'How do you make dental visits comfortable for children?',
                  a: 'We create a child-friendly environment with colorful decor, toys, and games. Our pediatric dentist uses gentle techniques, explains procedures in simple terms, and uses positive reinforcement. We take time to build trust with each child and make dental visits a positive experience. Parents are welcome to stay with their children during treatment.',
                },
                {
                  q: 'Do you provide braces for children?',
                  a: 'Yes, we provide early orthodontic evaluation and treatment for children. Early intervention can guide jaw growth, correct bite issues, and prevent more serious problems later. We offer traditional braces and Invisalign for teens. Our expert orthodontist will evaluate your child\'s needs and recommend the best treatment option.',
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
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Give Your Child the Best Dental Care</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Book an appointment with our expert <strong>pediatric dentist in Gurgaon</strong> today. We make dental visits fun and comfortable for your child.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={pediatricPageWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="pediatric-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="pediatric-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="pediatric-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Appointment
                </BookAppointmentLink>
                <Link
                  href="/locations/dentist-in-sector-65-gurgaon"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Our Clinic
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

