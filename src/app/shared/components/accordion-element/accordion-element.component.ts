import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionElementComponent implements OnInit {
  @ViewChild('expansionPanelContainer') expansionPanelContainer!: ElementRef;

  @Input() headline!: string;
  @Input() image!: ImageModel;
  @Input() imageSize!: string;
  @Input() content!: string;

  isOpen = false;

  get blockHeight(): string {
    return this.isOpen ? `${this.expansionPanelContainer.nativeElement.offsetHeight}px` : '0';
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStatus(): void {
    this.isOpen = !this.isOpen
  }
}
