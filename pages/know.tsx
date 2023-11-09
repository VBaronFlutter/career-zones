'use client';

import React, { useState, useContext } from 'react';
import Navbar from '../components/Navigation/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { Competencies } from '../api/interface/Competencies';
import type { Engineering } from '../api/interface/Engineering';
import type { Test } from '../api/interface/Test';

import api from '../api/client';
import styles from './know.scss';
import Chip from '../components/Chip/Chip';

import { CraftContext } from '../context/craft';

const dummyCompetencies: Competencies = {
  competencies: [
    {
      title: '',
      description: '',
      levels: [
        {
          summary: '',
          scope: [''],
          focusAreas: [''],
        }
      ]
    }
  ]
};

export default function KnowWhereYoureAt() {
  const coreCompetencies = api<Competencies>("/data/competencies.json").data.competencies;
  const craftCompetencies = {
    "engineering": api<Engineering>("/data/engineering.json").data,
    "test": api<Test>("/data/test.json").data
  }
  const { craft } = useContext(CraftContext);

  const selectedCraftCompetencies = craftCompetencies[craft];
  const allCompetencies = coreCompetencies.concat(selectedCraftCompetencies);

  const setBlankFocusAreas = (comps) => {
    const cl = comps.length;
    if(cl) {
      let focusAreas = new Array(cl);

      for(let c = 0; c < cl; c++) {
        let ll = comps[c].levels.length;
        focusAreas[c] = new Array(ll);
        for(let l = 0; l < ll; l++) {
          let fal = comps[c].levels[l].focusAreas.length;
          focusAreas[c][l] = Array(fal).fill(false);
        }
      }

      return focusAreas;
    } else {
      return null;
    }
  }

  const getArrayDepth = (v) => Array.isArray(v) ? 1 + Math.max(0, ...v.map(getArrayDepth)) : 0;

  const [level, setLevel] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(0);
  const [competency, setCompetency] = useState(0);
  const [selectedAreas, setSelectedAreas] = useState([]);

  const setLevels = (cmp, lvl) => {
    setLevel(lvl);
    setDisplayLevel(cmp === (allCompetencies.length - 1) ? lvl : Math.floor(lvl/2));
    setCompetency(cmp);
  }

  const onFocusAreaChange = (e, index) => {
    let currentlySelectedAreas;

    if(getArrayDepth(selectedAreas) !== 3) {
      currentlySelectedAreas = setBlankFocusAreas(allCompetencies);
    } else {
      currentlySelectedAreas = [...selectedAreas];
    }

    let currentValue = currentlySelectedAreas[competency][displayLevel][index];
    currentlySelectedAreas[competency][displayLevel][index] = !currentValue;
    setSelectedAreas(currentlySelectedAreas);
  };

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className="intro">
        <div>
          <article>
            {/* Role Levels within Craft Family */}
            {selectedCraftCompetencies.levels && Object.values(selectedCraftCompetencies.levels).map(({ title, zone }, index) => (
              <div className={`chip-item ${zone}`} key={`${title}-option`}>
                <Chip size="small" type={(zone === 'pl') ? 'secondary' : 'primary' } onClick={() => { setLevels(competency, index) } }>{title}</Chip>
              </div>
            ))}
          </article>

          <div className="columns">
            <nav>
              <ul>
                {/* Area Sections, e.g. People, Game Changer - includes one specific to craft */}
                {Object.values(allCompetencies).map((thisCompetency, index) => (
                  <li key={`${thisCompetency.title}-link`} className={competency === index ? "selected" : ""}>
                    <a onClick={() => { setLevels(index, level); }}>{thisCompetency.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="content">
              {/* Details about the competencies within the selected competency area */}
              <>
                <h3>{allCompetencies[competency].title}</h3>
                {competency === (allCompetencies.length - 1) && <h3>{selectedCraftCompetencies.levels[level].title}</h3>}
                <p>{allCompetencies[competency].description}</p>
                <h4>Scope</h4>
                <p>{allCompetencies[competency].levels[displayLevel].scope.join(' ')}</p>
                <h4>Areas of focus</h4>
                {allCompetencies[competency].levels[displayLevel].focusAreas.length &&
                (
                  <ul>
                    {allCompetencies[competency].levels[displayLevel].focusAreas.map((focusArea, index) => (
                      <li key={`${index}`}>
                        <input
                          type="checkbox"
                          onChange={(e) => onFocusAreaChange(e, index)}
                          id={`${index}`}
                          checked={selectedAreas[competency] && selectedAreas[competency][displayLevel] ? selectedAreas[competency][displayLevel][index] : false}
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
              Selected areas of focus for <u>{allCompetencies[competency].title}</u> at level{' '}
              <u>{selectedCraftCompetencies.levels && selectedCraftCompetencies.levels[level].title}</u>
            </p>
            <ul>
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
        "/data/competencies.json": dummyCompetencies,
        "/data/engineering.json": dummyCompetencies,
        "/data/test.json": dummyCompetencies
      },
      ...(await serverSideTranslations(locale, ['common', 'know']))
    }
  };
}
