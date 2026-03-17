/**
 * Utility functions for generating Schema.org structured data for banners
 */

/**
 * Generate Offer schema markup for a banner
 * @param {object} banner - Banner object
 * @returns {object|null} - Schema.org Offer object or null
 */
export function generateOfferSchema(banner) {
  if (!banner || !banner.title) return null;
  
  // Skip schema for advertisements (they don't need offer schema)
  if (banner.isAdvertisement && !banner.offerCode) return null;
  
  const siteUrl = 'https://haplivdentalclinic.com';
  const offerUrl = banner.link 
    ? (banner.link.startsWith('http') ? banner.link : `${siteUrl}${banner.link}`)
    : siteUrl;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    'name': banner.title,
    'description': banner.description || banner.title,
    'url': offerUrl,
    'seller': {
      '@type': 'Dentist',
      'name': 'Hapliv Dental Clinic',
      'url': siteUrl,
      'telephone': '+919810471255',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Gurgaon',
        'addressRegion': 'Haryana',
        'addressCountry': 'IN'
      }
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Gurgaon'
      },
      {
        '@type': 'City',
        'name': 'West Delhi'
      }
    ]
  };

  // Add image if available (prefer OG image for social sharing)
  if (banner.ogImageUrl || banner.imageUrl) {
    schema.image = banner.ogImageUrl || banner.imageUrl;
  }

  // Add date range if available
  if (banner.startDate) {
    schema.validFrom = banner.startDate;
  }
  if (banner.endDate) {
    schema.validThrough = banner.endDate;
  }

  // Add price/discount information
  if (banner.discountPercentage) {
    schema.priceSpecification = {
      '@type': 'UnitPriceSpecification',
      'priceCurrency': 'INR',
      'value': banner.discountPercentage,
      'unitText': 'PERCENT'
    };
  } else if (banner.discountAmount) {
    schema.price = banner.discountAmount.toString();
    schema.priceCurrency = 'INR';
  }
  
  if (banner.discountPercentage || banner.discountAmount) {
    schema.availability = 'https://schema.org/InStock';
  }

  // Add offer code if available
  if (banner.offerCode) {
    schema.identifier = banner.offerCode;
    schema.name = `${banner.title} - Use Code: ${banner.offerCode}`;
  }

  // Add keywords if available (for SEO)
  if (banner.seoKeywords) {
    schema.keywords = banner.seoKeywords;
  }

  return schema;
}

/**
 * Generate Advertisement schema markup for sponsored/ad banners
 * @param {object} banner - Banner object
 * @returns {object|null} - Schema.org AdvertiserContentArticle or null
 */
export function generateAdvertisementSchema(banner) {
  if (!banner || !banner.isAdvertisement) return null;
  
  const siteUrl = 'https://haplivdentalclinic.com';
  const adUrl = banner.link 
    ? (banner.link.startsWith('http') ? banner.link : `${siteUrl}${banner.link}`)
    : siteUrl;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'AdvertiserContentArticle',
    'headline': banner.title,
    'description': banner.description || banner.title,
    'url': adUrl,
    'image': banner.ogImageUrl || banner.imageUrl,
    'sponsor': {
      '@type': 'Organization',
      'name': banner.advertiserName || 'Advertiser',
      'url': adUrl
    },
    'isAccessibleForFree': false,
    'publisher': {
      '@type': 'Organization',
      'name': 'Hapliv Dental Clinic',
      'url': siteUrl
    }
  };
}

/**
 * Generate ImageObject schema markup for a banner
 * @param {object} banner - Banner object
 * @returns {object|null} - Schema.org ImageObject or null
 */
export function generateImageObjectSchema(banner) {
  if (!banner || !banner.imageUrl) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    'contentUrl': banner.imageUrl,
    'description': banner.description || banner.title || 'Banner image',
    'name': banner.title || 'Banner',
    'caption': banner.description,
    'license': 'https://haplivdentalclinic.com',
    'creator': {
      '@type': 'Organization',
      'name': 'Hapliv Dental Clinic'
    }
  };
}

