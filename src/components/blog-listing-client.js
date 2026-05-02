"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import BlogPost from 'components/blog-post';

const POSTS_PER_PAGE = 12;

export default function BlogListingClient({ posts }) {
  const searchParams = useSearchParams();
  const currentPageFromUrl = Math.max(1, Number(searchParams.get('page')) || 1);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const validPage = Math.min(currentPageFromUrl, totalPages);
  const start = (validPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  const pageHref = (page) => (page <= 1 ? '/blogs' : `/blogs?page=${page}`);

  return (
    <section id="blog-list" className="px-4 py-16 bg-white md:px-8 lg:py-20 scroll-mt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary-lightest px-4 py-2 text-sm font-semibold text-primary">
            Latest articles
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Dental guides and clinic insights
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">
            Practical reading for patients comparing treatment options or preparing for a dental visit.
          </p>
        </div>
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post, index) => (
              <BlogPost post={post} key={`blog-${post.slug}-${index}`} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-600">No blog posts available at the moment.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
            <Link
              href={pageHref(validPage - 1)}
              aria-disabled={validPage === 1}
              tabIndex={validPage === 1 ? -1 : 0}
              className={`px-4 py-2 rounded-lg border transition ${
                validPage === 1
                  ? 'pointer-events-none text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'text-primary border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Previous
            </Link>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              const isActive = pageNumber === validPage;
              return (
                <Link
                  key={`page-${pageNumber}`}
                  href={pageHref(pageNumber)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg border transition ${
                    isActive
                      ? 'bg-primary text-white border-primary'
                      : 'text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            })}

            <Link
              href={pageHref(validPage + 1)}
              aria-disabled={validPage === totalPages}
              tabIndex={validPage === totalPages ? -1 : 0}
              className={`px-4 py-2 rounded-lg border transition ${
                validPage === totalPages
                  ? 'pointer-events-none text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'text-primary border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
