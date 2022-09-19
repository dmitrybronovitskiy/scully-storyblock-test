import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Components } from '@app/core/constants/components';
import { STORY } from '@app/core/constants/story';

import { TableParamsModel } from '@app/core/model/table-params.model';
import { StoryblokService } from '@app/core/services/storyblok.service';
import { PaginationEventModel } from '@app/core/model/pagination-event.model';
import { MatPaginator } from '@angular/material/paginator';
import { StoryblokResult } from 'storyblok-js-client';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;

  stories!: any[][];
  components = Components;
  params: TableParamsModel = new TableParamsModel(1, 9);
  count = 0;

  constructor(
    private storyblokService: StoryblokService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  onChangePage({ pageIndex }: PaginationEventModel): void {
    this.params = { ...this.params, page: pageIndex + 1 };

    this.getNews();
  }

  getNewsParams(item: any): any {
    return { ...item.content, slug: item.slug };
  }

  private getNews(): void {
    this.storyblokService.get({
      starts_with: STORY.NEWSCONTAINER,
      sort_by: 'created_at:desc',
      per_page: this.params.pageSize,
      page: this.params.page,
    }).then((result: StoryblokResult) => {
      this.count = result.total;
      this.stories = this.chunks(result.data.stories, 3);
      this.cdr.markForCheck();
    });
  }

  private chunks(array: any[], size: number): any[][] {
    let results = [];

    if (!array) {
      return [];
    }

    while (array.length) {
      results.push(array.splice(0, size));
    }

    return results;
  };
}
