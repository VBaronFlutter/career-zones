import styles from './Navbar.scss'

export default function Navbar() {
  return (
      <>
        <style jsx>{styles}</style>
        <nav>
            <ol className="nav">
                <li><p>Start</p></li>
                <li><p>Index</p></li>
                <li><p>What's it All About</p></li>
                <li><p>The Fork in the Road</p></li>
                <li><p>The Zone Matrix</p></li>
                <li><p>Know Where You're At</p></li>
                <li><p>Make Your Play</p></li>
            </ol>
        </nav>
  </>
  )
}