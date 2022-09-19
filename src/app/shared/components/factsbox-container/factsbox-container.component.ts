import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-factsbox-container',
  templateUrl: './factsbox-container.component.html',
  styleUrls: ['./factsbox-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactsboxContainerComponent implements OnInit {
  @Input() _editable!: string;
  @Input() items!: any[];
  @Input() backgroundColor!: string;

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
