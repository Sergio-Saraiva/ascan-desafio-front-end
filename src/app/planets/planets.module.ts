import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetRoutingModule } from './planets.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [PlanetRoutingModule, CommonModule, SharedModule],
  declarations: [PlanetsListComponent, PlanetDetailComponent],
})
export class PlanetsModule {}
