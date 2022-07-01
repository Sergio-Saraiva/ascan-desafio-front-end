import { Component, OnInit } from '@angular/core';
import { BaseListComponentComponent } from 'src/app/shared/components/base-list-component/base-list-component.component';
import { Planet } from 'src/app/shared/models/planet';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css'],
})
export class PlanetsListComponent extends BaseListComponentComponent<Planet> {
  constructor(
    planetsService: PlanetsService,
    urlParamService: UrlParamService
  ) {
    super(planetsService, urlParamService);
  }
}
