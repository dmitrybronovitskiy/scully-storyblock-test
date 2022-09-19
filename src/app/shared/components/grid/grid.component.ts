import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  @Input() items!: any[];
  @Input() _editable!: string;

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
