import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';
import { UrlParamService } from '../../services/urlparam.service';

@Component({
  selector: 'app-characters-simple-list',
  templateUrl: './characters-simple-list.component.html',
  styleUrls: ['./characters-simple-list.component.css'],
})
export class CharactersSimpleListComponent implements OnInit {
  @Input() characterUrlParams: string[];
  characters: Character[] = [];

  constructor(
    private characterService: CharactersService,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.characterUrlParams.map((c) => {
      this.characterService.getById(+c).subscribe((data) => {
        this.urlParamService.fillCharacterUrlParam(data);
        this.characters.push(data);
      });
    });
  }
}
