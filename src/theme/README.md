# Theme System Documentation

This directory contains the centralized theme configuration for the Hapliv Dental Clinic website. All colors, typography, spacing, and design tokens are defined here to ensure consistency across the entire application.

## Quick Start

### Using Theme Colors in Components

**Preferred Method: Tailwind Classes**
```jsx
// ✅ GOOD - Use Tailwind classes that reference theme
<div className="bg-primary text-white">
  <h2 className="text-primary-dark">Heading</h2>
  <button className="bg-accent hover:bg-accent-dark">Click</button>
</div>
```

**Alternative: Theme Utilities**
```jsx
// ✅ GOOD - For dynamic values or when Tailwind classes aren't enough
import { getColor, themeClasses } from 'theme/utils';

const color = getColor('primary.DEFAULT');
<button className={themeClasses.button.primary}>Submit</button>
```

**❌ NEVER: Hardcoded Colors**
```jsx
// ❌ BAD - Don't use hardcoded hex codes
<div className="bg-[#5A09A4] text-[#ffffff]">
<div style={{ backgroundColor: '#5A09A4' }}>
```

## Color Palette

### Primary Colors (Purple Brand)
- `primary` / `primary-DEFAULT` → `#5A09A4` - Main brand purple
- `primary-dark` → `#4B1282` - Darker purple variant
- `primary-light` → `#7B3FA8` - Lighter purple variant
- `primary-lighter` → `#9C6FBC` - Even lighter purple
- `primary-lightest` → `#E8E7EC` - Very light purple (backgrounds)

**Tailwind Usage:**
```jsx
className="bg-primary text-primary-dark border-primary-light"
```

### Accent Colors (Orange)
- `accent` / `accent-DEFAULT` → `#ff9800` - Main orange accent
- `accent-dark` → `#e68900` - Darker orange
- `accent-light` → `#ffb84d` - Lighter orange
- `accent-lighter` → `#ffd699` - Very light orange

**Tailwind Usage:**
```jsx
className="bg-accent text-white hover:bg-accent-dark"
```

### Semantic Colors
- `success` → `#0fa457` - Green for success/positive actions
- `success-hover` → `#28e06c` - Hover state
- `success-light` → `#4ade80` - Light green

**Tailwind Usage:**
```jsx
className="bg-success hover:bg-success-hover"
```

### Text Colors
- `text-primary` → `#111827` - Main text (gray-900)
- `text-secondary` → `#4b5563` - Secondary text (gray-600)
- `text-tertiary` → `#6b7280` - Tertiary text (gray-500)
- `text-inverse` → `#ffffff` - White text for dark backgrounds
- `text-muted` → `#9ca3af` - Muted text (gray-400)

**Tailwind Usage:**
```jsx
className="text-text-primary" // Note: Use standard gray-* classes for text
// Or use: text-gray-900, text-gray-600, etc.
```

## Common Patterns

### Buttons

```jsx
import { themeClasses } from 'theme/utils';

// Primary button
<button className={themeClasses.button.primary}>
  Primary Action
</button>

// Secondary button
<button className={themeClasses.button.secondary}>
  Secondary Action
</button>

// Or use Tailwind directly
<button className="bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg">
  Click Me
</button>
```

### Cards

```jsx
import { themeClasses } from 'theme/utils';

// Default card
<div className={themeClasses.card.default}>
  Card content
</div>

// Elevated card
<div className={themeClasses.card.elevated}>
  Elevated card
</div>
```

### Sections

```jsx
// Standard section
<section className="px-4 py-16 bg-white">
  <div className="container max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>

// With theme utilities
import { themeClasses } from 'theme/utils';
<section className={`${themeClasses.section.default} bg-gray-50`}>
  {/* Content */}
</section>
```

## Gradients

Use Tailwind's `bg-gradient-*` classes:

```jsx
// Primary gradient (black to purple)
<div className="bg-gradient-primary">

// Primary horizontal gradient
<div className="bg-gradient-primary-horizontal">

// Accent gradient
<div className="bg-gradient-accent">

// Hero gradient
<div className="bg-gradient-hero">

// Purple wave gradient
<div className="bg-gradient-purple">
```

## Typography

### Font Families
```jsx
// Sans-serif (default)
<div className="font-sans">Body text</div>

// Heading font
<h1 className="font-heading">Heading</h1>
```

### Font Sizes
Use Tailwind's standard text size classes:
- `text-xs` - 12px
- `text-sm` - 14px
- `text-base` - 16px (default)
- `text-lg` - 18px
- `text-xl` - 20px
- `text-2xl` - 24px
- `text-3xl` - 30px
- `text-4xl` - 36px
- `text-5xl` - 48px

### Font Weights
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800

## Spacing

Use Tailwind's spacing scale (matches theme spacing):
- `p-2` / `px-2` / `py-2` - 8px
- `p-4` / `px-4` / `py-4` - 16px
- `p-6` / `px-6` / `py-6` - 24px
- `p-8` / `px-8` / `py-8` - 32px
- `p-12` / `px-12` / `py-12` - 48px
- `p-16` / `px-16` / `py-16` - 64px

## Migration Guide

When updating existing components to use the theme:

1. **Find hardcoded colors:**
   ```jsx
   // Before
   <div className="text-[#5A09A4] bg-[#4B1282]">
   ```

2. **Replace with theme classes:**
   ```jsx
   // After
   <div className="text-primary bg-primary-dark">
   ```

3. **Update inline styles:**
   ```jsx
   // Before
   <div style={{ color: '#5A09A4' }}>
   
   // After - Use Tailwind or theme utility
   <div className="text-primary">
   // Or
   import { getColor } from 'theme/utils';
   <div style={{ color: getColor('primary.DEFAULT') }}>
   ```

## File Structure

```
src/theme/
  ├── index.js      # Main theme configuration
  ├── utils.js      # Theme utility functions
  └── README.md     # This file
```

## Adding New Colors

If you need to add a new color:

1. **Add to `src/theme/index.js`:**
   ```javascript
   colors: {
     // ... existing colors
     newColor: {
       DEFAULT: '#hexcode',
       dark: '#darker',
       light: '#lighter',
     },
   }
   ```

2. **Update `tailwind.config.js`:**
   ```javascript
   colors: {
     // ... existing colors
     newColor: {
       DEFAULT: '#hexcode',
       dark: '#darker',
       light: '#lighter',
     },
   }
   ```

3. **Use in components:**
   ```jsx
   <div className="bg-newColor text-newColor-dark">
   ```

## Best Practices

1. ✅ **Always use theme colors** - Never hardcode hex values
2. ✅ **Prefer Tailwind classes** - Use `bg-primary` instead of `bg-[#5A09A4]`
3. ✅ **Use theme utilities** - For dynamic values or complex patterns
4. ✅ **Maintain consistency** - Use the same color variants across similar components
5. ✅ **Document exceptions** - If you must use a non-theme color, document why

## Examples

See these components for reference:
- `src/components/AboutSection.js` - Uses theme colors
- `src/app/treatments/[treatments]/page.js` - Treatment page with theme
- `src/components/experiments/TestimonialMarquee.js` - Gradient usage

## Questions?

If you're unsure which color or pattern to use:
1. Check existing similar components
2. Review this documentation
3. Consult the theme files in `src/theme/`
4. Follow the cursor rules in `.cursorrules`

