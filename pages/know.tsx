import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './know.scss';
import type { Engineeringic} from '../api/Engineeringic';

export default function  KnowWhereYoureAt({engineeringIc}: {engineeringIc: Engineeringic}) {

  const initialState = engineeringIc?.competencies?.reduce((compMemo, comp, compIndex) => {
    return {
      ...compMemo, [compIndex]: comp.levels.reduce((levelMemo, _, levelIndex) => {
        return { ...levelMemo, [levelIndex]: [] }
      }, {})
    }
  }, {});
  const { levels, competencies } = engineeringIc;

  const [level, setLevel] = useState(0);
  const [competency, setCompetency] = useState(0);
  const [selectedAreas, setSelectedAreas] = useState(initialState || {});

  const onFocusAreaChange = (e, index) => {

    const newAreas = e.target.checked
      ? [...selectedAreas[competency][level], index]
      : selectedAreas[competency][level].filter((area) => area !== index)

    const newSelectedAreas = {
      ...selectedAreas,
      [competency]: {
        ...selectedAreas[competency],
        [level]: newAreas
      }
    }

    console.dir(newSelectedAreas, { depth: null })

    setSelectedAreas(newSelectedAreas)
  }

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className='intro'>

        <select onChange={(e) => setLevel((e as any).target.value)}>
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
                  {competencies[competency].levels[level].focusAreas.map((focusArea, index) => <li><input type="checkbox" onChange={(e) => onFocusAreaChange(e, index)} checked={selectedAreas[competency][level].includes(index)} />{focusArea}</li>)}
                </ul>
              )}
            </>

          </div>

        </div>
        <p>Selected areas of focus for <u>{competencies[competency].title}</u> at level <u>{levels[level].title}</u></p>
        <ul>
          {competencies[competency].levels[level].focusAreas.map((focusArea, index) => {
            return selectedAreas[competency][level].includes(index) || !selectedAreas[competency][level].length
              ? (<li>{focusArea}</li>)
              : null
          })}
        </ul>
      </section>

    </main>
  );
}

const getData = async ():Promise<Engineeringic> => {
  const res = await fetch(`http://localhost:3000/data/engineering-ic.json`)
  return res.json();
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'know'])),
      engineeringIc: await getData()
    }
  };
}
