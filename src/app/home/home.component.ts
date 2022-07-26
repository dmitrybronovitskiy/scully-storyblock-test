import { Component, OnInit } from '@angular/core';
import { Components } from '../components';
import { StoryblokService } from '../storyblok.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  story = { content: null, name: '' } as any;
  components: { [key: string]: any } = Components;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'], function () {
      location.reload(true)
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', { version: 'draft' })
      .then(data => this.story = data.story);
  }
}
