import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-full-width-image-box',
  templateUrl: './full-width-image-box.component.html',
  styleUrls: ['./full-width-image-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullWidthImageBoxComponent implements OnInit {
  @Input() _editable!: string;
  @Input('Grid') grid!: any[];

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
