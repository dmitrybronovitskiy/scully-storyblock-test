import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '@app/core/model/image.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reference-grid-item',
  templateUrl: './reference-grid-item.component.html',
  styleUrls: ['./reference-grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceGridItemComponent implements OnInit {
  @Input() _editable!: string;
  @Input() headline!: string;
  @Input() content!: string;
  @Input() buttonText!: string;
  @Input() image!: ImageModel;
  @Input() link!: string;
  @Input() backgroundColor!: string;
  @Input() buttonTextColor!: string;
  @Input() buttonColor!: string;
  @Input() contentColor!: string;
  @Input() headlineColor!: string;
  @Input() showButton!: boolean;

  get imageUrl(): string {
    return this.image.filename ? this.image.filename : '';
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onRedirect(): void {
    this.router.navigate([this.link]);
  }
}
