import { Component, Input, OnInit } from '@angular/core';
import { Specie } from '../../models/specie';
import { SpeciesService } from '../../services/species.service';
import { UrlParamService } from '../../services/urlparam.service';

@Component({
  selector: 'app-species-simple-list',
  templateUrl: './species-simple-list.component.html',
  styleUrls: ['./species-simple-list.component.css'],
})
export class SpeciesSimpleListComponent implements OnInit {
  @Input() specieUrlParams: string[];
  species: Specie[] = [];
  constructor(
    private specieService: SpeciesService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    if (this.specieUrlParams !== null && this.specieUrlParams !== undefined) {
      this.specieUrlParams.map((s) => {
        this.specieService.getById(+s).subscribe((data) => {
          this.urlParamService.fillSpecieUrlParam(data);
          this.species.push(data);
        });
      });
    }
  }
}
