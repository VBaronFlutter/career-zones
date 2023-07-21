'use client';
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './know.scss';
import Chip from '../components/Chip/Chip';
import useLevels from '../api/hooks/useLevels';
import useCompetencies from '../api/hooks/useCompetencies';
import {
  useSelectedAreas,
  setLevel,
  setCompetency,
  addLevel,
  removeLevel
} from '../api/hooks/useSelectedAreas';

export default function KnowWhereYoureAt() {
  const { competency, level, selectedAreas } = useSelectedAreas();
  const levels = useLevels();
  const competencies = useCompetencies();

  const onFocusAreaChange = (e, index) => {
    e.target.checked ? addLevel(index) : removeLevel(index);
  };

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className="intro">
        <select onChange={(e) => setLevel((e as any).target.value)}>
          {levels.map(({ title }, index) => (
            <option key={`${title}-option`} value={index}>
              {title}
            </option>
          ))}
        </select>

        <h1>{levels[level].title}</h1>
        <h2>{levels[level].summary.toUpperCase()}</h2>

        <div className="columns">
          <nav>
            <ul>
              {competencies.map((competency, index) => (
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
              {competencies[competency].levels[level].focusAreas.length && (
                <ul>
                  {competencies[competency].levels[level].focusAreas.map((focusArea, index) => (
                    <li key={`${index}`}>
                      <input
                        type="checkbox"
                        onChange={(e) => onFocusAreaChange(e, index)}
                        checked={selectedAreas[competency][level].includes(index)}
                      />
                      {focusArea}
                    </li>
                  ))}
                </ul>
              )}
            </>
          </div>
        </div>
        <p>
          Selected areas of focus for <u>{competencies[competency].title}</u> at level{' '}
          <u>{levels[level].title}</u>
        </p>
        <ul>
          {competencies[competency].levels[level].focusAreas.map((focusArea, index) => {
            return selectedAreas[competency][level].includes(index) ? (
              <li key={`${index}`}>{focusArea}</li>
            ) : null;
          })}
        </ul>

        <Chip
          size="large"
          onClicks={[
            () => console.log('TOP'),
            () => console.log('RIGHT'),
            () => console.log('BOTTOM'),
            () => console.log('LEFT')
          ]}
          rotate={10}
        >
          Principal Engineer
        </Chip>
        <Chip disabled>Specialist</Chip>
        <Chip
          size="small"
          type="secondary"
          onClicks={[() => console.log('TOP'), , , () => console.log('LEFT')]}
        >
          Leads Individuals
        </Chip>
        <Chip size="x-small" type="secondary">
          Leads Individuals
        </Chip>
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
