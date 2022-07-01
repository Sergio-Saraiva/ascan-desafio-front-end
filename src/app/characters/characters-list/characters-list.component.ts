import { Component, OnInit } from '@angular/core';
import { getPageQueryHelper } from 'src/app/shared/helper/page-query-helper';
import { Character } from 'src/app/shared/models/character';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  previous: string;
  hasPrevious: boolean = false;
  next: string;
  hasNext: boolean = false;
  isLoading: boolean;

  constructor(
    private charactersService: CharactersService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.getAllCharacters(null);
  }
  getAllCharacters(query?: string) {
    this.isLoading = true;
    this.charactersService.getAll(query).subscribe(
      (data) => {
        data.results.map((c) => this.urlParamService.fillCharacterUrlParam(c));
        this.characters = data.results;
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
    this.getAllCharacters(nextCallPage);
  }

  loadPreviousPage() {
    let previousCallPage = getPageQueryHelper(this.previous);
    window.scrollTo(0, 0);
    this.getAllCharacters(previousCallPage);
  }

  searchFilter(search) {
    let query = `search=${search}`;
    window.scrollTo(0, 0);
    this.getAllCharacters(query);
  }

  clearSearchFilter() {
    this.getAllCharacters();
  }
}
