import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-full-width-image-box-grid',
  templateUrl: './full-width-image-box-grid.component.html',
  styleUrls: ['./full-width-image-box-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullWidthImageBoxGridComponent implements OnInit {
  @Input() _editable!: string;
  @Input() leftColumn!: any[];
  @Input() rightColumn!: any[];
  @Input() type!: string;

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

  getBigBlockParams(item: any): any {
    return { isBigBlock: true, parentType: this.type, ...item };
  }

  getSmallBlockParams(item: any): any {
    return { isBigBlock: false, parentType: this.type, ...item };
  }
}
