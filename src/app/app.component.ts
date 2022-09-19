import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { Components } from '@app/core/constants/components';
import { StoryblokService } from '@app/core/services/storyblok.service';
import { STORY } from '@app/core/constants/story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'osnatec-project';
  story = { content: null, name: '' } as any;
  components: { [key: string]: any } = Components;

  constructor(
    private storyblokService: StoryblokService,
    private cdr: ChangeDetectorRef,
  ) {
    (window as any).storyblok.init();
    (window as any).storyblok.on(['change', 'published'], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStory(STORY.HEADER, {}).then(data => {
      this.story = data.story;
      this.cdr.markForCheck();
    });
  }
}
