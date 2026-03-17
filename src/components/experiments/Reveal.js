// components/Reveal.js
"use client";
import useInView from "../../hooks/useInView";

/**
 * Props:
 * - as: element tag, default 'div'
 * - from: initial classes
 * - to: final classes when visible
 * - delay: ms
 * - once: fire once (default true)
 * - threshold: 0..1 (default .3)
 */
export default function Reveal({
  as: Tag = "div",
  from = "opacity-0 translate-y-4",
  to = "opacity-100 translate-y-0",
  duration = 700,
  delay = 0,
  once = true,
  threshold = 0.3,
  className = "",
  children,
  ...rest
}) {
  const { ref, inView } = useInView({ once, threshold });

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all ease-out will-change-transform ${inView ? to : from}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${inView ? delay : 0}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
