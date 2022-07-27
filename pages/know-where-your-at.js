import Navbar from '../components/Navigation/Navbar'
import Competencies from '../data/competencies.json';
import styles from './know.scss'

const compData = Competencies;

export default function KnowWhereYoureAt() {
    return (
        <main>
            <style jsx>{styles}</style>
            <Navbar />

            <h2>{compData.People.title}</h2>
            <p>{compData.People.description}</p>

            <ul>
                {compData.People.core.map((Competency) => (
                    <li>{Competency}</li>
                ))}
            </ul>

        </main>
    )
}




