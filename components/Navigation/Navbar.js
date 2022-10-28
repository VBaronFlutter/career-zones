import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.scss'

export default function Navbar() {

    const Router = useRouter();
    const zonePages = ['/zone', '/zone/early-careers', '/zone/zone-matrix'];

    return (
    <>
        <style jsx>{styles}</style>
        <nav>
            <ol>
                <li className={Router.asPath == "/" ? "active" : ""}>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className={Router.asPath == "/fork" ? "active" : ""}>
                    <Link href="/fork"><a>The Fork in the Road</a></Link>
                </li>
                <li className={Router.asPath == "/know" ? "active" : ""}>
                    <Link href="/know"><a>Know Where You're At</a></Link>
                </li>
                <li className={Router.asPath == "/play" ? "active" : ""}>
                    <Link href="/play"><a>Make Your Play</a></Link>
                </li>
            </ol>
        </nav>
    </>
    )
}
