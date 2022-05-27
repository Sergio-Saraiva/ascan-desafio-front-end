import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/models/character';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  isLoading: boolean = true;

  constructor(
    private charactersService: CharactersService,
    private urlParamService: UrlParamService,
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.charactersService.getById(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = true;
        this.urlParamService.fillFilmsUrlParam(data);
        this.urlParamService.fillSpeciesUrlParam(data);
        data.homeworld = this.urlParamService.urlParamExtractorHelper(
          data.homeworld
        );
        this.fillHomeworldName(data);
        this.character = data;
      },
      (_) => {},
      () => {
        this.isLoading = false;
      }
    );
  }

  fillHomeworldName(character: Character) {
    this.planetsService
      .getById(+character.homeworld)
      .subscribe((data) => (character.homeworld_name = data.name));
  }
}
