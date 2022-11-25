import Navbar from '../components/Navigation/Navbar';
import styles from './play.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Play = () => {
  const { t } = useTranslation('play');

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className="intro">
        <h1>Test: {t('title')}</h1>

        <figure></figure>
        <div>
          <h1>Make You're Play</h1>
          <h2>WHAT'S IT ABOUT?</h2>
          <h4>
            DIFFERENT PEOPLE WANT DIFFERENT THINGS FROM THEIR CAREER AND WE EMBRACE THE VARIETY OF
            SKILLS WE HAVE HERE IN INTERNATIONAL SPORTS
          </h4>
          <p>
            <strong>
              IT's YOUR CAREER. Your development is what you make it. Ready to Make Your Play? Then
              you've come to the right place. This tool has been designed to help you take control
              of your career and drive your own development. Here is where you'll plan your next
              move and decide how you'll get there.{' '}
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Play;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'play']))
    }
  };
}
