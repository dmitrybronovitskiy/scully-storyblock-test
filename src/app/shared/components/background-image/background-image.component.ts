import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';
import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundImageComponent implements OnInit {
  @Input() _editable!: string;
  @Input() contentelement!: any[];
  @Input() fullwidth!: boolean;
  @Input() parallax!: boolean;
  @Input() picture!: ImageModel;
  @Input() minHeight!: string;

  components = Components;

  get backgroundImage(): string {
    return this.picture.filename ? `url(${this.picture.filename})` : '';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
