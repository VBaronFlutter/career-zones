import Link from 'next/link'
import styles from './BigNav.scss'

export default function BigNav() {
    return (
    <>
        <style jsx>{styles}</style>
        <nav>
            <h2>Site Contents</h2>
            <ol>
                <li><Link href="/about"><a><num>1.</num><p>What's it All About <small>How to use this guide to move your career forward?</small></p></a></Link></li>
                <li><Link href="/"><a><num>2.</num><p>The Fork in the Road <small>What happens when you hit a fork in the road?</small></p></a></Link></li>
                <li><Link href="/"><a><num>3.</num><p>The Zone Matrix <small>When does your role and responsibility change?</small></p></a></Link></li>
                <li><Link href="/"><a><num>4.</num><p>Sphere of Influence <small>What areas of influence should you have?</small></p></a></Link></li>
                <li><Link href="/know"><a><num>5.</num><p>Know Where You're At <small>The competencies you need in a role.</small></p></a></Link></li>
                <li><Link href="/"><a><num>6.</num><p>Make Your Play <small>What skills do you need to hone to progress?</small></p></a></Link></li>
            </ol>
        </nav>
    </>
    )
}