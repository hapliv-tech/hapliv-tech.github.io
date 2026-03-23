import "../styles/globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";
import Navbar from "components/header/navbar-app";
import Footer from "components/Footer";
import AppointmentModalRoot from "components/AppointmentModalRoot";
import { buildWebSiteJsonLd, CLINIC_SCHEMA_NAME } from "lib/seo";
import ErrorBoundaryWrapper from "components/ErrorBoundaryWrapper";

// Lazy load ProactiveContactWidget - not critical for initial render
// Note: Can't use ssr: false in server components, but dynamic import still helps with code splitting
const ProactiveContactWidget = dynamic(() => import("components/ProactiveContactWidget"));

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});


const siteUrl = "https://haplivdentalclinic.com";
const defaultSeo = {
  title: "Best Orthodontist in Gurgaon & West Delhi | Braces & Invisalign Aligner Treatment | Hapliv Dental",
  description:
    "Best Orthodontist in Gurgaon & West Delhi specializing in Braces and Invisalign clear aligner treatment. Expert orthodontic care for teeth straightening, bite correction, and smile transformation. Certified Invisalign provider with 8+ years of experience. Book your consultation today!",
  image: `${siteUrl}/assets/hapliv_dental_operatory.webp`,
  keywords:
    "Best Orthodontist Gurgaon, Orthodontist Gurgaon, Braces treatment Gurgaon, Invisalign Gurgaon, Clear aligner Gurgaon, Aligner treatment Gurgaon, Best braces doctor Gurgaon, Invisalign provider Gurgaon, Orthodontic treatment Gurgaon, Teeth straightening Gurgaon, Braces near me, Invisalign near me, Orthodontist West Delhi, Braces West Delhi, Invisalign West Delhi",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.title,
    template: "%s | Hapliv Dental Clinic",
  },
  description: defaultSeo.description,
  keywords: defaultSeo.keywords,
  authors: [{ name: "Dr. Achla Verma" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [{ url: defaultSeo.image }],
    siteName: "Hapliv Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HaplivDental",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [defaultSeo.image],
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  verification: {
    google: "GBbJqQUj31ucFy_L9oyznS07eKmIkZHLKgzFwFZxaAU",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        {/* Font optimization handled by next/font */}
      </head>
      <body>
        <ErrorBoundaryWrapper>
          <AppointmentModalRoot>
            <Navbar />
            <main>{children}</main>
            <ProactiveContactWidget
              whatsappNumber="919810471255"
              whatsappMessage="Hello! I would like to book an appointment at Hapliv Dental Clinic."
              phoneNumber="+91 98104 71255"
              email="haplivdentalclinic@gmail.com"
              agentName="Aarti"
              agentTitle="Online Coordinator"
              brandFrom="#ff7a59"
              brandTo="#ff4d8d"
              position="right"
            />
            <Footer />
          </AppointmentModalRoot>
        </ErrorBoundaryWrapper>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "h1fc4fo20j");
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '576811444553303');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SK797L2YVG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            (function () {
              var STORAGE_KEY = 'hapliv_ga_user_id';
              var userId = null;
              try {
                userId = localStorage.getItem(STORAGE_KEY);
                if (!userId || userId.length < 8) {
                  userId = (typeof crypto !== 'undefined' && crypto.randomUUID)
                    ? crypto.randomUUID()
                    : 'h_' + Date.now() + '_' + Math.random().toString(36).slice(2, 14);
                  localStorage.setItem(STORAGE_KEY, userId);
                }
              } catch (e) {}
              var cfg = { page_path: window.location.pathname };
              if (userId) {
                cfg.user_id = userId;
                window.__haplivGaUserIdSynced = userId;
              }
              gtag('config', 'G-SK797L2YVG', cfg);
            })();
          `}
        </Script>
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(buildWebSiteJsonLd())}
        </Script>
        <Script id="schema-dentist" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Dentist", "MedicalBusiness"],
            "name": CLINIC_SCHEMA_NAME,
            "image": `${siteUrl}/assets/hapliv_dental_operatory.webp`,
            "@id": siteUrl,
            "url": siteUrl,
            "telephone": "+919810471255",
            "email": "haplivdentalclinic@gmail.com",
            "priceRange": "₹500+",
            "description": "Leading orthodontist and dental care provider in Gurgaon and West Delhi specializing in braces, Invisalign, root canal treatment, dental implants, crowns, and comprehensive dental treatments.",
            "aggregateRating": { 
              "@type": "AggregateRating", 
              "ratingValue": "4.98", 
              "reviewCount": "100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "medicalSpecialty": [
              "Orthodontics",
              "Endodontics",
              "Prosthodontics",
              "Cosmetic Dentistry",
              "Pediatric Dentistry",
              "General Dentistry"
            ],
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122018",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110059",
                "addressCountry": "IN"
              }
            ],
            "geo": [
              {
                "@type": "GeoCoordinates",
                "latitude": 28.398091,
                "longitude": 77.0634188
              },
              {
                "@type": "GeoCoordinates",
                "latitude": 28.6225322,
                "longitude": 77.036289
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
              }
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Gurgaon",
                "sameAs": "https://en.wikipedia.org/wiki/Gurgaon"
              },
              {
                "@type": "City",
                "name": "Delhi",
                "sameAs": "https://en.wikipedia.org/wiki/Delhi"
              },
              {
                "@type": "State",
                "name": "Haryana"
              },
              {
                "@type": "State",
                "name": "Delhi"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dental Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Braces Treatment",
                    "description": "Orthodontic braces treatment for teeth alignment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Invisalign",
                    "description": "Clear aligner treatment for invisible teeth straightening"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Canal Treatment",
                    "description": "Comfort-focused root canal treatment to save your natural tooth"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dental Implants",
                    "description": "Dental implant treatment for missing teeth"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/haplivdentalclinic",
              "https://www.instagram.com/hapliv_dental_clinic",
              "https://x.com/haplivdental",
              "https://www.linkedin.com/company/hapliv-dental-clinic",
              "https://www.practo.com/gurgaon/clinic/hapliv-dental-clinic-gurgaon-sector-43",
              "https://www.lybrate.com/gurgaon/clinic/hapliv-dental-clinic-sushant-lok-i",
              "https://www.ratemds.com/clinic/in-hr-gurgaon-hapliv-dental-clinic/",
              "https://www.trustpilot.com/review/haplivdentalclinic.com",
              "https://www.apollo247.com/clinic/hapliv-dental-clinic-in-gurugram-c2cf5516-2154-4b88-a79c-4ff9558053ab"
            ]
          })}
        </Script>
      </body>
    </html>
  );
}
