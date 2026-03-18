import Link from 'next/link';
import { navLinks } from 'components/header/navbarData';
import { FadeIn } from 'components/animations';

export const metadata = {
  title: 'Sitemap | All Pages | Hapliv Dental Clinic',
  description: 'Complete sitemap of all pages at Hapliv Dental Clinic. Find all our services, treatments, locations, and information pages.',
  alternates: {
    canonical: '/sitemap',
  },
};

export default function SitemapPage() {
  // Collect all pages
  const allPages = [
    { name: 'Home', path: '/', category: 'Main' },
    { name: 'About Us', path: '/about-us', category: 'Main' },
    { name: 'Technology', path: '/technology', category: 'Main' },
    { name: 'Blogs', path: '/blogs', category: 'Resources' },
    { name: 'FAQs', path: '/faqs', category: 'Resources' },
    { name: 'Appointment', path: '/appointment', category: 'Main' },
    { name: 'Invisalign', path: '/invisalign', category: 'Treatments' },
    { name: 'Best Orthodontist in Gurgaon', path: '/best-orthodontist-gurgaon', category: 'Locations' },
    { name: 'LASER Dentistry in Gurgaon', path: '/laser-dentistry-gurgaon', category: 'Locations' },
    { name: 'Root Canal Treatment in Gurgaon', path: '/root-canal-treatment-gurgaon', category: 'Locations' },
    { name: 'Dental Implants in Gurgaon', path: '/dental-implants-gurgaon', category: 'Locations' },
    { name: 'Root canal cost Gurgaon', path: '/root-canal-treatment-cost-gurgaon', category: 'Locations' },
    { name: 'Invisalign Gurgaon', path: '/invisalign-gurgaon', category: 'Locations' },
    { name: 'Invisalign cost Gurgaon', path: '/invisalign-cost-gurgaon', category: 'Locations' },
    { name: 'Braces cost Gurgaon', path: '/braces-cost-gurgaon', category: 'Locations' },
    { name: 'Best dentist in Gurgaon', path: '/best-dentist-in-gurgaon', category: 'Locations' },
    { name: 'Dentist in West Delhi', path: '/dentist-in-west-delhi', category: 'Locations' },
  ];

  // Get treatment pages from navLinks
  const treatmentPages = navLinks.find(item => item.path === '/treatments')?.children || [];
  const galleryPages = navLinks.find(item => item.path === '/gallery')?.children || [];
  const locationPages = navLinks.find(item => item.path === '/locations')?.children || [];

  const categories = {
    'Main': allPages.filter(p => p.category === 'Main'),
    'Treatments': [
      ...allPages.filter(p => p.category === 'Treatments'),
      ...treatmentPages.map(t => ({ name: t.name, path: t.path, category: 'Treatments' })),
    ],
    'Locations': [
      ...allPages.filter(p => p.category === 'Locations'),
      { name: 'Our Locations', path: '/locations', category: 'Locations' },
      ...locationPages.map(l => ({ name: l.name, path: l.path, category: 'Locations' })),
    ],
    'Gallery': [
      { name: 'Photo Gallery', path: '/gallery', category: 'Gallery' },
      ...galleryPages.map(g => ({ name: g.name, path: g.path, category: 'Gallery' })),
    ],
    'Resources': allPages.filter(p => p.category === 'Resources'),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-28 text-white bg-primary-dark">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                Sitemap
              </h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
                Complete directory of all pages at Hapliv Dental Clinic. Find all our services, treatments, locations, and information pages.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="px-4 py-28 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(categories).map(([category, pages]) => (
              <FadeIn key={category} delay={0.1}>
                <div className="p-8 bg-gray-50 rounded-card shadow-soft-lg">
                  <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 border-b-2 border-primary pb-3">
                    {category}
                  </h2>
                  <ul className="space-y-3">
                    {pages.map((page, idx) => (
                      <li key={idx}>
                        <Link
                          href={page.path}
                          className="block text-base leading-relaxed text-gray-700 transition-colors duration-200 hover:text-primary hover:underline"
                        >
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


