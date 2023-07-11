export interface Engineeringic {
  levels?: (LevelsEntity)[] | null;
  competencies?: (CompetenciesEntity)[] | null;
}
export interface LevelsEntity {
  title: string;
  summary: string;
}
export interface CompetenciesEntity {
  title: string;
  description: string;
  levels?: (LevelsEntity1)[] | null;
}
export interface LevelsEntity1 {
  scope?: (string | null)[] | null;
  focusAreas?: (string)[] | null;
  examples?: Examples | null;
  model?: Model | null;
}
export interface Examples {
}
export interface Model {
  seventy?: (string)[] | null;
  twenty?: (string)[] | null;
  ten?: (string)[] | null;
}
