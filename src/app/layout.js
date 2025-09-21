import "../styles/globals.css";
import Script from "next/script";
import Navbar from "components/header/navbar-app";
import Footer from "components/Footer";
import ProactiveContactWidget from "components/ProactiveContactWidget";


const siteUrl = "https://haplivdentalclinic.com";
const defaultSeo = {
  title: "Braces Invisalign Implants & more | Hapliv Dental Clinic",
  description:
    "Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon. Hapliv Dental Clinic has a team of specialised doctors for orthodontic, cosmetic, root canal, implants, crowns, dentures, teeth scaling, whitening, and jewellery treatments.",
  image: `${siteUrl}/assets/hapliv_dental_operatory.webp`,
  keywords:
    "Dental clinic in Gurgaon,Orthodontist,Invisalign Provider,Implants,Teeth Whitening,Root Canal Treatment",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar/>
         
   
        <main>{children}</main>
        <ProactiveContactWidget
          whatsappNumber="919810471255"
          whatsappMessage="Hello! I would like to book an appointment at Hapliv Dental Clinic."
          phoneNumber="+91 98104 71255"
          email="haplivdentalclinic@gmail.com"
          agentName="Aarti"
          agentTitle="Online Coordinator"
          avatarUrl="https://i.pravatar.cc/100?img=5"
          brandFrom="#ff7a59"
          brandTo="#ff4d8d"
          position="right"
        />
        <Footer />

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
            gtag('config', 'G-SK797L2YVG', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script id="schema-dentist" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Hapliv Dental Clinic",
            "image": `${siteUrl}/assets/hapliv_dental_operatory.webp`,
            "@id": siteUrl,
            "url": siteUrl,
            "telephone": "+919810471255",
            "priceRange": "₹500+",
            "description": "Leading orthodontist and dental care provider in Gurgaon and West Delhi specializing in braces, Invisalign, and comprehensive dental treatments.",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.98", "reviewCount": "100" },
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65",
                "addressLocality": "Gurugram",
                "postalCode": "122018",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi",
                "addressLocality": "Delhi",
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
