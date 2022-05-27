import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmsService } from '../../services/films.service';
import { UrlParamService } from '../../services/urlparam.service';

@Component({
  selector: 'app-films-simple-list',
  templateUrl: './films-simple-list.component.html',
  styleUrls: ['./films-simple-list.component.css'],
})
export class FilmsSimpleListComponent implements OnInit {
  @Input() filmUrlParams: string[];
  films: Film[] = [];
  constructor(
    private filmService: FilmsService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.filmUrlParams.map((c) => {
      this.filmService.getById(+c).subscribe((data) => {
        this.urlParamService.fillFilmUrlParam(data);
        this.films.push(data);
      });
    });
  }
}
