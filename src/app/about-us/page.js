import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "components/animations";

export const metadata = {
  title: "About Dr. Achla Verma & Hapliv | Dentist Gurgaon Sector 65",
  description:
    "Meet Hapliv Dental Clinic — 4.98★ rated team led by Dr. Achla Verma. Braces, Invisalign, RCT & implants in Gurgaon Sector 65 & West Delhi. Book a consult: call or WhatsApp.",
  keywords:
    "Best orthodontist in Gurgaon, Invisalign treatment Gurgaon, Family dentist in Gurgaon, Clear aligners Gurgaon, Orthodontics treatment, Painless dental treatment Gurgaon, Dr. Achla Verma, Hapliv Dental Clinic, Cosmetic dentistry Gurgaon, Dental braces in Gurgaon",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Hapliv Dental Clinic - Invisalign & Orthodontic Treatment in Gurgaon",
    description:
      "Hapliv Dental Clinic in Gurgaon provides top-quality Invisalign and orthodontic treatments. Led by Dr. Achla Verma, we specialize in painless dental care and world-class treatment for families.",
    url: "https://haplivdentalclinic.com/about-us",
    images: ["https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp"],
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className='container max-w-7xl items-center justify-center p-4 m-auto mt-24'>
        <FadeIn>
          <div className='flex items-center justify-center mb-12'>
            <h1 className='text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-hero-sm'>About Us</h1>
          </div>
        </FadeIn>
        <div className='grid gap-8 p-4 leading-relaxed sm:grid-cols-1 lg:grid-cols-2 md:gap-12'>
          <SlideUp delay={0.1}>
            <div className='p-4 text-justify about-img'>
              <Image
                className='rounded-card shadow-soft-lg'
                src='/assets/hapliv_dental_operatory.webp'
                width={1200}
                height={800}
                alt='Hapliv Dental Clinic interior - Modern dental clinic in Sector 65, Gurgaon with state-of-the-art equipment'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                priority
              />
            </div>
          </SlideUp>
          <FadeIn delay={0.2}>
            <div className='text-justify text-gray-900'>
              <p className='mb-6 text-base leading-relaxed text-gray-700 md:text-lg'>Hapliv Dental Clinic is one of few Dental practice in Gurgaon with a full time Orthodontist & family Dentist. Hapliv Dental is a premium <Link href="/invisalign" className="text-primary hover:underline font-semibold transition-colors duration-200">Invisalign</Link> and Orthodontic center in M3M TEE Point, Golf course extension, Sector 65, Gurgaon. We have a team of Specialized dental surgeons and doctors.
                Dr. Achla Verma, our lead dental surgeon, is practicing dentistry nearly 8 years+ with her passion towards dentistry to provide best dental treatment to her patients with utmost care & painless treatment. Our team of specialized dental surgeons is our core strength to accurate diagnosis and treatment planning & are inclined to use world's latest technology to provide our patients best treatment with utmost care and sanitization. We specialize in <Link href="/treatments/braces" className="text-primary hover:underline font-semibold transition-colors duration-200">braces treatment</Link>, <Link href="/treatments/implant" className="text-primary hover:underline font-semibold transition-colors duration-200">dental implants</Link>, <Link href="/treatments/painless-root-canal-treatment" className="text-primary hover:underline font-semibold transition-colors duration-200">root canal treatment</Link>, and <Link href="/treatments/laser-dental-treatments" className="text-primary hover:underline font-semibold transition-colors duration-200">LASER dentistry</Link>.
              </p>
              <div className='mb-6'>
                <h3 className='mb-4 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl'>Best Premium Dental clinic near you in Sector 65, Gurugram</h3>
                <p className='text-base leading-relaxed text-gray-700 md:text-lg'>Hapliv Dental is located in the median of Sector 65, Golf Course extension, Gurugram near one of the famous landmark Trump Towers (Delhi NCR). As one of the best nearby dentists in Sector 65, Gurgaon, we cater to all kinds of dental needs to the captive gated communities of South city I and II,
                M3M Golf estate, M3M latitude, Emaar emerald floors premium, Emaar palm gardens, Emaar marbella villas, M3M Merlin, Nirvana country, Ireo Victory valley, Dhoot time residency, Conscient Heritage one, Ireo uptown, & SECTOR 60 to Sector 76 in Gurugram. Our expert dental surgeons provide comprehensive dental care to patients from all these nearby areas.
                Our vision is to educate and create awareness to the kids studying in schools like, DPS sec. 67A, Alpine convent, St. Xaviers, RPS school Nordic school etc regarding the oral health care from their childhood.</p>
              </div>
              <div className='mb-6'>
                <p className='text-base leading-relaxed text-gray-700 md:text-lg'>If any of your friends, family and office colleagues want the best orthodontic treatment in Gurgaon or are looking for a nearby dentist in Sector 65, you can suggest HAPLIV Dental Clinic.
                Our experienced dental surgeons provide world-class dental care that will make them glad with our treatment and so YOU. "HAPLIV" the name itself says HAPPY LIVING:
                So, we at Hapliv dental are keen to provide you the best dental treatment with our expert dental surgeons, premium facilities and care.</p>
              </div>
              <p className='mb-6'>
                Do <Link href={'tel:+919810471255'} className='text-lg font-semibold text-accent hover:underline transition-colors duration-200'>Call us</Link> or <Link href={'/appointment'} className='text-lg font-semibold text-accent hover:underline transition-colors duration-200'>Book</Link> your appointment now.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className='flex items-center justify-center mt-16 mb-12'>
            <h2 className='text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>Know your dentist : Team Hapliv</h2>
          </div>
        </FadeIn>

        <div className='items-center justify-center mt-10 md:p-4'>
          <SlideUp delay={0.2}>
            <div className='grid grid-cols-1 gap-10 text-white md:grid-cols-1 lg:grid-cols-1'>
              <div className='rounded-card bg-accent shadow-soft-lg'>
              <div className='grid grid-cols-1 p-10 text-sm md:grid-cols-2 lg:grid-cols-2' id='dr-achla-verma'>
                <div className='p-1 text-center'>
                  <Image alt="Dr. Achla Verma - Orthodontist and Founder of Hapliv Dental Clinic, Gurgaon" className='p-4 border rounded-full bg-primary-lightest' src='/assets/dr-achla-verma.webp' width={200} height={200}></Image>
                  <span className='block text-3xl text-center'>Dr. Achla Verma</span>
                  <span className='block text-xs italic text-center text-black'>
                    BDS(PGIMS), MDS (Orthodontics & Dento-facial Orthopedics),
                    <br/> Invisalign provider, Associate Fellowship in LASER, WCLI (USA)
                    <br/> Founder Hapliv Dental Clinic
                  </span>

                </div>
                <div className='md:p-6'>
                  <p className='text-base text-left text-white'>
                    Dr. Achla did her Graduation from prestigious PGIMS Rohtak, followed by her masters in the field of Orthodontics & dento-facial orthopedics.
                    She has been trained under the guidance of doctors from AIIMS. She has utmost knowledge of Jaw discrepancy,
                    underwent training in Invisalign, Self-ligation system by Damon & 3M, & pursued training in Lingual Orthodontics.
                    She is a trained Invisalign provider & is highly trained in treating patients of all age (teen invisalign & adult invisalign) with visually visible/invisible braces & aligners.
                    <br /><br />To stay up to date with the latest in orthodontic advances and better serve her patients, Dr. Achla has presented many paper, poster in national conferences and she on regular basis attends seminar,
                    conferences to get updated in her field of Orthodontics and dento-facial orthopediecs.
                  </p>
                </div>
              </div>
            </div>
            </div>
            </SlideUp>
          </div>

        <div className='grid grid-cols-1 gap-10 mt-10 text-white md:grid-cols-2 lg:grid-cols-2'>
          <SlideUp delay={0.3}>
            <div className='bg-primary rounded-card shadow-soft-lg'>
              <div className='grid grid-cols-1 p-10 text-sm md:grid-cols-1 lg:grid-cols-1'>
                <div className='p-1 text-center' >
                  <Image alt="Dr. Praveen Raghav - Orthodontist and Invisalign Provider at Hapliv Dental Clinic, Gurgaon" className='p-4 bg-orange-200 rounded-full' src='/assets/dr-praveen-raghav.webp' width={200} height={200}></Image>
                  <span className='block text-3xl text-center'>Dr. Praveen Raghav</span>
                  <span className='block text-xs italic text-center text-yellow-300'>BDS, MDS (Orthodontics & Dento-facial Orthopedics), <br /> Certified Invisalign provider</span>
                </div>
                <div className='md:p-6'>
                  <p className='text-base text-left text-white'>
                    Dr. Praveen Raghav is BDS and MDS in Orthodontics and Dento-facial Orthopaedics.
                    He is practicing Dentistry more than 13 years. He has been trained in Invisalign aligner and best Invisalign provider (USA) in gurgaon.
                    <br /><br />He is trained in Teen invisalign and adult Invisalign provider and able to handle all type of difficult cases with Invisalign.
                    Dr. Praveen Raghav is a specialised dentist and to stay upto date he is using all recent technology like itero.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
          <SlideUp delay={0.4}>
            <div className='rounded-card bg-accent shadow-soft-lg'>
              <div className='grid grid-cols-1 p-10 text-sm md:grid-cols-1 lg:grid-cols-1'>
                <div className='p-1 text-center'>
                  <Image alt="Dr. Tanya Dhawan - Endodontist and Root Canal Specialist at Hapliv Dental Clinic, Gurgaon" className='p-4 bg-orange-200 rounded-full border-stone-100' src='/assets/dr-tanya.png' width={200} height={200}></Image>
                  <span className='block text-3xl text-center'>Dr. Tanya Dhawan</span>
                  <span className='block text-xs italic text-center text-black'>BDS(PGIMS, Rohtak), MDS(Conservative & Endodontics) <br />
                    Trained in Microscope Root Canal Treatment
                  </span>
                </div>
                <div className='md:p-6'>
                  <p className='text-base text-left text-white'>
                    Dr. Tanya Dhawan, Consultant Endodontist at Hapliv Dental. She has done her BDS from PGI Rohtak and followed by Master degree in conservative and Endodontics.<br /><br /> She is trained in Microscope retreatment by Dr P.D Joshi
                    & in Digital smile designing by Dr Deepil Mehta. She is working as Senior lecturer in SGT university and Consultant Endodontist in various reputed clinics in Delhi NCR.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        <FadeIn delay={0.3}>
          <div className='flex items-center justify-center mt-16 mb-12'>
            <h2 className='text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm'>Why Hapliv?</h2>
          </div>
        </FadeIn>
        <div className='items-center justify-center p-8 mt-10 md:p-8' >
          <ol className='grid grid-cols-1 gap-6 text-lg md:grid-cols-2 gradient-list'>
            <li className='p-6 bg-white shadow-soft rounded-card'>Our value: Integrity, Responsibility, Ethical, Affordable, Learning, Simplicity</li>
            <li className='p-6 bg-white shadow-soft rounded-card'>We care for our patient to provide best  Painless dental treatment</li>
            <li className='p-6 bg-white shadow-soft rounded-card'>Post-graduate doctors on board</li>
            <li className='p-6 bg-white shadow-soft rounded-card'>One stop solution for every dental problem</li>
            <li className='p-6 bg-white shadow-soft rounded-card'>Strict sterilization protocol to ensure neat and clean environment</li>
            <li className='p-6 bg-white shadow-soft rounded-card'>Latest technology to treat dental issues to attain best results</li>
          </ol>
        </div>

        <div className='items-center justify-center mt-16 prose'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <SlideUp delay={0.2}>
              <div className='p-8 text-center rounded-card bg-primary-lightest shadow-soft-lg' >
                <h2 className='mb-4 text-3xl font-semibold tracking-tight text-gray-900'>Our Vision</h2>
                <p className='p-4 mt-4 text-justify text-base leading-relaxed text-gray-700'>To be the most trusted dental care brand in India, to achieve that we have molded our practice with these strict principles of high-quality treatments, world class customer service, coupled with advanced infrastructure and technology so that our patients get all dental care at one place.</p>
              </div>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className='p-8 prose text-center rounded-card bg-accent-lighter shadow-soft-lg'>
                <h2 className='mb-4 text-3xl font-semibold tracking-tight text-gray-900'>Our Mission</h2>
                <p className='p-4 mt-4 text-justify text-base leading-relaxed text-gray-700'>We want to provide painless dental care to our patients in Gurgaon. Our principal goal is to preserve your natural teeth at the earliest & at the right age. We use the most advanced dental techniques and products to maximize your dental treatment life. Our office is state of the art equipped with <Link href={'/technology'} className='text-primary hover:underline font-semibold transition-colors duration-200'>technology</Link> &
                  powerful clinical software systems allowing us to provide accurate diagnosis and treatment plan better than ever along with our skilled and specialized doctors and staff. We are constantly upgrading our skills and knowledge that engage us in new challenges in our thinking, helping us to be one of the best frontline doctors in the dental fraternity.</p>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
  );
}
