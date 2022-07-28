import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Career Zones </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="/global.css" data-n-p=""></link>
        </Head>

        <Component {...pageProps} />
        </>
    )
}

export default MyApp