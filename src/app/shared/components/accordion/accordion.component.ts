import { Component, Input, OnInit } from '@angular/core';
import { Components } from '@app/core/constants/components';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() items!: any[];
  @Input() _editable!: string;

  components = Components;

  constructor() { }

  ngOnInit(): void {
  }

}
