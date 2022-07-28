
import Head from 'next/head'
import Navbar from '../components/Navigation/Navbar'
import Header from '../components/Header/Header'
import BigNav from '../components/Navigation/BigNav'
import styles from './index.scss'

export default function Home() {

    return (
        <>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
            <style jsx>{styles}</style>
            <Navbar />
            <Header />

            <BigNav />
        </main>
        </>
    )
}
