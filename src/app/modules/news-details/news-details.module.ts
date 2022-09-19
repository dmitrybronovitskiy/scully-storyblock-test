import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';

import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicModule,
  ]
})
export class NewsDetailsModule { }
