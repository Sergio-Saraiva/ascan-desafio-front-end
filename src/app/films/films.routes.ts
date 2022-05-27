import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsListComponent } from './films-list/films-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsListComponent,
  },
  {
    path: ':id',
    component: FilmDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
