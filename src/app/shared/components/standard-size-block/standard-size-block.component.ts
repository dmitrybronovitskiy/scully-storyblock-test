import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-standard-size-block',
  templateUrl: './standard-size-block.component.html',
  styleUrls: ['./standard-size-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardSizeBlockComponent implements OnInit {
  @Input() _editable!: string;
  @Input() content!: any[];

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
