import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Suspense } from 'react';
import { sortByDate } from 'utils';
import { FadeIn } from 'components/animations';
import BlogListingClient from 'components/blog-listing-client';
import BannerSingle from 'components/banner/BannerSingle';

export const metadata = {
  title: 'Dental Care Blogs | Hapliv Dental Clinic',
  description:
    "Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog. Expert insights on braces, Invisalign, root canal, implants, and more.",
  keywords:
    'Dental Care Blogs, Oral Health, Dental Tips, Cosmetic Dentistry, Orthodontics, LASER, RCT, Dental Treatments, Hapliv Dental Clinic, Dental Health Articles, Dental Care Advice',
  openGraph: {
    title: 'Dental Care Blogs | Hapliv Dental Clinic',
    description:
      "Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog.",
    type: 'website',
    images: ['https://haplivdentalclinic.com/assets/blog/laser-teeth-whitening.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Care Blogs | Hapliv Dental Clinic',
    description:
      "Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog.",
    images: ['https://haplivdentalclinic.com/assets/blog/laser-teeth-whitening.webp'],
  },
  alternates: { canonical: '/blogs' },
};

function getAllPostsManifest() {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data: frontmatter } = matter(raw);
      return {
        slug,
        frontmatter: {
          title: frontmatter?.title,
          date: frontmatter?.date,
          description: frontmatter?.description,
          excerpt: frontmatter?.excerpt,
          cover_image: frontmatter?.cover_image,
          author: frontmatter?.author,
          tags: frontmatter?.tags || [],
        },
      };
    })
    .sort(sortByDate);
}

export default function BlogIndexPage() {
  const posts = getAllPostsManifest();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 text-white bg-primary-dark md:pt-36 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-hero">
                Dental Care Blogs
              </h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100 md:text-xl">
                Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic. Expert insights on braces, Invisalign, root canal, implants, and more.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Index Top Banner - Full Width */}
      <div className="w-full py-8">
        <BannerSingle position="blog-index-top" className="w-full" />
      </div>

      {/* Blog Posts Section - Client Component for Pagination */}
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="px-4 py-16 text-center">Loading blogs...</div>}>
              <BlogListingClient posts={posts} />
            </Suspense>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Blog Index Sidebar Banner */}
              <div className="mb-8">
                <BannerSingle position="blog-index-sidebar" className="w-full" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Blog Index Bottom Banner - Full Width */}
      <div className="w-full py-8">
        <BannerSingle position="blog-index-bottom" className="w-full" />
      </div>

      {/* SEO Content Section */}
      <section className="px-4 py-28 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-center text-gray-900 md:text-4xl lg:text-hero-sm">
                Expert Dental Care Insights and Tips
              </h2>
              <p>
                Welcome to the <strong>Hapliv Dental Clinic Blog</strong>, your trusted source for dental care information, treatment guides, and oral health tips. Our blog features expert insights from our experienced dental surgeons covering a wide range of topics including <strong>orthodontics</strong>, <strong>endodontics</strong>, <strong>cosmetic dentistry</strong>, and <strong>preventive dental care</strong>.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Orthodontic Treatment Guides
              </h3>
              <p>
                Learn about <strong>braces treatment</strong> and <strong>Invisalign clear aligner</strong> therapy through our comprehensive guides. Our blog posts cover treatment timelines, costs, care instructions, and success tips to help you make informed decisions about your orthodontic treatment.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Restorative Dentistry Information
              </h3>
              <p>
                Explore detailed information about <strong>root canal treatment</strong>, <strong>dental implants</strong>, and other restorative procedures. Our articles explain treatment processes, benefits, costs, and what to expect during and after treatment.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Cosmetic Dentistry Insights
              </h3>
              <p>
                Discover the latest in <strong>cosmetic dentistry</strong> including <strong>teeth whitening</strong>, <strong>dental veneers</strong>, <strong>laser dentistry</strong>, and smile makeover procedures. Our blog provides valuable information to help you achieve your dream smile.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Oral Health and Preventive Care
              </h3>
              <p>
                Stay informed about <strong>oral health</strong> best practices, preventive dental care, and common dental problems. Our blog posts offer practical tips for maintaining healthy teeth and gums, preventing dental issues, and understanding when to seek professional dental care.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

