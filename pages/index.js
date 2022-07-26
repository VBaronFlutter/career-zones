import Navbar from '../components/Navbar'
import styles from './index.scss'

export default function Home() {

    return (
        <>
            <style jsx>{styles}</style>
            <div>
                <Navbar />
                <p>Hello World</p>
            </div>
        </>
    )
}
