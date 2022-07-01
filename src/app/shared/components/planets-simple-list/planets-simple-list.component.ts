import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { PlanetsService } from '../../services/planets.service';
import { UrlParamService } from '../../services/urlparam.service';

@Component({
  selector: 'app-planets-simple-list',
  templateUrl: './planets-simple-list.component.html',
  styleUrls: ['./planets-simple-list.component.css'],
})
export class PlanetsSimpleListComponent implements OnInit {
  @Input() planetUrlParams: string[];
  planets: Planet[] = [];
  isLoading: boolean = true;

  constructor(
    private planetService: PlanetsService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.planetUrlParams.map((p) => {
      this.planetService.getById(+p).subscribe(
        (data) => {
          this.urlParamService.fillSingleUrlParam(data);
          this.planets.push(data);
        },
        () => {},
        () => {
          this.isLoading = false;
        }
      );
    });
  }
}
