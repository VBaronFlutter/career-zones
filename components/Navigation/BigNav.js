import styles from './BigNav.scss'

export default function BigNav() {
    return (
    <>
        <style jsx>{styles}</style>
        <nav>
            <h2>Site Contents</h2>
            <ol>
                <li><num>1.</num><p>What's it All About <small>How to use this guide to move your career forward?</small></p></li>
                <li><num>2.</num><p>The Fork in the Road <small>What happens when you hit a fork in the road?</small></p></li>
                <li><num>3.</num><p>The Zone Matrix <small>When does your role and responsibility change?</small></p></li>
                <li><num>4.</num><p>Sphere of Influence <small>What areas of influence should you have?</small></p></li>
                <li><num>5.</num><p>Know Where You're At <small>The competencies you need in a role.</small></p></li>
                <li><num>6.</num><p>Make Your Play <small>What skills do you need to hone to progress?</small></p></li>
            </ol>
        </nav>
    </>
    )
}