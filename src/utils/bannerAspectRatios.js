/**
 * Utility to get aspect ratio configuration for different banner positions
 * @param {string} position - Banner position
 * @returns {object} - { width, height, aspectRatio, className }
 */
export function getBannerAspectRatio(position) {
  const aspectRatios = {
    // Hero banners - wide landscape
    'homepage-hero': {
      width: 1920,
      height: 1080,
      aspectRatio: '16/9',
      className: 'aspect-video',
    },
    
    // Sidebar banners - wide banner (high width, low height)
    'homepage-sidebar': {
      width: 1200,
      height: 250,
      aspectRatio: '24/5',
      className: 'aspect-[24/5]',
    },
    
    // Bottom banners - wide banner
    'homepage-bottom': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    // Treatment top banners - wide banner
    'treatment-top': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    // Treatment sidebar - wide banner
    'treatment-sidebar': {
      width: 1200,
      height: 250,
      aspectRatio: '24/5',
      className: 'aspect-[24/5]',
    },
    
    // Blog index page banners
    'blog-index-top': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    'blog-index-sidebar': {
      width: 1200,
      height: 250,
      aspectRatio: '24/5',
      className: 'aspect-[24/5]',
    },
    
    'blog-index-bottom': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    // Blog post page banners
    'blog-post-top': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    'blog-post-sidebar': {
      width: 1200,
      height: 250,
      aspectRatio: '24/5',
      className: 'aspect-[24/5]',
    },
    
    'blog-post-bottom': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    // Footer banners - wide banner
    'footer': {
      width: 1200,
      height: 200,
      aspectRatio: '6/1',
      className: 'aspect-[6/1]',
    },
    
    // Global header - wide banner (reduced height)
    'global-header': {
      width: 1200,
      height: 80,
      aspectRatio: '15/1',
      className: 'aspect-[15/1]',
    },
    
    // Global sidebar - wide banner
    'global-sidebar': {
      width: 1200,
      height: 250,
      aspectRatio: '24/5',
      className: 'aspect-[24/5]',
    },
    
    // Global full-width strip - very wide banner
    'global-strip': {
      width: 1920,
      height: 96,
      aspectRatio: '20/1',
      className: 'aspect-[20/1]',
    },
    
    // Invisalign page banners
    'invisalign-top': {
      width: 1200,
      height: 300,
      aspectRatio: '4/1',
      className: 'aspect-[4/1]',
    },
    
    'invisalign-sidebar': {
      width: 1200,
      height: 250,
      aspectRatio: '24/5',
      className: 'aspect-[24/5]',
    },
  };

  // Default to 16:9 if position not found
  return aspectRatios[position] || {
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    className: 'aspect-video',
  };
}

