import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { STORY } from '@app/core/constants/story';
import { StoryblokService } from '@app/core/services/storyblok.service';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  story = { content: null, name: '' } as any;
  components: { [key: string]: any } = Components;

  constructor(
    private storyblokService: StoryblokService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.storyblokService.getStory(STORY.HOME, {}).then(data => {
      this.story = data.story;
      this.cdr.markForCheck();
    });
  }
}
