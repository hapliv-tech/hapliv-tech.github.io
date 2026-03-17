/**
 * Centralized Theme Configuration
 * 
 * This file contains all theme constants used across the website.
 * Use these constants instead of hardcoded values for consistency.
 * 
 * Usage:
 *   import theme from 'theme';
 *   className={`text-[${theme.colors.primary}]`}
 *   // Or use Tailwind classes: text-primary, bg-primary, etc.
 */

const theme = {
  colors: {
    // Primary Brand Colors
    primary: {
      DEFAULT: '#5A09A4',      // Main brand purple
      dark: '#4B1282',         // Darker purple variant
      light: '#7B3FA8',        // Lighter purple variant
      lighter: '#9C6FBC',      // Even lighter purple
      lightest: '#E8E7EC',     // Very light purple (backgrounds)
    },
    
    // Accent Colors
    accent: {
      DEFAULT: '#ff9800',      // Main orange accent
      dark: '#e68900',         // Darker orange
      light: '#ffb84d',        // Lighter orange
      lighter: '#ffd699',      // Very light orange
    },
    
    // Semantic Colors
    success: {
      DEFAULT: '#0fa457',      // Green for success/positive actions
      hover: '#28e06c',        // Hover state
      light: '#4ade80',        // Light green
    },
    
    // Neutral Colors
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    
    // Text Colors
    text: {
      primary: '#111827',      // Main text color (gray-900)
      secondary: '#4b5563',   // Secondary text (gray-600)
      tertiary: '#6b7280',     // Tertiary text (gray-500)
      inverse: '#ffffff',      // White text for dark backgrounds
      muted: '#9ca3af',        // Muted text (gray-400)
    },
    
    // Background Colors
    background: {
      DEFAULT: '#ffffff',      // White background
      secondary: '#f9fafb',    // Light gray background (gray-50)
      tertiary: '#f3f4f6',     // Medium gray background (gray-100)
      dark: '#111827',         // Dark background (gray-900)
      purple: '#5A09A4',       // Purple background
      purpleDark: '#4B1282',   // Dark purple background
    },
    
    // Border Colors
    border: {
      DEFAULT: '#e5e7eb',       // Default border (gray-200)
      light: '#f3f4f6',        // Light border (gray-100)
      dark: '#d1d5db',          // Dark border (gray-300)
      primary: '#5A09A4',      // Primary colored border
      accent: '#ff9800',       // Accent colored border
    },
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['Roboto', 'Poppins', 'Raleway', 'sans-serif'],
      heading: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  // Spacing (matches Tailwind spacing scale)
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #000000 0%, #5A09A4 100%)',
    primaryHorizontal: 'linear-gradient(90deg, #5A09A4 0%, #7B3FA8 100%)',
    accent: 'linear-gradient(135deg, #ff9800 0%, #ffb84d 100%)',
    hero: 'linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)',
    purple: 'linear-gradient(to right, #5A09A4, #7B3FA8, #5A09A4)',
  },
  
  // Breakpoints (matches Tailwind breakpoints)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Transitions
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  // Z-index scale
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

export default theme;

// Named exports for easier imports
export const colors = theme.colors;
export const typography = theme.typography;
export const spacing = theme.spacing;
export const borderRadius = theme.borderRadius;
export const shadows = theme.shadows;
export const gradients = theme.gradients;
export const breakpoints = theme.breakpoints;
