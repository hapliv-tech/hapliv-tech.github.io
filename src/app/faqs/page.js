import FaqItem from "components/faq-item";
import { FaqData } from "components/faq";
import { FadeIn } from "components/animations";
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

const faqsPageWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FaqData.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answers[0],
    },
  })),
};

export const metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description:
    "Find answers to frequently asked questions about dental treatments, braces, Invisalign, root canal, implants, and oral health at Hapliv Dental Clinic in Gurgaon and West Delhi.",
  keywords:
    "Dental FAQs, Frequently Asked Questions, Dental Treatment Questions, Braces FAQ, Invisalign FAQ, Root Canal FAQ, Dental Implant FAQ, Oral Health Questions, Hapliv Dental Clinic FAQ",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    description:
      "Find answers to frequently asked questions about dental treatments and oral health at Hapliv Dental Clinic.",
    type: "website",
  },
  twitter: {
    card: "summary",
    description: "Get answers to common questions about dental treatments and oral health.",
  },
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-28 text-white bg-primary-dark">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                Frequently Asked Questions (FAQs)
              </h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
                Find answers to frequently asked questions about dental treatments, braces, Invisalign, root canal, implants, and oral health at Hapliv Dental Clinic.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="p-8 bg-gray-50 rounded-card shadow-soft-lg">
              <p className="text-lg leading-relaxed text-gray-700">
                At <strong>Hapliv Dental Clinic</strong>, we believe that taking care of your teeth and gums is essential to maintaining good overall health. Here are some frequently asked questions about dental problems to help you better understand how to prevent and treat them. Our expert dental surgeons have compiled these answers based on years of experience treating patients in <strong>Gurgaon (Sector 65)</strong> and <strong>West Delhi</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {FaqData.faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <FaqItem faq={faq} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-28 bg-white">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="p-8 text-center bg-primary-lightest rounded-card shadow-soft-lg">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                Still Have Questions?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Not found what you were looking for? No worries! Book a consultation with us today and get your queries resolved by our expert dental surgeons. We're here to help you achieve optimal dental health.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={faqsPageWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="faqs-cta"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-center text-white transition-all duration-300 transform bg-emerald-600 rounded-button shadow-button hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98]"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-cta="call"
                  data-cta-location="faqs-cta"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-center text-primary transition-all duration-300 transform border-2 border-primary rounded-button hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                >
                  Call: +91 98104 71255
                </a>
                <BookAppointmentLink href="/appointment"
                  data-cta="appointment"
                  data-cta-location="faqs-cta"
                  className="px-10 py-4 text-base font-semibold tracking-wide text-center text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Consultation
                </BookAppointmentLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
