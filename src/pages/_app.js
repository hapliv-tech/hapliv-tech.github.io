import Head from "next/head";
import styles from '../styles/globals.css';
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/footer/footer'), {
    loading: () => <p>Loading...</p>,
  });

const Navbar = dynamic(() => import('../components/header/navbar'), {
    loading: () => <p>Loading...</p>,
  });


export default function App({ Component, pageProps }) {

     const router = useRouter();
     const canonicalUrl = (`https://haplivdentalclinic.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

    if((router.asPath === "/" ? "": router.asPath).split("?")[0] === '/invisalign'){
        return (
            <>
                <Head>
                    <link rel="icon" type="image/png" href="/assets/favicon.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon.
              Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
              Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
              Teeth Whitening, Tooth jewellery."/>
                    <meta name="keywords"
                        content="Dental clinic in Gurgaon,Orthodontist,Invisalign Provider,Implants,Teeth Whitening,Root Canal Treatment" />
                    <meta name="author" content="Dr. Achla Verma" />
                    <meta name="google-site-verification" content="GBbJqQUj31ucFy_L9oyznS07eKmIkZHLKgzFwFZxaAU" />
                    <title>Braces Invisalign Implants & more | Hapliv Dental Clinic</title>
                    <meta httpEquiv='content-language' content='en'/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
                    <link rel="canonical" href={canonicalUrl} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@HaplivDental" />
                    <meta name="twitter:title" content="Braces Invisalign Implants & more | Hapliv Dental Clinic" />
                    <meta name="twitter:description" content="Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon.
              Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
              Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
              Teeth Whitening, Tooth jewellery." />
                    <meta name="twitter:image" content="https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp" />
                    <meta property="og:type" name="og:type" content="article" />
                    <meta property="og:title" name="og:title" content="Braces Invisalign Implants & more | Hapliv Dental Clinic" />
                    <meta property="og:description" name="og:description" content="Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon.
              Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
              Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
              Teeth Whitening, Tooth jewellery." />
                    <meta property="og:url" name="og:url" content={canonicalUrl} />
                    <meta property="og:image" name="og:image" content="https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp" />
                    <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "h1fc4fo20j");
                      `
                }}
            />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '576811444553303');
    fbq('track', 'PageView');`
                        }}
                    />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SK797L2YVG"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-SK797L2YVG', {
                      page_path: window.location.pathname,
                    });
                  `,
                        }}
                    />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Dentist",
                            "name": "Hapliv Dental Clinic",
                            "image": "https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp",
                            "@id": "https://haplivdentalclinic.com",
                            "url": "https://haplivdentalclinic.com",
                            "telephone": "+919810471255",
                            "priceRange": "₹500+",
                            "address": [{
                                "@type": "PostalAddress",
                                "streetAddress": "Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65",
                                "addressLocality": "Gurugram",
                                "postalCode": "122018",
                                "addressCountry": "IN"
                            },{
                                "@type": "PostalAddress",
                                "streetAddress": "Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi",
                                "addressLocality": "Delhi",
                                "postalCode": "110059",
                                "addressCountry": "IN"
                              }],
                            "geo": [{
                                "@type": "GeoCoordinates",
                                "latitude": 28.398091,
                                "longitude": 77.0634188
                            },{
                                "@type": "GeoCoordinates",
                                "latitude": 28.6225322,
                                "longitude": 77.036289
                            }],
                            "openingHoursSpecification": [{
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
                            }, {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Sunday",
                                "opens": "10:00",
                                "closes": "13:30"
                            }],
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
                        })
                    }}>
                    </script>
                </Head>
                <Component {...pageProps} />
                <Footer />
            </>
    
        );
    }

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon.
          Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
          Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
          Teeth Whitening, Tooth jewellery."/>
                <meta name="keywords"
                    content="Dental clinic in Gurgaon,Orthodontist,Invisalign Provider,Implants,Teeth Whitening,Root Canal Treatment" />
                <meta name="author" content="Dr. Achla Verma" />
                <meta name="google-site-verification" content="GBbJqQUj31ucFy_L9oyznS07eKmIkZHLKgzFwFZxaAU" />
                <title>Braces Invisalign Implants & more | Hapliv Dental Clinic</title>
                <meta httpEquiv='content-language' content='en'/>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@HaplivDental" />
                <meta name="twitter:title" content="Braces Invisalign Implants & more | Hapliv Dental Clinic" />
                <meta name="twitter:description" content="Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon.
          Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
          Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
          Teeth Whitening, Tooth jewellery." />
                <meta name="twitter:image" content="https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp" />
                <meta property="og:type" name="og:type" content="article" />
                <meta property="og:title" name="og:title" content="Braces Invisalign Implants & more | Hapliv Dental Clinic" />
                <meta property="og:description" name="og:description" content="Hapliv Dental clinic is one of the best dental clinic near Trump Towers in Gurgaon.
          Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
          Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
          Teeth Whitening, Tooth jewellery." />
                <meta property="og:url" name="og:url" content={canonicalUrl} />
                <meta property="og:image" name="og:image" content="https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp" />
                <script
            dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "h1fc4fo20j");
                  `
            }}
        />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '576811444553303');
fbq('track', 'PageView');`
                    }}
                />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-SK797L2YVG"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-SK797L2YVG', {
                      page_path: window.location.pathname,
                    });
                  `,
                    }}
                />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Dentist",
                            "name": "Hapliv Dental Clinic",
                            "image": "https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp",
                            "@id": "https://haplivdentalclinic.com",
                            "url": "https://haplivdentalclinic.com",
                            "telephone": "+919810471255",
                            "priceRange": "₹500+",
                            "address": [{
                                "@type": "PostalAddress",
                                "streetAddress": "Shop 27, First Floor, M3M Tee Point, North Block, Golf Course Ext Rd, Sector 65",
                                "addressLocality": "Gurugram",
                                "postalCode": "122018",
                                "addressCountry": "IN"
                            },{
                                "@type": "PostalAddress",
                                "streetAddress": "Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi",
                                "addressLocality": "Delhi",
                                "postalCode": "110059",
                                "addressCountry": "IN"
                              }],
                            "geo": [{
                                "@type": "GeoCoordinates",
                                "latitude": 28.398091,
                                "longitude": 77.0634188
                            },{
                                "@type": "GeoCoordinates",
                                "latitude": 28.6225322,
                                "longitude": 77.036289
                            }],
                            "openingHoursSpecification": [{
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
                            }, {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Sunday",
                                "opens": "10:00",
                                "closes": "13:30"
                            }],
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
                        })
                    }}></script>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            {/*<WhatsappComponent/>*/}
            <Footer />
        </>

    );
}