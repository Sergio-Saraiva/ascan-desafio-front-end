import { Component, OnInit } from '@angular/core';
import { BaseListComponentComponent } from 'src/app/shared/components/base-list-component/base-list-component.component';
import { Character } from 'src/app/shared/models/character';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { UrlParamService } from 'src/app/shared/services/urlparam.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent
  extends BaseListComponentComponent<Character>
  implements OnInit
{
  constructor(
    charactersService: CharactersService,
    urlParamService: UrlParamService
  ) {
    super(charactersService, urlParamService);
  }
}
