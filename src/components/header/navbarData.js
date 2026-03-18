export const navLinks = [ {
    name: 'Home',
    path: '/',
    title: 'Hapliv Dental Clinic'
},{
    name: 'About Us',
    path: '/about-us',
    title: 'About Us - Hapliv Dental Clinic'
},{
      name: 'Invisalign',
      path: '/invisalign',
      title: 'Invisalign treatment at Hapliv Dental Clinic'
  },
  {
    name: 'Treatments',
    path: '/treatments',
    title: 'Treatments - Hapliv Dental Clinic',
    children: [{
        name: 'Braces',
        path: '/treatments/braces',
        title: 'Braces | Orthodontic treatment| Hapliv Dental Clinic',
    },{
        name: 'Invisalign',
        path: '/invisalign',
        title: 'Invisalign | Orthodontic treatment | Hapliv Dental Clinic',
        skip_static_path: true,
    },{
        name: 'Painless RCT',
        path: '/treatments/painless-root-canal-treatment',
        title: 'Painless Root Canal Treatment (RCT) | Dental Treatment | Hapliv Dental Clinic ',
    },{
        name: 'Implants',
        path: '/treatments/implant',
        title: 'Implants | Dental Treatment | Hapliv Dental Clinic'
    },{
        name: 'Crowns and Bridges',
        path: '/treatments/crowns-and-bridges',
        title: 'Crowns and Bridges | Dental Treatment | Hapliv Dental Clinic '
    },{
        name: 'Dental filling',
        path: '/treatments/dental-filling',
        title: 'Dental Filling/Restoration | Dental Sensitivity | Hapliv Dental Clinic'
    },{
        name: 'Teeth Whitening',
        path: '/treatments/teeth-whitening',
        title: 'Teeth Whitening | Preventive Dentistry | Hapliv Dental Clinic '
    },{
        name: 'Scaling & Polishing',
        path: '/treatments/scaling-and-polishing',
        title: 'Scaling & Polishing | Preventive Dentistry | Hapliv Dental Clinic '
    },{
        name: 'Wisdom Tooth Extraction',
        path: '/treatments/wisdom-tooth-extraction',
        title: 'Wisdom Tooth Extraction | Hapliv Dental Clinic '
    },{
        name: 'LASER Dental Treatments',
        path: '/treatments/laser-dental-treatments',
        title: 'LASER Dental Treatments | Hapliv Dental Clinic '
    }]
},{
      name: 'Gallery',
      path: '/gallery',
      title: 'Photo Gallery | Hapliv Dental Clinic',
      children: [{
          name: 'Our Patients',
          path: '/gallery/our-patients',
          title: 'Our patients | Hapliv Dental Clinic',
      }, {
          name: 'Clinic Tour',
          path: '/gallery/dental-clinic-tour',
          title: 'Dental Clinic Tour | Hapliv Dental Clinic '
      },{
        name: 'Treatment Results',
        path: '/gallery/treatment-results',
        title: 'Treatment Results | Hapliv Dental Clinic '
    },{
        name: 'Oral Health Awareness Camp',
        path: '/gallery/oral-health-awareness-camp',
        title: 'Oral Health Awareness Camp | Hapliv Dental Clinic '
    }]
  },{
    name: 'Locations',
    path: '/locations',
    title: 'Our Locations | Hapliv Dental Clinic',
    children: [{
        name: 'Sector 65, Gurgaon',
        path: '/locations/dentist-in-sector-65-gurgaon',
        title: 'Best Dentist in Sector 65, Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Nearby Dentist',
        path: '/locations/nearby-dentist-gurgaon',
        title: 'Nearby Dentist in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Emergency Dentist',
        path: '/emergency-dentist-gurgaon',
        title: 'Emergency Dentist in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Pediatric Dentist',
        path: '/pediatric-dentist-gurgaon',
        title: 'Pediatric Dentist in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Best Orthodontist',
        path: '/best-orthodontist-gurgaon',
        title: 'Best Orthodontist in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'LASER Dentistry',
        path: '/laser-dentistry-gurgaon',
        title: 'LASER Dentistry in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Root Canal Treatment',
        path: '/root-canal-treatment-gurgaon',
        title: 'Root Canal Treatment in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Dental Implants',
        path: '/dental-implants-gurgaon',
        title: 'Dental Implants in Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Braces Sector 65',
        path: '/braces-treatment-sector-65-gurgaon',
        title: 'Braces Treatment in Sector 65, Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Invisalign Sector 65',
        path: '/invisalign-sector-65-gurgaon',
        title: 'Invisalign in Sector 65, Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'Dentist in South City',
        path: '/dentist-in-south-city-gurgaon',
        title: 'Dentist in South City, Gurgaon | Hapliv Dental Clinic',
    },{
        name: 'West Delhi',
        path: '/dentist-in-west-delhi',
        title: 'Dentist in West Delhi | Hapliv Dental Clinic',
    }]
  },{
    name: 'Blogs',
    path: '/blogs',
    title: 'Dental Care Blogs | Hapliv Dental Clinic'
  },{
    name: 'FAQs',
    path: '/faqs',
    title: 'Frequently Asked Questions (FAQs) | Hapliv Dental Clinic',
  },{
    name: 'Technology',
    path: '/technology',
    title: 'Advanced Dental Technology | Hapliv Dental Clinic',
  },{
    name: 'Appointment',
    path: '/appointment',
    type: 'cta',
    title: 'Appointment | Hapliv Dental Clinic'
}]