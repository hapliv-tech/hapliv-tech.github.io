"use client";
import TestimonialsMarquee from "components/experiments/TestimonialMarquee";
import { useIsMobile } from "utils/useIsMobile";

export default function TestimonialsMarqueeWrapper() {
  const isMobile = useIsMobile();
  
  return (
    <TestimonialsMarquee
      columns={isMobile ? 1 : 3}
      speeds={isMobile ? [50] : [31, 51, 21]}
      reverseEvery={3}
    />
  );
}


