import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';
import BookAppointmentLink from 'components/seo/BookAppointmentLink';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Invisalign', href: '/invisalign' },
  { label: 'Technology', href: '/technology' },
  { label: 'Dental Blogs', href: '/blogs' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Locations', href: '/locations' },
  { label: 'Sitemap', href: '/sitemap' },
];

const serviceLinks = [
  { label: 'Braces Treatment', href: '/treatments/braces' },
  { label: 'Invisalign Clear Aligners', href: '/invisalign' },
  { label: 'Best Orthodontist', href: '/best-orthodontist-gurgaon' },
  { label: 'Dental Implants', href: '/dental-implants-gurgaon' },
  { label: 'Root Canal Treatment', href: '/root-canal-treatment-gurgaon' },
  { label: 'Laser Dentistry', href: '/laser-dentistry-gurgaon' },
  { label: 'Teeth Whitening', href: '/treatments/teeth-whitening' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/haplivdentalclinic/',
    icon: FaFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hapliv_dental_clinic',
    icon: FaInstagram,
  },
  {
    label: 'X',
    href: 'https://x.com/HaplivDental',
    icon: FaTwitter,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@HaplivDental',
    icon: FaYoutube,
  },
];

const locations = [
  {
    name: 'Gurgaon Sector 65',
    address:
      'Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122018',
    mapHref:
      'https://www.google.com/maps/dir/@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en',
    hours: 'Mon-Sat: 10 AM - 8 PM',
  },
  {
    name: 'West Delhi',
    address: 'B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi, Delhi 110059',
    mapHref:
      'https://www.google.com/maps/dir/@28.6225073,76.9564625,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d051fdd5a0e61:0xf08aa8b6f6af9564!2m2!1d77.0388639!2d28.6225322!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
    hours: 'Mon-Sat: 5 PM - 8 PM',
  },
];

const linkClass =
  'text-sm leading-6 text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="border-t border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_32rem)]">
        <div className="container mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1.35fr]">
            <section aria-labelledby="footer-brand" className="space-y-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
                  Gurgaon & West Delhi
                </p>
                <h2 id="footer-brand" className="text-2xl font-semibold tracking-tight text-white">
                  Hapliv Dental Clinic
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
                  Orthodontics, Invisalign, dental implants, root canal treatment, laser dentistry,
                  and family dental care from Sector 65 Gurgaon and West Delhi.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <BookAppointmentLink className="inline-flex min-h-11 items-center justify-center rounded-button bg-accent px-5 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Book Appointment
                </BookAppointmentLink>
                <a
                  href="tel:+919810471255"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <FaPhoneAlt className="h-3.5 w-3.5" aria-hidden="true" />
                  Call Now
                </a>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-accent/60 hover:bg-accent hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            <nav aria-labelledby="footer-quick-links">
              <h3
                id="footer-quick-links"
                className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/70"
              >
                Explore
              </h3>
              <ul className="grid gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-services">
              <h3
                id="footer-services"
                className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/70"
              >
                Services
              </h3>
              <ul className="grid gap-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section aria-labelledby="footer-contact">
              <h3
                id="footer-contact"
                className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/70"
              >
                Clinic Details
              </h3>
              <div className="space-y-6">
                {locations.map((location) => (
                  <address key={location.name} className="not-italic">
                    <h4 className="font-semibold text-white">{location.name}</h4>
                    <a
                      href={location.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex gap-3 text-sm leading-6 text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <FaMapMarkerAlt className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                      <span>{location.address}</span>
                    </a>
                    <p className="mt-2 flex items-center gap-3 text-sm text-white/60">
                      <FaClock className="h-4 w-4 flex-shrink-0 text-accent-light" aria-hidden="true" />
                      <span>{location.hours}</span>
                    </p>
                  </address>
                ))}

                <div className="space-y-3 border-t border-white/10 pt-5">
                  <a href="tel:+919810471255" className={`flex items-center gap-3 ${linkClass}`}>
                    <FaPhoneAlt className="h-4 w-4 flex-shrink-0 text-accent-light" aria-hidden="true" />
                    <span>+91-9810471255</span>
                  </a>
                  <a href="mailto:haplivdentalclinic@gmail.com" className={`flex items-center gap-3 ${linkClass}`}>
                    <FaEnvelope className="h-4 w-4 flex-shrink-0 text-accent-light" aria-hidden="true" />
                    <span>haplivdentalclinic@gmail.com</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#2c0e4a]">
        <div className="container mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 pb-16 pt-6 text-center text-sm sm:pb-6 md:flex-row md:justify-between md:text-left">
          <p className="text-white/90">© {currentYear} Hapliv Dental Clinic. All rights reserved.</p>
          <p className="max-w-2xl text-white/90 md:text-right">
            Braces, Invisalign, and comprehensive dental care across Gurgaon Sector 65 and West Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
