import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-factsbox-item',
  templateUrl: './factsbox-item.component.html',
  styleUrls: ['./factsbox-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactsboxItemComponent implements OnInit {
  @Input() headline!: string;
  @Input() image!: ImageModel;
  @Input() subline!: string;
  @Input() headlineColor!: string;
  @Input() sublineColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
