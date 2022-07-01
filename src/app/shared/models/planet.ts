import { BaseModel } from './base-model';

export interface Planet extends BaseModel {
  name: string;

  climate: string;
  diameter: number;
  gravity: number;
  orbital_period: number;
  population: number;
  rotation_period: number;
  surface_water: number;
  terrain: string;

  films: string[];
  residents: string[];
}
