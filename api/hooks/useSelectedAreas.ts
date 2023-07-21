import { useCallback, useEffect, useState } from 'react';
import useCompetencies from './useCompetencies';
import { singletonHook } from 'react-singleton-hook';

interface useSelectedAreasProps {
  level: number;
  competency: number;
  selectedAreas: any;
}

const init: useSelectedAreasProps = {
  level: 0,
  competency: 0,
  selectedAreas: {}
};

let globalSetLevel = (_level: number): void => {
  throw new Error('You must useSelectedAreas before setting its state');
};
let globalSetCompetency = (_level: number): void => {
  throw new Error('You must useSelectedAreas before setting its state');
};
let globalAddLevel = (_level: number): void => {
  throw new Error('You must useSelectedAreas before setting its state');
};
let globalRemoveLevel = (_level: number): void => {
  throw new Error('You must useSelectedAreas before setting its state');
};

/**
 * Singleton Selected Areas State Hook
 * before use initialize in any component: {useSelectedAreas();}
 */
export const useSelectedAreas = singletonHook<useSelectedAreasProps>(
  init,
  (): useSelectedAreasProps => {
    const [level, setLevel] = useState<number>(init.level);
    const [competency, setCompetency] = useState<number>(init.competency);
    globalSetLevel = setLevel;
    globalSetCompetency = setCompetency;

    const competencies = useCompetencies();
    const [selectedAreas, setSelectedAreas] = useState({ [competency]: { [level]: [] } });

    useEffect(
      () => {
        const initialState = competencies.reduce((compMemo, comp, compIndex) => {
          return {
            ...compMemo,
            [compIndex]: comp.levels.reduce((levelMemo, _, levelIndex) => {
              return { ...levelMemo, [levelIndex]: [] };
            }, {})
          };
        }, {});
        setSelectedAreas(initialState);
      },
      // NOTE: only load/reset initial state when load count changed from server
      [competencies.length]
    );

    globalAddLevel = useCallback(
      (index: number) => {
        const newSelectedAreas = {
          ...selectedAreas,
          [competency]: {
            ...selectedAreas[competency],
            [level]: [...selectedAreas[competency][level], index]
          }
        };
        console.dir(newSelectedAreas, { depth: null });
        setSelectedAreas(newSelectedAreas);
      },
      [selectedAreas, competency, level]
    );

    globalRemoveLevel = useCallback(
      (index: number) => {
        const newSelectedAreas = {
          ...selectedAreas,
          [competency]: {
            ...selectedAreas[competency],
            [level]: selectedAreas[competency][level].filter((area) => area !== index)
          }
        };
        console.dir(newSelectedAreas, { depth: null });
        setSelectedAreas(newSelectedAreas);
      },
      [selectedAreas, competency, level]
    );

    return {
      level,
      competency,
      selectedAreas
    };
  }
);

export const setLevel = (index: number) => globalSetLevel(index);
export const setCompetency = (index: number) => globalSetCompetency(index);
export const addLevel = (index: number) => globalAddLevel(index);
export const removeLevel = (index: number) => globalRemoveLevel(index);
