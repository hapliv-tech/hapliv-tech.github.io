import Image from 'next/legacy/image';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import { ConsultationCta } from 'components/app-pages/PageSections';
import { FaArrowRight, FaCheck, FaClock, FaDollarSign, FaPhoneAlt, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import { TreatmentList } from 'data/structuredTreatmentDetails';
import { navLinks } from 'components/header/navbarData';
import { PHONE_TEL, WHATSAPP_E164, DEFAULT_WHATSAPP_MSG, CLINIC_SCHEMA_NAME } from 'lib/seo';

const treatmentWaUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MSG)}`;

const formatINR = (s) => s;
const has = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
const normalizeSpace = (text = '') => text.replace(/\s+/g, ' ').trim();
const trimTo = (text = '', max = 160) => {
  const clean = normalizeSpace(text);
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
};

function InPageJumpNav({ links }) {
  if (!Array.isArray(links) || links.length === 0) return null;
  return (
    <section className="z-20 px-4 py-3 bg-white border-y border-gray-100 lg:sticky lg:top-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 overflow-x-auto">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
            On this page
          </span>
          {links.map((item) => (
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
  );
}

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const isCentered = align === 'center';
  return (
    <div className={`mb-10 ${isCentered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl lg:text-hero-sm">{title}</h2>
      <div className={`mt-5 h-0.5 w-16 bg-accent ${isCentered ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-gray-700 md:text-lg ${isCentered ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function CheckList({ items, accent = 'primary' }) {
  const iconClass = accent === 'accent' ? 'text-accent' : 'text-primary';
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className="flex-1 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-sm leading-relaxed text-gray-700">
          <FaCheck className={`mt-1 h-3.5 w-3.5 flex-shrink-0 ${iconClass}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export async function generateStaticParams() {
  const data = navLinks.find((it) => it.path === '/treatments')?.children || [];
  console.log('generateStaticParams - treatments:', data.length);
  return data
    .filter((item) => !item.skip_static_path)
    .map((it) => ({ treatments: it.path.split('/')[2] }));
}

export async function generateMetadata({ params }) {
  const { treatments: slug } = await params;
  const found = TreatmentList.find((it) => it.slug === slug) || null;
  const t = found?.treatment ?? found;
  
  // Special handling for braces and orthodontist-focused treatments
  const isBraces = slug === 'braces';
  const isOrthodontic = isBraces || slug === 'invisalign';
  const isImplant = slug === 'implant';
  const isRootCanal = slug === 'painless-root-canal-treatment' || slug?.includes('root-canal');
  const isLaser = slug === 'laser-dental-treatments' || slug?.includes('laser');
  
  let title, description, keywords;
  
  if (isBraces) {
    title = `Braces Gurgaon & West Delhi | Metal, Ceramic & Self-Ligating`;
    description = `Compare braces types, timelines & food tips — expert orthodontist in Sector 65 & West Delhi. Typical costs on our braces cost page. Next step: WhatsApp or call +91 98104 71255.`;
    keywords = `Braces treatment Gurgaon, Best braces doctor Gurgaon, Orthodontist braces Gurgaon, Metal braces Gurgaon, Ceramic braces Gurgaon, Braces West Delhi, Best orthodontist braces, Teeth straightening braces, Braces near me, Orthodontic braces treatment`;
  } else if (isImplant) {
    title = `Best Dental Implants in Gurgaon & West Delhi | Implant Treatment`;
    description = `Best Dental Implants in Gurgaon & West Delhi. Permanent tooth replacement with titanium implants. Expert implantologist providing single, multiple, and full-mouth dental implants. Book your consultation today!`;
    keywords = `Dental Implants Gurgaon, Best dental implants Gurgaon, Implant treatment Gurgaon, Tooth implant Gurgaon, Dental implant cost Gurgaon, Implantologist Gurgaon, Dental implants West Delhi, Implant dentist Gurgaon, Single tooth implant, Multiple dental implants, Full mouth implants, Implant near me`;
  } else if (isRootCanal) {
    title = `Root Canal (RCT) Step-by-Step | Save Your Tooth`;
    description = `What happens in RCT, how we keep you comfortable & aftercare tips — Apex Locator & Endomotor at Sector 65 & West Delhi. ₹ ranges on our RCT cost page. WhatsApp or call +91 98104 71255.`;
    keywords = `Comfortable root canal Gurgaon, Root canal treatment steps, How root canal works, Apex Locator RCT, Endomotor root canal, Root canal aftercare, Endodontist Gurgaon, Save natural tooth RCT, Painless root canal Gurgaon`;
  } else if (isLaser) {
    title = `Laser Dentistry Guide | Gums, Whitening & More`;
    description = `How dental lasers help with gums, laser-assisted whitening & disinfection — Gurgaon & West Delhi. Fees & procedures on our laser dentistry page. Book: WhatsApp or call +91 98104 71255.`;
    keywords = `LASER Dentistry Gurgaon, Laser dental treatment Gurgaon, Best laser dentist Gurgaon, Laser teeth whitening Gurgaon, Laser gum treatment Gurgaon, Laser dentistry West Delhi, Gentle laser dentistry, Laser dental procedures, Laser near me, Advanced laser dentistry, Minimally invasive laser, Laser gum contouring`;
  } else if (isOrthodontic) {
    title = t?.name ? `${t.name} by Best Orthodontist in Gurgaon & West Delhi` : 'Orthodontic Treatment';
    description = t?.overview 
      ? `${t.overview.slice(0, 100)}... Best orthodontist in Gurgaon & West Delhi. Book your consultation today!`
      : 'Expert orthodontic treatment by best orthodontist in Gurgaon & West Delhi. Book your appointment today!';
    keywords = `${t?.name}, Best Orthodontist Gurgaon, Orthodontist treatment, ${t?.keywords || ''}`;
  } else {
    title = t?.name ? `${t.name} in Gurgaon & West Delhi` : 'Treatment';
    description = t?.overview 
      ? `${t.overview.slice(0, 120)}... Book your consultation at Hapliv Dental Clinic in Gurgaon or West Delhi.`
      : 'Expert dental treatment at Hapliv Dental Clinic. Book your appointment in Gurgaon or West Delhi today!';
    keywords = t?.keywords || `${t?.name}, Dental Treatment, Dental Surgeon, Gurgaon, West Delhi, Nearby dentist Sector 65, Hapliv Dental Clinic`;
  }
  
  const imageUrl = t?.heroImage || 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp';
  const metaDescription = trimTo(description, 158);
  
  return {
    title,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: `/treatments/${slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description: metaDescription,
      url: `https://haplivdentalclinic.com/treatments/${slug}`,
      images: [imageUrl],
      siteName: 'Hapliv Dental Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function TreatmentDetailPage({ params }) {
  const { treatments: slug } = await params;
  const found = TreatmentList.find((it) => it.slug === slug) || null;
  if (!found) return null;
  const t = found.treatment ?? found;

  // Generate structured data
  const siteUrl = 'https://haplivdentalclinic.com';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Treatments',
        item: `${siteUrl}/treatments`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t?.name || 'Treatment',
        item: `${siteUrl}/treatments/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t?.name,
    description: t?.overview,
    procedureType: t?.name,
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Dentistry',
    },
    provider: {
      '@type': 'Dentist',
      name: CLINIC_SCHEMA_NAME,
      url: siteUrl,
      telephone: '+919810471255',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Gurgaon',
      },
      {
        '@type': 'City',
        name: 'West Delhi',
      },
    ],
  };

  const faqSchema = Array.isArray(t.faq) && t.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: t.faq.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
    : null;
  const jumpLinks = [{ href: '#overview', label: 'Overview' }];
  if (Array.isArray(t.types) && t.types.length > 0) jumpLinks.push({ href: '#options', label: 'Options' });
  if (has(t, 'cost.priceRange') && Array.isArray(t.cost.priceRange)) jumpLinks.push({ href: '#cost', label: 'Cost' });
  if (t.expectations) jumpLinks.push({ href: '#expectations', label: 'What to expect' });
  if (t.foodGuidelines) jumpLinks.push({ href: '#food', label: 'Food guide' });
  if (Array.isArray(t.faq) && t.faq.length > 0) jumpLinks.push({ href: '#faqs', label: 'FAQs' });
  jumpLinks.push({ href: '#book-consultation', label: 'Book' });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="min-h-screen mt-24 overflow-hidden bg-white">
        <TreatmentHero treatment={t} slug={slug} />
        <InPageJumpNav links={jumpLinks} />
        {slug === 'painless-root-canal-treatment' && (
          <section className="px-4 py-4 bg-primary-lightest/50 border-y border-primary/10" aria-label="Related pricing">
            <div className="container max-w-4xl mx-auto text-center text-base leading-relaxed text-gray-700">
              For typical <Link href="/root-canal-treatment-cost-gurgaon" className="font-semibold text-primary underline">root canal cost in Gurgaon</Link> and West Delhi, see our dedicated pricing page. For RCT at our clinics, visit{' '}
              <Link href="/root-canal-treatment-gurgaon" className="font-semibold text-primary underline">root canal in Gurgaon</Link>.
            </div>
          </section>
        )}
        {slug === 'braces' && (
          <section className="px-4 py-4 bg-primary-lightest/50 border-y border-primary/10" aria-label="Related pricing">
            <div className="container max-w-4xl mx-auto text-center text-base leading-relaxed text-gray-700">
              For <Link href="/braces-cost-gurgaon" className="font-semibold text-primary underline">braces cost in Gurgaon</Link> guidance, see our cost page. For braces near M3M Tee Point, see{' '}
              <Link href="/braces-treatment-sector-65-gurgaon" className="font-semibold text-primary underline">braces in Sector 65</Link>.
            </div>
          </section>
        )}
        {slug === 'implant' && (
          <section className="px-4 py-4 bg-primary-lightest/50 border-y border-primary/10" aria-label="Related implant consultation">
            <div className="container max-w-4xl mx-auto text-center text-base leading-relaxed text-gray-700">
              Missing a tooth and not sure what to book? Use our{' '}
              <Link href="/dental-guides/dental-implant-consultation-planner" className="font-semibold text-primary underline">implant consultation planner</Link>{' '}
              or read the <Link href="/dental-implants-gurgaon" className="font-semibold text-primary underline">dental implants in Gurgaon</Link> service page.
            </div>
          </section>
        )}
        <TreatmentOverview treatment={t} id="overview" />
        {Array.isArray(t.types) && t.types.length > 0 && <TreatmentTypes types={t.types} id="options" />}

        {has(t, 'cost.priceRange') && Array.isArray(t.cost.priceRange) && (
          <TreatmentCost treatment={t} note={t.cost.note} rows={t.cost.priceRange} slug={slug} id="cost" />
        )}

        {t.expectations && <TreatmentExpectations expectations={t.expectations} id="expectations" />}
        {t.foodGuidelines && <FoodGuidelines fg={t.foodGuidelines} id="food" />}
        {t.prosConsOfSkipping && (
          <ProsCons data={t.prosConsOfSkipping} title="Choosing Not to Get Treatment - Pros & Cons" />
        )}
        {Array.isArray(t.faq) && t.faq.length > 0 && <FAQ faqs={t.faq} id="faqs" />}
        <RelatedTreatments currentSlug={slug} />
        <RelatedLocations currentSlug={slug} />
        <BookingSection id="book-consultation" />
      </div>
    </>
  );
}

function treatmentPageH1(treatment, slug) {
  switch (slug) {
    case 'braces':
      return 'Braces in Gurgaon & West Delhi';
    case 'implant':
      return 'Dental implants in Gurgaon & West Delhi';
    case 'painless-root-canal-treatment':
      return 'Root canal (RCT): how it works & aftercare';
    case 'laser-dental-treatments':
      return 'Laser dentistry in Gurgaon & West Delhi';
    default:
      return treatment.name;
  }
}

function TreatmentHero({ treatment, slug }) {
  const heroH1 = treatmentPageH1(treatment, slug);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-lightest/50 to-gray-50 px-4 py-16 md:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(81,36,122,0.08)_1px,_transparent_1.5px)] bg-[length:24px_24px]" aria-hidden="true" />
      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase text-primary shadow-soft">
            <FaShieldAlt className="h-3.5 w-3.5" />
            Treatment guide
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">{heroH1}</h1>
          {treatment.overview && (
            <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">
              {treatment.overview}
              {slug === 'braces' ? (
                <>
                  {' '}
                  Dr. Achla Verma&apos;s team offers metal, ceramic & self-ligating braces in Sector 65 and Mohan Garden.
                  See typical ranges on our{' '}
                  <Link href="/braces-cost-gurgaon" className="font-semibold text-primary underline hover:text-primary-dark">
                    braces cost in Gurgaon
                  </Link>{' '}
                  page, then book a consult.
                </>
              ) : slug === 'invisalign' || slug?.includes('aligner') ? (
                <>
                  {' '}
                  Certified Invisalign provider in Sector 65 & West Delhi — digital planning and aligner therapy tailored
                  to your bite.
                </>
              ) : slug === 'implant' ? (
                <>
                  {' '}
                  Staged planning with CBCT when needed at Sector 65 & Mohan Garden. Compare indicative fees on our{' '}
                  <Link
                    href="/dental-implants-gurgaon"
                    className="font-semibold text-primary underline hover:text-primary-dark"
                  >
                    dental implants in Gurgaon
                  </Link>{' '}
                  page before your assessment.
                </>
              ) : slug === 'painless-root-canal-treatment' || slug?.includes('root-canal') ? (
                <>
                  {' '}
                  Local anaesthesia plus Apex Locator & Endomotor for efficient, comfortable care. For ₹ guidance see our{' '}
                  <Link
                    href="/root-canal-treatment-cost-gurgaon"
                    className="font-semibold text-primary underline hover:text-primary-dark"
                  >
                    root canal cost in Gurgaon
                  </Link>{' '}
                  page.
                </>
              ) : slug === 'laser-dental-treatments' || slug?.includes('laser') ? (
                <>
                  {' '}
                  Gum contouring, laser-assisted whitening & adjunct disinfection when suitable. Overview of fees:{' '}
                  <Link
                    href="/laser-dentistry-gurgaon"
                    className="font-semibold text-primary underline hover:text-primary-dark"
                  >
                    laser dentistry in Gurgaon
                  </Link>
                  .
                </>
              ) : (
                <>
                  {' '}
                  Available at our Sector 65, Gurgaon and Mohan Garden, West Delhi clinics — book a consult to see if
                  this treatment is right for you.
                </>
              )}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={treatmentWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              data-cta-location="treatment-hero"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-success px-7 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-success-hover hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              data-cta="call"
              data-cta-location="treatment-hero"
              className="inline-flex items-center justify-center gap-2 rounded-button border border-gray-300 bg-white px-7 py-4 text-base font-semibold text-gray-900 shadow-soft transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-soft-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaPhoneAlt className="h-4 w-4 text-primary" />
              Call Now
            </a>
            <BookAppointmentLink href="/appointment"
              data-cta="appointment"
              data-cta-location="treatment-hero"
              className="inline-flex items-center justify-center rounded-button border border-primary/15 bg-white px-7 py-4 text-base font-semibold text-primary shadow-soft transition-all duration-300 hover:bg-primary-lightest hover:shadow-soft-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Consultation
            </BookAppointmentLink>
          </div>
        </div>
        {treatment.heroImage && (
          <div className="relative mx-auto hidden w-full max-w-2xl lg:block">
            <div className="relative z-10 overflow-hidden rounded-card border border-white bg-white shadow-premium">
              <Image
                src={treatment.heroImage}
                width={900}
                height={675}
                className="aspect-[4/3] h-full w-full object-cover"
                alt={`${treatment.name} treatment at Hapliv Dental Clinic in Gurgaon and West Delhi`}
                priority
              />
            </div>
            <div className="absolute bottom-5 left-5 z-20 max-w-[14rem] rounded-card border border-white/80 bg-white/90 p-4 shadow-soft-lg backdrop-blur">
              <div className="text-xs font-semibold uppercase text-primary">Sector 65 + West Delhi</div>
              <div className="mt-1 text-sm leading-snug text-gray-700">Specialist care with clear treatment planning.</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TreatmentOverview({ treatment, id }) {
  const items = [
    treatment.doctor && {
      icon: FaShieldAlt,
      label: 'Specialist',
      value: treatment.doctor,
      description: 'Treatment planning',
    },
    treatment.duration && {
      icon: FaClock,
      label: 'Duration',
      value: treatment.duration,
      description: 'Average treatment time',
    },
    treatment.investment && {
      icon: FaDollarSign,
      label: 'Investment',
      value: treatment.investment,
      description: 'Estimated overall spend',
    },
  ].filter(Boolean);
  if (items.length === 0 && !treatment.overview) return null;
  return (
    <section id={id} className="bg-gray-50 px-4 py-14 md:px-8 lg:py-20 scroll-mt-40">
      <div className="container mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          align="left"
          eyebrow="Overview"
          title="A clear plan before treatment begins"
          description={treatment.overview}
        />
        {items.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-card border border-primary/10 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-lightest">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-5 text-sm font-semibold uppercase tracking-wide text-gray-500">{item.label}</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-950">{item.value}</div>
                  <div className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function TreatmentTypes({ types, id }) {
  return (
    <section id={id} className="px-4 py-14 bg-white md:px-8 lg:py-20 scroll-mt-40">
      <div className="container max-w-7xl mx-auto">
        <SectionHeader
          title="Types / Options"
          description="Choose the option that best fits your goals, clinical needs and lifestyle."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {types.map((t, i) => (
            <div key={i} className="flex flex-col h-full rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg">
              <div className="mb-2 text-xl font-semibold tracking-tight text-gray-950">{t.name}</div>
              <div className="w-12 h-0.5 mb-4 bg-accent"></div>
              {Array.isArray(t.description) ? (
                <CheckList items={t.description} />
              ) : (
                <p className="flex-1 text-sm leading-relaxed text-gray-700">{t.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCost({ treatment, note, rows, slug, id }) {
  const isRct = slug === 'painless-root-canal-treatment';
  const isBracesCost = slug === 'braces';
  const heading = isRct
    ? 'Indicative RCT fees (guide only)'
    : isBracesCost
      ? 'Indicative braces fees (guide only)'
      : `${treatment.name} cost in Gurgaon & Delhi`;
  return (
    <section id={id} className="px-4 py-14 bg-gray-50 md:px-8 lg:py-20 scroll-mt-40">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10">
          <SectionHeader title={heading} />
          {isRct && (
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto text-center">
              This table is a quick reference. Our dedicated{' '}
              <Link href="/root-canal-treatment-cost-gurgaon" className="font-semibold text-primary hover:underline">
                root canal cost in Gurgaon
              </Link>{' '}
              page is the primary place for cost-focused search — book for a personal quote.
            </p>
          )}
          {isBracesCost && (
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto text-center">
              For braces pricing explained for search, see{' '}
              <Link href="/braces-cost-gurgaon" className="font-semibold text-primary hover:underline">
                braces cost in Gurgaon
              </Link>
              .
            </p>
          )}
          {note && (
            <p className="mt-3 text-center text-gray-600">
              {note} For detailed pricing, <BookAppointmentLink href="/appointment" className="font-semibold text-primary hover:underline">book a consultation</BookAppointmentLink> with our expert dentists in Sector 65, Gurgaon or West Delhi.
            </p>
          )}
        </div>
        <div className="overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft">
          <table className="w-full text-left">
            <thead className="bg-primary-lightest">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-900">Type</th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-900">Range</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="bg-white border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{r.type}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{formatINR(r.range)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TreatmentExpectations({ expectations, id }) {
  const groups = [
    { key: 'before', title: 'Before Treatment' },
    { key: 'during', title: 'During Treatment' },
    { key: 'after', title: 'After Treatment' },
  ];
  return (
    <section id={id} className="px-4 py-14 bg-white md:px-8 lg:py-20 scroll-mt-40">
      <div className="container max-w-7xl mx-auto">
        <SectionHeader
          title="What to Expect"
          description="A clear, step-by-step journey designed for comfort and predictable outcomes."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups
            .filter((g) => Array.isArray(expectations[g.key]) && expectations[g.key].length > 0)
            .map((g) => (
              <div key={g.key} className="flex flex-col h-full rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid rounded-full bg-primary-lightest h-9 w-9 place-items-center">
                    <FaShieldAlt className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
                </div>
                <div className="w-12 h-0.5 mb-3 bg-accent"></div>
                <CheckList items={expectations[g.key]} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function FoodGuidelines({ fg, id }) {
  const hasContent =
    (Array.isArray(fg.avoid) && fg.avoid.length) || (Array.isArray(fg.prefer) && fg.prefer.length) || fg.tip;
  if (!hasContent) return null;
  return (
    <section id={id} className="px-4 py-14 bg-primary-lightest/60 md:px-8 lg:py-20 scroll-mt-40">
      <div className="container max-w-7xl mx-auto">
        <SectionHeader
          title="Food Guidelines"
          description="Eat smart during and after treatment for better comfort and smoother healing."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.isArray(fg.avoid) && fg.avoid.length > 0 && (
            <div className="flex flex-col h-full rounded-card border border-white bg-white p-6 shadow-soft">
              <h3 className="mb-2 text-lg font-semibold text-gray-950">Avoid</h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <CheckList items={fg.avoid} accent="accent" />
            </div>
          )}
          {Array.isArray(fg.prefer) && fg.prefer.length > 0 && (
            <div className="flex flex-col h-full rounded-card border border-white bg-white p-6 shadow-soft">
              <h3 className="mb-2 text-lg font-semibold text-gray-950">Prefer</h3>
              <div className="w-12 h-0.5 mb-3 bg-primary"></div>
              <CheckList items={fg.prefer} />
            </div>
          )}
          {fg.tip && (
            <div className="flex flex-col h-full rounded-card border border-white bg-white p-6 shadow-soft">
              <h3 className="mb-2 text-lg font-semibold text-gray-950">Tip</h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <p className="flex-1 text-sm leading-relaxed text-gray-700">{fg.tip}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProsCons({ data, title = 'Pros & Cons' }) {
  return (
    <section className="px-4 py-14 bg-white md:px-8 lg:py-20">
      <div className="container max-w-7xl mx-auto">
        <SectionHeader title={title} description={data.summary} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col h-full rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-soft-lg">
            <h3 className="mb-2 text-lg font-semibold text-gray-950">Pros</h3>
            <div className="w-12 h-0.5 mb-3 bg-primary"></div>
            <CheckList items={data.pros || []} />
          </div>
          <div className="flex flex-col h-full rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-accent/40 hover:shadow-soft-lg">
            <h3 className="mb-2 text-lg font-semibold text-gray-950">Cons</h3>
            <div className="w-12 h-0.5 mb-3 bg-accent"></div>
            <CheckList items={data.cons || []} accent="accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ faqs, id }) {
  return (
    <section id={id} className="px-4 py-14 bg-gray-50 md:px-8 lg:py-20 scroll-mt-40">
      <div className="container max-w-4xl mx-auto">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="bg-white border border-gray-100 divide-y divide-gray-100 rounded-card shadow-soft">
          {faqs.map((f, i) => (
            <details key={i} className="p-5 transition-colors group hover:bg-primary-lightest/40">
              <summary className="font-semibold text-gray-900 cursor-pointer group-hover:text-primary">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedTreatments({ currentSlug }) {
  // Define treatment relationships for internal linking
  const treatmentRelations = {
    braces: [
      { path: '/invisalign', name: 'Invisalign', description: 'Clear aligner alternative to braces' },
      { slug: 'teeth-whitening', name: 'Teeth Whitening', description: 'Complete your smile transformation' },
      { slug: 'scaling-and-polishing', name: 'Scaling & Polishing', description: 'Maintain oral health during treatment' },
    ],
    invisalign: [
      { slug: 'braces', name: 'Braces', description: 'Traditional orthodontic option' },
      { slug: 'teeth-whitening', name: 'Teeth Whitening', description: 'Enhance your smile results' },
      { slug: 'scaling-and-polishing', name: 'Scaling & Polishing', description: 'Essential oral hygiene' },
    ],
    implant: [
      { slug: 'crowns-and-bridges', name: 'Crowns and Bridges', description: 'Alternative tooth replacement' },
      { slug: 'painless-root-canal-treatment', name: 'Root Canal Treatment', description: 'Save your natural tooth first' },
      { slug: 'scaling-and-polishing', name: 'Scaling & Polishing', description: 'Maintain implant health' },
    ],
    'painless-root-canal-treatment': [
      { slug: 'implant', name: 'Dental Implants', description: 'If tooth cannot be saved' },
      { slug: 'crowns-and-bridges', name: 'Crowns and Bridges', description: 'Restore treated tooth' },
      { slug: 'dental-filling', name: 'Dental Filling', description: 'For less severe cases' },
    ],
    'laser-dental-treatments': [
      { slug: 'teeth-whitening', name: 'Teeth Whitening', description: 'Laser-assisted whitening available' },
      { slug: 'scaling-and-polishing', name: 'Scaling & Polishing', description: 'Laser gum treatment' },
      { slug: 'painless-root-canal-treatment', name: 'Root Canal Treatment', description: 'Laser disinfection in RCT' },
    ],
    'teeth-whitening': [
      { slug: 'braces', name: 'Braces', description: 'Straighten before whitening' },
      { path: '/invisalign', name: 'Invisalign', description: 'Align then whiten' },
      { slug: 'scaling-and-polishing', name: 'Scaling & Polishing', description: 'Clean before whitening' },
    ],
    'scaling-and-polishing': [
      { slug: 'teeth-whitening', name: 'Teeth Whitening', description: 'After professional cleaning' },
      { slug: 'dental-filling', name: 'Dental Filling', description: 'Address cavities found during cleaning' },
      { slug: 'laser-dental-treatments', name: 'LASER Dentistry', description: 'Advanced cleaning options' },
    ],
  };

  const related = treatmentRelations[currentSlug] || [];
  if (related.length === 0) return null;

  return (
    <section className="px-4 py-14 bg-gray-50 md:px-8 lg:py-20">
      <div className="container max-w-7xl mx-auto">
        <SectionHeader
          title="Related Treatments"
          description="Explore adjacent dental treatments that may be part of your overall care plan."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {related.map((treatment, idx) => (
            <Link
              key={idx}
              href={treatment.path || `/treatments/${treatment.slug}`}
              className="flex flex-col h-full rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg group"
            >
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-950 group-hover:text-primary">
                {treatment.name}
              </h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <p className="flex-1 text-sm leading-relaxed text-gray-700">{treatment.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                Learn More <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedLocations({ currentSlug }) {
  // Map treatments to location pages
  const locationMap = {
    braces: [
      { path: '/braces-treatment-sector-65-gurgaon', name: 'Braces Treatment in Sector 65', description: 'Expert braces treatment in Sector 65, Gurgaon near Trump Towers' },
      { path: '/best-orthodontist-gurgaon', name: 'Best Orthodontist in Gurgaon', description: 'Expert orthodontist for braces treatment in Sector 65, Gurgaon' },
      { path: '/locations/dentist-in-sector-65-gurgaon', name: 'Dentist in Sector 65', description: 'Visit our clinic in Sector 65, Gurgaon' },
    ],
    invisalign: [
      { path: '/invisalign-sector-65-gurgaon', name: 'Invisalign in Sector 65', description: 'Expert Invisalign treatment in Sector 65, Gurgaon near Trump Towers' },
      { path: '/best-orthodontist-gurgaon', name: 'Best Orthodontist in Gurgaon', description: 'Expert orthodontist for Invisalign treatment in Sector 65, Gurgaon' },
      { path: '/locations/dentist-in-sector-65-gurgaon', name: 'Dentist in Sector 65', description: 'Visit our clinic in Sector 65, Gurgaon' },
    ],
    implant: [
      { path: '/dental-implants-gurgaon', name: 'Dental Implants in Gurgaon', description: 'Expert implant treatment in Sector 65, Gurgaon' },
      { path: '/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Expert implant treatment in Mohan Garden, West Delhi' },
    ],
    'painless-root-canal-treatment': [
      { path: '/root-canal-treatment-gurgaon', name: 'Root Canal Treatment in Gurgaon', description: 'Comfort-focused RCT in Sector 65, Gurgaon with Apex Locator and Endomotor' },
      { path: '/emergency-dentist-gurgaon', name: 'Emergency Dentist', description: 'Same-day emergency dental care for tooth pain and dental emergencies' },
      { path: '/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Comfort-focused RCT in Mohan Garden, West Delhi' },
    ],
    'laser-dental-treatments': [
      { path: '/laser-dentistry-gurgaon', name: 'LASER Dentistry in Gurgaon', description: 'Advanced laser treatment in Sector 65, Gurgaon for gum contouring and whitening' },
      { path: '/locations/dentist-in-sector-65-gurgaon', name: 'Dentist in Sector 65', description: 'Visit our clinic in Sector 65, Gurgaon' },
      { path: '/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Advanced laser treatment in Mohan Garden, West Delhi' },
    ],
  };

  const locations = locationMap[currentSlug] || [
    { path: '/locations/dentist-in-sector-65-gurgaon', name: 'Dentist in Sector 65, Gurgaon', description: 'Best dental clinic in Sector 65, Gurgaon' },
    { path: '/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Best dental clinic in Mohan Garden, West Delhi' },
  ];

  return (
    <section className="px-4 py-14 bg-white md:px-8 lg:py-20">
      <div className="container max-w-7xl mx-auto">
        <SectionHeader
          title="Visit Our Clinics"
          description="Find specialist dental care near you in Gurgaon and West Delhi."
        />
        <div className={`grid grid-cols-1 gap-6 ${locations.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
          {locations.map((location, idx) => (
            <Link
              key={idx}
              href={location.path}
              className="flex flex-col h-full rounded-card border border-gray-100 bg-gray-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-soft-lg group"
            >
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-950 group-hover:text-primary">
                {location.name}
              </h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <p className="flex-1 text-sm leading-relaxed text-gray-700">{location.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                View Location <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection({ id }) {
  return (
    <div id={id} className="scroll-mt-40">
      <ConsultationCta
        title="Ready for a clearer treatment plan?"
        description="Meet our dental team in Sector 65, Gurgaon or West Delhi and get practical guidance on the right next step for your smile."
        ctaLocation="treatment-booking-section"
        whatsappUrl={treatmentWaUrl}
      />
    </div>
  );
}
