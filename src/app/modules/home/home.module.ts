import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicModule,
  ]
})
export class HomeModule { }
