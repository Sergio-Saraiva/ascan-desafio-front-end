import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [HomeRoutingModule, CommonModule, SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
