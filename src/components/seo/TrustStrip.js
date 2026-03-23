/**
 * Compact trust row for money pages (matches aggregateRating in site schema).
 */
export default function TrustStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 px-4 bg-gray-50 border-y border-gray-100 text-sm text-gray-800">
      <span className="font-semibold text-primary">4.98★ Google</span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span>100+ reviews</span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span>Certified Invisalign provider</span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span>8+ years experience</span>
    </div>
  );
}
