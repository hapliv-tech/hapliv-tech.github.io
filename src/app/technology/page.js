import Image from "next/legacy/image";
import { FaMicroscope, FaXRay, FaCamera, FaBolt, FaShieldVirus, FaCube, FaTools, FaBullseye, FaTooth } from "react-icons/fa";
import { FadeIn, SlideUp, StaggerChildren } from "components/animations";

const technologyList = [
  {
    title: "Root Canal Treatment with Cutting Edge Technology",
    description:
      "We do <strong>painless root canal treatment</strong> with equipment that fasten up the treatment and provide world class results by using one of the best Apexlocator used in modern dentistry by J.Morita and Endo-motor (Motorised Machine based RCT).",
    imageUrls: [
      { src: "/assets/technology/endomotor.webp", alt: "Endomotor" },
      { src: "/assets/technology/jmorita.webp", alt: "Apex Locator by J.Morita" },
    ],
    icon: FaMicroscope,
  },
  {
    title: "Digital X-Ray",
    description:
      "Hapliv uses <strong>Low Radiation DC X-ray</strong>, which is the most advanced dental X-ray technology. It reduces X-ray exposure almost by 80% when compared to other AC X-ray available in the dental market hence preventing any health hazard to our precious client. We also use CBCT, OPG, LATERAL CEPHALOGRAM in our practice for the treatment to get best dental treatment results wherever required.",
    imageUrls: [
      { src: "/assets/technology/DC XRAY.webp", alt: "DC Xray" },
      { src: "/assets/technology/opg.webp", alt: "OPG Xray" },
    ],
    icon: FaXRay,
  },
  {
    title: "Digital X-Ray Sensor",
    description:
      "Those patients who do not enjoy dental X-ray tedious old school methods of keeping that huge sharp X-ray film in their mouth, which is time consuming and needs a dark room. You can visit us at Hapliv as we use a digital X-ray machine & sensor for diagnostic records. This makes the dental treatment experience much easier and comfortable.",
    imageUrls: [{ src: "/assets/technology/RVG FINAL.webp", alt: "RVG Digital X-Ray Sensor" }],
    icon: FaXRay,
  },
  {
    title: "Intra-Oral Camera",
    description:
      "Earlier patients were not able to see their own dental health problems like dental cavity, bleeding gums etc, but newer technology like intraoral cameras made it possible for patients to see their own dental issues in just few seconds during consultation with the dentist. It helps them to understand the core problems in their oro cavity and prioritize the dental treatment first. You will be glad to know that Hapliv Dental clinic uses this technology.",
    imageUrls: [{ src: "/assets/technology/INTRA-ORAL CAMERA.webp", alt: "Intra Oral Camera" }],
    icon: FaCamera,
  },
  {
    title: "Laser Dentistry",
    description:
      "LASERs gained popularity in dentistry in the 1990s. Earlier most of the procedure done were surgically but introduction of LASER in dentistry has transformed dental procedures to minimal invasive, pain free, hassle free & with minimum restriction after procedure. LASERS are used for variety of dental procedure like fasten up ulcer healing, TMJ pain, teeth whitening, ZOOM teeth whitening, gum depigmentation & smile designing etc. LASER works at the root level of the problem so we do at Hapliv to provide world class treatment to ensure our patients comfort as our first vision and mission.",
    imageUrls: [{ src: "/assets/technology/biolase laser.webp", alt: "Laser" }],
    icon: FaBolt,
  },
  {
    title: "Sterilization",
    description:
      "We at Hapliv dental clinic have <strong>Strict sterilization</strong> norms which are followed by our staff & managed by our dentist in M3M TEE Point at Hapliv Dental Clinic premises to ensure proper health and hygiene of the patients. In house Sterilization equipment makes it easier for us to provide you 100% sterile treatment and environment. We follow strict COVID19 protocols and provide dental treatment to our patients in a safe environment with full equipment and instruments sterilization. So, you can trust us, you are safe hands!!",
    imageUrls: [
      { src: "/assets/technology/sterlization.webp", alt: "UV sterilization" },
      { src: "/assets/technology/ppe-sterlization.webp", alt: "PPE Kit" },
    ],
    icon: FaShieldVirus,
  },
  {
    title: "3D Intraoral Digital Scanner",
    description:
      "Scared of old flavored alginate dental impression? At Hapliv we are using ITero and 3 Shape intraoral digital scanners which obsolete old ways of making dental records for orthodontic braces treatment, invisalign treatment, crown & bridges and dental implants. 3D scanners are precise, comfortable, time saver, eco friendly and most importantly you can see instant smile transformation results just in a few seconds vola!! This is because of cutting edge technology used in their software that helps patients to visualize their final treatment results instantly. We use the latest CAD-CAM technique for dental laboratory work.",
    imageUrls: [{ src: "/assets/technology/itero2.webp", alt: "3D Intraoral Digital Scanner" }],
    icon: FaCube,
  },
  {
    title: "Scaler, Curing Lamp & Dental Material",
    description:
      "Latest machine used for cleaning bacterial plaque and calculus for dental scaling and curing lamp is used for fasten up results in dental cavity filling procedure. We are consumers of dental material like 3M(EPSE), SHOFU & Ormco in our day to day dental practice.",
    imageUrls: [{ src: "/assets/technology/scaler.webp", alt: "Scaler" }],
    icon: FaTools,
  },
];

export const metadata = {
  title: "Advanced Dental Technology at Hapliv Dental Clinic | Cutting-Edge Equipment & Treatments",
  description:
    "Discover the advanced dental technology and state-of-the-art equipment used at Hapliv Dental Clinic. From painless root canal treatments with Apex Locator and Endomotor to digital X-rays, intraoral cameras, laser dentistry, and more – our technology ensures world-class dental care in Gurugram and Delhi-NCR.",
  keywords:
    "Dental Technology, Endomotor, Apex Locator, Digital X-ray, Intraoral Camera, Laser Dentistry, Sterilization, 3D Digital Scanner, Dental Equipment, Hapliv Dental Clinic, Gurugram, Delhi-NCR",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Advanced Dental Technology at Hapliv Dental Clinic",
    description:
      "Explore the cutting-edge dental equipment and technologies used at Hapliv Dental Clinic. Learn about our painless root canal treatments, digital X-rays, laser dentistry, and more.",
    url: "https://haplivdentalclinic.com/technology",
    images: ["https://haplivdentalclinic.com/assets/periodical-dental-checkup.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Dental Technology at Hapliv Dental Clinic",
    description:
      "Explore the state-of-the-art dental technology at Hapliv Dental Clinic. Our advanced equipment ensures painless treatments and world-class results for our patients.",
    images: ["https://haplivdentalclinic.com/assets/periodical-dental-checkup.webp"],
  },
};

function TechnologyCard({ title, description, imageUrls, icon: Icon, delay = 0 }) {
  return (
    <SlideUp delay={delay}>
      <div className="h-full p-8 transition-all duration-500 bg-white border border-gray-100 shadow-soft rounded-card hover:shadow-soft-lg hover:-translate-y-1 group">
        <div className="flex items-center justify-center mb-6">
          {imageUrls && imageUrls.length > 0 ? (
            <div className="flex items-center justify-center gap-4">
              {imageUrls.map((img, idx) => (
                <div key={idx} className="relative flex items-center justify-center w-32 h-32 transition-transform duration-500 rounded-2xl bg-gray-50 group-hover:scale-105">
                  <Image
                    alt={img.alt}
                    src={img.src}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ) : Icon ? (
            <div className="flex items-center justify-center w-16 h-16 transition-all duration-500 rounded-2xl bg-primary-lightest group-hover:bg-primary group-hover:scale-110">
              <Icon className="w-8 h-8 transition-colors duration-500 text-primary group-hover:text-white" />
            </div>
          ) : null}
        </div>
        <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
          {title}
        </h3>
        <div className="w-12 h-0.5 mb-4 bg-accent"></div>
        <div
          className="text-base leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </SlideUp>
  );
}

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 mt-24 text-white py-28 bg-primary-dark">
        <div className="container mx-auto text-center max-w-7xl">
          <FadeIn>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
              Advanced Dental Technology
            </h1>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
              At Hapliv, we are committed to using cutting-edge technology in our day-to-day practice that helps us provide world's best dental treatment to our patients with latest equipments and techniques in Gurugram and Delhi-NCR.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 bg-white py-28">
        <div className="container mx-auto max-w-7xl">
          <FadeIn delay={0.2}>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">State-of-the-Art Equipment</h2>
              <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 md:text-xl">
                Our clinic is equipped with the latest dental technology to ensure painless, efficient, and world-class treatments. From advanced imaging systems to precision laser equipment, we invest in technology that enhances patient comfort and treatment outcomes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="px-4 py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <StaggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {technologyList.map((tech, index) => (
                <TechnologyCard
                  key={`technology-${index}`}
                  title={tech.title}
                  description={tech.description}
                  imageUrls={tech.imageUrls}
                  icon={tech.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 bg-white py-28">
        <div className="container mx-auto max-w-7xl">
          <FadeIn delay={0.2}>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-hero-sm">Why Technology Matters</h2>
              <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Painless Procedures",
                description: "Advanced equipment ensures minimal discomfort during treatments.",
                icon: FaTooth,
              },
              {
                title: "Faster Results",
                description: "Modern technology speeds up treatment time and recovery.",
                icon: FaBolt,
              },
              {
                title: "Precise Diagnosis",
                description: "Digital imaging and scanners provide accurate treatment planning.",
                icon: FaBullseye,
              },
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
              <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                <div className="p-8 text-center transition-all duration-500 bg-gray-50 rounded-card shadow-soft hover:shadow-soft-lg hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    {typeof IconComponent === 'string' ? (
                      <span className="text-4xl">{IconComponent}</span>
                    ) : (
                      <IconComponent className="w-12 h-12 text-primary" />
                    )}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{benefit.title}</h3>
                  <p className="text-base text-gray-700">{benefit.description}</p>
                </div>
              </FadeIn>
            )})}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 text-white py-28 bg-primary-dark">
        <div className="container max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-hero-sm">Experience Advanced Dental Care</h2>
            <p className="mb-10 text-lg text-gray-100 md:text-xl">
              Book a consultation to see our advanced technology in action at our clinic in Sector 65, Gurgaon!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/appointment"
                className="px-10 py-4 text-base font-semibold tracking-wide transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Consultation
              </a>
              <a
                href="tel:+919810471255"
                className="px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
              >
                Call: +91 98104 71255
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
