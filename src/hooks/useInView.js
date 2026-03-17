// hooks/useInView.js
"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Detect if an element is in the viewport.
 * opts: { root?, rootMargin?, threshold?, once? }
 */
export default function useInView(opts = {}) {
  const { once = false, ...options } = opts;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) io.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [once, options.root, options.rootMargin, options.threshold]);

  return { ref, inView };
}
