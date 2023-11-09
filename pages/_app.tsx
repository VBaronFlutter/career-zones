import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { SWRConfig } from '../api/client';
import { useState } from 'react';
import { CraftContext } from '../context/craft';

function MyApp({ Component, pageProps }) {
  const [ craft, setCraft ] = useState("engineering");
  const wrappedStateForContext = { craft, setCraft };

  return (
    <>
      <Head>
        <title>Career Zones</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <SWRConfig value={pageProps?.api ? { fallback: pageProps.api } : undefined}>
        <CraftContext.Provider value={wrappedStateForContext}>
          <Component {...pageProps} />
        </CraftContext.Provider>
      </SWRConfig>
    </>
  );
}

export default appWithTranslation(MyApp);
