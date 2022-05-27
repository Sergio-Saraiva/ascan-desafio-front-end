import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/shared/models/planet';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css'],
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet;
  isLoading: boolean = true;
  constructor(
    private planetsService: PlanetsService,
    private urlParamService: UrlParamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.planetsService.getById(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = true;
        this.urlParamService.fillCharactersUrlParam(data);
        this.urlParamService.fillFilmsUrlParam(data);
        this.planet = data;
      },
      (err) => {},
      () => {
        this.isLoading = false;
      }
    );
  }
}
