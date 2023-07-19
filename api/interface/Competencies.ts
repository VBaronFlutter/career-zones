export interface Competencies {
  People: PeopleOrResults;
  Culture: CultureOrGameChangerOrDirectionOrStrategicAwareness;
  GameChanger: CultureOrGameChangerOrDirectionOrStrategicAwareness;
  Results: PeopleOrResults;
  Direction: CultureOrGameChangerOrDirectionOrStrategicAwareness;
  StrategicAwareness: CultureOrGameChangerOrDirectionOrStrategicAwareness;
}
export interface PeopleOrResults {
  title: string;
  description: string;
  core?: (string)[] | null;
  learning: Learning;
}
export interface Learning {
  experience?: (string)[] | null;
  social?: (string)[] | null;
  training: Training;
}
export interface Training {
  udemy?: (UdemyEntityOrVideosEntityOrOtherEntity)[] | null;
  videos?: (UdemyEntityOrVideosEntityOrOtherEntity)[] | null;
  other?: (UdemyEntityOrVideosEntityOrOtherEntity)[] | null;
}
export interface UdemyEntityOrVideosEntityOrOtherEntity {
  title: string;
  url: string;
}
export interface CultureOrGameChangerOrDirectionOrStrategicAwareness {
  title: string;
  description: string;
  core?: (string)[] | null;
  learning: Learning1;
}
export interface Learning1 {
  experience?: (string)[] | null;
  social?: (string)[] | null;
  training: Training1;
}
export interface Training1 {
  udemy?: (UdemyEntityOrVideosEntityOrOtherEntity)[] | null;
  other?: (UdemyEntityOrVideosEntityOrOtherEntity)[] | null;
}
