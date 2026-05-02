import FaqItem from "components/faq-item";
import { FaqData } from "components/faq";
import { FadeIn } from "components/animations";
import { ConsultationCta, PageHero, SectionHeader } from 'components/app-pages/PageSections';
import { WHATSAPP_E164, DEFAULT_WHATSAPP_MSG } from 'lib/seo';

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
      <PageHero
        eyebrow="Patient questions"
        title="Frequently Asked Questions"
        description="Find clear answers about dental treatments, braces, Invisalign, root canal, implants, and oral health at Hapliv Dental Clinic."
        secondaryHref="#faq-list"
        secondaryLabel="Browse FAQs"
        highlights={[
          'Treatment planning basics',
          'Braces, Invisalign and implant guidance',
          'Oral hygiene and preventive care',
          'Clinic booking and consultation support',
        ]}
      />

      {/* Introduction Section */}
      <section className="px-4 py-14 bg-white md:px-8 lg:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-card border border-primary/10 bg-primary-lightest/50 p-6 shadow-soft md:p-8">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              At <strong>Hapliv Dental Clinic</strong>, we believe that taking care of your teeth and gums is essential to maintaining good overall health. These answers help you better understand how to prevent and treat common concerns, based on years of experience treating patients in <strong>Gurgaon (Sector 65)</strong> and <strong>West Delhi</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq-list" className="px-4 py-16 bg-gray-50 md:px-8 lg:py-20 scroll-mt-32">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Answers"
            title="Common Dental FAQs"
            description="Use these answers as general guidance. A clinical consultation is still needed for diagnosis and treatment planning."
          />
          <div className="space-y-4">
            {FaqData.faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <FaqItem faq={faq} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta
        title="Still have questions?"
        description="Book a consultation or message the clinic to get your query reviewed by the dental team."
        ctaLocation="faqs-cta"
        whatsappUrl={faqsPageWaUrl}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
