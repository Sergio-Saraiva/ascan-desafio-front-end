import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from 'src/app/shared/models/specie';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { SpeciesService } from 'src/app/shared/services/species.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css'],
})
export class SpeciesDetailComponent implements OnInit {
  specie: Specie;
  isLoading: boolean = true;
  constructor(
    private speciesService: SpeciesService,
    private urlParamService: UrlParamService,
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.speciesService.getById(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = true;
        this.urlParamService.fillFilmsUrlParam(data);
        this.urlParamService.fillCharactersUrlParam(data);
        data.homeworld = this.urlParamService.urlParamExtractorHelper(
          data.homeworld
        );
        this.fillHomeworldName(data);
        this.specie = data;
      },
      (_) => {},
      () => {
        this.isLoading = false;
      }
    );
  }

  fillHomeworldName(specie: Specie) {
    specie.homeworld = '?';
    if (
      specie.homeworld !== undefined &&
      specie.homeworld !== null &&
      specie.homeworld !== '?'
    ) {
      this.planetsService
        .getById(+specie.homeworld)
        .subscribe((data) => (specie.homeworld = data.name));
    }
  }
}
