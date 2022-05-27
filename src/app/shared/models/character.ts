import { BaseModel } from './base-model';

export interface Character extends BaseModel {
  name: string;

  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  homeworld_name: string;

  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}
