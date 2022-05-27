import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SharedDeclaredModules } from './shared-declared-module';
import { SharedImportedModules } from './shared.imported-modules';
import { GoBackComponent } from './components/go-back/go-back.component';
import { CharactersSimpleListComponent } from './components/characters-simple-list/characters-simple-list.component';
import { SpeciesSimpleListComponent } from './components/species-simple-list/species-simple-list.component';
import { PlanetsSimpleListComponent } from './components/planets-simple-list/planets-simple-list.component';
import { FilmsSimpleListComponent } from './components/films-simple-list/films-simple-list.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    RouterModule,
    HttpClientModule,
    ...SharedImportedModules,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [...SharedDeclaredModules, GoBackComponent, CharactersSimpleListComponent, SpeciesSimpleListComponent, PlanetsSimpleListComponent, FilmsSimpleListComponent],
  exports: [
    CustomMaterialModule,
    ...SharedImportedModules,
    ...SharedDeclaredModules,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
