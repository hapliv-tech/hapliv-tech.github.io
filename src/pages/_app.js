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
     const canonicalUrl = (`https://haplivdentaclinic.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
                <link rel="canonical" href={canonicalUrl} />
                {/* <link href="https://unpkg.com/pattern.css" rel="stylesheet"></link> */}
            </Head>
            <Navbar />
            <Component {...pageProps} />
            {/*<WhatsappComponent/>*/}
            <Footer />
        </>

    );
}