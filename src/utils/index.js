export const sortByDate = (a,b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}

/**
 * Generate slug from text (matches marked's default behavior)
 * @param {string} text - Text to slugify
 * @returns {string} Slugified text
 */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Extract headings from markdown content
 * Generates IDs that match marked's default header ID generation
 * @param {string} markdown - Markdown content
 * @returns {Array<{id: string, text: string, level: number}>} Array of headings
 */
export function extractHeadings(markdown) {
  if (!markdown) return [];
  
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  const seenIds = new Map(); // Track duplicate IDs
  let match;
  
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    
    // Generate ID from heading text (matches marked's slugify)
    let id = slugify(text);
    
    // Handle duplicate IDs (marked appends numbers)
    if (seenIds.has(id)) {
      const count = seenIds.get(id);
      seenIds.set(id, count + 1);
      id = `${id}-${count}`;
    } else {
      seenIds.set(id, 1);
    }
    
    headings.push({ id, text, level });
  }
  
  return headings;
}