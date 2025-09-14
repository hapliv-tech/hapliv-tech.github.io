/* pages/treatments/[slug].jsx */
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaCheck, FaClock, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

// NOTE: point these to your actual files:
import { TreatmentList } from '../../data/structuredTreatmentDetails'; // array of items with { slug, treatment: { ... } }
import { navLinks } from '../../components/header/navbarData'; // used for getStaticPaths (optional)

// ---------- Utilities ----------
const formatINR = (s) => s; // your ranges are already human strings e.g. "₹5,000 – ₹10,000"
const has = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);

// ---------- Page ----------
export default function TreatmentDetailPage({ serviceData }) {
    const router = useRouter();
    if (!serviceData) return null;
    const t = serviceData.treatment ?? serviceData; // support both shapes
    return (<>
        <Head>
            <title>{t.name} | Treatments | Hapliv Dental Clinic</title>
            <meta name="description" content={t?.overview?.slice(0, 155)} />
            <meta name="keywords" content={t?.keywords} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@HaplivDental" />
            <meta name="twitter:title" content={t?.name + ' | Treatments | Hapliv Dental Clinic'} />
            <meta name="twitter:description" content={t?.overview} />
            <meta name="twitter:image" content={t?.heroImage} />
            <meta property="og:type" name="og:type" content="article" />
            <meta property="og:title" name="og:title" content={t?.name + ' | Treatments | Hapliv Dental Clinic'} />
            <meta property="og:description" name="og:description" content={t?.overview} />
            <meta property="og:image" name="og:image" content={t?.heroImage} />

        </Head>
        <div className="min-h-screen mt-24 bg-white">


            <TreatmentHero treatment={t} />
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

            <BookingSection />
        </div>
    </>

    );
}

// ---------- Sections ----------
function TreatmentHero({ treatment }) {
    return (
        <section className="relative px-4 py-20 text-white bg-gradient-to-b from-black to-purple-800">
            <div className="container flex flex-col items-center max-w-6xl gap-10 mx-auto lg:flex-row">
                <div className="flex-1">
                    {/* <div className="mb-2 text-sm opacity-80">Hapliv Dental Clinic</div> */}
                    <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">{treatment.name}</h1>
                    {/* {treatment.doctor && (
                        <p className="mb-2 text-purple-100">Led by <span className="font-semibold">{treatment.doctor}</span></p>
                    )} */}
                    {treatment.overview && (
                        <p className="text-lg leading-relaxed text-gray-200/60">{treatment.overview}</p>
                    )}

                    <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                        <a
                            href="tel:+919810471255"
                            className="px-6 py-3 font-semibold text-center text-purple-700 bg-white rounded-lg hover:bg-gray-100"
                        >
                            Call Now
                        </a>
                        <a
                            href="/appointment"
                            className="px-6 py-3 text-center text-white border border-white rounded-lg hover:bg-white hover:text-purple-700"
                        >
                            Book Consultation
                        </a>
                    </div>
                </div>

                {treatment.heroImage && (
                    <div className="flex-1 hidden w-full max-w-md lg:block">
                        {/* If you prefer next/image, ensure the domain is allowed in next.config */}
                        <Image
                            src={treatment.heroImage}
                            width={640}
                            height={480}
                            className="w-full h-auto shadow-2xl rounded-xl"
                            alt={treatment.name}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

function TreatmentOverview({ treatment }) {
    // These are OPTIONAL fields. Only render cards that exist.
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
                {/* <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Treatment Overview</h2>
                    {treatment.overview && (
                        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600">{treatment.overview}</p>
                    )}
                </div> */}

                {items.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {items.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 text-center transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg"
                                >
                                    <div className="flex items-center justify-center mx-auto mb-3 bg-purple-100 rounded-full w-14 h-14">
                                        <Icon className="text-purple-700 w-7 h-7" />
                                    </div>
                                    <div className="text-lg font-semibold text-gray-900">{item.label}</div>
                                    <div className="mt-1 text-2xl font-bold text-purple-700">{item.value}</div>
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
                    <p className="mt-2 text-gray-600">Choose the option that best fits your goals and lifestyle.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {types.map((t, i) => (
                        <div key={i} className="p-6 transition-shadow border rounded-xl hover:shadow-md">
                            <div className="mb-2 text-xl font-semibold text-gray-900">{t.name}</div>
                            {Array.isArray(t.description) ? (
                                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                                    {t.description.map((d, di) => (
                                        <li key={di}>{d}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700">{t.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TreatmentCost({treatment, note, rows }) {
    return (
        <section className="px-4 py-16 bg-gray-50">
            <div className="container max-w-5xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{treatment.name} cost in Gurgaon & Delhi</h2>
                    {note && <p className="mt-2 text-gray-600">{note}</p>}
                </div>
                <div className="overflow-hidden border rounded-xl">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Type</th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r, i) => (
                                <tr key={i} className="border-t">
                                    <td className="px-4 py-3">{r.type}</td>
                                    <td className="px-4 py-3 font-medium text-gray-900">{formatINR(r.range)}</td>
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
                    <p className="mt-2 text-gray-600">
                        A clear, step-by-step journey designed for comfort and great results.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {groups
                        .filter((g) => Array.isArray(expectations[g.key]) && expectations[g.key].length > 0)
                        .map((g) => (
                            <div key={g.key} className="p-6 border rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex items-center justify-center bg-purple-100 rounded-full w-9 h-9">
                                        <FaShieldAlt className="w-5 h-5 text-purple-700" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside">
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
        (Array.isArray(fg.avoid) && fg.avoid.length) ||
        (Array.isArray(fg.prefer) && fg.prefer.length) ||
        fg.tip;

    if (!hasContent) return null;

    return (
        <section className="px-4 py-16 bg-blue-50">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Food Guidelines</h2>
                    <p className="mt-2 text-gray-600">Eat smart during and after treatment for better comfort.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {Array.isArray(fg.avoid) && fg.avoid.length > 0 && (
                        <div className="p-6 bg-white shadow-sm rounded-xl">
                            <h3 className="mb-2 text-lg font-semibold text-red-600">Avoid</h3>
                            <ul className="space-y-1 text-gray-700 list-disc list-inside">
                                {fg.avoid.map((x, i) => (
                                    <li key={i}>{x}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {Array.isArray(fg.prefer) && fg.prefer.length > 0 && (
                        <div className="p-6 bg-white shadow-sm rounded-xl">
                            <h3 className="mb-2 text-lg font-semibold text-green-700">Prefer</h3>
                            <ul className="space-y-1 text-gray-700 list-disc list-inside">
                                {fg.prefer.map((x, i) => (
                                    <li key={i}>{x}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {fg.tip && (
                        <div className="p-6 bg-white shadow-sm rounded-xl">
                            <h3 className="mb-2 text-lg font-semibold text-blue-700">Tip</h3>
                            <p className="text-gray-700">{fg.tip}</p>
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
                    {data.summary && <p className="mt-2 text-gray-600">{data.summary}</p>}
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6 border rounded-xl">
                        <h3 className="mb-2 text-lg font-semibold text-green-700">Pros</h3>
                        <ul className="space-y-1 text-gray-700 list-disc list-inside">
                            {(data.pros || []).map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 border rounded-xl">
                        <h3 className="mb-2 text-lg font-semibold text-red-600">Cons</h3>
                        <ul className="space-y-1 text-gray-700 list-disc list-inside">
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
                </div>

                <div className="bg-white border divide-y rounded-xl">
                    {faqs.map((f, i) => (
                        <details key={i} className="p-5 group">
                            <summary className="font-semibold text-gray-900 cursor-pointer">
                                {f.q}
                            </summary>
                            <p className="mt-2 text-gray-700">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BookingSection() {
    return (
        <section className="px-4 py-16 text-white bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800">
            <div className="container max-w-6xl mx-auto text-center">
                <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Ready to transform your smile?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90 text-white/75">
                    Schedule your consultation today and take the first step towards a confident, healthy smile.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a href="/appointment" className="px-8 py-3 font-semibold text-purple-700 bg-white rounded-lg hover:bg-gray-100">
                        Book Consultation
                    </a>
                    <a href="tel:+919810471255" className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-purple-700">
                        Call Now: +919810471255
                    </a>
                </div>
            </div>
        </section>
    );
}

// ---------- Data fetching (SSG) ----------
export async function getStaticPaths() {
    const data = navLinks.filter(item => item.path === '/treatments')[0].children;
    const pathsWithParams = data.filter(item => !item.skip_static_path).map((star) => ({ params: { treatments: star.path.split('\/')[2] } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const slug = ctx.params.treatments;
    const data = TreatmentList;
    // support { slug, treatment } or flat { slug, ...fields }
    const found =
        data.find((it) => it.slug === slug) ||
        null;

    return {
        props: {
            serviceData: found,
        },
    };
}
