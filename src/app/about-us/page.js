import Image from "next/image";
import Link from "next/link";
import BookAppointmentLink from "components/seo/BookAppointmentLink";
import { ConsultationCta, PageHero, SectionHeader } from "components/app-pages/PageSections";
import {
  FaAward,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaSmile,
  FaStar,
  FaUserMd,
} from "react-icons/fa";

export const metadata = {
  title: "About Dr. Achla Verma & Hapliv | Dentist Gurgaon Sector 65",
  description:
    "Meet Hapliv Dental Clinic, a 4.98 rated dental team led by Dr. Achla Verma. Braces, Invisalign, RCT and implants in Gurgaon Sector 65 and West Delhi.",
  keywords:
    "Best orthodontist in Gurgaon, Invisalign treatment Gurgaon, Family dentist in Gurgaon, Clear aligners Gurgaon, Orthodontics treatment, Comfortable dental care Gurgaon, Dr. Achla Verma, Hapliv Dental Clinic, Cosmetic dentistry Gurgaon, Dental braces in Gurgaon",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Hapliv Dental Clinic - Invisalign & Orthodontic Treatment in Gurgaon",
    description:
      "Hapliv Dental Clinic in Gurgaon provides Invisalign and orthodontic treatments led by Dr. Achla Verma, with calm, comfort-focused care for families.",
    url: "https://haplivdentalclinic.com/about-us",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
    type: "website",
  },
};

const stats = [
  { value: "4.98", label: "Google rating", icon: FaStar },
  { value: "8+", label: "Years of care", icon: FaAward },
  { value: "2", label: "Clinic locations", icon: FaMapMarkerAlt },
  { value: "Full-time", label: "Orthodontic care", icon: FaUserMd },
];

const services = [
  "Braces and Invisalign clear aligners",
  "Root canal treatment and dental fillings",
  "Dental implants, crowns and bridges",
  "Laser dentistry and preventive family care",
];

const team = [
  {
    name: "Dr. Achla Verma",
    role: "Founder, Orthodontist and Invisalign provider",
    credentials: "BDS (PGIMS), MDS Orthodontics, Associate Fellowship in LASER, WCLI (USA)",
    image: "/assets/dr-achla-verma.webp",
    alt: "Dr. Achla Verma - Orthodontist and Founder of Hapliv Dental Clinic, Gurgaon",
    highlight: true,
    summary:
      "Dr. Achla leads Hapliv Dental Clinic with a focus on braces, Invisalign, dentofacial orthopedics and calm treatment planning for teens and adults.",
  },
  {
    name: "Dr. Praveen Raghav",
    role: "Orthodontist and certified Invisalign provider",
    credentials: "BDS, MDS Orthodontics and Dento-facial Orthopedics",
    image: "/assets/dr-praveen-raghav.webp",
    alt: "Dr. Praveen Raghav - Orthodontist and Invisalign Provider at Hapliv Dental Clinic",
    summary:
      "Dr. Praveen brings advanced aligner and orthodontic experience for complex teen and adult Invisalign cases.",
  },
  {
    name: "Dr. Tanya Dhawan",
    role: "Endodontist and root canal specialist",
    credentials: "BDS (PGIMS Rohtak), MDS Conservative Dentistry and Endodontics",
    image: "/assets/dr-tanya.png",
    alt: "Dr. Tanya Dhawan - Endodontist and Root Canal Specialist at Hapliv Dental Clinic",
    summary:
      "Dr. Tanya focuses on microscope root canal treatment, retreatment and conservative dentistry for saving natural teeth.",
  },
];

const principles = [
  "Ethical diagnosis and clear treatment planning",
  "Post-graduate doctors across key specialties",
  "Strict sterilization and clean clinical protocols",
  "Modern dental technology for accurate care",
  "Comfort-first treatment for children, teens and adults",
  "One clinic team for braces, aligners, RCT, implants and general dentistry",
];
const aboutSections = [
  { href: "#about-stats", label: "Stats" },
  { href: "#about-services", label: "Services" },
  { href: "#about-team", label: "Team" },
  { href: "#about-principles", label: "Why Hapliv" },
  { href: "#about-vision", label: "Vision & Mission" },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-gradient-to-b from-white via-primary-lightest/50 to-white px-4 pb-16 pt-28 md:px-8 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(81,36,122,0.08)_1px,_transparent_1.5px)] bg-[length:24px_24px]" aria-hidden="true" />
        <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase text-primary shadow-soft">
              <FaSmile className="h-3.5 w-3.5" />
              About Hapliv Dental Clinic
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">
              Calm, specialist-led dental care for Gurgaon and West Delhi
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              Hapliv Dental Clinic brings orthodontics, Invisalign, root canal treatment, implants and family dental care into one clear, comfort-focused experience. Our team is led by Dr. Achla Verma from Sector 65, Gurgaon, with evening care available in West Delhi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookAppointmentLink
                href="/appointment"
                className="inline-flex items-center justify-center rounded-button bg-primary px-7 py-4 text-base font-semibold text-white shadow-button transition hover:bg-primary-dark hover:shadow-button-hover"
                data-cta-location="about_hero"
              >
                Book a Consultation
              </BookAppointmentLink>
              <Link
                href="tel:+919810471255"
                className="inline-flex items-center justify-center gap-2 rounded-button border border-primary/15 bg-white px-7 py-4 text-base font-semibold text-primary shadow-soft transition hover:bg-primary-lightest"
                rel="nofollow"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call +91 98104 71255
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-card border border-white bg-white shadow-premium">
              <Image
                src="/assets/hapliv_dental_operatory.webp"
                width={900}
                height={1200}
                alt="Modern dental operatory at Hapliv Dental Clinic in Gurgaon"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[15rem] rounded-card border border-white/80 bg-white/90 p-4 shadow-soft-lg backdrop-blur">
              <div className="text-xs font-semibold uppercase text-primary">Sector 65, Gurgaon</div>
              <div className="mt-1 text-sm leading-snug text-gray-700">Specialist care with modern technology and clear treatment plans.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="z-20 px-4 py-3 bg-white border-y border-gray-100 lg:sticky lg:top-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 overflow-x-auto">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">On this page</span>
            {aboutSections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about-stats" className="px-4 py-12 md:px-8 scroll-mt-40">
        <div className="container mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-card border border-primary/10 bg-white p-5 shadow-soft">
              <stat.icon className="h-5 w-5 text-primary" />
              <div className="mt-4 text-3xl font-semibold text-gray-950">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about-services" className="px-4 py-14 md:px-8 lg:py-20 scroll-mt-40">
        <div className="container mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-gray-950 md:text-4xl">What makes Hapliv different</h2>
            <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">
              The clinic is built around specialist-led care, transparent guidance and a quieter patient experience. Instead of rushing into procedures, the team explains the diagnosis, options, timelines and maintenance before treatment begins.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((item) => (
              <div key={item} className="flex gap-3 rounded-card border border-primary/10 bg-primary-lightest/50 p-4">
                <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-team" className="bg-gray-50 px-4 py-14 md:px-8 lg:py-20 scroll-mt-40">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase text-primary">Team Hapliv</div>
            <h2 className="mt-3 text-3xl font-semibold text-gray-950 md:text-4xl">Meet your dentists</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              A focused team of post-graduate doctors supports orthodontics, aligners, endodontics and restorative care.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {team.map((doctor) => (
              <article
                key={doctor.name}
                className={`rounded-card border bg-white p-6 shadow-soft ${doctor.highlight ? "border-primary/25 ring-1 ring-primary/10" : "border-gray-100"}`}
              >
                <Image
                  src={doctor.image}
                  width={220}
                  height={220}
                  alt={doctor.alt}
                  unoptimized
                  className="mx-auto h-36 w-36 rounded-full border border-primary/10 bg-primary-lightest object-cover p-2"
                />
                <h3 className="mt-5 text-center text-2xl font-semibold text-gray-950">{doctor.name}</h3>
                <p className="mt-2 text-center text-sm font-semibold text-primary">{doctor.role}</p>
                <p className="mt-2 text-center text-xs leading-relaxed text-gray-500">{doctor.credentials}</p>
                <p className="mt-5 text-sm leading-relaxed text-gray-700">{doctor.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about-principles" className="px-4 py-14 md:px-8 lg:py-20 scroll-mt-40">
        <div className="container mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-lightest text-primary">
              <FaShieldAlt className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-gray-950 md:text-4xl">Why patients choose Hapliv</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              The practice is designed for families who want accurate diagnosis, a clean clinic environment and specialist support without confusion.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="rounded-card border border-gray-100 bg-white p-4 shadow-soft">
                <div className="flex gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-gray-800">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-vision" className="px-4 pb-20 md:px-8 scroll-mt-40">
        <div className="container mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-card bg-primary-lightest p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-gray-950">Our vision</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              To become one of India's most trusted dental care brands through high-quality treatment, modern infrastructure and reliable patient communication.
            </p>
          </div>
          <div className="rounded-card bg-primary p-8 text-white shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Our mission</h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              To preserve natural teeth where possible, use the right technology at the right time, and make every treatment plan easier for patients to understand.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCta
        title="Want to meet the Hapliv team?"
        description="Book a consultation at Gurgaon or West Delhi and get a clear treatment plan from the clinic team."
        ctaLocation="about-footer"
      />
    </main>
  );
}
