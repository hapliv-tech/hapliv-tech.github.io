/**
 * Theme Utility Functions
 * 
 * Helper functions for working with theme values in components
 */

import theme from './index';

/**
 * Get a color value from the theme
 * @param {string} path - Dot-separated path to color (e.g., 'primary.DEFAULT', 'accent.light')
 * @returns {string} Color value
 */
export function getColor(path) {
  const keys = path.split('.');
  let value = theme.colors;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      console.warn(`Theme color path "${path}" not found`);
      return theme.colors.primary.DEFAULT; // Fallback
    }
  }
  
  return typeof value === 'string' ? value : theme.colors.primary.DEFAULT;
}

/**
 * Get a spacing value from the theme
 * @param {string} size - Spacing size (xs, sm, md, lg, xl, 2xl, 3xl)
 * @returns {string} Spacing value
 */
export function getSpacing(size) {
  return theme.spacing[size] || theme.spacing.md;
}

/**
 * Get a border radius value from the theme
 * @param {string} size - Border radius size
 * @returns {string} Border radius value
 */
export function getBorderRadius(size) {
  return theme.borderRadius[size] || theme.borderRadius.md;
}

/**
 * Get a shadow value from the theme
 * @param {string} size - Shadow size
 * @returns {string} Shadow value
 */
export function getShadow(size) {
  return theme.shadows[size] || theme.shadows.md;
}

/**
 * Get a gradient value from the theme
 * @param {string} name - Gradient name
 * @returns {string} Gradient value
 */
export function getGradient(name) {
  return theme.gradients[name] || theme.gradients.primary;
}

/**
 * Generate Tailwind class names for common patterns
 */
export const themeClasses = {
  // Button variants
  button: {
    primary: 'bg-primary text-white hover:bg-primary-dark transition-colors',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors',
    accent: 'bg-accent text-white hover:bg-accent-dark transition-colors',
    success: 'bg-success text-white hover:bg-success-hover transition-colors',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors',
  },
  
  // Card variants
  card: {
    default: 'bg-white rounded-lg shadow-md p-6',
    elevated: 'bg-white rounded-lg shadow-lg p-6',
    outlined: 'bg-white border border-gray-200 rounded-lg p-6',
  },
  
  // Text variants
  text: {
    heading: 'text-gray-900 font-bold',
    subheading: 'text-gray-700 font-semibold',
    body: 'text-gray-600',
    muted: 'text-gray-500',
    link: 'text-primary hover:text-primary-dark underline',
  },
  
  // Section spacing
  section: {
    default: 'px-4 py-16',
    tight: 'px-4 py-8',
    loose: 'px-4 py-24',
  },
};

/**
 * Combine multiple class strings
 * @param {...string} classes - Class strings to combine
 * @returns {string} Combined class string
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default {
  getColor,
  getSpacing,
  getBorderRadius,
  getShadow,
  getGradient,
  themeClasses,
  cn,
};

