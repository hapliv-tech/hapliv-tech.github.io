import Link from 'next/link';

/**
 * @param {{ items: { name: string, path: string }[] }} props
 */
export default function PageBreadcrumbs({ items }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="container max-w-7xl mx-auto px-4 mt-24 pt-2 pb-2">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-400" aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className="font-medium text-gray-900">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
