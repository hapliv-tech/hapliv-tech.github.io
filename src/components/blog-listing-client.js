"use client";
import { useState, useEffect } from 'react';
import BlogPost from 'components/blog-post';

const POSTS_PER_PAGE = 12;

export default function BlogListingClient({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize page from URL on mount and handle browser navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updatePageFromURL = () => {
        const params = new URLSearchParams(window.location.search);
        const page = Math.max(1, Number(params.get('page')) || 1);
        setCurrentPage(page);
      };

      // Initial load
      updatePageFromURL();

      // Handle browser back/forward buttons
      window.addEventListener('popstate', updatePageFromURL);
      return () => window.removeEventListener('popstate', updatePageFromURL);
    }
  }, []);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const validPage = Math.min(currentPage, totalPages);
  const start = (validPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Update URL without triggering navigation (for static export)
      if (typeof window !== 'undefined') {
        const url = page === 1 ? '/blogs' : `/blogs?page=${page}`;
        window.history.pushState({ page }, '', url);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="px-4 py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <button
              onClick={() => handlePageChange(validPage - 1)}
              disabled={validPage === 1}
              className={`px-4 py-2 rounded-lg border transition ${
                validPage === 1
                  ? 'text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'text-primary border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              const isActive = pageNumber === validPage;
              return (
                <button
                  key={`page-${pageNumber}`}
                  onClick={() => handlePageChange(pageNumber)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg border transition ${
                    isActive
                      ? 'bg-primary text-white border-primary'
                      : 'text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(validPage + 1)}
              disabled={validPage === totalPages}
              className={`px-4 py-2 rounded-lg border transition ${
                validPage === totalPages
                  ? 'text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'text-primary border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

