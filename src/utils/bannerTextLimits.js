/**
 * Get character limits for banner text based on position
 * @param {string} position - Banner position
 * @returns {object} - { titleLimit, descriptionLimit }
 */
export function getBannerTextLimits(position) {
  const limits = {
    // Global banners - very compact
    'global-header': {
      titleLimit: 60,
      descriptionLimit: 0, // No description for global header
    },
    'global-strip': {
      titleLimit: 80,
      descriptionLimit: 0, // No description for strip
    },
    
    // Hero banners - large, can have longer text
    'homepage-hero': {
      titleLimit: 100,
      descriptionLimit: 150,
    },
    
    // Sidebar banners - narrow, need shorter text
    'homepage-sidebar': {
      titleLimit: 50,
      descriptionLimit: 80,
    },
    'treatment-sidebar': {
      titleLimit: 50,
      descriptionLimit: 80,
    },
    'invisalign-sidebar': {
      titleLimit: 50,
      descriptionLimit: 80,
    },
    'blog-index-sidebar': {
      titleLimit: 50,
      descriptionLimit: 80,
    },
    'blog-post-sidebar': {
      titleLimit: 50,
      descriptionLimit: 80,
    },
    'global-sidebar': {
      titleLimit: 50,
      descriptionLimit: 80,
    },
    
    // Wide banners - can have medium text
    'homepage-bottom': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    'treatment-top': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    'invisalign-top': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    'blog-index-top': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    'blog-index-bottom': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    'blog-post-top': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    'blog-post-bottom': {
      titleLimit: 80,
      descriptionLimit: 120,
    },
    
    // Footer banners - small, very short text
    'footer': {
      titleLimit: 40,
      descriptionLimit: 60,
    },
  };

  // Default limits if position not found
  return limits[position] || {
    titleLimit: 80,
    descriptionLimit: 120,
  };
}

/**
 * Truncate text to a maximum length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

