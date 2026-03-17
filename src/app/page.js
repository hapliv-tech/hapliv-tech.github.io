import HomePageContent from "components/home/HomePageContent";
import { reviewData } from "components/reviews/reviewData";

// Generate Review schema from review data
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hapliv Dental Clinic',
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
  title: "Best Orthodontist in Gurgaon & West Delhi | Braces & Invisalign Aligner Treatment | Hapliv Dental",
  description:
    "Best Orthodontist in Gurgaon & West Delhi specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for teeth straightening, bite correction, and smile transformation. Book your consultation with our certified orthodontist today!",
  keywords:
    "Best Orthodontist Gurgaon, Orthodontist Gurgaon, Braces treatment Gurgaon, Invisalign Gurgaon, Clear aligner Gurgaon, Aligner treatment Gurgaon, Best braces doctor Gurgaon, Invisalign provider Gurgaon, Orthodontic treatment Gurgaon, Teeth straightening Gurgaon, Braces near me, Invisalign near me, Orthodontist West Delhi, Braces West Delhi, Invisalign West Delhi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Orthodontist in Gurgaon & West Delhi | Braces & Invisalign | Hapliv Dental",
    description:
      "Best Orthodontist in Gurgaon & West Delhi specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for perfect smiles. Book your consultation today!",
    url: "https://haplivdentalclinic.com",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
    type: "website",
    siteName: "Hapliv Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Orthodontist in Gurgaon & West Delhi | Braces & Invisalign",
    description:
      "Best Orthodontist specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for perfect smiles. Book your consultation today!",
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
