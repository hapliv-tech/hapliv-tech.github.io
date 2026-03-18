import Link from 'next/link';

export const metadata = {
  title: 'West Delhi dentist (updated URL) | Hapliv Dental',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://haplivdentalclinic.com/dentist-in-west-delhi',
  },
};

export default function WestDelhiRedirectPage() {
  return (
    <div className="min-h-[50vh] mt-28 px-4 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
      <p className="text-gray-700 mb-6 text-lg">
        Our West Delhi clinic page has moved to a shorter URL for easier sharing and search.
      </p>
      <Link
        href="/dentist-in-west-delhi"
        className="px-8 py-3.5 bg-primary text-white font-semibold rounded-button hover:opacity-95"
      >
        Go to Dentist in West Delhi
      </Link>
    </div>
  );
}
