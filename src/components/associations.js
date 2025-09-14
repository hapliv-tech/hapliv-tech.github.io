"use client";

import Image from "next/image";
import { useMemo } from "react";

const LOGOS = [
    { src: "/assets/invisalign.png", alt: "Invisalign", w: 220, h: 60 },
    { src: "/assets/damon-braces.png", alt: "Damon Braces", w: 210, h: 60 },
    { src: "/assets/incognito-hidden-braces-logo.png", alt: "Incognito Braces", w: 220, h: 60 },
    { src: "/assets/IDAlogo.png", alt: "Indian Dental Association", w: 140, h: 60 },
    { src: "/assets/IOS.png", alt: "Indian Orthodontic Society", w: 160, h: 60 },
    { src: "/assets/WCLI-512x512.png", alt: "WCLI", w: 120, h: 60 },
    { src: "/assets/3m-espe-logo.jpg", alt: "3M ESPE", w: 180, h: 60 },       // ← replace with transparent PNG if possible
    { src: "/assets/3.Gc_.jpg", alt: "GC", w: 120, h: 60 },                   // ← replace with transparent PNG if possible
    { src: "/assets/biolase-banner.png", alt: "BIOLASE", w: 200, h: 60 },
    { src: "/assets/invisalign-teen.jpg", alt: "Invisalign Teen", w: 160, h: 60 }, // ← replace with transparent PNG if possible
];

export default function Associations({
    logos = LOGOS,
    speed = 28,            // seconds per loop
    counterRow = false,     // second row on md+
    railVariant = "gradient", // "transparent" | "glass" | "gradient"
}) {
    const row = useMemo(() => [...logos, ...logos], [logos]);
    const rowReverse = useMemo(() => [...logos, ...logos].reverse(), [logos]);

    return (
        <section className="relative w-full pt-4 pb-4">
            <header className="text-center">
                <h2 className="mb-3 text-3xl font-bold text-black md:text-4xl">
                    Our <span className="text-orange-500">Associations</span>
                </h2>
                <div className="w-20 h-1 mx-auto mb-6 bg-orange-500" />
            </header>

            <Track variant={railVariant}>
                <MarqueeRow items={row} duration={speed} direction="normal" />
            </Track>

            {counterRow && (
                <div className="hidden mt-6 md:block">
                    <Track variant={railVariant}>
                        <MarqueeRow items={rowReverse} duration={speed * 1.1} direction="reverse" />
                    </Track>
                </div>
            )}

            <style jsx global>{`
        @keyframes scroll-x { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .marquee-track { animation: scroll-x var(--dur, 28s) linear infinite; will-change: transform; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
      `}</style>
        </section>
    );
}

function Track({ children, variant }) {
    const base = "overflow-hidden w-full m-0";
    const style =
        variant === "glass"
            ? "bg-white/10 backdrop-blur-sm ring-1 ring-white/10"
            : variant === "gradient"
                ? "bg-gradient-to-r from-[#3b1d5a]/30 via-[#4f1e6f]/20 to-[#f97316]/20 ring-1 ring-white/10"
                : "bg-transparent";

    return (
        <div className={`${base} ${style} p-3`}>
            {/* soft edge fade so logos don't hard-cut */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.95) 8%, rgba(0,0,0,.95) 92%, rgba(0,0,0,0))",
                    maskImage:
                        "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.95) 8%, rgba(0,0,0,.95) 92%, rgba(0,0,0,0))",
                }}
            />
            {children}
        </div>
    );
}

function MarqueeRow({ items, duration, direction = "normal" }) {
    return (
        <div className="relative overflow-hidden marquee" role="list" aria-label="Affiliations and partner brands">
            <ul
                className="flex items-center gap-10 pr-10 marquee-track w-max"
                style={{ ["--dur"]: `${duration}s`, animationDirection: direction }}
            >
                {items.map((logo, i) => (
                    <li key={i} className="shrink-0" role="listitem">
                        <Brand {...logo} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Brand({ src, alt, w = 160, h = 60 }) {
    return (
        <div className="relative flex items-center justify-center h-16 mx-2">
            <Image
                src={src}
                alt={alt}
                width={w}
                height={h}
                layout="fixed"
                className="
          h-12 w-auto object-contain
          opacity-90 grayscale
          transition duration-300
          hover:opacity-100 hover:grayscale-0 hover:scale-[1.03]
        "
            />
        </div>
    );
}
