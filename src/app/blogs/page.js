import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Suspense } from 'react';
import { sortByDate } from 'utils';
import { FadeIn } from 'components/animations';
import BlogListingClient from 'components/blog-listing-client';
import { ConsultationCta, PageHero, SectionHeader } from 'components/app-pages/PageSections';

export const metadata = {
  title: 'Dental Care Blogs',
  description:
    "Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog. Expert insights on braces, Invisalign, root canal, implants, and more.",
  keywords:
    'Dental Care Blogs, Oral Health, Dental Tips, Cosmetic Dentistry, Orthodontics, LASER, RCT, Dental Treatments, Hapliv Dental Clinic, Dental Health Articles, Dental Care Advice',
  openGraph: {
    description:
      "Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog.",
    type: 'website',
    images: ['https://haplivdentalclinic.com/assets/blog/laser-teeth-whitening.webp'],
  },
  twitter: {
    card: 'summary_large_image',
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
      <PageHero
        eyebrow="Dental education"
        title="Dental Care Blogs"
        description="Stay updated with dental care tips, treatment explainers, and oral health guidance from Hapliv Dental Clinic."
        secondaryHref="#blog-list"
        secondaryLabel="Read Articles"
        highlights={[
          'Orthodontic guides for braces and Invisalign',
          'Root canal, implant and restorative explainers',
          'Cosmetic dentistry and smile care insights',
          'Preventive oral health tips for families',
        ]}
      />

      {/* Blog Posts Section - Client Component for Pagination */}
      <Suspense fallback={<div className="px-4 py-16 text-center">Loading blogs...</div>}>
        <BlogListingClient posts={posts} />
      </Suspense>

      {/* SEO Content Section */}
      <section className="px-4 py-16 bg-gray-50 md:px-8 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <SectionHeader
                eyebrow="From the clinic"
                title="Expert Dental Care Insights and Tips"
                description="Use these articles to understand treatment options before you speak with the dental team."
              />
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
      <ConsultationCta
        title="Need guidance after reading?"
        description="Book a consultation or WhatsApp the clinic to discuss which article applies to your situation."
        ctaLocation="blogs-footer"
      />
    </div>
  );
}
