import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structured-info-text',
  templateUrl: './structured-info-text.component.html',
  styleUrls: ['./structured-info-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StructuredInfoTextComponent implements OnInit {
  @Input() _editable!: string;
  @Input() content!: string;
  @Input() subline!: string;
  @Input() headline!: string;
  @Input() headlineColor!: string;
  @Input() lineColor!: string;
  @Input() sublineColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
