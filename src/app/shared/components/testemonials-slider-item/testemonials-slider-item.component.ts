import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-testemonials-slider-item',
  templateUrl: './testemonials-slider-item.component.html',
  styleUrls: ['./testemonials-slider-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestemonialsSliderItemComponent implements OnInit {
  @Input() _editable!: string;
  @Input('function') functionStr!: string;
  @Input() image!: ImageModel;
  @Input() name!: string;
  @Input() quotation!: string;

  get imageUrl(): string {
    return this.image.filename ? this.image.filename : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
