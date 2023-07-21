import api from '../client';
import type { Engineeringic } from '../interface/Engineeringic';

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

const useEngineering = () => {
  const { data = initEngineering } = api<Engineeringic>('/data/engineering-ic.json');
  return data;
};

export default useEngineering;
