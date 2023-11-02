import Navbar from '../components/Navigation/Navbar';
import Header from '../components/Header/Header';
import styles from './index.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />
      <Header />

      <section className="intro">

        <figure></figure>
        <div>
        <h1>{t('HomeTitle')}</h1>
          <h2>WHAT'S IT ABOUT?</h2>
          <h4>DIFFERENT PEOPLE WANT DIFFERENT THINGS FROM THEIR CAREER AND WE EMBRACE THE VARIETY OF
            SKILLS WE HAVE HERE IN INTERNATIONAL SPORTS</h4>
          <p>
            <strong>
              IT's YOUR CAREER. Your development is what you make it. Ready to Make Your Play? Then
              you've come to the right place. This tool has been designed to help you take control
              of your career and drive your own development. Here is where you'll plan your next
              move and decide how you'll get there.{' '}
            </strong>
          </p>
          <p>
            <strong>
              After your Early Career path, there are usually two types of paths that people go on,
              the People Leader or Technology Leader path. But that does not mean you can't move
              between them during your career, if that's what you want. International Sports is not
              a place where career zones are set in stone.{' '}
            </strong>
          </p>
          <p>
            Whichever path you're on, you'll pass through several zones, building your competencies
            and experience as you go. There are many ways to progress and increase your
            contribution, including deep technical knowledge and ability, technical leadership and
            people management. All are equally valuable paths in the International Sports teams.{' '}
          </p>
          <p>
            We know everyone is different, so the zones won't always be a perfect fit, there will,
            at times, be some ambiguity. This tool isn't an instruction manual, nor a check list,
            it's a guide to help you build your career.
          </p>
          <p>
            If you're serious about making a play or moving laterally into another role, step up to
            the starting line and let's begin....
          </p>
        </div>
      </section>
      <section className="quote">
        <div>
          <h4>
            PROGRESSION SHOULDN'T ALWAYS MEAN GOING FORWARDS. LIKE MOST PATHWAYS AND ROADS, THERE
            ARE TWISTS AND TURNS ALONG THE WAY. SOMETIMES, YOU MAY EVEN GO BACKWARDS – AND THAT'S
            OK!
          </h4>
          <h4>
            IN THE CONTEXT OF A THIRTY TO FORTY YEAR CAREER (OR LONGER!), A FEW YEARS STEPPING BACK
            FROM LEADERSHIP OR MOVING INTO PEOPLE MANAGEMENT REPRESENTS ONLY A FRACTION OF YOUR
            OVERALL TIMELINE.
          </h4>
          <h4>THE SKILLS YOU BUILD ON EITHER TRACK WILL ALWAYS BE VALUABLE ON THE OTHER.</h4>
        </div>
      </section>
    </main>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home']))
    }
  };
}
