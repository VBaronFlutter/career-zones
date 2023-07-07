export interface Engineering {
  title: string;
  description: string;
  levels?: (LevelsEntity)[] | null;
}
export interface LevelsEntity {
  scope?: (string)[] | null;
  focusAreas?: (string)[] | null;
  model: Model;
}
export interface Model {
  seventy?: (string)[] | null;
  twenty?: (string)[] | null;
  ten?: (string)[] | null;
}
