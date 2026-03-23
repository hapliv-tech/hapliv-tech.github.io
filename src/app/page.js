import HomePageContent from "components/home/HomePageContent";
import { reviewData } from "components/reviews/reviewData";
import { CLINIC_SCHEMA_NAME } from "lib/seo";

// Generate Review schema from review data
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: CLINIC_SCHEMA_NAME,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.98',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviewData.slice(0, 5).map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewText,
    datePublished: new Date().toISOString().split('T')[0],
  })),
};

export const metadata = {
  title: "Braces & Invisalign Gurgaon & West Delhi | Certified Provider",
  description:
    "Straighter smiles at Sector 65, Gurgaon + evening slots in Mohan Garden, West Delhi. Certified Invisalign provider, braces for kids & adults, 4.98★ rated. Book a consult — WhatsApp or call +91 98104 71255.",
  keywords:
    "Best Orthodontist Gurgaon, Orthodontist Gurgaon, Braces treatment Gurgaon, Invisalign Gurgaon, Clear aligner Gurgaon, Aligner treatment Gurgaon, Best braces doctor Gurgaon, Invisalign provider Gurgaon, Orthodontic treatment Gurgaon, Teeth straightening Gurgaon, Braces near me, Invisalign near me, Orthodontist West Delhi, Braces West Delhi, Invisalign West Delhi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description:
      "Two clinics, one team — aligners & braces with a certified Invisalign provider. Highly rated. WhatsApp or call +91 98104 71255 to book.",
    url: "https://haplivdentalclinic.com",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
    type: "website",
    siteName: "Hapliv Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Sector 65 + West Delhi. Certified Invisalign & braces. WhatsApp or call +91 98104 71255.",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <HomePageContent />
    </>
  );
}
