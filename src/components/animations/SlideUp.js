"use client";
import { motion } from 'framer-motion';

/**
 * SlideUp animation component - Apple-style smooth slide from bottom
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.duration - Animation duration in seconds (default: 0.6)
 * @param {number} props.distance - Distance to slide in pixels (default: 40)
 * @param {string} props.className - Additional CSS classes
 */
export default function SlideUp({ 
  children, 
  delay = 0, 
  duration = 0.6,
  distance = 40,
  className = "" 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
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


