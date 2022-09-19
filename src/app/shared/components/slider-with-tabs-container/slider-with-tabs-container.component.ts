import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-slider-with-tabs-container',
  templateUrl: './slider-with-tabs-container.component.html',
  styleUrls: ['./slider-with-tabs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderWithTabsContainerComponent implements OnInit {
  @Input() _editable!: string;
  @Input() items!: any[];

  components = Components;
  selectedImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSplideMoved(event: number[]): void {
    if (this.selectedImageIndex !== event[2]) {
      this.selectedImageIndex = event[2];
    }
  }
}
