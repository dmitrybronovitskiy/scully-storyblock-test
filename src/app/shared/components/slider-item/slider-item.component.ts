import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit {
  @Input() headLine!: string;
  @Input() text!: string;
  @Input() subline!: string;
  @Input() image!: ImageModel;
  @Input() backgroundColor!: string;
  @Input() backgroundImage!: ImageModel;
  @Input() buttonColor!: string;
  @Input() buttonLink!: string;
  @Input() buttonText!: string;
  @Input() headLineColor!: string;
  @Input() textColor!: string;
  @Input() sublineColor!: string;
  @Input() _editable!: string;

  get backgroundImageUrl(): string {
    return this.backgroundImage.filename ? `url(${this.backgroundImage.filename})` : '';
  }

  get textAndImage(): boolean {
    return !!(this.image.filename && this.text)
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
