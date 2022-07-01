export interface BaseModel {
  url: string;
  urlParam?: string;
  filmsUrlParam?: string[];
  charactersUrlParam?: string[];
  speciesUrlParam?: string[];
  planetsUrlParam?: string[];

  created: Date;
  edited: Date;
}
