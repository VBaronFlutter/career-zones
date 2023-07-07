export interface Engineeringtracksic {
  ENGINEERING: ENGINEERING;
}
export interface ENGINEERING {
  displayName: string;
  category: string;
  description: string;
  milestones?: (MilestonesEntity)[] | null;
}
export interface MilestonesEntity {
  summary: string;
  scope?: (string | null)[] | null;
  signals?: (string)[] | null;
  examples: Examples;
}
export interface Examples {
  seventy?: (string)[] | null;
  twenty?: (string)[] | null;
  ten?: (string)[] | null;
}
