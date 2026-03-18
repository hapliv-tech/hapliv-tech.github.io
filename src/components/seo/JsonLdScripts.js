/**
 * Renders one or more JSON-LD script tags (use in Server Components).
 * @param {{ schemas: object[] }} props
 */
export default function JsonLdScripts({ schemas }) {
  if (!schemas?.length) return null;
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
