import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specie } from '../models/specie';
import { ConfigurationService } from './configuration.service';
import { ServiceBaseGet } from './service-base-get';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService extends ServiceBaseGet<Specie> {
  constructor(configService: ConfigurationService, httpClient: HttpClient) {
    super('species', configService, httpClient);
  }
}
