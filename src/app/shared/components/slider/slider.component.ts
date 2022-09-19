import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit {
  @Input() _editable!: string;
  @Input() sliderItem!: any[];

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
