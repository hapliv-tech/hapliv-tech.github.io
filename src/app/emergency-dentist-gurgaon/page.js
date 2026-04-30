import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import PageBreadcrumbs from 'components/seo/PageBreadcrumbs';
import TrustStrip from 'components/seo/TrustStrip';
import { FadeIn, SlideUp, StaggerChildren } from 'components/animations';
import { CLINIC_SCHEMA_NAME, PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const emergencyPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Emergency Dentist Gurgaon | Same-Day Tooth Pain, Sector 65',
  description:
    'Severe toothache, broken tooth, swelling? Same-day emergency dentist Mon–Sat 10–8 at Sector 65 (M3M Tee Point, Golf Course Extension Road). Call or WhatsApp +91 98104 71255.',
  keywords:
    'Emergency Dentist Gurgaon, Tooth Pain Dentist Gurgaon, Dental Emergency Gurgaon, Urgent Dental Care Gurgaon, Broken Tooth Treatment Gurgaon, Toothache Treatment Gurgaon, Dental Trauma Gurgaon, Emergency Dental Clinic Gurgaon, Same Day Dentist Gurgaon, Dentist Sector 65 Gurgaon',
  alternates: {
    canonical: '/emergency-dentist-gurgaon',
  },
  openGraph: {
    description:
      'Urgent tooth pain or trauma? Same-day appointments Mon–Sat, Sector 65 Gurgaon. WhatsApp or call +91 98104 71255.',
    url: 'https://haplivdentalclinic.com/emergency-dentist-gurgaon',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
    siteName: 'Hapliv Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Toothache or dental emergency? Mon–Sat same-day slots, Sector 65. WhatsApp or call +91 98104 71255.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

const emergencyDentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_SCHEMA_NAME,
  image: 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
  url: 'https://haplivdentalclinic.com/emergency-dentist-gurgaon',
  telephone: '+919810471255',
  email: 'haplivdentalclinic@gmail.com',
  priceRange: '₹500+',
  description:
    'Emergency dentist in Gurgaon providing urgent dental care for tooth pain, broken teeth, dental trauma, and other dental emergencies. Same-day appointments available.',
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
    'Emergency Dentistry',
    'General Dentistry',
    'Endodontics',
    'Oral Surgery',
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
      name: 'Emergency Dentist',
      item: 'https://haplivdentalclinic.com/emergency-dentist-gurgaon',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is considered a dental emergency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental emergencies include severe tooth pain, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, abscesses, severe gum bleeding, dental trauma, and infections. If you experience intense pain, swelling, or trauma, seek emergency dental care immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide same-day emergency dental appointments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer same-day emergency dental appointments at our clinic in Sector 65, Gurgaon. We understand dental emergencies can\'t wait, so we prioritize urgent cases. Call +91 98104 71255 to book an emergency appointment. We are open Mon-Sat, 10 AM-8 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I have a tooth knocked out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a tooth is knocked out, handle it by the crown (top), not the root. Rinse gently with water if dirty, but don\'t scrub. Try to reinsert it in the socket, or keep it in milk or saliva. See an emergency dentist immediately - the first 30 minutes are critical for saving the tooth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does emergency dental treatment cost in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emergency dental treatment costs vary based on the procedure. Initial consultation and examination cost ₹500-₹1,000. Treatment costs depend on the specific emergency - tooth extraction (₹2,000-₹5,000), root canal (₹3,000-₹8,000), or other procedures. We provide transparent pricing and payment options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you open on weekends for dental emergencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Monday through Saturday, 10 AM to 8 PM for emergency dental care. For urgent cases outside these hours, please call +91 98104 71255 and we will do our best to accommodate your emergency. We prioritize patient care and understand dental emergencies can\'t always wait.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emergency dental services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide comprehensive emergency dental services including tooth pain relief, broken tooth repair, knocked-out tooth reimplantation, abscess drainage, lost filling/crown replacement, dental trauma treatment, and infection management. Our expert dentists are equipped to handle all types of dental emergencies.',
      },
    },
  ],
};

export default function EmergencyDentistGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyDentistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageBreadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Emergency dentist Gurgaon', path: '/emergency-dentist-gurgaon' },
        ]}
      />
      <div className="min-h-screen mt-24 bg-white">
        {/* Hero Section */}
        <section className="relative px-4 text-white py-28 bg-primary-dark">
          <div className="container mx-auto max-w-7xl">
            <FadeIn>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                  Emergency dentist in Gurgaon for tooth pain & urgent care
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Severe toothache, broken teeth, swelling or lost fillings — we prioritise urgent cases Mon–Sat, 10 AM–8 PM.
                  Call first for same-day triage, WhatsApp for a fast reply, or book online for our Sector 65 clinic at M3M Tee Point, Golf Course Extension Road.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-cta="call"
                    data-cta-location="emergency-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-primary bg-white transition-all duration-300 transform rounded-button shadow-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Call Now
                  </a>
                  <a
                    href={emergencyPageWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="emergency-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    WhatsApp Now
                  </a>
                  <BookAppointmentLink href="/appointment"
                    data-cta="appointment"
                    data-cta-location="emergency-gurgaon-hero"
                    className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Appointment
                  </BookAppointmentLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <TrustStrip />

        {/* Emergency Services */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">
                    Emergency Dental Care in Gurgaon
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    At Hapliv Dental Clinic in <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold underline text-primary hover:text-primary-dark">Sector 65, Gurgaon</Link>, we provide immediate emergency dental care for urgent dental problems. Our expert <strong>emergency dentists</strong> are available to treat tooth pain, broken teeth, dental trauma, and other dental emergencies.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    We understand that dental emergencies can't wait. That's why we offer <strong>same-day emergency appointments</strong> and prioritize urgent cases. Whether you have severe tooth pain, a knocked-out tooth, or a dental infection, our <strong>emergency dental clinic</strong> in Gurgaon is here to help.
                  </p>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">When to Seek Emergency Dental Care</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Severe tooth pain or toothache</li>
                      <li>Knocked-out or dislodged tooth</li>
                      <li>Broken, chipped, or cracked tooth</li>
                      <li>Lost filling or crown</li>
                      <li>Dental abscess or infection</li>
                      <li>Severe gum bleeding</li>
                      <li>Dental trauma or injury</li>
                      <li>Swelling in mouth or face</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div>
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-card shadow-soft-lg">
                    <Image
                      src="/assets/hapliv_dental_operatory.webp"
                      alt="Emergency Dentist in Gurgaon - Same-day emergency dental care"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-card"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-card shadow-soft-lg">
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">Why Choose Our Emergency Dental Care?</h3>
                    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                      <li>Same-day emergency appointments</li>
                      <li>Expert emergency dentists with 8+ years experience</li>
                      <li>Advanced dental equipment and technology</li>
                      <li>Comprehensive emergency dental services</li>
                      <li>Convenient location in Sector 65, Gurgaon</li>
                      <li>Transparent pricing and payment options</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Emergency Services Grid */}
        <section className="px-4 bg-white py-28">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Emergency Dental Services We Provide
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Tooth Pain Relief',
                    description: 'Immediate treatment for severe toothache and dental pain. Our emergency dentists provide fast pain relief and identify the cause.',
                  },
                  {
                    title: 'Broken Tooth Repair',
                    description: 'Emergency repair for broken, chipped, or cracked teeth. We restore damaged teeth quickly to prevent further complications.',
                  },
                  {
                    title: 'Knocked-Out Tooth',
                    description: 'Emergency reimplantation of knocked-out teeth. Time is critical - we act fast to save your natural tooth.',
                  },
                  {
                    title: 'Dental Abscess Treatment',
                    description: 'Immediate treatment for dental infections and abscesses. We drain infections and provide antibiotics to prevent spread.',
                  },
                  {
                    title: 'Lost Filling/Crown',
                    description: 'Emergency replacement of lost fillings or crowns. We restore your tooth quickly to prevent pain and further damage.',
                  },
                  {
                    title: 'Dental Trauma',
                    description: 'Comprehensive treatment for dental injuries and trauma. Our emergency dentists handle all types of dental emergencies.',
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

        {/* What to Do Section */}
        <section className="px-4 py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                What to Do in a Dental Emergency
              </h2>
            </FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    emergency: 'Knocked-Out Tooth',
                    steps: [
                      'Handle tooth by crown, not root',
                      'Rinse gently with water if dirty',
                      'Try to reinsert in socket',
                      'Or keep in milk or saliva',
                      'See emergency dentist immediately (within 30 minutes)',
                    ],
                  },
                  {
                    emergency: 'Severe Tooth Pain',
                    steps: [
                      'Rinse mouth with warm salt water',
                      'Use dental floss to remove food particles',
                      'Apply cold compress to reduce swelling',
                      'Take over-the-counter pain reliever',
                      'Call emergency dentist immediately',
                    ],
                  },
                  {
                    emergency: 'Broken Tooth',
                    steps: [
                      'Rinse mouth with warm water',
                      'Apply cold compress to reduce swelling',
                      'Save any broken tooth fragments',
                      'Avoid chewing on that side',
                      'See emergency dentist as soon as possible',
                    ],
                  },
                  {
                    emergency: 'Dental Abscess',
                    steps: [
                      'Rinse with salt water to reduce pain',
                      'Apply cold compress externally',
                      'Avoid hot or cold foods',
                      'Take pain medication if needed',
                      'Seek immediate emergency dental care',
                    ],
                  },
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                    <div className="flex flex-col h-full p-8 transition-all duration-500 bg-white rounded-card shadow-soft-lg hover:shadow-premium hover:-translate-y-1">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{item.emergency}</h3>
                      <ol className="space-y-2 text-base text-gray-700 list-decimal list-inside">
                        {item.steps.map((step, stepIdx) => (
                          <li key={stepIdx}>{step}</li>
                        ))}
                      </ol>
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
                Emergency Dental Clinic Location
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
                      href="tel:+919810471255"
                      className="px-6 py-3 text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] font-semibold"
                    >
                      Call Emergency
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

        <section className="px-4 py-16 bg-gray-50 border-t border-gray-200">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">Related in Gurgaon</h2>
            <p className="mb-6 text-gray-700">
              Not sure how urgent your symptoms are? Use our{' '}
              <Link href="/dental-guides/tooth-pain-urgency-guide-gurgaon" className="font-semibold text-primary underline">
                tooth pain urgency guide
              </Link>
              . For planned root canal pricing see{' '}
              <Link href="/root-canal-treatment-cost-gurgaon" className="font-semibold text-primary underline">
                RCT cost in Gurgaon
              </Link>
              , and our main clinic page:{' '}
              <Link href="/locations/dentist-in-sector-65-gurgaon" className="font-semibold text-primary underline">
                dentist in Sector 65
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-28 bg-white">
          <div className="container max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="mb-16 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Frequently Asked Questions About Emergency Dental Care
              </h2>
            </FadeIn>
            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
              {[
                {
                  q: 'What is considered a dental emergency?',
                  a: 'Dental emergencies include severe tooth pain, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, abscesses, severe gum bleeding, dental trauma, and infections. If you experience intense pain, swelling, or trauma, seek emergency dental care immediately.',
                },
                {
                  q: 'Do you provide same-day emergency dental appointments?',
                  a: 'Yes, we offer same-day emergency dental appointments at our clinic in Sector 65, Gurgaon. We understand dental emergencies can\'t wait, so we prioritize urgent cases. Call +91 98104 71255 to book an emergency appointment. We are open Mon-Sat, 10 AM-8 PM.',
                },
                {
                  q: 'What should I do if I have a tooth knocked out?',
                  a: 'If a tooth is knocked out, handle it by the crown (top), not the root. Rinse gently with water if dirty, but don\'t scrub. Try to reinsert it in the socket, or keep it in milk or saliva. See an emergency dentist immediately - the first 30 minutes are critical for saving the tooth.',
                },
                {
                  q: 'How much does emergency dental treatment cost in Gurgaon?',
                  a: 'Emergency dental treatment costs vary based on the procedure. Initial consultation and examination cost ₹500-₹1,000. Treatment costs depend on the specific emergency - tooth extraction (₹2,000-₹5,000), root canal (₹3,000-₹8,000), or other procedures. We provide transparent pricing and payment options.',
                },
                {
                  q: 'Are you open on weekends for dental emergencies?',
                  a: 'We are open Monday through Saturday, 10 AM to 8 PM for emergency dental care. For urgent cases outside these hours, please call +91 98104 71255 and we will do our best to accommodate your emergency. We prioritize patient care and understand dental emergencies can\'t always wait.',
                },
                {
                  q: 'What emergency dental services do you provide?',
                  a: 'We provide comprehensive emergency dental services including tooth pain relief, broken tooth repair, knocked-out tooth reimplantation, abscess drainage, lost filling/crown replacement, dental trauma treatment, and infection management. Our expert dentists are equipped to handle all types of dental emergencies.',
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
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Need Emergency Dental Care?</h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
                Don't wait - dental emergencies need immediate attention. Call our <strong>emergency dentist in Gurgaon</strong> now for same-day emergency dental care.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="emergency-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-primary bg-white transition-all duration-300 transform rounded-button shadow-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call Now
                </a>
                <a
                  href={emergencyPageWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="emergency-gurgaon-footer"
                  className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-emerald-500 rounded-button text-white shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="emergency-gurgaon-footer"
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
