'use client';

import { useEffect, useState } from 'react';

/**
 * Table of Contents component for blog posts
 * Displays an inline navigation with scroll tracking for active sections
 * @param {Object} props
 * @param {Array<{id: string, text: string, level: number}>} props.headings - Array of heading objects
 * @param {string} props.className - Additional CSS classes
 */
export default function BlogTableOfContents({ headings = [], className = '' }) {
  const [activeId, setActiveId] = useState('');

  // Only show TOC if there are at least 2 headings
  if (!Array.isArray(headings) || headings.length < 2) {
    return null;
  }

  useEffect(() => {
    // Track active heading based on scroll position
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const headingElements = headings.map((h) => document.getElementById(h.id)).filter(Boolean);

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className={className}>
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-card">
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-gray-900">Table of Contents</h2>
        <nav aria-label="Table of contents">
          <ul className="space-y-2">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              const indentClass = heading.level === 2 ? 'ml-0' : heading.level === 3 ? 'ml-4' : 'ml-8';

              return (
                <li key={heading.id} className={indentClass}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={`block py-1.5 px-3 text-sm transition-colors rounded-md ${
                      isActive
                        ? 'text-primary bg-primary-lightest font-medium border-l-2 border-primary'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

