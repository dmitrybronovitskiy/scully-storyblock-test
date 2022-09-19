import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-full-width-image-box-item',
  templateUrl: './full-width-image-box-item.component.html',
  styleUrls: ['./full-width-image-box-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullWidthImageBoxItemComponent implements OnInit {
  @Input() _editable!: string;
  @Input() backgroundImage!: ImageModel;
  @Input() ctaLink!: string;
  @Input() ctaText!: string;
  @Input() isBigBlock: boolean = false;
  @Input() type!: string;
  @Input() parentType!: string;

  get backgroundImageUrl(): string {
    return this.backgroundImage.filename ? `url(${this.backgroundImage.filename})` : '';
  }

  get textClass(): string {
    if (this.isBigBlock) {
      return 'absolute left-1/2 transform -translate-x-1/2 max-w-md w-full bottom-0 pb-20 px-8 z-[2] text-xl text-white no-underline hover:underline';
    }

    return 'm-8 text-lg no-underline hover:underline text-black';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
