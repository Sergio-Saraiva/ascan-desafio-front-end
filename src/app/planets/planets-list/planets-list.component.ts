import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/shared/models/planet';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css'],
})
export class PlanetsListComponent implements OnInit {
  planets: Planet[];
  previous: string;
  hasPrevious: boolean = false;
  next: string;
  hasNext: boolean = false;
  isLoading: boolean = true;

  constructor(
    private planetsService: PlanetsService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.getAllPlanets(null);
  }

  private getAllPlanets(query?: string) {
    this.isLoading = true;
    this.planetsService.getAll(query).subscribe(
      (data) => {
        data.results.map((d) => this.urlParamService.fillPlanetUrlParam(d));
        this.planets = data.results;
        if (data.previous !== null) {
          this.hasPrevious = true;
          this.previous = data.previous;
        } else {
          this.hasPrevious = false;
          this.previous = null;
        }
        if (data.next !== null) {
          this.hasNext = true;
          this.next = data.next;
        } else {
          this.hasNext = false;
          this.next = null;
        }
      },
      (_) => {},
      () => (this.isLoading = false)
    );
  }

  loadNextPage() {
    let nextCallPage = this.next.match(/(?<=\?).*/)[0];
    this.getAllPlanets(nextCallPage);
  }

  loadPreviouPage() {
    let previousCallPage = this.previous.match(/(?<=\?).*/)[0];
    this.getAllPlanets(previousCallPage);
  }
}
