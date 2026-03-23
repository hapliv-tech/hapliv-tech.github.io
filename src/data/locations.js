/**
 * Centralized location data for SEO and content organization
 * This ensures consistent location mentions across the site
 */

export const locations = {
  gurgaon: {
    name: 'Gurgaon',
    displayName: 'Gurgaon',
    alternateName: 'Gurugram',
    area: 'Sector 65',
    fullName: 'Sector 65, Gurgaon',
    address: {
      street: 'Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65',
      city: 'Gurugram',
      state: 'Haryana',
      postalCode: '122018',
      country: 'IN',
    },
    coordinates: {
      lat: 28.398091,
      lng: 77.0634188,
    },
    landmark: 'Near Trump Towers (Delhi NCR)',
    phone: '+91 98104 71255',
    openingHours: {
      weekdays: 'Mon-Sat, 10:00 AM - 8:00 PM',
      sunday: 'Sun, 10:00 AM - 1:00 PM',
      structured: {
        weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
      sunday: {
        day: 'Sunday',
        opens: '10:00',
        closes: '13:00',
      },
    },
    nearbyAreas: [
      'South City I & II',
      'M3M Golf Estate',
      'M3M Latitude',
      'Emaar Emerald Floors',
      'Emaar Palm Gardens',
      'Emaar Marbella Villas',
      'M3M Merlin',
      'Nirvana Country',
      'Ireo Victory Valley',
      'Dhoot Time Residency',
      'Conscient Heritage One',
      'Ireo Uptown',
      'Sector 60-76',
      'Trump Towers',
    ],
    pages: {
      main: '/locations/dentist-in-sector-65-gurgaon',
      nearby: '/locations/nearby-dentist-gurgaon',
    },
    seo: {
      keywords: [
        'Dentist in Sector 65 Gurgaon',
        'Best dentist Sector 65',
        'Nearby dentist Sector 65',
        'Dental clinic Sector 65 Gurgaon',
        'Dental surgeon Sector 65',
        'Dentist near Trump Towers',
        'Best dental clinic Sector 65',
        'Orthodontist Sector 65',
        'Invisalign Sector 65',
        'Root canal Sector 65',
        'Dental implants Sector 65',
        'Teeth whitening Sector 65',
        'Cosmetic dentist Sector 65',
      ],
    },
  },
  westDelhi: {
    name: 'West Delhi',
    displayName: 'West Delhi',
    area: 'Mohan Garden',
    fullName: 'Mohan Garden, West Delhi',
    address: {
      street: 'Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden',
      city: 'New Delhi',
      state: 'Delhi',
      postalCode: '110059',
      country: 'IN',
    },
    coordinates: {
      lat: 28.6225322,
      lng: 77.036289,
    },
    landmark: 'Mohan Garden, West Delhi',
    phone: '+91 98104 71255',
    openingHours: {
      weekdays: 'Mon-Sat, 5:00 PM - 8:00 PM',
      sunday: 'Closed',
      structured: {
        weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '17:00',
        closes: '20:00',
      },
    },
    nearbyAreas: ['Mohan Garden', 'West Delhi', 'Uttam Nagar', 'Dwarka'],
    pages: {
      main: '/dentist-in-west-delhi',
      nearby: '/locations/nearby-dentist-west-delhi',
    },
    seo: {
      keywords: [
        'Dentist in West Delhi',
        'Best dentist West Delhi',
        'Dental clinic West Delhi',
        'Dental surgeon West Delhi',
        'Orthodontist West Delhi',
        'Invisalign West Delhi',
        'Root canal West Delhi',
        'Dental implants West Delhi',
      ],
    },
  },
};

/**
 * Get location-specific SEO text
 */
export function getLocationSEO(locationKey, treatmentName = '') {
  const location = locations[locationKey];
  if (!location) return { primary: 'Gurgaon & West Delhi', secondary: 'Sector 65, Gurgaon' };

  if (locationKey === 'gurgaon') {
    return {
      primary: `${location.displayName} & West Delhi`,
      secondary: location.fullName,
      area: location.area,
      fullName: location.fullName,
    };
  }

  return {
    primary: `${locations.gurgaon.displayName} & ${location.displayName}`,
    secondary: location.fullName,
    area: location.area,
    fullName: location.fullName,
  };
}

/**
 * Get all locations for iteration
 */
export function getAllLocations() {
  return Object.values(locations);
}

/**
 * Get location by key
 */
export function getLocation(key) {
  return locations[key];
}

/**
 * Generate location-specific keywords for a treatment
 */
export function getTreatmentLocationKeywords(treatmentName, locationKey = 'gurgaon') {
  const location = locations[locationKey];
  const baseKeywords = [
    `${treatmentName} ${location.displayName}`,
    `Best ${treatmentName} ${location.displayName}`,
    `${treatmentName} ${location.area}`,
    `${treatmentName} near me`,
  ];

  if (locationKey === 'gurgaon') {
    baseKeywords.push(
      `${treatmentName} Sector 65`,
      `${treatmentName} Gurugram`,
      `${treatmentName} near Trump Towers`
    );
  }

  return baseKeywords;
}

