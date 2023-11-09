export interface Engineering {
  title: string;
  description: string;
  levels?: (LevelsEntity)[] | null;
}
export interface LevelsEntity {
  title: string;
  zone: string;
  summary: string;
  scope?: (string)[] | null;
  focusAreas?: (string)[] | null;
}
