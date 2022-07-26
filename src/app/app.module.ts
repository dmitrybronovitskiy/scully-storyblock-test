import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { UserComponent } from './user/user.component';
import { PageComponent } from './page/page.component';
import { TeaserComponent } from './teaser/teaser.component';
import { GridComponent } from './grid/grid.component';
import { FeatureComponent } from './feature/feature.component';
import { StoryblokDirective } from './storyblok.directive';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from './storyblok.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PageComponent,
    TeaserComponent,
    GridComponent,
    FeatureComponent,
    StoryblokDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    DynamicModule,
  ],
  providers: [StoryblokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
