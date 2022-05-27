import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { FilmsService } from 'src/app/shared/services/films.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];
  isLoading: boolean = true;

  constructor(
    private filmsService: FilmsService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.filmsService.getAll().subscribe(
      (data) => {
        this.isLoading = true;
        data.results.map((f) => this.urlParamService.fillFilmUrlParam(f));
        this.films = data.results;
      },
      (_) => {},
      () => {
        this.isLoading = false;
      }
    );
  }
}
