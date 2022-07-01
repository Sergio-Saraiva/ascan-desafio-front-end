import { Component, OnInit } from '@angular/core';
import { getPageQueryHelper } from 'src/app/shared/helper/page-query-helper';
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
  previous: string;
  hasPrevious: boolean = false;
  next: string;
  hasNext: boolean = false;

  constructor(
    private filmsService: FilmsService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.getAllFilms(null);
  }

  private getAllFilms(query?: string) {
    this.filmsService.getAll(query).subscribe(
      (data) => {
        this.isLoading = true;
        data.results.map((f) => this.urlParamService.fillFilmUrlParam(f));
        this.films = data.results;
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
      () => {
        this.isLoading = false;
      }
    );
  }

  loadNextPage() {
    let nextCallPage = getPageQueryHelper(this.next);
    window.scrollTo(0, 0);
    this.getAllFilms(nextCallPage);
  }

  loadPreviousPage() {
    let previousCallPage = getPageQueryHelper(this.previous);
    window.scrollTo(0, 0);
    this.getAllFilms(previousCallPage);
  }

  searchFilter(search) {
    let query = `search=${search}`;
    window.scrollTo(0, 0);
    this.getAllFilms(query);
  }

  clearSearchFilter() {
    this.getAllFilms();
  }
}
