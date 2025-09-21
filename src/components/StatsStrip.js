// components/StatsStrip.js
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ---------------- helpers ---------------- */

/**
 * Detect if an element is (partly) in the viewport.
 * opts: { root?, rootMargin?, threshold?, once? }
 */
function useInView(opts = {}) {
  const { once = false, ...options } = opts;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) io.disconnect(); // fire once
      } else if (!once) {
        setInView(false);
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [once, options.root, options.rootMargin, options.threshold]);

  return { ref, inView };
}



// very smooth tail (last digits linger nicely)
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
// also available if you want to try others:
const EASINGS = {
  expo: easeOutExpo,
  cubic: (t) => 1 - Math.pow(1 - t, 3),
  quint: (t) => 1 - Math.pow(1 - t, 5),
};

function usePrefersReducedMotion() {
  const ref = useRef(false);
  if (typeof window !== "undefined" && window.matchMedia) {
    ref.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return ref.current;
}

/* ---------------- CountUp (imperative) ---------------- */

/**
 * Imperative counter: avoids React re-rendering each frame.
 * Starts immediately when mounted (animate-on-load).
 */
export function CountUp({
  to,
  from = 0,
  duration = 2400,     // longer by default = smoother
  prefix = "",
  suffix = "",
  decimals = 0,
  easing = "expo",     // "expo" | "cubic" | "quint"
  locale = "en-IN",
  className,
  ariaLabel,
}) {
  const spanRef = useRef(null);
  const rafRef = useRef(null);
  const reduceMotion = usePrefersReducedMotion();

  // reuse one NumberFormat instance (perf)
  const formatter = useMemo(
    () => new Intl.NumberFormat(locale, { maximumFractionDigits: decimals }),
    [locale, decimals]
  );

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;

    const toNum = Number(to) || 0;
    const fromNum = Number(from) || 0;

    if (reduceMotion || duration <= 0) {
      node.textContent = `${prefix}${formatter.format(toNum)}${suffix}`;
      return;
    }

    const ease = EASINGS[easing] || easeOutExpo;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = ease(t);
      const current = fromNum + (toNum - fromNum) * eased;

      // Snap to integers visually, but we still lerp under the hood.
      const display = decimals > 0 ? current : Math.floor(current);

      node.textContent = `${prefix}${formatter.format(display)}${suffix}`;

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // ensure exact final value at end
        node.textContent = `${prefix}${formatter.format(toNum)}${suffix}`;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [to, from, duration, prefix, suffix, formatter, easing, reduceMotion]);

  // initial text (SSR/first paint)
  const initial = `${prefix}${formatter.format(from)}${suffix}`;
  return (
    <span
      ref={spanRef}
      className={`${className ?? ""} tabular-nums`} // tabular-nums keeps width stable
      aria-label={ariaLabel ?? `${prefix}${to}${suffix}`}
    >
      {initial}
    </span>
  );
}

/* ---------------- Stat & Strip ---------------- */

export function Stat({
  from=0,
  to,
  label,
  color = "purple",     // "purple" | "orange"
  suffix,
  prefix,
  // fine-tune per stat if you like:
  duration = 2400,
  easing = "expo",
  decimals = 0, 
}) {
  const numberColor = color === "orange" ? "text-orange-500" : "text-purple-700";

  return (
    <div className="px-3 py-6 text-center">
      <CountUp
        to={to}
        from={from}
        prefix={prefix}
        suffix={suffix}
        duration={duration}
        easing={easing}
        decimals={decimals}
        className={`text-5xl font-extrabold leading-none ${numberColor}`}
        ariaLabel={`${to}${suffix ?? ""} ${label}`}
      />
      <div className="mt-3 text-lg font-medium text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsStrip() {
const { ref, inView } = useInView({
    threshold:1,        // 30% visible
    rootMargin: "0px 0px -10% 0px", // pre-trigger a bit before
    once: false,            // only the first time it enters
});
  return (
    <section className="py-10">
      <div
        className="
          mx-auto rounded-3xl bg-white
          shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)]
          ring-1 ring-black/5
        "
      >
        <div className="grid items-center grid-cols-2 gap-6 md:grid-cols-4" ref={ref}>
          {/* slower end, buttery smooth */}
          <Stat from={1500} to={2000} suffix="+" label="Happy Patients" color="purple" duration={2600} />
          <Stat from={5} to={10}   suffix="+" label="Years Experience" color="orange" duration={2400} />
          <Stat from={90} to={99} suffix="%" label="Success Rate"    color="purple" duration={1000} />
          <Stat to={2}  label="Clinic Locations" color="orange" duration={100} />
        </div>
      </div>
    </section>
  );
}
