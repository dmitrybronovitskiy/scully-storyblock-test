import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-reference-grid',
  templateUrl: './reference-grid.component.html',
  styleUrls: ['./reference-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceGridComponent implements OnInit {
  @Input() _editable!: string;
  @Input() firstColumn!: any[];
  @Input() secondColumn!: any[];
  @Input() thirdColumn!: any[];

  components = Components;
  constructor() { }

  ngOnInit(): void {
  }

}
