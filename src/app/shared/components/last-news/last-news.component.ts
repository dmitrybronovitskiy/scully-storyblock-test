import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { StoryblokService } from '@app/core/services/storyblok.service';
import { STORY } from '@app/core/constants/story';
import { Components } from '@app/core/constants/components';
import { StoryblokResult } from 'storyblok-js-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastNewsComponent implements OnInit {
  @Input() _editable!: string;
  @Input() title!: string;
  @Input() titleColor!: string;
  @Input() titleBorderColor!: string;
  @Input() showAllText!: string;
  @Input() showAllColor!: string;
  @Input() showAllBackgroundColor!: string;

  stories!: any[];
  components = Components;

  constructor(
    private storyblokService: StoryblokService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.storyblokService.get({
      starts_with: STORY.NEWSCONTAINER,
      sort_by: 'created_at:desc',
      per_page: 3,
      page: 1,
    }).then((result: StoryblokResult) => {
      this.stories = result.data.stories;
      this.cdr.markForCheck();
    });
  }

  onShowAllClick(): void {
    this.router.navigate(['news']);
  }

  getNewsParams(item: any): any {
    return { ...item.content, slug: item.slug };
  }
}
