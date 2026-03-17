import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaCheck, FaClock, FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import { TreatmentList } from 'data/structuredTreatmentDetails';
import { navLinks } from 'components/header/navbarData';
import BannerSingle from 'components/banner/BannerSingle';

const formatINR = (s) => s;
const has = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);

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
    title = `Best Braces Treatment in Gurgaon & West Delhi | Best Orthodontist | Hapliv Dental`;
    description = `Best Braces treatment in Gurgaon & West Delhi by expert orthodontists. Metal braces, ceramic braces, and self-ligating braces for teeth straightening. Book your consultation with the best orthodontist today!`;
    keywords = `Braces treatment Gurgaon, Best braces doctor Gurgaon, Orthodontist braces Gurgaon, Metal braces Gurgaon, Ceramic braces Gurgaon, Braces West Delhi, Best orthodontist braces, Teeth straightening braces, Braces near me, Orthodontic braces treatment`;
  } else if (isImplant) {
    title = `Best Dental Implants in Gurgaon & West Delhi | Implant Treatment | Hapliv Dental`;
    description = `Best Dental Implants in Gurgaon & West Delhi. Permanent tooth replacement with titanium implants. Expert implantologist providing single, multiple, and full-mouth dental implants. Book your consultation today!`;
    keywords = `Dental Implants Gurgaon, Best dental implants Gurgaon, Implant treatment Gurgaon, Tooth implant Gurgaon, Dental implant cost Gurgaon, Implantologist Gurgaon, Dental implants West Delhi, Implant dentist Gurgaon, Single tooth implant, Multiple dental implants, Full mouth implants, Implant near me`;
  } else if (isRootCanal) {
    title = `Best Painless Root Canal Treatment (RCT) in Gurgaon & West Delhi | Hapliv Dental`;
    description = `Best Painless Root Canal Treatment (RCT) in Gurgaon & West Delhi. Advanced root canal treatment with modern technology, Apex Locator, and Endomotor for painless procedure. Save your natural tooth with expert RCT. Book your appointment today!`;
    keywords = `Root Canal Treatment Gurgaon, Painless RCT Gurgaon, Best root canal Gurgaon, Root canal dentist Gurgaon, RCT treatment Gurgaon, Painless root canal West Delhi, Root canal cost Gurgaon, Endodontist Gurgaon, Root canal near me, Advanced root canal treatment, Apex Locator RCT, Endomotor root canal`;
  } else if (isLaser) {
    title = `Best LASER Dentistry in Gurgaon & West Delhi | Laser Dental Treatment | Hapliv Dental`;
    description = `Best LASER Dentistry in Gurgaon & West Delhi. Advanced laser dental treatments for gum contouring, teeth whitening, disinfection, and minimally invasive procedures. Painless laser treatment with faster healing. Book your consultation today!`;
    keywords = `LASER Dentistry Gurgaon, Laser dental treatment Gurgaon, Best laser dentist Gurgaon, Laser teeth whitening Gurgaon, Laser gum treatment Gurgaon, Laser dentistry West Delhi, Painless laser treatment, Laser dental procedures, Laser near me, Advanced laser dentistry, Minimally invasive laser, Laser gum contouring`;
  } else if (isOrthodontic) {
    title = t?.name ? `${t.name} by Best Orthodontist in Gurgaon & West Delhi | Hapliv Dental` : 'Orthodontic Treatment | Hapliv Dental Clinic';
    description = t?.overview 
      ? `${t.overview.slice(0, 100)}... Best orthodontist in Gurgaon & West Delhi. Book your consultation today!`
      : 'Expert orthodontic treatment by best orthodontist in Gurgaon & West Delhi. Book your appointment today!';
    keywords = `${t?.name}, Best Orthodontist Gurgaon, Orthodontist treatment, ${t?.keywords || ''}`;
  } else {
    title = t?.name ? `${t.name} in Gurgaon & West Delhi | Hapliv Dental Clinic` : 'Treatment | Hapliv Dental Clinic';
    description = t?.overview 
      ? `${t.overview.slice(0, 120)}... Book your consultation at Hapliv Dental Clinic in Gurgaon or West Delhi.`
      : 'Expert dental treatment at Hapliv Dental Clinic. Book your appointment in Gurgaon or West Delhi today!';
    keywords = t?.keywords || `${t?.name}, Dental Treatment, Dental Surgeon, Gurgaon, West Delhi, Nearby dentist Sector 65, Hapliv Dental Clinic`;
  }
  
  const imageUrl = t?.heroImage || 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp';
  
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/treatments/${slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `https://haplivdentalclinic.com/treatments/${slug}`,
      images: [imageUrl],
      siteName: 'Hapliv Dental Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
      name: 'Hapliv Dental Clinic',
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
      <div className="min-h-screen mt-24 bg-white">
        <TreatmentHero treatment={t} slug={slug} />
        
        {/* Treatment Top Banner - Full Width */}
        <div className="w-full py-6">
          <BannerSingle position="treatment-top" className="w-full" />
        </div>
        
        <TreatmentOverview treatment={t} />
        {Array.isArray(t.types) && t.types.length > 0 && <TreatmentTypes types={t.types} />}

        {has(t, 'cost.priceRange') && Array.isArray(t.cost.priceRange) && (
          <TreatmentCost treatment={t} note={t.cost.note} rows={t.cost.priceRange} />
        )}

        {t.expectations && <TreatmentExpectations expectations={t.expectations} />}
        {t.foodGuidelines && <FoodGuidelines fg={t.foodGuidelines} />}
        {t.prosConsOfSkipping && (
          <ProsCons data={t.prosConsOfSkipping} title="Choosing Not to Get Treatment - Pros & Cons" />
        )}
        {Array.isArray(t.faq) && t.faq.length > 0 && <FAQ faqs={t.faq} />}
        
        {/* Treatment Sidebar Banner */}
        <div className="container max-w-6xl px-4 py-6 mx-auto">
          <BannerSingle position="treatment-sidebar" className="max-w-md mx-auto" />
        </div>
        
        <RelatedTreatments currentSlug={slug} />
        <RelatedLocations currentSlug={slug} />
        <BookingSection />
      </div>
    </>
  );
}

function TreatmentHero({ treatment, slug }) {
  return (
    <section className="relative px-4 py-20 text-white bg-primary-dark">
      <div className="container flex flex-col items-center max-w-6xl gap-10 mx-auto lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">{treatment.name}</h1>
          {treatment.overview && (
            <p className="text-lg leading-relaxed text-gray-100">
              {treatment.overview} {slug === 'braces' 
                ? 'Our best orthodontists in Sector 65, Gurgaon and West Delhi provide expert braces treatment with advanced orthodontic technology and personalized care.'
                : slug === 'invisalign' || slug?.includes('aligner')
                ? 'Our best orthodontists in Sector 65, Gurgaon and West Delhi provide expert Invisalign clear aligner treatment with advanced technology and personalized care.'
                : slug === 'implant'
                ? 'Our expert implantologist in Sector 65, Gurgaon and West Delhi provide best dental implants treatment with advanced implant technology, ensuring permanent and natural-looking tooth replacement.'
                : slug === 'painless-root-canal-treatment' || slug?.includes('root-canal')
                ? 'Our expert endodontist in Sector 65, Gurgaon and West Delhi provide best painless root canal treatment (RCT) with advanced technology including Apex Locator and Endomotor for comfortable, pain-free procedure.'
                : slug === 'laser-dental-treatments' || slug?.includes('laser')
                ? 'Our expert dentists in Sector 65, Gurgaon and West Delhi provide best LASER dentistry treatments with advanced laser technology for painless, minimally invasive procedures with faster healing.'
                : 'Our expert dental surgeons in Sector 65, Gurgaon and West Delhi provide this treatment with advanced technology and painless procedures.'}
            </p>
          )}
          <div className="flex flex-col gap-4 mt-8 sm:flex-row">
            <a
              href="tel:+919810471255"
              className="px-6 py-3 font-semibold text-center bg-white rounded-lg text-primary hover:bg-gray-100"
            >
              Call Now
            </a>
            <a
              href="/appointment"
              className="px-6 py-3 text-center text-white border border-white rounded-lg hover:bg-accent hover:border-accent"
            >
              Book Consultation
            </a>
          </div>
        </div>
        {treatment.heroImage && (
          <div className="flex-1 hidden w-full max-w-md lg:block">
            <Image
              src={treatment.heroImage}
              width={640}
              height={480}
              className="w-full h-auto shadow-2xl rounded-xl"
              alt={`${treatment.name} treatment at Hapliv Dental Clinic in Gurgaon and West Delhi`}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function TreatmentOverview({ treatment }) {
  const items = [
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
    <section className="bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        {items.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 text-center transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                  <div className="flex items-center justify-center mx-auto mb-3 rounded-full bg-primary-lightest h-14 w-14">
                    <Icon className="text-primary h-7 w-7" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{item.label}</div>
                  <div className="mt-1 text-2xl font-bold text-primary">{item.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{item.description}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function TreatmentTypes({ types }) {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Types / Options</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          <p className="mt-2 text-gray-600">Choose the option that best fits your goals and lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {types.map((t, i) => (
            <div key={i} className="flex flex-col h-full p-6 transition-shadow border border-gray-200 rounded-xl hover:shadow-md hover:border-primary">
              <div className="mb-2 text-xl font-semibold text-gray-900">{t.name}</div>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              {Array.isArray(t.description) ? (
                <ul className="flex-1 space-y-1 text-gray-700 list-disc list-inside">
                  {t.description.map((d, di) => (
                    <li key={di}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p className="flex-1 text-gray-700">{t.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCost({ treatment, note, rows }) {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{treatment.name} cost in Gurgaon &amp; Delhi</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          {note && (
            <p className="mt-2 text-gray-600">
              {note} For detailed pricing, <Link href="/appointment" className="font-semibold text-primary hover:underline">book a consultation</Link> with our expert dentists in Sector 65, Gurgaon or West Delhi.
            </p>
          )}
        </div>
        <div className="overflow-hidden border border-gray-200 rounded-xl">
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

function TreatmentExpectations({ expectations }) {
  const groups = [
    { key: 'before', title: 'Before Treatment' },
    { key: 'during', title: 'During Treatment' },
    { key: 'after', title: 'After Treatment' },
  ];
  return (
    <section className="px-4 py-16 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What to Expect</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          <p className="mt-2 text-gray-600">A clear, step-by-step journey designed for comfort and great results.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups
            .filter((g) => Array.isArray(expectations[g.key]) && expectations[g.key].length > 0)
            .map((g) => (
              <div key={g.key} className="flex flex-col h-full p-6 transition-colors border border-gray-200 rounded-xl hover:border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid rounded-full bg-primary-lightest h-9 w-9 place-items-center">
                    <FaShieldAlt className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
                </div>
                <div className="w-12 h-0.5 mb-3 bg-accent"></div>
                <ul className="flex-1 space-y-2 text-gray-700 list-disc list-inside">
                  {expectations[g.key].map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function FoodGuidelines({ fg }) {
  const hasContent =
    (Array.isArray(fg.avoid) && fg.avoid.length) || (Array.isArray(fg.prefer) && fg.prefer.length) || fg.tip;
  if (!hasContent) return null;
  return (
    <section className="px-4 py-16 bg-primary-lightest">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Food Guidelines</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          <p className="mt-2 text-gray-600">Eat smart during and after treatment for better comfort.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.isArray(fg.avoid) && fg.avoid.length > 0 && (
            <div className="flex flex-col h-full p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Avoid</h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <ul className="flex-1 space-y-1 text-gray-700 list-disc list-inside">
                {fg.avoid.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          )}
          {Array.isArray(fg.prefer) && fg.prefer.length > 0 && (
            <div className="flex flex-col h-full p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Prefer</h3>
              <div className="w-12 h-0.5 mb-3 bg-primary"></div>
              <ul className="flex-1 space-y-1 text-gray-700 list-disc list-inside">
                {fg.prefer.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          )}
          {fg.tip && (
            <div className="flex flex-col h-full p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Tip</h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <p className="flex-1 text-gray-700">{fg.tip}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProsCons({ data, title = 'Pros & Cons' }) {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          {data.summary && <p className="mt-2 text-gray-600">{data.summary}</p>}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col h-full p-6 transition-colors border border-gray-200 rounded-xl hover:border-primary">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Pros</h3>
            <div className="w-12 h-0.5 mb-3 bg-primary"></div>
            <ul className="flex-1 space-y-1 text-gray-700 list-disc list-inside">
              {(data.pros || []).map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col h-full p-6 transition-colors border border-gray-200 rounded-xl hover:border-accent">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Cons</h3>
            <div className="w-12 h-0.5 mb-3 bg-accent"></div>
            <ul className="flex-1 space-y-1 text-gray-700 list-disc list-inside">
              {(data.cons || []).map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ faqs }) {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
        </div>
        <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
          {faqs.map((f, i) => (
            <details key={i} className="p-5 transition-colors group hover:bg-gray-50">
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
      { slug: 'invisalign', name: 'Invisalign', description: 'Clear aligner alternative to braces' },
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
      { slug: 'invisalign', name: 'Invisalign', description: 'Align then whiten' },
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
    <section className="px-4 py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Related Treatments</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          <p className="mt-2 text-gray-600">Explore other dental treatments that may interest you</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {related.map((treatment, idx) => (
            <Link
              key={idx}
              href={`/treatments/${treatment.slug}`}
              className="flex flex-col h-full p-6 transition-all bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary group"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary">
                {treatment.name}
              </h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <p className="flex-1 text-gray-700">{treatment.description}</p>
              <span className="inline-block mt-3 font-semibold text-primary group-hover:text-accent group-hover:underline">
                Learn More →
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
      { path: '/locations/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Expert implant treatment in Mohan Garden, West Delhi' },
    ],
    'painless-root-canal-treatment': [
      { path: '/root-canal-treatment-gurgaon', name: 'Root Canal Treatment in Gurgaon', description: 'Painless RCT in Sector 65, Gurgaon with Apex Locator and Endomotor' },
      { path: '/emergency-dentist-gurgaon', name: 'Emergency Dentist', description: 'Same-day emergency dental care for tooth pain and dental emergencies' },
      { path: '/locations/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Painless RCT in Mohan Garden, West Delhi' },
    ],
    'laser-dental-treatments': [
      { path: '/laser-dentistry-gurgaon', name: 'LASER Dentistry in Gurgaon', description: 'Advanced laser treatment in Sector 65, Gurgaon for gum contouring and whitening' },
      { path: '/locations/dentist-in-sector-65-gurgaon', name: 'Dentist in Sector 65', description: 'Visit our clinic in Sector 65, Gurgaon' },
      { path: '/locations/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Advanced laser treatment in Mohan Garden, West Delhi' },
    ],
  };

  const locations = locationMap[currentSlug] || [
    { path: '/locations/dentist-in-sector-65-gurgaon', name: 'Dentist in Sector 65, Gurgaon', description: 'Best dental clinic in Sector 65, Gurgaon' },
    { path: '/locations/dentist-in-west-delhi', name: 'Dentist in West Delhi', description: 'Best dental clinic in Mohan Garden, West Delhi' },
  ];

  return (
    <section className="px-4 py-16 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Visit Our Clinics</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary"></div>
          <p className="mt-2 text-gray-600">Find our expert dental care near you in Gurgaon and West Delhi</p>
        </div>
        <div className={`grid grid-cols-1 gap-6 ${locations.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
          {locations.map((location, idx) => (
            <Link
              key={idx}
              href={location.path}
              className="flex flex-col h-full p-6 transition-all border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg hover:border-primary group"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary">
                {location.name}
              </h3>
              <div className="w-12 h-0.5 mb-3 bg-accent"></div>
              <p className="flex-1 text-gray-700">{location.description}</p>
              <span className="inline-block mt-3 font-semibold text-primary group-hover:text-accent group-hover:underline">
                View Location →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section className="px-4 py-16 text-white bg-primary-dark">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Ready to transform your smile?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-100">
          Schedule your consultation with our expert dental surgeons in Sector 65, Gurgaon or West Delhi today and take the first step towards a confident, healthy smile. As one of the best nearby dentists, we're here to help you achieve your perfect smile.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/appointment" className="px-8 py-3 font-semibold bg-white rounded-lg text-primary hover:bg-gray-100">
            Book Consultation
          </a>
          <a href="tel:+919810471255" className="px-8 py-3 border border-white rounded-lg hover:bg-accent hover:border-accent">
            Call Now: +919810471255
          </a>
        </div>
      </div>
    </section>
  );
}

