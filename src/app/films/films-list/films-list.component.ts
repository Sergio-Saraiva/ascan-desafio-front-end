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
    this.filmsService.getAll().subscribe(
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
    let nextCallPage = this.next.match(/(?<=\?).*/)[0];
    window.scrollTo(0, 0);
    this.getAllFilms(nextCallPage);
  }

  loadPreviousPage() {
    let previousCallPage = this.previous.match(/(?<=\?).*/)[0];
    window.scrollTo(0, 0);
    this.getAllFilms(previousCallPage);
  }
}
