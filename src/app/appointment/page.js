import AppointmentPageClient from "components/appointment/AppointmentPageClient";

export const metadata = {
  title: "Book Your Dental Appointment",
  description:
    "Schedule your dental appointment online at Hapliv Dental Clinic. Our clinics in Gurgaon and West Delhi offer personalized dental care with expert orthodontists and modern technology.",
  keywords:
    "Dental Appointment, Book Dental Appointment, Dental Clinic Gurgaon, Dental Clinic West Delhi, Orthodontist, Invisalign, Dental Care, Hapliv Dental Clinic",
  alternates: {
    canonical: "/appointment",
  },
  openGraph: {
    description:
      "Schedule your dental appointment online at Hapliv Dental Clinic. With clinics in Gurgaon and West Delhi, experience premium dental care delivered by our expert team.",
    url: "https://haplivdentalclinic.com/appointment",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Book your dental appointment online at Hapliv Dental Clinic, with convenient locations in Gurgaon and West Delhi. Experience expert dental care today!",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
  },
};

export default function AppointmentPage() {
  return <AppointmentPageClient />;
}
