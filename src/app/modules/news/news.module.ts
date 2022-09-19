import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';

import { NewsComponent } from './components/news/news.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    DynamicModule,
    SharedModule,
  ],
  exports: [
    NewsComponent,
  ]
})
export class NewsModule { }
