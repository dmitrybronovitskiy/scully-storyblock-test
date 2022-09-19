import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { STORY } from '@app/core/constants/story';
import { StoryblokService } from '@app/core/services/storyblok.service';

import { Components } from '@app/core/constants/components';
import { ActivatedRoute } from '@angular/router';
import { StoryblokResult } from 'storyblok-js-client';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailsComponent implements OnInit {
  content: any;
  components: { [key: string]: any } = Components;

  constructor(
    private storyblokService: StoryblokService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.storyblokService.getStoryByFullSlug(`${STORY.NEWSCONTAINER}/${slug}`)
      .then((result: StoryblokResult) => {
        this.content = result.data.story.content;
        this.cdr.markForCheck();
      });
  }

}
