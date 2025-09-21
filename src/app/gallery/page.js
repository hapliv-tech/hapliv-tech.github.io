import ImageGallery from "components/image-gallery/img-gallery";

const images = [
  {
    id: "our-patients",
    link: "gallery/our-patients",
    src: "https://ik.imagekit.io/thwkz9dxk/Patients/patient4.jpg?updatedAt=1689617020553&tr=w-1080%2Ch-1080%2Cfo-custom",
    alt: "Our Happy Patients",
    caption: "Our Patients",
  },
  {
    id: "hapliv-clinic-tour",
    link: "gallery/dental-clinic-tour",
    src: "https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg?updatedAt=1710439289110",
    alt: "Hapliv Dental Clinic Tour,Sector 65 Gurgaon",
    caption: "Clinic Tour",
  },
  {
    id: "hapliv-treatment-results",
    link: "gallery/treatment-results",
    src: "https://ik.imagekit.io/thwkz9dxk/Treatment%20Results/hapliv-patient21.jpeg?updatedAt=1736269834863",
    alt: "Treatment Results",
    caption: "Treatment Results",
  },
  {
    id: "hapliv-oral-health-awareness-camp",
    link: "gallery/oral-health-awareness-camp",
    src: "https://ik.imagekit.io/thwkz9dxk/Camp/hapliv-dental-camp-at-isle-de-royale-gurgaon8.jpeg?tr=n-ik_ml_thumbnail%2Cw-1080%2Ch-1080%2Cfo-custom&updatedAt=1736269834863",
    alt: "Oral Health Awareness Camp at Isle De Royale, Gurgaon",
    caption: "Oral Health Awareness Camp",
  },
];

export const metadata = {
  title: "Photo Gallery | Hapliv Dental Clinic",
  description:
    "Explore our extensive photo gallery featuring our happy patients, innovative clinic tours, effective treatment results, and oral health events at Hapliv Dental Clinic in Gurgaon and West Delhi.",
  keywords:
    "Photo Gallery, Dental Gallery, Hapliv Dental Clinic, Our Patients, Clinic Tour, Treatment Results, Oral Health, Gurgaon, West Delhi",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Hapliv Dental Clinic",
    description:
      "Discover our photo gallery featuring real patient smiles, modern clinic tours, and stunning treatment results at Hapliv Dental Clinic.",
    images: ["https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Hapliv Dental Clinic",
    description:
      "Browse our photo gallery at Hapliv Dental Clinic and witness the journey of our patients, clinic tours, and treatment results from our state-of-the-art facilities.",
    images: ["https://ik.imagekit.io/thwkz9dxk/Clinic%20Tour/hapliv-gurgaon-best-dental-clinic2.jpeg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="container items-center justify-center p-4 m-auto">
      <div className="mt-40">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Photo Gallery</h1>
        </div>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
