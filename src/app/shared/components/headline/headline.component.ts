import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  @Input() _editable!: string;
  @Input() alignment!: string;
  @Input() border!: boolean;
  @Input('bordercolor') borderColor!: string;
  @Input() headline!: string;
  @Input('headlinecolor') headlineColor!: string;
  @Input() headlineSize!: string;
  @Input() subline!: string;
  @Input('sublinecolor') sublineColor!: string;
  @Input('sublinesize') sublineSize!: string;

  constructor() { }

  ngOnInit(): void {
  }

  get generateHeadlineClass(): string {
    return `${this.headlineSize || ''}`;
  }

  get generateSublineClass(): string {
    return `${this.sublineSize || ''}`;
  }
}
