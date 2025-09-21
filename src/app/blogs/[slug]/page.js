import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/legacy/image';
import { marked } from 'marked';

// Silence headerId warnings by disabling them
marked.setOptions({ headerIds: false, mangle: false });

const postsDir = path.join(process.cwd(), 'src', 'posts');

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => ({ slug: filename.replace('.md', '') }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf-8');
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

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(raw);
  const html = marked.parse(content || '');

  return (
    <>
      <section className="container m-auto mt-44 p-4 lg:p-8">
        <article className="prose prose-slate md:prose-xl lg:prose-xl">
          <h1 className="title">{frontmatter?.title}</h1>
          <div className="post-author text-md">
            <span className="author text-teal-700">{frontmatter?.author}</span> &#8226;{' '}
            <span className="published-date text-teal-700">{frontmatter?.date}</span>
          </div>
          {frontmatter?.cover_image && (
            <div className="cover-img relative h-96 w-full">
              <Image
                src={frontmatter.cover_image}
                alt={frontmatter?.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <div className="post-body">
            <div
              className="items-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </article>
      </section>
    </>
  );
}

