import styles from './Header.scss';
import CraftSwitcher from '../CraftSwitcher/CraftSwitcher';

export default function Header() {
  return (
    <>
      <style jsx>{styles}</style>

      <header>
        <div>
          <h1>Career Zones</h1>
          <CraftSwitcher version="header" />
        </div>
      </header>
    </>
  );
}
