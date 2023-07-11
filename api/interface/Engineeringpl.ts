export interface Engineeringpl {
  title: string;
  description: string;
  levels?: (LevelsEntity)[] | null;
}
export interface LevelsEntity {
  scope?: (string)[] | null;
  focusAreas?: (string)[] | null;
  examples: Examples;
}
export interface Examples {
}
