import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Film } from '../models/film';
import { Planet } from '../models/planet';
import { Specie } from '../models/specie';
import { BaseModel } from '../models/base-model';

@Injectable({
  providedIn: 'root',
})
export class UrlParamService {
  constructor() {}

  urlParamExtractorHelper(url: string) {
    if (url !== undefined && url !== null) return url.match(/\d+/g)[0];
  }

  fillSingleUrlParam(object: any) {
    object.urlParam = this.urlParamExtractorHelper(object.url);
  }

  fillFilmsUrlParam(object) {
    object.filmsUrlParam = [];
    object.films.map((c) =>
      object.filmsUrlParam.push(this.urlParamExtractorHelper(c))
    );
  }

  fillCharactersUrlParam(object) {
    object.charactersUrlParam = [];
    if (object.characters !== undefined) {
      object.characters.map((c) =>
        object.charactersUrlParam.push(this.urlParamExtractorHelper(c))
      );
    }
    if (object.residents !== undefined) {
      object.residents.map((c) =>
        object.charactersUrlParam.push(this.urlParamExtractorHelper(c))
      );
    }
    if (object.people !== undefined) {
      object.people.map((c) =>
        object.charactersUrlParam.push(this.urlParamExtractorHelper(c))
      );
    }
  }
  fillSpeciesUrlParam(object) {
    object.speciesUrlParam = [];
    console.log(object.species);
    if (object.species !== null && object.species !== undefined) {
      object.species.map((s) =>
        object.speciesUrlParam.push(this.urlParamExtractorHelper(s))
      );
    }
  }
  fillPlanetsUrlParam(object) {
    object.planetsUrlParam = [];
    object.planets.map((p) =>
      object.planetsUrlParam.push(this.urlParamExtractorHelper(p))
    );
  }
}
