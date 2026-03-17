import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { FaClock } from 'react-icons/fa';
import { ShareButton, CopyLinkButton } from 'components/blog-share-buttons';
import BlogTableOfContents from 'components/blog-table-of-contents';
import { extractHeadings } from 'utils';
import BannerSingle from 'components/banner/BannerSingle';

// Enable header IDs for table of contents
marked.setOptions({ 
  headerIds: true, 
  mangle: false,
  headerPrefix: '',
});

const postsDir = path.join(process.cwd(), 'src', 'posts');

// Basic HTML sanitizer to strip scripts and inline event handlers before render
function sanitizeHtml(html) {
  if (!html) return '';
  const withoutScripts = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
  return withoutScripts.replace(/\son\w+="[^"]*"/gi, '');
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content) {
  if (!content) return 1;
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(words / 200);
  return minutes;
}

// Get all posts for related posts
function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data: frontmatter } = matter(raw);
      return { slug, frontmatter };
    });
}

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => ({ slug: filename.replace('.md', '') }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter } = matter(raw);
  const imageUrl = frontmatter?.cover_image
    ? `https://haplivdentalclinic.com${frontmatter.cover_image}`
    : 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp';
  return {
    title: `${frontmatter?.title} | Blog | Hapliv Dental Clinic`,
    description: frontmatter?.description,
    keywords: frontmatter?.keywords,
    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter?.title} | Blog | Hapliv Dental Clinic`,
      description: frontmatter?.description,
      images: [imageUrl],
    },
    openGraph: {
      type: 'article',
      title: `${frontmatter?.title} | Blog | Hapliv Dental Clinic`,
      description: frontmatter?.description,
      images: [imageUrl],
    },
    alternates: { canonical: `/blogs/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(raw);
  const html = sanitizeHtml(marked.parse(content || ''));
  const readingTime = calculateReadingTime(content);
  const headings = extractHeadings(content || '');
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const relatedPosts = allPosts
    .filter((post, idx) => idx !== currentIndex)
    .slice(0, 3);

  // Define related treatments based on blog topic
  const getRelatedTreatments = (blogSlug) => {
    const relatedMap = {
      'braces-treatment-journey-gurgaon-month-by-month-guide': [
        { slug: 'braces', name: 'Braces Treatment', path: '/treatments/braces' },
        { slug: 'invisalign', name: 'Invisalign', path: '/invisalign' },
      ],
      'invisalign-treatment-gurgaon-cost-timeline-success-tips': [
        { slug: 'invisalign', name: 'Invisalign', path: '/invisalign' },
        { slug: 'braces', name: 'Braces Treatment', path: '/treatments/braces' },
      ],
      'what-is-root-canal-treatment-and-how-much-it-costs': [
        { slug: 'painless-root-canal-treatment', name: 'Root Canal Treatment', path: '/treatments/painless-root-canal-treatment' },
        { slug: 'implant', name: 'Dental Implants', path: '/treatments/implant' },
      ],
      'what-is-laser-teeth-whitening': [
        { slug: 'laser-dental-treatments', name: 'LASER Dentistry', path: '/treatments/laser-dental-treatments' },
        { slug: 'teeth-whitening', name: 'Teeth Whitening', path: '/treatments/teeth-whitening' },
      ],
    };
    return relatedMap[blogSlug] || [];
  };

  const relatedTreatments = getRelatedTreatments(slug);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter?.title,
    description: frontmatter?.description,
    author: {
      '@type': 'Person',
      name: frontmatter?.author,
    },
    datePublished: frontmatter?.date,
    image: frontmatter?.cover_image
      ? `https://haplivdentalclinic.com${frontmatter.cover_image}`
      : 'https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp',
    mainEntityOfPage: `https://haplivdentalclinic.com/blogs/${slug}`,
  };

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://haplivdentalclinic.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: 'https://haplivdentalclinic.com/blogs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: frontmatter?.title,
        item: `https://haplivdentalclinic.com/blogs/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, breadcrumbList]) }}
      />
      {/* Header Section with Cover Image */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
        {/* Cover Image Background */}
        {frontmatter?.cover_image && (
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <Image
                src={frontmatter.cover_image}
                alt={frontmatter?.title || 'Blog cover'}
                fill
                sizes="100vw"
                className="object-cover opacity-20"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/60 to-primary-dark/90" />
            </div>
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li>
                  <Link href="/blogs" className="text-white/80 hover:text-white transition">
                    Blogs
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li className="text-white font-medium line-clamp-1">{frontmatter?.title}</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl leading-tight">
              {frontmatter?.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/90 md:text-base">
              {frontmatter?.author && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xs font-semibold">{frontmatter.author.charAt(0)}</span>
                  </div>
                  <span className="font-medium">{frontmatter?.author}</span>
                </div>
              )}
              {frontmatter?.date && (
                <>
                  <span className="hidden sm:inline text-white/60">•</span>
                  <span className="text-white/80">{frontmatter?.date}</span>
                </>
              )}
              <span className="hidden sm:inline text-white/60">•</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <FaClock className="w-4 h-4" />
                {readingTime} min read
              </span>
            </div>

            {/* Tags */}
            {Array.isArray(frontmatter?.tags) && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 text-xs font-semibold rounded-full text-white bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Post Top Banner - Full Width */}
      <div className="w-full py-8">
        <BannerSingle position="blog-post-top" className="w-full" />
      </div>

      {/* Blog Content Section */}
      <section className="px-4 py-12 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-4xl">
          {/* Cover Image */}
          {frontmatter?.cover_image && (
            <div className="mb-8 overflow-hidden rounded-card shadow-soft-lg">
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src={frontmatter.cover_image}
                  alt={frontmatter?.title || 'Blog post cover image'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* Social Share Buttons */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <div className="flex items-center gap-2">
                <ShareButton
                  platform="facebook"
                  url={`https://haplivdentalclinic.com/blogs/${slug}`}
                  title={frontmatter?.title}
                />
                <ShareButton
                  platform="twitter"
                  url={`https://haplivdentalclinic.com/blogs/${slug}`}
                  title={frontmatter?.title}
                />
                <ShareButton
                  platform="whatsapp"
                  url={`https://haplivdentalclinic.com/blogs/${slug}`}
                  title={frontmatter?.title}
                />
                <ShareButton
                  platform="linkedin"
                  url={`https://haplivdentalclinic.com/blogs/${slug}`}
                  title={frontmatter?.title}
                />
                <CopyLinkButton url={`https://haplivdentalclinic.com/blogs/${slug}`} />
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          {headings.length >= 2 && (
            <div className="hidden lg:block mb-8">
              <BlogTableOfContents headings={headings} />
            </div>
          )}

          <article className="prose prose-slate max-w-none md:prose-lg lg:prose-xl prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-img:rounded-lg prose-img:shadow-md prose-img:my-8 prose-headings:scroll-mt-24">
            <div
              className="post-body [&_img]:max-w-full [&_img]:h-auto [&_img]:object-contain [&_img]:mx-auto [&_img]:block [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_h4]:scroll-mt-24"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Blog Post Sidebar Banner */}
                <div className="mb-8">
                  <BannerSingle position="blog-post-sidebar" className="w-full" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Blog Post Bottom Banner - Full Width */}
      <div className="w-full py-8">
        <BannerSingle position="blog-post-bottom" className="w-full" />
      </div>

      {/* Related Blog Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-center text-gray-900 md:text-3xl">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft-lg transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {post.frontmatter?.cover_image && (
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                      <Image
                        src={post.frontmatter.cover_image}
                        alt={post.frontmatter?.title || 'Blog post'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      {post.frontmatter?.author && (
                        <>
                          <span className="font-medium text-primary">{post.frontmatter.author}</span>
                          <span>•</span>
                        </>
                      )}
                      {post.frontmatter?.date && <span>{post.frontmatter.date}</span>}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-snug tracking-tight text-gray-900 group-hover:text-primary transition">
                      {post.frontmatter?.title}
                    </h3>
                    {(post.frontmatter?.excerpt || post.frontmatter?.description) && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {post.frontmatter?.excerpt || post.frontmatter?.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Treatments Section */}
      {relatedTreatments.length > 0 && (
        <section className="px-4 py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-card shadow-soft-lg">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">Related Treatments</h2>
              <p className="mb-6 text-base leading-relaxed text-gray-700">
                Learn more about related dental treatments at Hapliv Dental Clinic:
              </p>
              <div className="flex flex-wrap gap-4">
                {relatedTreatments.map((treatment, idx) => (
                  <a
                    key={idx}
                    href={treatment.path}
                    className="px-6 py-3 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {treatment.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 py-20 bg-primary-dark">
        <div className="container max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Ready to Transform Your Smile?</h3>
          <p className="mb-10 text-lg leading-relaxed text-gray-100 md:text-xl">
            Book your consultation with our expert dentists in Sector 65, Gurgaon or West Delhi today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/appointment"
              className="px-10 py-4 text-base font-semibold tracking-wide text-center transition-all duration-300 transform bg-white rounded-button text-primary shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Appointment
            </a>
            <a
              href="tel:+919810471255"
              className="px-10 py-4 text-base font-semibold tracking-wide text-center text-white transition-all duration-300 transform border-2 border-white rounded-button hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
            >
              Call: +91 98104 71255
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

