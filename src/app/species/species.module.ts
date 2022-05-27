import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { SpeciesRoutingModule } from './species.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SpeciesRoutingModule, CommonModule, SharedModule],
  declarations: [SpeciesListComponent, SpeciesDetailComponent],
})
export class SpeciesModule {}
