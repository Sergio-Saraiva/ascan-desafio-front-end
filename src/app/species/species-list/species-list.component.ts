import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/shared/models/specie';
import { SpeciesService } from 'src/app/shared/services/species.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css'],
})
export class SpeciesListComponent implements OnInit {
  species: Specie[] = [];
  hasPrevious: boolean;
  previous: string;
  hasNext: boolean;
  next: string;
  isLoading: boolean = true;
  constructor(
    private speciesService: SpeciesService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.getAllSpecies();
  }

  private getAllSpecies(query?: string) {
    this.isLoading = true;
    this.speciesService.getAll(query).subscribe(
      (data) => {
        this.species = data.results;
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
        data.results.map((s) => this.urlParamService.fillSpecieUrlParam(s));
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
    this.getAllSpecies(nextCallPage);
  }

  loadPreviousPage() {
    let previousCallPage = this.previous.match(/(?<=\?).*/)[0];
    window.scrollTo(0, 0);
    this.getAllSpecies(previousCallPage);
  }
}
