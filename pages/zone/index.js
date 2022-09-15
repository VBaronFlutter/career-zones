import Link from 'next/link';
import Navbar from '../../components/Navigation/Navbar'
import styles from './index.scss'

export default function Zone() {

    return (
        <>
        <style jsx>{styles}</style>

        <main>
            <Navbar />

            <h1>THE ZONE MATRIX <small>INTRODUCTION</small></h1>
            <ul>
                <li>1. EARLY CAREERS MATRIX
                You start in the Early Careers matrix. This is all zone/ZoneMatrix gaining experience, learning and
                honing your craft, starting to build mastery in particular technologies. Learning as much
                as possible from your team, your mentor and training. It's these foundations that will
                help kickstart your career and give you the knowledge and experience to enter the career
                zone, where you would start to specialise.</li>
                <li>2. CAREER ZONES MATRIX
                Each section within the poker chip is a Career Zone. These are clear check
                points where your role and responsibility officially grow.</li>
                <li>3. CAREER ZONE START
                You enter the Career Zone as a Specialist, an experienced IC (Individual
                Contributor). From here, you have the option to start working towards more of
                a People focused career track or a more Technical track.</li>
                <li>4. MOVING CAREER ZONES
                These arrow signs are areas to Make your Play. They describe some of
                the adjustments you need to make as you progress between Career Zones</li>
                <li>5. CAREER ZONE PROGRESSION
                Once you start on a particular track, you would normally continue around the same
                track (People or Technical) as you gain experience in the skills required and grow your
                career. There is nothing stopping you changing tracks, moving from People to
                Technical for example.</li>
            </ul>

            <ol>
                <li><Link href="/zone/early-careers"><a>Early Careers Matrix</a></Link></li>
                <li><Link href="/zone/zone-matrix"><a>Career Zone Matrix</a></Link></li>
            </ol>

        </main>
        </>
    )
}
