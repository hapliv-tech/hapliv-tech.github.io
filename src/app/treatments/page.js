import { navLinks } from 'components/header/navbarData';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';
import { MdArrowForward } from 'react-icons/md';

const treatmentsIndexWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

export const metadata = {
  title: 'Dental Treatments & Services in Gurgaon & West Delhi',
  description:
    'Comprehensive dental treatments at Hapliv Dental Clinic in Gurgaon and West Delhi. Expert care for braces, Invisalign, root canal, implants, crowns, teeth whitening, scaling, and more. Book your appointment today!',
  keywords:
    'Dental Treatments, Dental Services, Dental Surgeon, Braces Treatment, Invisalign, Root Canal Treatment, Dental Implants, Crowns and Bridges, Teeth Whitening, Scaling and Polishing, Wisdom Tooth Extraction, LASER Dentistry, Dental Clinic Gurgaon, Dental Clinic West Delhi, Nearby dentist Sector 65 Gurgaon, Best dentist near Trump Towers, Hapliv Dental Clinic',
  alternates: { canonical: '/treatments' },
  openGraph: {
    description:
      'Expert dental treatments at Hapliv Dental Clinic. From braces and Invisalign to root canal and implants, we provide comprehensive dental care in Gurgaon and West Delhi.',
    url: 'https://haplivdentalclinic.com/treatments',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Comprehensive dental treatments including braces, Invisalign, root canal, implants, and more at Hapliv Dental Clinic in Gurgaon and West Delhi.',
    images: ['https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp'],
  },
};

export default function TreatmentsIndexPage() {
  const services = navLinks.filter((item) => item.path === '/treatments');
  
  const dentalProblems = [
    {
      title: 'Tooth Decay',
      body:
        "Tooth decay, also known as cavities, is one of the most prevalent dental problems. It occurs when bacteria in the mouth produce acids that attack the tooth's enamel, causing it to break down. The most common reasons behind tooth decay are poor oral hygiene, sugary and acidic foods and drinks, and dry mouth. Tooth decay can cause pain, sensitivity, and even tooth loss. The corrective approach to treating tooth decay is to remove the decayed part of the tooth and replace it with a filling material. In severe cases, a root canal treatment or extraction may be necessary.",
    },
    {
      title: 'Gum Disease',
      body:
        'Gum disease, also known as periodontal disease, is another prevalent dental problem that affects the gums and bones that support the teeth. The primary cause of gum disease is poor oral hygiene, which leads to plaque buildup on the teeth and gums. Smoking, diabetes, and certain medications can also contribute to gum disease. Gum disease can cause gum recession, tooth loss, and even bone loss. The corrective approach to treating gum disease involves professional cleaning to remove plaque and tartar buildup. In severe cases, surgery may be necessary to repair damaged gums and bones.',
    },
    {
      title: 'Teeth Sensitivity',
      body:
        "Teeth sensitivity occurs when the tooth's enamel wears down or the gums recede, exposing the tooth's underlying layer. The most common cause of teeth sensitivity is brushing too hard, which can wear down the enamel. Other reasons include gum disease, teeth grinding, and acidic foods and drinks. Teeth sensitivity can cause pain or discomfort when eating or drinking hot, cold, or sweet foods and drinks. The corrective approach to treating teeth sensitivity involves using a desensitizing toothpaste, avoiding acidic foods and drinks, and wearing a mouthguard to prevent teeth grinding.",
    },
    {
      title: 'Bad Breath',
      body:
        'Bad breath, also known as halitosis, is a common dental problem that can be embarrassing and affect self-esteem. The primary cause of bad breath is poor oral hygiene, which leads to the buildup of bacteria in the mouth. Other reasons include dry mouth, certain foods, and tobacco use. The corrective approach to treating bad breath involves regular brushing and flossing, using an antibacterial mouthwash, and drinking plenty of water to prevent dry mouth.',
    },
    {
      title: 'Oral Cancer',
      body:
        'Oral cancer is a serious dental problem that affects the mouth, tongue, and throat. The primary cause of oral cancer is tobacco use, excessive alcohol consumption, and HPV infection. Oral cancer can cause difficulty in speaking, chewing, and swallowing. The corrective approach to treating oral cancer involves surgery, radiation therapy, and chemotherapy.',
    },
    {
      title: 'Crowded Teeth',
      body:
        'Crowded teeth occur when there is not enough space in the mouth for all the teeth to grow properly. The primary cause of crowded teeth is genetics. Crowded teeth can cause difficulty in cleaning, leading to cavities and gum disease. The corrective approach to treating crowded teeth involves orthodontic treatment, such as braces or clear aligners.',
    },
    {
      title: 'Missing Teeth',
      body:
        'Missing teeth are a common dental problem that can affect speech, eating, and overall self-esteem. The primary causes of missing teeth are tooth decay and gum disease. Trauma to the mouth and genetics can also contribute to missing teeth. The corrective approach to treating missing teeth involves dental implants, bridges, or dentures.',
    },
    {
      title: 'Grinding and Clenching',
      body:
        'Grinding and clenching, also known as bruxism, is a common dental problem that can cause headaches, jaw pain, and worn-down teeth. The primary causes of grinding and clenching are stress and anxiety. The corrective approach to treating grinding and clenching involves wearing a mouthguard at night and stress reduction techniques.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-28 mt-24 bg-primary-dark">
        <div className="container max-w-7xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
            Dental Problems & Treatments
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
            Comprehensive dental care at Hapliv Dental Clinic in Sector 65, Gurgaon. Our expert dental surgeons provide personalized treatment for all your dental concerns.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 py-28 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">Understanding Dental Health</h2>
            <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 md:text-xl">
              Dental problems are common among people of all ages. These problems can range from minor issues like bad breath to more severe conditions like gum
              disease, tooth decay, oral cancer, and more. Dental problems can cause discomfort, pain, and can affect overall health if left untreated. At Hapliv Dental Clinic in Sector 65, Gurgaon, our expert dental surgeons are here to help you with all your dental concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Dental Problems Grid */}
      <section className="px-4 py-28 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">Common Dental Problems</h2>
            <p className="text-lg text-gray-600 md:text-xl">Learn about the most common dental issues and their solutions</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dentalProblems.map((problem, idx) => (
              <article
                key={problem.title}
                className="h-full p-8 transition-all duration-500 bg-white border border-gray-100 shadow-soft rounded-card hover:shadow-soft-lg hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary shadow-soft">
                    <span className="text-lg font-semibold">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{problem.title}</h3>
                </div>
                <div className="w-12 h-0.5 mb-4 bg-accent"></div>
                <p className="leading-relaxed text-gray-700 text-base">{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="px-4 py-28 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">Our Dental Treatments</h2>
            <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
            <p className="max-w-3xl mx-auto mb-4 text-lg leading-relaxed text-gray-700">
              Dental problems are preventable with proper oral hygiene and regular dental checkups. Tooth decay, gum disease, teeth sensitivity, bad breath, oral
              cancer, crowded teeth, missing teeth, and grinding and clenching are some of the most common dental problems. Poor oral hygiene is the primary cause of
              these issues, but other factors like diet, lifestyle, and genetics can also contribute. Our dental surgeons at Hapliv Dental Clinic in Sector 65, Gurgaon provide comprehensive treatment for all these conditions.
            </p>
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-700">
              The corrective approach to treating dental problems depends on the severity of the issue. It is always better to consult our expert dental surgeons for proper diagnosis
              and treatment. As one of the best nearby dentists in Sector 65, Gurgaon, we offer personalized care for all your dental needs. Whether you need{' '}
              <Link href="/treatments/braces" className="font-semibold text-primary hover:underline">braces treatment</Link>,{' '}
              <Link href="/invisalign" className="font-semibold text-primary hover:underline">Invisalign clear aligners</Link>,{' '}
              <Link href="/treatments/painless-root-canal-treatment" className="font-semibold text-primary hover:underline">root canal treatment</Link>,{' '}
              <Link href="/treatments/implant" className="font-semibold text-primary hover:underline">dental implants</Link>, or{' '}
              <Link href="/treatments/laser-dental-treatments" className="font-semibold text-primary hover:underline">LASER dentistry</Link>, our expert team is here to help.
            </p>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services[0]?.children?.map((item, idx) => (
              <Link
                key={idx}
                href={item?.path}
                className="flex flex-col h-full p-8 transition-all duration-500 bg-white border border-gray-100 shadow-soft group rounded-card hover:shadow-soft-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                    {item?.name}
                  </h3>
                  <MdArrowForward className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1" />
                </div>
                <div className="flex items-center mt-auto">
                  <span className="px-4 py-1.5 text-sm font-semibold tracking-wide text-white rounded-full bg-accent shadow-soft">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="px-4 py-28 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">Visit Our Dental Clinics</h2>
            <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 md:text-xl">
              Experience expert dental care at our modern clinics in Gurgaon (Sector 65) and West Delhi. Our state-of-the-art facilities are equipped with advanced technology for comprehensive dental treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/locations/dentist-in-sector-65-gurgaon"
              className="p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
            >
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                Sector 65, Gurgaon
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-700">
                Best dental clinic in Sector 65, Gurgaon near Trump Towers. Expert dental surgeons offering comprehensive dental care.
              </p>
              <span className="inline-block text-sm font-semibold tracking-wide text-primary group-hover:text-primary-dark group-hover:translate-x-1 transition-all duration-300">
                View Details →
              </span>
            </Link>
            <Link
              href="/locations/nearby-dentist-gurgaon"
              className="p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
            >
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                Nearby Dentist
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-700">
                Find the best nearby dentist in Gurgaon. Conveniently located in Sector 65 with easy accessibility from all major areas.
              </p>
              <span className="inline-block text-sm font-semibold tracking-wide text-primary group-hover:text-primary-dark group-hover:translate-x-1 transition-all duration-300">
                Find Nearby →
              </span>
            </Link>
            <Link
              href="/locations"
              className="p-8 transition-all duration-500 bg-white border border-gray-100 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1 group"
            >
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                All Locations
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-700">
                View all our clinic locations in Gurgaon and West Delhi. Find the nearest dental clinic to you.
              </p>
              <span className="inline-block text-sm font-semibold tracking-wide text-primary group-hover:text-primary-dark group-hover:translate-x-1 transition-all duration-300">
                View All →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-slate-50 border-y border-slate-100">
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          Exploring indicative costs or tooth pain triage before you book? See our{' '}
          <Link href="/dental-guides" className="font-semibold text-primary underline hover:text-primary-dark">
            free planning guides for Gurgaon patients
          </Link>
          .
        </p>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-28 bg-primary-dark">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Ready to Transform Your Smile?</h2>
          <p className="mb-10 text-lg text-gray-100 md:text-xl">
            Book a consultation with our expert dental surgeons in Sector 65, Gurgaon today!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={treatmentsIndexWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              data-cta-location="treatments-index-footer"
              className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-emerald-500 rounded-button shadow-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              data-cta="call"
              data-cta-location="treatments-index-footer"
              className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              Call: +91 98104 71255
            </a>
            <BookAppointmentLink href="/appointment"
              data-cta="appointment"
              data-cta-location="treatments-index-footer"
              className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white/80 rounded-button bg-white/10 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Consultation
            </BookAppointmentLink>
          </div>
        </div>
      </section>
    </div>
  );
}
