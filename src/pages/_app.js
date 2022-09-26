import Footer from "components/footer/footer";
import Navbar from "components/header/navbar";
import Map from "components/map";
import WhatsappComponent from "components/whatsapp";
import Head from "next/head";
import React from "react";
import styles from '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Hapliv Dental clinic is one of the best dental clinic in Gurgaon.
          Hapliv Dental Clinic has a team of specialised doctors for offering best orthodontic treatment,
          Cosmetic treatment, Root Canal Treatment (RCT), Implants, Crown & Bridges, Dentures, Teeth Scaling,
          Teeth Whitening, Tooth jewellery."/>
                <meta name="keywords"
                    content="Hapliv, Dentist, Dental Clinic, Gurugram, Gurgaon Dentist, Sushant Lok Dental Clinic,Best Dentist in Delhi NCR, Orthodontist in Sushant Lok 1, " />
                <meta name="author" content="Dr. Achla Verma" />
                <meta name="google-site-verification" content="GBbJqQUj31ucFy_L9oyznS07eKmIkZHLKgzFwFZxaAU" />
                <title>Hapliv Dental Clinic | Braces & Aligner | RCT | Implants | Multi-Speciality dental clinic in Gurgaon</title>
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
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Map/>
            {/* <WhatsappComponent/> */}
            <Footer />
        </>

    );
}