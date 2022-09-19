import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModule } from 'ng-dynamic-component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from '@app/modules/home/home.module';
import { MarkdownModule } from 'ngx-markdown';
import { NewsModule } from '@app/modules/news/news.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsDetailsModule } from '@app/modules/news-details/news-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    DynamicModule,
    SharedModule,
    HomeModule,
    NewsModule,
    NewsDetailsModule,
    MarkdownModule.forRoot({}),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
