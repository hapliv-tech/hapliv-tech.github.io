import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPost from 'components/blog-post';
import { sortByDate } from 'utils';

export const metadata = {
  title: 'Dental Care Blogs | Hapliv Dental Clinic',
  description:
    "Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog.",
  keywords:
    'Dental Care Blogs, Oral Health, Dental Tips, Cosmetic Dentistry, Orthodontics, LASER, RCT, Dental Treatments, Hapliv Dental Clinic',
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

function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data: frontmatter } = matter(raw);
      return { slug, frontmatter };
    })
    .sort(sortByDate);
  return posts;
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <div className="p-4 mt-44 center">
      <div className="flex items-center justify-center prose text-orange-900">
        <h1>Dental Care Blogs</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post, index) => (
          <BlogPost post={post} key={`post-${index}`} />
        ))}
      </div>
    </div>
  );
}

