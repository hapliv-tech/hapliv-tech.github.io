import Image from 'next/image';
import Link from 'next/link';

/**
 * BlogPost card with optional featured layout.
 * @param {Object} props
 * @param {{ slug: string, frontmatter: Object }} props.post
 * @param {'default' | 'featured'} props.variant
 * @param {string} props.className
 */
export default function BlogPost({ post, variant = 'default', className = '' }) {
  const frontmatter = post?.frontmatter || {};
  const {
    title,
    author,
    date,
    description,
    excerpt,
    cover_image: coverImage,
    tags = [],
  } = frontmatter;

  const imageSrc = coverImage || '/assets/hapliv_dental_operatory.webp';
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`group h-full flex flex-col overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft-lg transition hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: isFeatured ? '16 / 7' : '4 / 3' }}
      >
        <Image
          src={imageSrc}
          alt={title || 'Blog cover image'}
          fill
          sizes={isFeatured ? '(max-width: 1024px) 100vw, 1024px' : '(max-width: 768px) 100vw, 50vw'}
          className="object-cover"
          priority={isFeatured}
        />
        <div className="absolute inset-0 transition opacity-0 group-hover:opacity-10 bg-gradient-primary" />
      </div>

      <div className="flex flex-col gap-2 p-3 md:p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          {author && <span className="font-semibold text-primary">{author}</span>}
          {author && date && <span>•</span>}
          {date && <span>{date}</span>}
        </div>

        <h3
          className={`font-semibold leading-snug tracking-tight text-gray-900 ${
            isFeatured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
          }`}
        >
          <Link href={`/blogs/${post.slug}`} className="transition hover:text-primary">
            {title}
          </Link>
        </h3>

        {(excerpt || description) && (
          <p
            className={`text-gray-700 text-sm md:text-base ${
              isFeatured ? 'line-clamp-2' : 'line-clamp-2'
            }`}
          >
            {excerpt || description}
          </p>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full text-primary bg-primary-lightest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/blogs/${post.slug}`}
            className="text-sm font-semibold transition text-primary hover:text-primary-dark"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function RecommendationPost({ post }) {
  const frontmatter = post?.frontmatter || {};
  const imageSrc = frontmatter.cover_image || '/assets/hapliv_dental_operatory.webp';

  return (
    <Link href={`/blogs/${post.slug}`} className="block">
      <article className="overflow-hidden transition bg-white border border-gray-100 rounded-card shadow-soft-lg hover:-translate-y-1 hover:shadow-lg">
        <div className="grid items-center grid-cols-2 gap-4 p-4">
          <div
            className="relative w-full overflow-hidden rounded-md"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src={imageSrc}
              alt={frontmatter.title || 'Recommended blog'}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold leading-snug text-gray-900">{frontmatter.title}</h3>
        </div>
      </article>
    </Link>
  );
}
