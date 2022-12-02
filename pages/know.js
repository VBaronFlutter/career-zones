import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './know.scss';
import Competencies from '../data/competencies.json';
import { engTracksIC } from '../data/engineering-tracks-ic'


export default function KnowWhereYoureAt() {

  const path = {
    0: 'Software Engineer',
    1: 'Senior Software Engineer',
    2: 'Lead Engineer',
    3: 'Engineering Manager',
    4: 'Head of Engineering'
  }

  const [level, setLevel] = useState(0);
  const [track, setTrack] = useState(engTracksIC.PROCESS);
  const [core, setCore] = useState(null);
  const [option, setOption] = useState('TRACK');

  const handleOptionClick = (option, trackOrCore) => {
    if (option === 'TRACK') {
      setTrack(trackOrCore);
      setOption('TRACK');
    }

    if (option === 'CORE') {
      setCore(trackOrCore);
      setOption('CORE');
    }
  }

  return (
    <main>
      <style jsx>{styles}</style>
      <Navbar />

      <section className='intro'>

        <select onChange={(e) => setLevel(e.target.value)}>
          {Object.entries(path).map(([key, value]) => <option value={key}>{value}</option>)}
        </select>

        <h1>{path[level]}</h1>
        <h2>{track.milestones[level].summary}</h2>

        <div className='columns'>

          <nav>
            <ul>
              <li>
                <a onClick={() => { handleOptionClick('TRACK', engTracksIC.PROCESS) }}>
                  {engTracksIC.PROCESS.displayName}
                </a>
              </li>
              {Object.values(Competencies).map((competency) => (
                <li>
                  <a onClick={() => { handleOptionClick('CORE', competency) }}>{competency.title}</a>
                </li>
              ))}
              <li>
                <a onClick={() => { handleOptionClick('TRACK', engTracksIC.ENGINEERING) }}>
                  {engTracksIC.ENGINEERING.displayName}
                </a>
              </li>
            </ul>
          </nav>

          <div className='content'>

            {option === 'TRACK' && (
              <>
                <h3>{track.displayName}</h3>
                <h4>Scope</h4>
                {track.milestones[level].scope.map((scope) => <span className='scope'>{scope} </span>)}
                <h4>Areas of Focus</h4>
                <ul>
                  {track.milestones[level].signals.map((signal) => <li>{signal}</li>)}
                </ul>
              </>
            )}

            {option === 'CORE' && (

              <>
                <h3>{core.title}</h3>
                <h4>Core Competencies</h4>
                <p>{core.core[level]}</p>

              </>
            )}

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
