import Navbar from '../components/Navigation/Navbar';
import styles from './play.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Play = () => {
  const { t } = useTranslation('play');

  return (
  <>
    <Navbar />

    <main>
      <style jsx>{styles}</style>

      <section>
        <aside className="intro">
            <h1>{t('Playtitle')}</h1>
            <h2>{t('PlaySubStart')} 70:20:10 {t('PlaySubEnd')}</h2>
            <p>{t('PlaySubInfo')}</p>

            <h3>{t('MakeYourPlay')} <small>{t('PlayTextUnlock')}</small></h3>

            <article>
                <h2>70% {t('PlayExperienceTitle')}</h2>
                <p>{t('PlayExperienceInfo')}</p>
            </article>
            <article>
                <h2>20% {t('PlaySocialTitle')}</h2>
                <p>{t('PlaySocialInfo')}</p>
            </article>
            <article>
                <h2>10% {t('PlayTrainingTitle')}</h2>
                <p>{t('PlayTraininginfo')}</p>
            </article>

            <h3>{t('PlayLastPara')}</h3>
            <ul>
                <li>{t('PlayLastParaBullets.1')}</li>
                <li>{t('PlayLastParaBullets.2')}</li>
                <li>{t('PlayLastParaBullets.3')}</li>
                <li>{t('PlayLastParaBullets.4')}</li>
            </ul>
        </aside>

        <div className='selected-learning'>
            <p>My learning items render here</p>
        </div>

      </section>
    </main>
  </>
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
