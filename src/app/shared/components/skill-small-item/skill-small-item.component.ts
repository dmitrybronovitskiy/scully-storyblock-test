import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '@app/core/model/image.model';

@Component({
  selector: 'app-skill-small-item',
  templateUrl: './skill-small-item.component.html',
  styleUrls: ['./skill-small-item.component.scss']
})
export class SkillSmallItemComponent implements OnInit {
  @Input() description!: string;
  @Input() image!: ImageModel;
  @Input() linkName!: string;
  @Input() linkUrl!: string;
  @Input() title!: string;
  @Input() buttonColor!: string;
  @Input() buttonTextColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
