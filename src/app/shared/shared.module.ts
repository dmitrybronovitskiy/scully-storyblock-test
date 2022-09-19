import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { NgxSplideModule } from 'ngx-splide';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/shared/material.module';

import { IntroComponent } from './components/intro/intro.component';
import { StoryblokDirective } from '@app/shared/directives/storyblok.directive';
import { BigInfoBlockComponent } from './components/big-info-block/big-info-block.component';
import { SkillSmallItemComponent } from './components/skill-small-item/skill-small-item.component';
import { SkillSmallBlocksComponent } from './components/skill-small-blocks/skill-small-blocks.component';
import { CommonModule } from '@angular/common';
import { ChunksPipe } from '@app/shared/pipe/chunks.pipe';
import { GridComponent } from './components/grid/grid.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { BackgroundComponent } from './components/background/background.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionElementComponent } from './components/accordion-element/accordion-element.component';
import { MarkdownModule } from 'ngx-markdown';
import { UnevenGridComponent } from './components/uneven-grid/uneven-grid.component';
import { StandardSizeBlockComponent } from './components/standard-size-block/standard-size-block.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';
import { MovingTilesComponent } from './components/moving-tiles/moving-tiles.component';
import { StructuredInfoTextComponent } from './components/structured-info-text/structured-info-text.component';
import { TestemonialsSliderContainerComponent } from './components/testemonials-slider-container/testemonials-slider-container.component';
import { TestemonialsSliderItemComponent } from './components/testemonials-slider-item/testemonials-slider-item.component';
import { FullWidthImageBoxComponent } from './components/full-width-image-box/full-width-image-box.component';
import { FullWidthImageBoxGridComponent } from './components/full-width-image-box-grid/full-width-image-box-grid.component';
import { FullWidthImageBoxItemComponent } from './components/full-width-image-box-item/full-width-image-box-item.component';
import { ReferenceGridComponent } from './components/reference-grid/reference-grid.component';
import { ReferenceGridItemComponent } from './components/reference-grid-item/reference-grid-item.component';
import { FactsboxContainerComponent } from './components/factsbox-container/factsbox-container.component';
import { FactsboxItemComponent } from './components/factsbox-item/factsbox-item.component';
import { SliderWithTabsContainerComponent } from './components/slider-with-tabs-container/slider-with-tabs-container.component';
import { LastNewsComponent } from './components/last-news/last-news.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';

@NgModule({
  declarations: [
    IntroComponent,
    StoryblokDirective,
    BigInfoBlockComponent,
    SkillSmallItemComponent,
    SkillSmallBlocksComponent,
    ChunksPipe,
    GridComponent,
    BackgroundImageComponent,
    BackgroundComponent,
    HeadlineComponent,
    AccordionComponent,
    AccordionElementComponent,
    UnevenGridComponent,
    StandardSizeBlockComponent,
    SliderComponent,
    SliderItemComponent,
    MovingTilesComponent,
    StructuredInfoTextComponent,
    TestemonialsSliderContainerComponent,
    TestemonialsSliderItemComponent,
    FullWidthImageBoxComponent,
    FullWidthImageBoxGridComponent,
    FullWidthImageBoxItemComponent,
    ReferenceGridComponent,
    ReferenceGridItemComponent,
    FactsboxContainerComponent,
    FactsboxItemComponent,
    SliderWithTabsContainerComponent,
    LastNewsComponent,
    NewsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DynamicModule,
    MaterialModule,
    MarkdownModule.forRoot({}),
    NgxSplideModule,
    RouterModule,
  ],
  exports: [
    IntroComponent,
    StoryblokDirective,
    BigInfoBlockComponent,
    SkillSmallItemComponent,
    SkillSmallBlocksComponent,
    ChunksPipe,
    GridComponent,
    BackgroundImageComponent,
    BackgroundComponent,
    HeadlineComponent,
    AccordionComponent,
    AccordionElementComponent,
    MaterialModule,
    MarkdownModule,
    HeaderComponent,
  ],
  providers: [],
})
export class SharedModule { }
