import Link from 'next/link';
import styles from './BigNav.scss';

export default function BigNav() {
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <h2>Site Contents</h2>
        <ol>
          <li>
            <Link href="/about">
              <sup>1.</sup>
              <p>
                What's it All About{' '}
                <small>How to use this guide to move your career forward?</small>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/fork">
              <sup>2.</sup>
              <p>
                The Fork in the Road <small>What happens when you hit a fork in the road?</small>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <sup>3.</sup>
              <p>
                The Zone Matrix <small>When does your role and responsibility change?</small>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <sup>4.</sup>
              <p>
                Sphere of Influence <small>What areas of influence should you have?</small>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/know">
              <sup>5.</sup>
              <p>
                Know Where You're At <small>The competencies you need in a role.</small>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <sup>6.</sup>
              <p>
                Make Your Play <small>What skills do you need to hone to progress?</small>
              </p>
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
