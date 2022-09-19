import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-testemonials-slider-container',
  templateUrl: './testemonials-slider-container.component.html',
  styleUrls: ['./testemonials-slider-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestemonialsSliderContainerComponent implements OnInit {
  @Input() _editable!: string;
  @Input('Items') items!: any[];

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }
}
