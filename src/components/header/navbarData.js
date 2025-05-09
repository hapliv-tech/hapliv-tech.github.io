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
        path: '/treatments/invisalign',
        title: 'Invisalign | Orthodontic treatment | Hapliv Dental Clinic '
    },{
        name: 'Painless RCT',
        path: '/treatments/painless-root-canal-treatment',
        title: 'Painless Root Canal Treatment (RCT) | Dental Treatment | Hapliv Dental Clinic ',
        skip_static_path: true,
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
    name: 'Appointment',
    path: '/appointment',
    type: 'cta',
    title: 'Appointment | Hapliv Dental Clinic'
}/*{
          name: 'Blogs',
          path: '/blogs',
          title: 'Blogs by Hapliv Dental Clinic'
      },/*{
      name: 'Letters',
      path: '/letters',
      title: 'Newsletters | Hapliv Dental Clinic',
      children: [{
              name: 'Community Dental Awareness Program',
              path: '/letters/community-dental-awareness-program',
              title: 'Community Dental Awareness Program at Hapliv Dental Clinic',
            }]
  },{
    name: 'FAQs',
    path: '/faqs',
    title: 'Frequently Asked Questions (FAQs) about dental health | Hapliv Dental Clinic',
  },{
      name: 'Gallery',
      path: '/gallery',
      title: 'Gallery | Hapliv Dental Clinic',

  }{
    name:'Get Direction',
    target:'_blank',
    path: 'https://www.google.com/maps/dir/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0820679!2d28.4527871'
}*/]