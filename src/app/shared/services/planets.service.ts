import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { ConfigurationService } from './configuration.service';
import { ServiceBaseGet } from './service-base-get';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService extends ServiceBaseGet<Planet> {
  constructor(configService: ConfigurationService, httpClient: HttpClient) {
    super('planets', configService, httpClient);
  }
}
