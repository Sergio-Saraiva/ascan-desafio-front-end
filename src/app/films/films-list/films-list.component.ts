import { Component, OnInit } from '@angular/core';
import { BaseListComponentComponent } from 'src/app/shared/components/base-list-component/base-list-component.component';
import { Film } from 'src/app/shared/models/film';
import { FilmsService } from 'src/app/shared/services/films.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent extends BaseListComponentComponent<Film> {
  constructor(filmsService: FilmsService, urlParamService: UrlParamService) {
    super(filmsService, urlParamService);
  }
}
