import Link from 'next/link';
import { PageHero } from 'components/app-pages/PageSections';

export const metadata = {
  title: 'West Delhi dentist (updated URL)',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://haplivdentalclinic.com/dentist-in-west-delhi',
  },
};

export default function WestDelhiRedirectPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="West Delhi clinic"
        title="West Delhi dentist page has moved"
        description="Our West Delhi clinic page now uses a shorter URL for easier sharing and search. Continue to the current Mohan Garden clinic page."
        primaryHref="/dentist-in-west-delhi"
        primaryLabel="Open West Delhi Page"
        secondaryHref="/locations"
        secondaryLabel="View All Locations"
        highlights={[
          'Mohan Garden evening clinic',
          'Mon-Sat, 5:00 PM - 8:00 PM',
          'Braces, Invisalign, RCT and implants',
          'Mapped from the locations hub',
        ]}
      />
      <section className="px-4 py-12 text-center">
        <Link href="/dentist-in-west-delhi" className="font-semibold text-primary underline">
          Continue to the current West Delhi clinic page
        </Link>
      </section>
    </div>
  );
}
