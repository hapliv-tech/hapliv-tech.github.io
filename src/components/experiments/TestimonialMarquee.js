"use client";

import { useMemo, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { REVIEWS_WALL } from "components/reviews/reviewData";

/** Testimonial shape: { name, role?, org?, avatar?, text, rating, platform, url } */

const chunk = (items, cols) => {
    const out = Array.from({ length: cols }, () => []);
    items.forEach((t, i) => out[i % cols].push(t));
    return out;
};

export default function TestimonialsMarquee({
    testimonials = [],
    columns = 3,
    speeds = [26, 30, 34],
    reverseEvery = 2,
    className = "",
}) {
    testimonials = testimonials.length ? testimonials : REVIEWS_WALL;
    const colData = useMemo(() => chunk(testimonials, columns), [testimonials, columns]);

    return (
        <section className={`relative mx-auto px-4 ${className} bg-[#5A09A4] bg-gradient-to-b from-[#000000] to-[#5A09A4]`}>
            <div className="pt-10 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                    What Our <span className="text-orange-500">Patients Say</span>
                </h2>
                <div className="w-20 h-1 mx-auto mb-6 bg-orange-500"></div>
            </div>
            {/* <div>
                <h3 className="relative clear-both col-span-6 p-4 text-sm text-center md:text-sm md:p-4">Our clinics in Gurgaon & West Delhi are equipped with state-of-the-art facilities, offering patients the best in dental care. Don't just take our word for it - read the testimonials from our satisfied patients.</h3>
            </div> */}
            <p className="mb-8 text-sm text-center text-white/90">
                4.9/5 ★ on Google · 100+ reviews
            </p>


            <div className="grid gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
                {colData.map((items, cIdx) => (
                    <Column
                        key={cIdx}
                        items={items}
                        duration={speeds[cIdx % speeds.length] || 30}
                        direction={cIdx % reverseEvery === 0 ? "up" : "down"}
                    />
                ))}
            </div>

            {/* marquee keyframes */}
            <style jsx global>{`
        @keyframes testimonial-scroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); } /* list duplicated -> 50% = seamless */
        }
      `}</style>
            
            <div
                className="absolute inset-x-0 bottom-0 pointer-events-none h-28"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 28%, rgba(0,0,0,1) 65%, rgba(0,0,0,1) 100%)",
                    maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 28%, rgba(0,0,0,1) 65%, rgba(0,0,0,1) 100%)",
                    backdropFilter: "blur(10px) saturate(120%)",
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Dentist",
                        "name": "Hapliv Dental Clinic",
                        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "100" }
                    })
                }}
            />
        </section>
    );
}

function Column({ items, duration = 30, direction = "up" }) {
    const [paused, setPaused] = useState(false);
    const loop = useMemo(() => [...items, ...items], [items]); // seamless

    return (
        <div
            className="relative h-[580px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Testimonials column"
            style={{
                WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 14%, rgba(255,255,255,0.9) 86%, rgba(255,255,255,0.9) 100%)",
                maskImage:
                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 14%, rgba(255,255,255,0.9) 86%, rgba(255,255,255,0.9) 100%)",
            }}
        >
            <ul
                style={{
                    animation: `testimonial-scroll ${duration}s linear infinite`,
                    animationDirection: direction === "up" ? "normal" : "reverse",
                    animationPlayState: paused ? "paused" : "running",
                    willChange: "transform",
                    // soft fade of content near edges (no color added)
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 14%, rgba(255,255,255,0.9) 86%, rgba(255,255,255,0.9) 100%)",
                    maskImage:
                        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 14%, rgba(255,255,255,0.9) 86%, rgba(255,255,255,0.9) 100%)",
                }}
                className="flex flex-col gap-5"
            >
                {loop.map((t, i) => (
                    <li key={i}>
                        <Card t={t} />
                    </li>
                ))}
            </ul>

            {/* ultra-soft blur veils; fully transparent (no white band) and feathered with a mask */}
            <div
                className="absolute inset-x-0 top-0 h-40 pointer-events-none backdrop-blur-sm md:backdrop-blur-lg backdrop-brightness-105 backdrop-saturate-125"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,.6) 40%, rgba(255,255,255,0) 100%)",
                    maskImage:
                        "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,.6) 40%, rgba(255,255,255,0) 100%)",
                }}
            />
            <div
                className="absolute inset-x-0 bottom-0 h-40 pointer-events-none backdrop-blur-sm md:backdrop-blur-lg backdrop-brightness-105 backdrop-saturate-125"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 40%, rgba(0,0,0,0) 100%)",
                    maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 40%, rgba(0,0,0,0) 100%)",
                }}
            />
        </div>
    );
}


/* ------------------ Card (glass, inner glow, minimal outer shadow) ------------------ */

function Card({ t }) {
    const initials = (t?.name || "?")
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <article
            className="relative p-5 overflow-hidden transition-all duration-300 border group rounded-2xl bg-white/10 bg-clip-padding backdrop-blur-sm md:backdrop-blur-lg backdrop-saturate-150 border-white/30"
        >
            {/* top inner sheen */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 pointer-events-none h-1/2"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,.10), rgba(255,255,255,.10) 60%, transparent)" }}
            />
            {/* inner glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none opacity-70 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(70% 60% at 0% 0%, rgba(124,58,237,.06), transparent 55%), radial-gradient(70% 60% at 100% 100%, rgba(249,115,22,.06), transparent 55%)",
                }}
            />
            {/* subtle film grain */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E\")",
                }}
            />
            {/* inner ring */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/25" />

            {/* content */}
            <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-3">
                    <PlatformBadge platform={t.platform} url={t.url} />
                    {typeof t.rating === "number" && <StarRating value={t.rating} />}
                </div>

                <p
                    className="text-[15px] leading-6 text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    “{t.text}”
                </p>


                <div className="flex items-center gap-3 mt-3">
                    <div className="grid w-10 h-10 overflow-hidden text-sm font-semibold text-purple-800 rounded-full place-items-center bg-white/50 backdrop-blur-sm md:backdrop-blur-lg">
                        {t.avatar ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={t.avatar} alt={t.name} className="object-cover w-full h-full" />
                        ) : (
                            initials
                        )}
                    </div>
                    <div className="min-w-0">
                        <div className="text-sm font-semibold truncate text-orange-50">{t.name}</div>
                        <div className="text-xs truncate text-orange-100/50">
                            {[t.role, t.org].filter(Boolean).join(" • ")}
                        </div>
                    </div>
                    {t.url && (
                        <a
                            href={t.url}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-auto text-xs font-medium text-orange-600 underline-offset-2 hover:underline"
                        >
                            Read full
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

/* ------------------ Stars + Platform ------------------ */

function Star({ state = "empty", className = "w-4 h-4" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id="half-grad" x1="0" x2="1">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                </linearGradient>
            </defs>
            <path
                d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.5l1.1-6.5-4.7-4.6 6.5-.9L12 2.6z"
                fill={state === "full" ? "currentColor" : state === "half" ? "url(#half-grad)" : "none"}
                stroke="currentColor"
                strokeWidth="1"
                className="text-orange-500"
            />
        </svg>
    );
}
function StarRating({ value = 5 }) {
    const full = Math.floor(value);
    const hasHalf = value - full >= 0.25 && value - full < 0.75;
    const states = Array.from({ length: 5 }, (_, i) =>
        i < full ? "full" : i === full && hasHalf ? "half" : "empty"
    );
    return (
        <div className="flex items-center justify-between gap-2 mb-3 leading-10">
            <div className="flex items-center gap-1">
                {states.map((s, i) => (
                    <Star key={i} state={s} />
                ))}
            </div>
            <span className="ml-1 text-xs text-white/80">{value.toFixed(1)}</span>
        </div>
    );
}

function platformMeta(p) {
    const key = String(p || "review").toLowerCase();
    const map = {
        google: { label: "Google", bg: "#F4F8FFAA", fg: "#1A73E8", initial: "G", icon: FcGoogle },
        practo: { label: "Practo", bg: "#EAF3FFAA", fg: "#0C87EF", initial: "P" },
        instagram: { label: "Instagram", bg: "#FDE7F3AA", fg: "#C13584", initial: "Ig", icon: FaInstagram },
        facebook: { label: "Facebook", bg: "#E7F3FFAA", fg: "#1877F2", initial: "f" },
        justdial: { label: "Justdial", bg: "#FFF4E5AA", fg: "#F57C00", initial: "JD" },
        linkedin: { label: "LinkedIn", bg: "#E8F5FEAA", fg: "#0A66C2", initial: "in" },
        review: { label: "Review", bg: "#F3F4F6AA", fg: "#111827", initial: "★" },
    };
    return map[key] || map.review;
}
function PlatformBadge({ platform = "review", url }) {
    const meta = platformMeta(platform);
    const badge = (
        <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium
                 bg-white/90 backdrop-blur-sm md:backdrop-blur-lg ring-1 ring-inset ring-white/60 shadow-[0_1px_0_rgba(255,255,255,0.6)]"
            style={{ color: meta.fg }}
        >
            {meta.icon ? <meta.icon /> : <span className="grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold leading-none text-white
                       bg-gradient-to-br from-purple-600 to-orange-500">
                {meta.initial}
            </span>}

            {meta.label}
        </span>
    );
    return url ? (
        <a href={url} target="_blank" rel="noreferrer" aria-label={`${meta.label} review link`}>
            {badge}
        </a>
    ) : (
        badge
    );
}
