import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ImageModel } from '@app/core/model/image.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moving-tiles',
  templateUrl: './moving-tiles.component.html',
  styleUrls: ['./moving-tiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovingTilesComponent implements OnInit {
  @Input() _editable!: string;
  @Input() headline!: string;
  @Input() subline!: string;
  @Input() content!: string;
  @Input() backgroundColorBack!: string;
  @Input() backgroundColorFront!: string;
  @Input() backgroundImage!: ImageModel;
  @Input() buttonColor!: ImageModel;
  @Input() buttonLink!: string;
  @Input() buttonText!: string;
  @Input() headLineColor!: string;
  @Input() icon!: ImageModel;
  @Input() subLineColor!: string;

  get backgroundImageUrl(): string {
    return this.backgroundImage.filename ? `url(${this.backgroundImage.filename})` : '';
  }

  get generateFrontClass(): string {
    let classStr = 'absolute flex flex-col items-center backface-hidden w-full h-full bg-white border border-gray-400 rounded-3xl p-5 text-center bg-no-repeat bg-center bg-cover';

    if (this.backgroundImageUrl) {
      classStr += ' before:content-[\'\'] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:bg-black/50'
    }
    return classStr;
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onRedirect(): void {
    this.router.navigate([this.buttonLink]);
  }
}
