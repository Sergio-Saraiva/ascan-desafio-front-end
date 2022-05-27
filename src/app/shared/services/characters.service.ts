import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { ConfigurationService } from './configuration.service';
import { ServiceBaseGet } from './service-base-get';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends ServiceBaseGet<Character> {
  constructor(configService: ConfigurationService, httpClient: HttpClient) {
    super('people', configService, httpClient);
  }
}
