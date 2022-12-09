import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './know.scss';
import { engineeringIc } from '../data/engineering-ic';


export default function KnowWhereYoureAt() {

  const { levels, competencies } = engineeringIc;

  const [level, setLevel] = useState(0);
  const [competency, setCompetency] = useState(0)

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className='intro'>

        <select onChange={(e) => setLevel(e.target.value)}>
          {Object.values(levels).map(({ title }, index) => <option key={`${title}-option`} value={index}>{title}</option>)}
        </select>

        <h1>{levels[level].title}</h1>
        <h2>{levels[level].summary.toUpperCase()}</h2>

        <div className='columns'>

          <nav>
            <ul>

              {Object.values(competencies).map((competency, index) => (
                <li key={`${competency.title}-link`}>
                  <a onClick={() => setCompetency(index)}>{competency.title}</a>
                </li>
              ))}

            </ul>
          </nav>

          <div className='content'>

            <>
              <h3>{competencies[competency].title}</h3>
              <p>{competencies[competency].description}</p>
              <h4>Scope</h4>
              <p>{competencies[competency].levels[level].scope.join(' ')}</p>
              <h4>Areas of focus</h4>
              {competencies[competency].levels[level].focusAreas.length && (
                <ul>
                  {competencies[competency].levels[level].focusAreas.map((focusArea) => <li>{focusArea}</li>)}
                </ul>
              )}
            </>

          </div>

        </div>
      </section>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'know']))
    }
  };
}
