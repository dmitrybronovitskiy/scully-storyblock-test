import { Injectable } from '@angular/core';
import Client, { StoriesParams, StoryblokResult } from 'storyblok-js-client';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryblokService {
  private sbClient = new Client({
    accessToken: environment.accessToken,
  });

  constructor() { }

  getStory(slug: string, params?: StoriesParams): Promise<any> {
    return this.sbClient.getStory(slug, { ...params, version: (environment.version as any) })
      .then(res => res.data);
  }

  getStories(params?: StoriesParams): Promise<any> {
    return this.sbClient.getStories(params)
      .then(res => res.data);
  }

  get(params: any): Promise<StoryblokResult> {
    return this.sbClient.get("cdn/stories", { ...params, version: (environment.version as any) })
      .then((res) => res);
  }

  getStoryById(id: string): Promise<StoryblokResult> {
    return this.sbClient.get(`cdn/stories/${id}`, { version: (environment.version as any) })
      .then((res) => res);
  }

  getStoryByFullSlug(slug: string): Promise<StoryblokResult> {
    return this.sbClient.get(`cdn/stories/${slug}`, { version: (environment.version as any) })
      .then((res) => res);
  }
}
