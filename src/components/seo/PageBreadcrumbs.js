import Link from 'next/link';

/**
 * @param {{ items: { name: string, path: string }[], compact?: boolean }} props
 */
export default function PageBreadcrumbs({ items, compact = false }) {
  if (!items?.length) return null;

  const rootClass = compact
    ? 'relative z-20 pt-20 md:pt-24 bg-transparent'
    : 'relative z-20 pt-24 md:pt-28 bg-white border-b border-gray-100';
  const navClass = compact
    ? 'container max-w-7xl mx-auto px-4 py-2'
    : 'container max-w-7xl mx-auto px-4 py-3 bg-white';
  const listClass = compact
    ? 'flex flex-wrap items-center gap-1 text-xs text-gray-600'
    : 'flex flex-wrap items-center gap-1 text-sm text-gray-700';

  return (
    <div className={rootClass}>
      <nav aria-label="Breadcrumb" className={navClass}>
        <ol className={listClass}>
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-400" aria-hidden>/</span>}
              {i === items.length - 1 ? (
                <span className="font-medium text-gray-900">{item.name}</span>
              ) : (
                <Link href={item.path} className="text-gray-700 transition-colors hover:text-primary">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
