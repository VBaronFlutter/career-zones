import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.scss';

export default function Navbar() {
  const Router = useRouter();
  const zonePages = ['/zone', '/zone/early-careers', '/zone/zone-matrix'];

  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <ol>
          <li className={Router.asPath == '/' ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={Router.asPath == '/fork' ? 'active' : ''}>
            <Link href="/fork">The Fork in the Road</Link>
          </li>
          <li className={Router.asPath == '/know' ? 'active' : ''}>
            <Link href="/know">Know Where You're At</Link>
          </li>
          <li className={Router.asPath == '/play' ? 'active' : ''}>
            <Link href="/play">Make Your Play</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
