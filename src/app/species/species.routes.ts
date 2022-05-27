import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { SpeciesListComponent } from './species-list/species-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpeciesListComponent,
  },
  {
    path: ':id',
    component: SpeciesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesRoutingModule {}
