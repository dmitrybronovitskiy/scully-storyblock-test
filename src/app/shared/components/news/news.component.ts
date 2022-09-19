import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  @Input() _editable!: string;
  @Input() title!: string;
  @Input() image!: ImageModel;
  @Input() content!: string;
  @Input() createdAt!: string;
  @Input() createdAtColor!: string;
  @Input() titleColor!: string;
  @Input() contentColor!: string;
  @Input() showMoreText!: string;
  @Input() showMoreTextColor!: string;
  @Input() slug!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
