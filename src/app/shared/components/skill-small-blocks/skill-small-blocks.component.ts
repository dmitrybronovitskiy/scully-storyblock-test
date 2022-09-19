import { Component, Input, OnInit } from '@angular/core';

import { SkillSmallItemComponent } from '@app/shared/components/skill-small-item/skill-small-item.component';

@Component({
  selector: 'app-skill-small-blocks',
  templateUrl: './skill-small-blocks.component.html',
  styleUrls: ['./skill-small-blocks.component.scss']
})
export class SkillSmallBlocksComponent implements OnInit {
  @Input() skillSmallItem!: any[];

  SkillSmallItemComponent = SkillSmallItemComponent

  constructor() { }

  ngOnInit(): void {
  }

  isLastItemInChunk(chunkIndex: number, itemIndex: number): boolean {
    return (chunkIndex + 1) * (itemIndex + 1) === this.skillSmallItem.length;
  }
}
