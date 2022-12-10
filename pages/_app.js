import '../styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 3000
    });
  }, []);

  return (
    <>
      <Head>
        <title>AOS</title>
        <link
          id="external-css"
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Quicksand&amp;display=swap"
          media="all"
        />
        <link
          id="external-css"
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins&amp;display=swap"
          media="all"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

