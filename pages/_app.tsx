import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Career Zones</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
