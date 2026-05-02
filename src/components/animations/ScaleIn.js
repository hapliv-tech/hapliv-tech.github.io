"use client";
import { motion } from 'framer-motion';

/**
 * ScaleIn animation component - visibility-first viewport transition
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.duration - Animation duration in seconds (default: 0.5)
 * @param {number} props.scale - Initial scale (default: 0.95)
 * @param {string} props.className - Additional CSS classes
 */
export default function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  scale = 0.95,
  className = "" 
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Apple-style easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

