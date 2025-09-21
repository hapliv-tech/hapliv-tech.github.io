// /src/components/AnimatedHero.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { FaWhatsapp, FaPhone, FaArrowRight } from "react-icons/fa";

const phrases = [
  "Transform Your Smile with Expert Orthodontics",
  "Braces & Invisalign by Specialists",
  "Gentle, Patient-Centric Dental Care",
];

function useRotatingText(list = phrases, ms = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % list.length), ms);
    return () => clearInterval(t);
  }, [list, ms]);
  return list[i];
}

export default function AnimatedHero() {
  const headline = useRotatingText(phrases, 2500);
  const [dragX, setDragX] = useState(50); // for before/after slider

  return (
    <section className="relative overflow-hidden">
      {/* animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_20%_20%,rgba(255,140,0,.18),transparent),radial-gradient(800px_400px_at_80%_0%,rgba(0,0,0,.2),transparent)] animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="max-w-6xl px-4 py-16 mx-auto md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: headline + CTAs */}
          <div>
            <span className="inline-block px-3 py-1 text-xs text-orange-700 border rounded-full border-orange-300/60 bg-white/60 backdrop-blur">
              Orthodontist in Gurgaon & West Delhi
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              {headline}
              <span className="ml-1 inline-block w-1 animate-ping rounded bg-orange-500 align-middle md:w-1.5" />
            </h1>

            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Book a free smile consultation. 2000+ happy patients. Modern,
              painless treatments with Invisalign, braces, laser & more.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="#book"
                className="inline-flex items-center px-5 py-3 text-white transition bg-orange-600 shadow-md group rounded-2xl hover:bg-orange-700"
              >
                Book Consultation
                <FaArrowRight className="ml-2 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+918010017035"
                className="inline-flex items-center px-4 py-3 bg-white border shadow-sm rounded-2xl border-neutral-300 text-neutral-800 hover:bg-neutral-50"
              >
                <FaPhone className="mr-2" />
                Call Now
              </a>
              {/* Chat bubble CTA */}
              <a
                href="https://wa.me/918010017035?text=Hi%20Hapliv%20Dental!%20I%20want%20a%20smile%20assessment."
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center px-4 py-3 text-green-800 border border-green-200 rounded-2xl bg-green-50 hover:bg-green-100"
              >
                <FaWhatsapp className="mr-2" />
                Chat on WhatsApp
                <span className="absolute w-3 h-3 bg-green-500 rounded-full -right-2 -top-2 animate-ping" />
              </a>
            </div>

            {/* micro-trust row */}
            <div className="flex gap-6 mt-5 text-xs text-neutral-600">
              <div>⭐ 4.9/5 Google Rating</div>
              <div>🧑‍⚕️ Expert Orthodontists</div>
              <div>🧒 Kids-friendly</div>
            </div>
          </div>

          {/* RIGHT: Before/After slider */}
          <div className="relative w-full h-64 overflow-hidden shadow-lg select-none rounded-2xl md:h-96">
            <img
              src="/assets/before-invisalign-smileview.png"
              alt="Before"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${dragX}%` }}
            >
              <img
                src="/assets/after-invisalign-smileview.png"
                alt="After"
                className="object-cover w-full h-full"
              />
            </div>
            {/* handle */}
            <input
              type="range"
              min={0}
              max={100}
              value={dragX}
              onChange={(e) => setDragX(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute w-3/4 -translate-x-1/2 bottom-4 left-1/2 accent-orange-600"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="px-3 py-1 text-xs font-semibold rounded-full bg-white/70">
                Drag to Compare
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
