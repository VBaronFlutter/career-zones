import Link from 'next/link';
import styles from './Navbar.scss'

export default function Navbar() {
    return (
    <>
        <style jsx>{styles}</style>
        <nav>
            <ol>
                <li><Link href="/"><a>Start</a></Link></li>
                <li><Link href="/about"><a>What's it All About</a></Link></li>
                <li><Link href="/"><a>The Fork in the Road</a></Link></li>
                <li><Link href="/"><a>The Zone Matrix</a></Link></li>
                <li><Link href="/"><a>Sphere of Influence</a></Link></li>
                <li><Link href="/know-where-your-at"><a>Know Where You're At</a></Link></li>
                <li><Link href="/"><a>Make Your Play</a></Link></li>
            </ol>
        </nav>
    </>
    )
}