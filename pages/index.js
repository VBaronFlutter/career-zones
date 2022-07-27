import Navbar from '../components/Navigation/Navbar'
import Header from '../components/Header/Header'
import BigNav from '../components/Navigation/BigNav'
import styles from './index.scss'

export default function Home() {

    return (
        <main>
            <style jsx>{styles}</style>
            <Navbar />
            <Header />

            <BigNav />
        </main>
    )
}
