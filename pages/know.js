import React from 'react';
import Navbar from '../components/Navigation/Navbar'
import Competencies from '../data/competencies.json';
import styles from './know.scss'

const compData = Competencies;

export default function KnowWhereYoureAt() {

    const [currentCompetency, setCurrentCompentency] = React.useState(compData.People);

    function handleClick(event) {
        const key = event.target.dataset.section;
        setCurrentCompentency(compData[key]);
    }

    return (
        <main>
            <style jsx>{styles}</style>
            <Navbar />

            <section>
                <div className="info">
                    <h1>Know where <small>you're at</small></h1>
                    <p>Whichever path you're on, you'll pass through several career zones, building your competencies and experience along the way.</p>
                    <p>To support your development and career planning discussions, we have described what each competency looks like in each of the career zones. These zones describe the typical development transitions people make in their career.</p>
                    <p>How can I use the competency model to support my development plan?</p>
                    <ul>
                        <li>Understand what skills, knowledge and behaviours are needed for success in each zone</li>
                        <li>Identify your strengths and development areas</li>
                        <li>Talks about what we're looking for from individuals in a consistent way</li>
                        <li>Be focused in selecting the most impactful development activities for your Play (PDP)A common language and model that you can use in feedback and development conversations with your manager</li>
                    </ul>
                    <p>Things to keep in mind, this is not...</p>
                    <ul>
                        <li>A not a GPS - This framework is a compass!</li>
                        <li>A replacement for the existing goal setting process</li>
                        <li>A substitute for performance reviews/plans</li>
                        <li>A guarantee of a promotion</li>
                    </ul>
                </div>

                <div>
                    <ul className="comps">
                        <li>
                            <p>Build Relationships</p>
                            <button onClick={handleClick} data-section="People">People</button>
                            <button onClick={handleClick} data-section="Culture">Culture</button>
                        </li>
                        <li>
                            <p>Outcome Focused</p>
                            <button onClick={handleClick} data-section="GameChanger">Game Changer</button>
                            <button onClick={handleClick} data-section="Results">Results</button>
                        </li>
                        <li>
                            <p>Future Planning</p>
                            <button onClick={handleClick} data-section="Direction">Direction</button>
                            <button onClick={handleClick} data-section="StrategicAwareness">Strategic Awareness</button>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="results">
                    <h2>{currentCompetency.title}</h2>
                    <p><strong>CORE COMPETENCIES</strong></p>
                    <p>{currentCompetency.description}</p>
                    <ul>
                        <li><h4>Leads <br />Self</h4></li>
                        <li><h4>Leads Individuals / Expert / Specialist</h4></li>
                        <li><h4>Leads Leaders / <br />Lead Expert</h4></li>
                        <li><h4>Leads a Sub-function / Thought Leader</h4></li>
                        <li><h4>Leads <br />a Function</h4></li>

                        {currentCompetency.core.map((Competency) => (
                            <li key={Competency}>{Competency}</li>
                        ))}
                    </ul>
                </div>
            </section>

        </main>
    )
}




