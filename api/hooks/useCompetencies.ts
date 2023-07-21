import useEngineering from './useEngineering';

const useCompetencies = () => {
  const data = useEngineering();
  return data.competencies;
};

export default useCompetencies;
