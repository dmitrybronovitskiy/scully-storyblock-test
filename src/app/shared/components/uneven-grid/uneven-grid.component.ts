import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-uneven-grid',
  templateUrl: './uneven-grid.component.html',
  styleUrls: ['./uneven-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnevenGridComponent implements OnInit {
  bigColumn!: any[];
  smallColumn!: any[];
  position!: string;

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
