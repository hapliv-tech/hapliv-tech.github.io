# Banner Positions Implementation Status

## Overview
This document tracks the implementation status of banner positions across the website. Banners can serve dual purposes:
1. **Promotional Banners** - For clinic offers, treatments, announcements
2. **Advertisement Placeholders** - For third-party ads or sponsored content

## Implementation Status

### ✅ Implemented Positions

#### 1. `homepage-hero` ✅
- **Location**: `src/components/HeroSection.js`
- **Component**: `BannerCarousel`
- **Aspect Ratio**: 16:9 (1920x1080) - Full screen carousel
- **Purpose**: Main hero banner carousel on homepage
- **Can be used for**: Promotions, offers, main announcements

#### 2. `homepage-sidebar` ✅
- **Location**: `src/components/home/HomePageContent.js`
- **Component**: `BannerSingle`
- **Aspect Ratio**: 24:5 (1200x250) - Wide banner
- **Position**: After AboutSection, before BestDentalClinicSection
- **Purpose**: Sidebar promotional banner
- **Can be used for**: Offers, ads, promotions

#### 3. `homepage-bottom` ✅
- **Location**: `src/components/home/HomePageContent.js`
- **Component**: `BannerSingle`
- **Aspect Ratio**: 4:1 (1200x300) - Wide banner
- **Position**: Before ContactSection
- **Purpose**: Bottom promotional banner
- **Can be used for**: Offers, ads, call-to-action

#### 4. `treatment-top` ✅
- **Location**: `src/app/treatments/[treatments]/page.js`
- **Component**: `BannerSingle`
- **Aspect Ratio**: 4:1 (1200x300) - Wide banner
- **Position**: After TreatmentHero, before TreatmentOverview
- **Purpose**: Top banner on treatment pages
- **Can be used for**: Treatment-specific offers, related ads

#### 5. `treatment-sidebar` ✅
- **Location**: `src/app/treatments/[treatments]/page.js`
- **Component**: `BannerSingle`
- **Aspect Ratio**: 24:5 (1200x250) - Wide banner
- **Position**: After FAQ section, before RelatedTreatments
- **Purpose**: Sidebar banner on treatment pages
- **Can be used for**: Related treatments, ads, offers

#### 6. `footer` ✅
- **Location**: `src/components/Footer.js`
- **Component**: `BannerGrid` (supports multiple banners)
- **Aspect Ratio**: 6:1 (1200x200) - Very wide banner
- **Position**: In footer, before SEO text
- **Purpose**: Footer promotional banners
- **Can be used for**: Multiple offers, ads grid

#### 7. `global-header` ✅
- **Location**: `src/app/layout.js`
- **Component**: `BannerSingle`
- **Aspect Ratio**: 8:1 (1200x150) - Very wide banner
- **Position**: Below navbar, appears on all pages
- **Purpose**: Global header banner (site-wide)
- **Can be used for**: Site-wide announcements, ads, promotions

### ❌ Not Yet Implemented

#### 8. `global-sidebar` ❌
- **Status**: Not implemented
- **Suggested Location**: Could be added to layout or specific pages
- **Aspect Ratio**: 24:5 (1200x250) - Wide banner
- **Purpose**: Global sidebar banner (site-wide)
- **Use Case**: Sidebar ads, promotions visible on all pages

## Banner Usage Types

### 1. Promotional Banners
- Clinic offers and discounts
- Treatment promotions
- Seasonal campaigns
- New service announcements
- Limited-time offers

### 2. Advertisement Placeholders
- Third-party advertisements
- Sponsored content
- Partner promotions
- Affiliate marketing
- External service ads

**Note**: The same banner system can be used for both. Simply set the `link` field to external URLs for ads, or internal URLs for promotions.

## Position Summary Table

| Position | Status | Location | Component | Aspect Ratio | Use Case |
|----------|--------|----------|-----------|--------------|----------|
| `homepage-hero` | ✅ | HeroSection | BannerCarousel | 16:9 | Main hero carousel |
| `homepage-sidebar` | ✅ | HomePageContent | BannerSingle | 24:5 | Homepage sidebar |
| `homepage-bottom` | ✅ | HomePageContent | BannerSingle | 4:1 | Homepage bottom |
| `treatment-top` | ✅ | TreatmentDetailPage | BannerSingle | 4:1 | Treatment top |
| `treatment-sidebar` | ✅ | TreatmentDetailPage | BannerSingle | 24:5 | Treatment sidebar |
| `footer` | ✅ | Footer | BannerGrid | 6:1 | Footer grid |
| `global-header` | ✅ | Layout | BannerSingle | 8:1 | Site-wide header |
| `global-sidebar` | ❌ | - | - | 24:5 | Site-wide sidebar |

## Advertisement Integration

### How to Use Banners as Ad Placeholders

1. **Create Banner in Admin Panel**:
   - Set `position` to desired location (e.g., `homepage-sidebar`)
   - Upload ad image to `imageUrl`
   - Set `link` to advertiser's URL (external)
   - Add `description` with "Advertisement" or "Sponsored" label
   - Set `isActive` to true

2. **Ad-Specific Fields** (Future Enhancement):
   - `advertiserName` - Name of advertiser
   - `adType` - "promotion" or "advertisement"
   - `sponsored` - Boolean flag for sponsored content
   - `externalLink` - External URL for ads

3. **Display Considerations**:
   - Banners automatically handle external links
   - Can add "Ad" or "Sponsored" badge (future enhancement)
   - Analytics track clicks to external URLs
   - Schema markup can differentiate ads from promotions

## Recommendations

### For Advertisements
1. **Use specific positions** for ads:
   - `homepage-sidebar` - Sidebar ads
   - `homepage-bottom` - Bottom banner ads
   - `footer` - Footer ad grid
   - `global-header` - Site-wide header ads

2. **Best Practices**:
   - Clearly label ads in description
   - Use appropriate aspect ratios
   - Set proper start/end dates
   - Track performance via analytics

3. **Future Enhancements**:
   - Add "Ad" or "Sponsored" badge
   - Separate ad management interface
   - Ad performance analytics
   - Ad rotation/scheduling

## Next Steps

1. ✅ All major positions implemented
2. ⏳ Consider adding `global-sidebar` if needed
3. ⏳ Add offer fields (coupon code, discount, etc.)
4. ⏳ Add ad-specific fields if needed
5. ⏳ Create ad management interface (optional)

## Testing Checklist

- [x] Homepage hero banner displays
- [x] Homepage sidebar banner displays
- [x] Homepage bottom banner displays
- [x] Treatment top banner displays
- [x] Treatment sidebar banner displays
- [x] Footer banner grid displays
- [x] Global header banner displays
- [ ] Global sidebar banner (if implemented)
- [ ] External link handling for ads
- [ ] Analytics tracking for ad clicks

