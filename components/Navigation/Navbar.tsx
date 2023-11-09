import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.scss';
import { useTranslation } from 'next-i18next';
import CraftSwitcher from '../CraftSwitcher/CraftSwitcher';

export default function Navbar() {
  const { t } = useTranslation('common', { keyPrefix: 'nav' });
  const Router = useRouter();

  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <ol>
          <li className={Router.asPath === '/' ? 'active' : ''}>
            <Link href="/">{t('1')}</Link>
          </li>
          <li className={Router.asPath === '/fork' ? 'active' : ''}>
            <Link href="/fork">{t('2')}</Link>
          </li>
          <li className={Router.asPath === '/know' ? 'active' : ''}>
            <Link href="/know">{t('3')}</Link>
          </li>
          <li className={Router.asPath === '/play' ? 'active' : ''}>
            <Link href="/play">{t('4')}</Link>
          </li>
          <li className="numberless">
            <CraftSwitcher version="nav"/>
          </li>
        </ol>
      </nav>
    </>
  );
}
