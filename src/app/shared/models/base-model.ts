export interface BaseModel {
  urlParam?: string;
  filmsUrlParam?: string[];
  charactersUrlParam?: string[];
  speciesUrlParam?: string[];
  planetsUrlParam?: string[];

  created: Date;
  edited: Date;
}
