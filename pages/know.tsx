'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Engineeringic } from '../api/interface/Engineeringic';
import api from '../api/client';
import styles from './know.scss';
import Chip from '../components/Chip/Chip';

const path = '/data/engineering-ic.json';
const initEngineering: Engineeringic = {
  levels: [
    {
      title: '',
      summary: ''
    }
  ],
  competencies: [
    {
      title: '',
      description: '',
      levels: [
        {
          scope: [''],
          focusAreas: [],
          examples: {}
        }
      ]
    }
  ]
};

export default function KnowWhereYoureAt() {
  const { data } = api<Engineeringic>(path);

  const initialState = data.competencies.reduce((compMemo, comp, compIndex) => {
    return {
      ...compMemo,
      [compIndex]: comp.levels.reduce((levelMemo, _, levelIndex) => {
        return { ...levelMemo, [levelIndex]: [] };
      }, {})
    };
  }, {});
  const { levels, competencies } = data;

  const [level, setLevel] = useState(0);
  const [competency, setCompetency] = useState(0);
  const [selectedAreas, setSelectedAreas] = useState(initialState || {});

  const onFocusAreaChange = (e, index) => {
    const newAreas = e.target.checked
      ? [...selectedAreas[competency][level], index]
      : selectedAreas[competency][level].filter((area) => area !== index);

    const newSelectedAreas = {
      ...selectedAreas,
      [competency]: {
        ...selectedAreas[competency],
        [level]: newAreas
      }
    };

    console.dir(newSelectedAreas, { depth: null });

    setSelectedAreas(newSelectedAreas);
  };

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className="intro">
        <div>
          {Object.values(levels).map(({ title }, index) => (
            <div className="chip-item" key={`${title}-option`}>
              <Chip onClick={() => setLevel(index)}>{title}</Chip>
            </div>
          ))}

          <h1>{levels[level].title}</h1>
          <h2>{levels[level].summary.toUpperCase()}</h2>

          <div className="columns">
            <nav>
              <ul>
                {Object.values(competencies).map((competency, index) => (
                  <li key={`${competency.title}-link`}>
                    <a onClick={() => setCompetency(index)}>{competency.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="content">
              <>
                <h3>{competencies[competency].title}</h3>
                <p>{competencies[competency].description}</p>
                <h4>Scope</h4>
                <p>{competencies[competency].levels[level].scope.join(' ')}</p>
                <h4>Areas of focus</h4>
                {competencies[competency].levels[level].focusAreas.length &&
                (
                  <ul>
                    <li>
                        <input
                          type="checkbox"
                          onChange={(e) => onFocusAreaChange(e, index)}
                          id="foo"
                        />
                        <label htmlFor="foo"></label>
                        test
                      </li>
                    {competencies[competency].levels[level].focusAreas.map((focusArea, index) => (
                      <li key={`${index}`}>
                        <input
                          type="checkbox"
                          onChange={(e) => onFocusAreaChange(e, index)}
                          id={`${index}`}
                          checked={selectedAreas[competency] && selectedAreas[competency][level] ? selectedAreas[competency][level].includes(index) : false}
                        />
                        <label htmlFor={`${index}`}></label>
                        {focusArea}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            </div>
          <div className='content-selected'>
            <p>
              Selected areas of focus for <u>{competencies[competency].title}</u> at level{' '}
              <u>{levels[level].title}</u>
            </p>
            <ul>
              {/* {competencies[competency].levels[level].focusAreas.map((focusArea, index) => {
                return selectedAreas[competency][level].includes(index) ||
                  !selectedAreas[competency][level].length ? (
                  <li key={`${index}`}>{focusArea}</li>
                ) : null;
              })} */}
            </ul>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      api: {
        [path]: initEngineering
      },
      ...(await serverSideTranslations(locale, ['common', 'know']))
    }
  };
}
