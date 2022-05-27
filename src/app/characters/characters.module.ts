import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersRoutingModule } from './characters.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CharactersRoutingModule, CommonModule, SharedModule],
  declarations: [CharactersListComponent, CharacterDetailComponent],
})
export class CharactersModule {}
