import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() introtext!: string;
  @Input() subline!: string;
  @Input() alignment!: string;
  @Input() color!: string;
  @Input() _editable!: string;

  constructor() { }

  ngOnInit() {
  }
}
