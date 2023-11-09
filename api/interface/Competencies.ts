export interface Competencies {
  competencies?: (CompetenciesEntity)[] | null;
}
export interface CompetenciesEntity {
  title: string;
  description: string;
  levels?: (LevelsEntity)[] | null;
}
export interface LevelsEntity {
  summary: string;
  scope?: (string)[] | null;
  focusAreas?: (string)[] | null;
}
