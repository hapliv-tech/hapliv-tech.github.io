import Footer from "components/footer/footer";
import Navbar from "components/header/navbar";
import Map from "components/map";
import WhatsappComponent from "components/whatsapp";
import Head from "next/head";
import React from "react";
import styles from '../styles/globals.css';
import SideSocialMediaBar from 'components/sidebar/sidebar';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

     const router = useRouter();
     const canonicalUrl = (`https://haplivdentalclinic.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
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
            </Head>
            <Navbar />
            <Component {...pageProps} />
            {/*<WhatsappComponent/>*/}
            <Footer />
        </>

    );
}