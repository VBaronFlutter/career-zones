import Navbar from '../components/Navigation/Navbar';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './fork.scss';

const Fork = () => {
  const { t } = useTranslation('fork');

  return (
    <>
      <style jsx>{styles}</style>

      <main>
        <Navbar />
        <header>
          <div>
            <span>
              <h1>{t('Forktitle')}</h1>
              {/* <h1>
                The Fork <small>in the Road</small>
              </h1> */}
              <h4>
                Competencies underpin our growth{' '}
                <small>
                  Competencies are the key skills, knowledge and behaviours we need to deliver our
                  business strategy. The competencies required at each Career Zone are different.
                  You can use these competencies to Make your Play and drive your career
                  development.
                </small>
              </h4>
            </span>

            <article>
              <div className="zones">
                <h4>CAREER ZONES </h4>
                <p>
                  Early Career, Individual Contributors and People Managers each have your own
                  career paths made up of several Career Zones. This means that there’s a new Career
                  Zone to explore. Career Zones reflect the fact that as you progress through your
                  career, your role gets bigger and more complex – and so do the expectations. To
                  progress to a new Career Zone you will need to Make a Play.
                </p>
              </div>
              <div className="early">
                <span>
                  <h5>EARLY CAREER</h5>
                  Learning craft Focus on individual contribution
                </span>
              </div>
              <div className="play">
                <h4>Make a Play</h4>
                <p>
                  Making a Play is how you progress. Show what you need to do to move from one
                  Career Zone to the next. These highlight the differences between Career Zones so
                  wherever you see one, give it a click to reveal some key differences between the
                  zones.
                </p>
                <p>There are three factors required to Making a Play:</p>
                <ul>
                  <li>Craft - The new capabilities required to execute new responsibilities.</li>
                  <li>
                    Outcome Horizon – The time the outcomes are realised (short, medium, long term).
                  </li>
                  <li>Mindset - Recognising what’s important and focusing efforts on this.</li>
                </ul>
              </div>
            </article>
          </div>
        </header>
      </main>
    </>
  );
};

export default Fork;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'fork']))
    }
  };
}