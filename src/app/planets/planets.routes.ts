import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent,
  },
  {
    path: ':id',
    component: PlanetDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetRoutingModule {}
