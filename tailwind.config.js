/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Apple-style typography scale
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }], // 72px
        'display-sm': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }], // 56px
        'hero': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }], // 48px
        'hero-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }], // 36px
      },
      // Apple-style spacing (golden ratio inspired)
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
      },
      // Softer, more elegant shadows (Apple-style)
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 12px 32px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(0, 0, 0, 0.04)',
        'premium': '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)',
        'button': '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'button-hover': '0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
      },
      // Premium border radius
      borderRadius: {
        'card': '1.25rem',    // 20px - for cards
        'button': '0.875rem',  // 14px - for buttons
        'pill': '9999px',      // Full rounded
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '200ch', // add required value here
          }
        }
      },
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#51247A',      // Hapliv plum
          dark: '#3B145F',         // Deep plum
          light: '#6B3FA0',        // Mid plum
          lighter: '#8E6AB7',      // Soft plum
          lightest: '#F4EFF8',     // Very light plum tint
        },
        
        // Accent Colors
        accent: {
          DEFAULT: '#F59E0B',      // Warm amber accent
          dark: '#D97706',         // Darker amber
          light: '#FBBF24',        // Lighter amber
          lighter: '#FDE7C2',      // Very light amber
        },
        
        // Semantic Colors
        success: {
          DEFAULT: '#0fa457',      // Green for success/positive actions
          hover: '#28e06c',        // Hover state
          light: '#4ade80',        // Light green
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
        bg: {
          DEFAULT: '#ffffff',      // White background
          secondary: '#f9fafb',    // Light gray background (gray-50)
          tertiary: '#f3f4f6',     // Medium gray background (gray-100)
          dark: '#111827',         // Dark background (gray-900)
          purple: '#51247A',       // Purple background
          purpleDark: '#3B145F',   // Dark purple background
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Poppins', 'Raleway', 'sans-serif'],
        heading: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B145F 0%, #51247A 100%)',
        'gradient-primary-horizontal': 'linear-gradient(90deg, #51247A 0%, #6B3FA0 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-hero': 'linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)',
        'gradient-purple': 'linear-gradient(to right, #51247A, #6B3FA0, #51247A)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        modal: '1040',
        popover: '1050',
        tooltip: '1060',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
