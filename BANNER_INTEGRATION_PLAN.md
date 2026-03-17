# Banner Integration Plan for Hapliv Dental Website

## Overview
This document outlines the plan for integrating dynamic banners from the admin API into the Hapliv Dental Clinic website.

## Current State

### Existing Banner Implementation
- **HeroSection.js**: Currently uses hardcoded banner slides
- **Location**: `src/components/HeroSection.js`
- **Structure**: Array of slide objects with title, subtitle, description, and images
- **Features**: Auto-rotation, navigation arrows, mobile/desktop images

### API Endpoint
- **Base URL**: `https://api.haplivdentalclinic.com` (or configured via env)
- **Public Endpoint**: `GET /api/banners?position=homepage-hero` (needs to be implemented)
- **Response Format**: 
```json
{
  "status": "200",
  "message": "Success",
  "data": [
    {
      "id": 1,
      "title": "Summer Special",
      "imageUrl": "https://ik.imagekit.io/.../banner.jpg",
      "link": "/treatments/teeth-whitening",
      "position": "homepage-hero",
      "displayOrder": 1,
      "isActive": true,
      "description": "Banner description",
      "startDate": "2024-01-01T00:00:00",
      "endDate": "2024-12-31T23:59:59"
    }
  ]
}
```

**Note**: The public endpoint `/api/banners` needs to be created in the backend. Currently only admin endpoints exist.

## Integration Strategy

### 1. Banner Component Architecture

#### 1.1 Create Banner Hook
**Location**: `src/hooks/useBanners.js`

**Purpose**: Fetch banners from API with caching and error handling

**Features**:
- Fetch banners by position
- Client-side caching (sessionStorage/localStorage)
- Retry logic with exponential backoff
- Error handling with fallback
- Loading states

**API Integration**:
```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.haplivdentalclinic.com';

// Fetch active banners by position
GET ${API_BASE_URL}/api/banners?position=homepage-hero
```

#### 1.2 Banner Display Components

**A. BannerCarousel Component**
- **Location**: `src/components/banner/BannerCarousel.js`
- **Purpose**: Display multiple banners in a carousel/slider
- **Features**:
  - Auto-rotation
  - Navigation arrows
  - Dots/pagination
  - Mobile/desktop image support
  - Click-through links
  - Smooth transitions

**B. BannerSingle Component**
- **Location**: `src/components/banner/BannerSingle.js`
- **Purpose**: Display a single banner (for sidebar, footer, etc.)
- **Features**:
  - Responsive image
  - Click-through link
  - Optional overlay text

**C. BannerGrid Component**
- **Location**: `src/components/banner/BannerGrid.js`
- **Purpose**: Display multiple banners in a grid layout
- **Features**:
  - Responsive grid
  - Multiple banner positions

### 2. Integration Points

#### 2.1 Homepage Hero Section
**Current**: Hardcoded slides in `HeroSection.js`
**New**: Fetch from API with fallback to hardcoded slides

**Implementation**:
- Modify `HeroSection.js` to use `useBanners` hook
- Fetch banners with position `homepage-hero`
- If API fails or no banners, use existing hardcoded slides as fallback
- Maintain existing animation and interaction behavior

#### 2.2 Homepage Sidebar
**Location**: `src/components/home/HomePageContent.js`
**Position**: `homepage-sidebar`
**Component**: `BannerSingle` or `BannerGrid`

#### 2.3 Treatment Pages
**Location**: `src/app/treatments/[treatments]/page.js`
**Positions**: 
- `treatment-top` - Top of treatment page
- `treatment-sidebar` - Sidebar on treatment pages

#### 2.4 Footer
**Location**: `src/components/Footer.js`
**Position**: `footer`
**Component**: `BannerSingle` or `BannerGrid`

#### 2.5 Global Header
**Location**: `src/components/header/navbar-app.js`
**Position**: `global-header`
**Component**: `BannerSingle`

#### 2.6 Global Sidebar
**Location**: `src/components/sidebar/sidebar.js` (if exists)
**Position**: `global-sidebar`
**Component**: `BannerSingle`

### 3. Component Structure

```
src/
  components/
    banner/
      BannerCarousel.js       # Carousel for multiple banners
      BannerSingle.js          # Single banner display
      BannerGrid.js           # Grid layout for banners
      BannerSkeleton.js       # Loading skeleton
  hooks/
    useBanners.js             # Hook for fetching banners
  utils/
    bannerUtils.js            # Utility functions for banners
```

### 4. Data Flow

```
1. Component mounts
2. useBanners hook called with position
3. Check cache (sessionStorage/localStorage)
4. If cached and fresh, use cached data
5. Else, fetch from API
6. Update cache
7. Return banners array
8. Component renders banners
9. If error, show fallback or empty state
```

### 5. Caching Strategy

**Client-Side Caching**:
- Use `sessionStorage` for session-based caching
- Cache key: `banners_${position}`
- Cache duration: 5-10 minutes
- Cache invalidation on page refresh or manual refresh

**Server-Side Caching** (Optional):
- Use Next.js `revalidate` for ISR
- Revalidate every 60 seconds
- Fallback to stale data if API fails

### 6. Error Handling

**Fallback Strategy**:
1. **API Error**: Show fallback content (hardcoded banners or empty state)
2. **No Banners**: Show default content or hide banner section
3. **Network Error**: Retry with exponential backoff (3 attempts)
4. **Invalid Data**: Log error, show fallback

**User Experience**:
- Graceful degradation
- No broken UI
- Silent failures (don't show error messages to users)
- Log errors to console for debugging

### 7. Performance Considerations

**Image Optimization**:
- Use Next.js `Image` component
- Lazy loading for banners below fold
- Responsive images (srcset)
- WebP format support

**Loading Strategy**:
- Show skeleton/placeholder while loading
- Progressive enhancement
- Preload critical banners (homepage hero)

**Bundle Size**:
- Code split banner components
- Dynamic imports for non-critical banners
- Tree-shake unused banner code

### 8. SEO Considerations

**Schema Markup**:
- Add `BreadcrumbList` schema if banner links to pages
- Maintain existing schema structure

**Accessibility**:
- Alt text from banner description
- ARIA labels for carousel controls
- Keyboard navigation support
- Screen reader friendly

### 9. Implementation Steps

#### Phase 1: Core Infrastructure
1. ✅ Create `useBanners` hook
2. ✅ Create `BannerCarousel` component
3. ✅ Create `BannerSingle` component
4. ✅ Add error handling and fallbacks

#### Phase 2: Homepage Integration
5. ✅ Integrate banners into `HeroSection`
6. ✅ Add sidebar banners to homepage
7. ✅ Test with real API data

#### Phase 3: Other Pages
8. ✅ Add banners to treatment pages
9. ✅ Add banners to footer
10. ✅ Add global header/sidebar banners

#### Phase 4: Optimization
11. ✅ Implement caching
12. ✅ Add loading states
13. ✅ Optimize images
14. ✅ Performance testing

### 10. API Response Format

**Expected Response**:
```json
{
  "status": "200",
  "message": "Success",
  "data": [
    {
      "id": 1,
      "title": "Summer Special",
      "imageUrl": "https://ik.imagekit.io/.../banner.jpg",
      "link": "/treatments/teeth-whitening",
      "position": "homepage-hero",
      "displayOrder": 1,
      "isActive": true,
      "description": "Banner description"
    }
  ]
}
```

### 11. Banner Position Mapping

| Position | Component | Location | Display Type |
|----------|-----------|----------|--------------|
| `homepage-hero` | BannerCarousel | HeroSection | Carousel |
| `homepage-sidebar` | BannerSingle/Grid | HomePageContent | Single/Grid |
| `homepage-bottom` | BannerGrid | HomePageContent | Grid |
| `treatment-top` | BannerCarousel | Treatment pages | Carousel |
| `treatment-sidebar` | BannerSingle | Treatment sidebar | Single |
| `footer` | BannerGrid | Footer | Grid |
| `global-header` | BannerSingle | Header | Single |
| `global-sidebar` | BannerSingle | Sidebar | Single |

### 12. Migration Strategy

**Backward Compatibility**:
- Keep existing hardcoded banners as fallback
- Gradually replace with API banners
- A/B test if needed
- Monitor performance and errors

**Rollout Plan**:
1. Deploy banner components (hidden/disabled)
2. Test with API in staging
3. Enable for homepage-hero first
4. Monitor for 24-48 hours
5. Roll out to other positions
6. Remove hardcoded banners after validation

### 13. Testing Checklist

- [ ] Banners load from API
- [ ] Fallback works when API fails
- [ ] Caching works correctly
- [ ] Images load properly
- [ ] Links work correctly
- [ ] Mobile responsive
- [ ] Performance is acceptable
- [ ] No console errors
- [ ] SEO metadata maintained
- [ ] Accessibility standards met

### 14. Configuration

**Environment Variables**:
```bash
NEXT_PUBLIC_API_URL=https://api.haplivdentalclinic.com
```

**Feature Flags** (Optional):
- Enable/disable banner API
- Enable/disable specific positions
- Fallback mode toggle

### 15. Monitoring & Analytics

**Track**:
- Banner load times
- API success/failure rates
- Banner click-through rates
- Cache hit rates
- Error rates

**Tools**:
- Google Analytics events
- Console logging (dev only)
- Error tracking service (optional)

## Component Examples

### useBanners Hook
```javascript
"use client";
import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.haplivdentalclinic.com';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function useBanners(position) {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check cache first
    const cacheKey = `banners_${position}`;
    const cached = sessionStorage.getItem(cacheKey);
    const cacheTime = sessionStorage.getItem(`${cacheKey}_time`);
    
    if (cached && cacheTime) {
      const age = Date.now() - parseInt(cacheTime);
      if (age < CACHE_DURATION) {
        setBanners(JSON.parse(cached));
        setLoading(false);
        return;
      }
    }

    // Fetch from API
    fetch(`${API_BASE_URL}/api/banners?position=${position}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === '200' && Array.isArray(data.data)) {
          const banners = data.data.filter(b => b.isActive);
          setBanners(banners);
          // Update cache
          sessionStorage.setItem(cacheKey, JSON.stringify(banners));
          sessionStorage.setItem(`${cacheKey}_time`, Date.now().toString());
        }
      })
      .catch(err => {
        console.error('Error fetching banners:', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [position]);

  return { banners, loading, error };
}
```

### BannerCarousel Component
```javascript
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import useBanners from '@/hooks/useBanners';
import BannerSkeleton from './BannerSkeleton';

export default function BannerCarousel({ 
  position = 'homepage-hero',
  fallbackBanners = [],
  className = '' 
}) {
  const { banners, loading, error } = useBanners(position);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const displayBanners = banners.length > 0 ? banners : fallbackBanners;

  // Auto-rotate
  useEffect(() => {
    if (displayBanners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [displayBanners.length]);

  if (loading) {
    return <BannerSkeleton />;
  }

  if (displayBanners.length === 0) {
    return null; // Or show empty state
  }

  const currentBanner = displayBanners[currentIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Banner content */}
      {currentBanner.link ? (
        <Link href={currentBanner.link}>
          {/* Banner image and content */}
        </Link>
      ) : (
        {/* Banner image and content without link */}
      )}
      
      {/* Navigation */}
      {displayBanners.length > 1 && (
        <>
          {/* Arrows */}
          {/* Dots */}
        </>
      )}
    </div>
  );
}
```

## Backend Requirements

### Public API Endpoint (Needs Implementation)

The frontend requires a public endpoint to fetch banners. Currently, only admin endpoints exist. We need to create:

**Controller**: `BannerController.java` (public, no authentication)
- `GET /api/banners` - Get all active banners
- `GET /api/banners?position=homepage-hero` - Get active banners by position

**Implementation**:
```java
@RestController
@RequestMapping("/api/banners")
public class BannerController {
    private final BannerService bannerService;
    
    @GetMapping("")
    public ResponseEntity<ApiResponseDTO<List<BannerResponseDTO>>> getActiveBanners(
            @RequestParam(required = false) String position) {
        List<Banner> banners;
        if (position != null && !position.isEmpty()) {
            banners = bannerService.getActiveBannersByPosition(position);
        } else {
            banners = bannerService.getActiveBanners();
        }
        List<BannerResponseDTO> responseDTOs = banners.stream()
                .map(bannerService::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(ApiResponseDTO.success("Success", responseDTOs));
    }
}
```

**Note**: This endpoint should NOT require authentication and should only return active banners that are within their date range.

## SEO & User Awareness Enhancements

For comprehensive SEO optimization and user awareness features, see:
**[BANNER_SEO_AND_UX_ENHANCEMENTS.md](./BANNER_SEO_AND_UX_ENHANCEMENTS.md)**

Key enhancements include:
- **SEO**: Schema.org Offer markup, enhanced image SEO, Open Graph tags, internal linking
- **User Awareness**: Countdown timers, badge system, exit intent detection, analytics tracking
- **Personalization**: Location-based banners, behavior-based display, A/B testing

## Next Steps

### Phase 1: Backend (If needed)
1. ✅ Create public `BannerController` with `/api/banners` endpoint
2. ✅ Test public endpoint with Postman/curl
3. ✅ Verify CORS configuration allows website domain

### Phase 2: Frontend Core
4. ✅ Create `useBanners` hook
5. ✅ Create `BannerCarousel` component
6. ✅ Create `BannerSingle` component
7. ✅ Create `BannerSkeleton` loading component

### Phase 3: Integration
8. ✅ Integrate banners into `HeroSection` (with fallback)
9. ✅ Add sidebar banners to homepage
10. ✅ Test with real API data

### Phase 4: SEO & UX Enhancements
11. ✅ Implement Offer schema markup
12. ✅ Add countdown timers and badges
13. ✅ Integrate analytics tracking
14. ✅ Enhance image SEO (alt text, schema)

### Phase 5: Expansion
15. ✅ Add banners to treatment pages
16. ✅ Add banners to footer
17. ✅ Add global header/sidebar banners

### Phase 6: Optimization
18. ✅ Implement caching
19. ✅ Add loading states
20. ✅ Optimize images
21. ✅ Performance testing
22. ✅ Monitor and optimize
23. ✅ A/B testing for banner effectiveness

