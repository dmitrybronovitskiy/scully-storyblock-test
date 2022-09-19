import { IntroComponent } from '@app/shared/components/intro/intro.component';
import { BigInfoBlockComponent } from '@app/shared/components/big-info-block/big-info-block.component';
import { SkillSmallBlocksComponent } from '@app/shared/components/skill-small-blocks/skill-small-blocks.component';
import { GridComponent } from '@app/shared/components/grid/grid.component';
import { BackgroundImageComponent } from '@app/shared/components/background-image/background-image.component';
import { BackgroundComponent } from '@app/shared/components/background/background.component';
import { HeadlineComponent } from '@app/shared/components/headline/headline.component';
import { AccordionComponent } from '@app/shared/components/accordion/accordion.component';
import { AccordionElementComponent } from '@app/shared/components/accordion-element/accordion-element.component';
import { UnevenGridComponent } from '@app/shared/components/uneven-grid/uneven-grid.component';
import { StandardSizeBlockComponent } from '@app/shared/components/standard-size-block/standard-size-block.component';
import { SliderComponent } from '@app/shared/components/slider/slider.component';
import { SliderItemComponent } from '@app/shared/components/slider-item/slider-item.component';
import { MovingTilesComponent } from '@app/shared/components/moving-tiles/moving-tiles.component';
import {
  StructuredInfoTextComponent
} from '@app/shared/components/structured-info-text/structured-info-text.component';
import {
  TestemonialsSliderContainerComponent
} from '@app/shared/components/testemonials-slider-container/testemonials-slider-container.component';
import {
  TestemonialsSliderItemComponent
} from '@app/shared/components/testemonials-slider-item/testemonials-slider-item.component';
import { FullWidthImageBoxComponent } from '@app/shared/components/full-width-image-box/full-width-image-box.component';
import {
  FullWidthImageBoxGridComponent
} from '@app/shared/components/full-width-image-box-grid/full-width-image-box-grid.component';
import {
  FullWidthImageBoxItemComponent
} from '@app/shared/components/full-width-image-box-item/full-width-image-box-item.component';
import { ReferenceGridComponent } from '@app/shared/components/reference-grid/reference-grid.component';
import { ReferenceGridItemComponent } from '@app/shared/components/reference-grid-item/reference-grid-item.component';
import { FactsboxContainerComponent } from '@app/shared/components/factsbox-container/factsbox-container.component';
import { FactsboxItemComponent } from '@app/shared/components/factsbox-item/factsbox-item.component';
import {
  SliderWithTabsContainerComponent
} from '@app/shared/components/slider-with-tabs-container/slider-with-tabs-container.component';
import { LastNewsComponent } from '@app/shared/components/last-news/last-news.component';
import { NewsComponent } from '@app/shared/components/news/news.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';

let Components: { [key: string]: any } = {
  'intro': IntroComponent,
  'bigInfoBlock': BigInfoBlockComponent,
  'skillSmallBlocks': SkillSmallBlocksComponent,
  'grid': GridComponent,
  'backgroundImage': BackgroundImageComponent,
  'background': BackgroundComponent,
  'headline': HeadlineComponent,
  'accordeon': AccordionComponent,
  'accordeonelement': AccordionElementComponent,
  'unevengrid': UnevenGridComponent,
  'standardSizeBlock': StandardSizeBlockComponent,
  'sliderContainer': SliderComponent,
  'sliderItem': SliderItemComponent,
  'movingTiles': MovingTilesComponent,
  'structuredInfoText': StructuredInfoTextComponent,
  'testemonialsSliderContainer': TestemonialsSliderContainerComponent,
  'testemonialsSliderItem': TestemonialsSliderItemComponent,
  'fullwidthImageBox': FullWidthImageBoxComponent,
  'fullwidthImageBoxGrid': FullWidthImageBoxGridComponent,
  'fullwidthImageBoxItem': FullWidthImageBoxItemComponent,
  'referenceGrid': ReferenceGridComponent,
  'referenceGridItem': ReferenceGridItemComponent,
  'factsboxContainer': FactsboxContainerComponent,
  'factsboxItem': FactsboxItemComponent,
  'sliderWithTabsContainer': SliderWithTabsContainerComponent,
  'lastNews': LastNewsComponent,
  'news': NewsComponent,
  'header': HeaderComponent,
}

export { Components }
