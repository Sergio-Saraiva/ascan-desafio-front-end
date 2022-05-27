import { BaseModel } from './base-model';

export interface Specie extends BaseModel {
  name: string;

  average_height: number;
  average_lifespan: number;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  homeworld: string;
  language: string;

  people: string[];
  films: string[];
  url: string;
}
