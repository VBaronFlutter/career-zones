import useEngineering from './useEngineering';

const useLevels = () => {
  const data = useEngineering();
  return data.levels;
};

export default useLevels;
