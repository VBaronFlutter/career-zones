import Navbar from '../components/Navigation/Navbar'
import styles from './fork.scss'

export default function Fork() {

    return (
        <>
        <style jsx>{styles}</style>

        <main>
            <Navbar />
            <header>
                <div>
                    <span>
                        <h1>The Fork <small>in the Road</small></h1>
                        <h4>Competencies underpin our growth <small>Competencies are the key skills, knowledge and behaviours we need to deliver our business strategy. The competencies required at each Career Zone are different. You can use these competencies to Make your Play and drive your career development.</small></h4>
                    </span>

                    <ul>
                        <li>
                            <h4>CAREER ZONES </h4>
                            <p>Early Career, Individual Contributors and People Managers each have your own career paths made up of several Career Zones. This means that there’s a new Career Zone to explore. Career Zones reflect the fact that as you progress through your career, your role gets bigger and more complex – and so do the expectations. To progress to a new Career Zone you will need to Make a Play.</p>
                        </li>
                        <li>
                            <h4>Make a Play</h4>
                            <p>Making a Play is how you progress. Show what you need to do to move from one Career Zone to the next. These highlight the differences between Career Zones so wherever you see one, give it a click to reveal some key differences between the zones.</p>
                            <p>There are three factors required to Making a Play:</p>
                            Craft - The new capabilities required to execute new responsibilities.
                            Outcome Horizon – The time the outcomes are realised (short, medium, long term).
                            Mindset - Recognising what’s important and focusing efforts on this.
                        </li>
                    </ul>
                </div>
            </header>
        </main>
        </>
    )
}
