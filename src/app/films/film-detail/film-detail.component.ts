import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { FilmsService } from 'src/app/shared/services/films.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  film: Film;
  isLoading: boolean = true;

  constructor(
    private filmsService: FilmsService,
    private urlParamService: UrlParamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filmsService.getById(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = true;
        this.urlParamService.fillCharactersUrlParam(data);
        this.urlParamService.fillPlanetsUrlParam(data);
        this.urlParamService.fillSpeciesUrlParam(data);
        this.film = data;
      },
      (_) => {},
      () => {
        this.isLoading = false;
      }
    );
  }
}
