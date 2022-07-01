import { Component } from '@angular/core';
import { BaseListComponentComponent } from 'src/app/shared/components/base-list-component/base-list-component.component';
import { Specie } from 'src/app/shared/models/specie';
import { SpeciesService } from 'src/app/shared/services/species.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css'],
})
export class SpeciesListComponent extends BaseListComponentComponent<Specie> {
  constructor(
    speciesService: SpeciesService,
    urlParamService: UrlParamService
  ) {
    super(speciesService, urlParamService);
  }
}
