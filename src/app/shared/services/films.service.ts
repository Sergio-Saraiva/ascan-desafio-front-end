import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { ConfigurationService } from './configuration.service';
import { ServiceBaseGet } from './service-base-get';

@Injectable({
  providedIn: 'root',
})
export class FilmsService extends ServiceBaseGet<Film> {
  constructor(configService: ConfigurationService, httpClient: HttpClient) {
    super('films', configService, httpClient);
  }
}
