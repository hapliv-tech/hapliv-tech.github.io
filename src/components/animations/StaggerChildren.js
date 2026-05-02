"use client";
import { motion } from 'framer-motion';

/**
 * StaggerChildren animation wrapper - visibility-first staggered animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.staggerDelay - Delay between children in seconds (default: 0.1)
 * @param {string} props.className - Additional CSS classes
 */
export default function StaggerChildren({ 
  children, 
  staggerDelay = 0.1,
  className = "" 
}) {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

