import { BaseModel } from './base-model';

export interface Film extends BaseModel {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: any[];
  vehicles: any[];
  characters: string[];
  planets: string[];
  films?: string[];
}
