import "normalize.css";
import globalStyles from "../styles/global";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

export default MyApp;
