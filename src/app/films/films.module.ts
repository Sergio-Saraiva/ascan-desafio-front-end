import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsRoutingModule } from './films.routes';
import { SharedModule } from '../shared/shared.module';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  imports: [FilmsRoutingModule, CommonModule, SharedModule],
  declarations: [FilmsListComponent, FilmDetailComponent],
})
export class FilmsModule {}
