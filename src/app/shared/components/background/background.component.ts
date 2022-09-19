import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent implements OnInit {
  @Input() _editable!: string;
  @Input() contentelement!: any[];
  @Input() fullwidth!: boolean;
  @Input() color!: string;
  @Input() angle!: boolean;

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

  get isFullWidth(): boolean {
    return this.fullwidth || this.angle;
  }
}
