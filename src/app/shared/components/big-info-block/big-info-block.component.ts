import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-info-block',
  templateUrl: './big-info-block.component.html',
  styleUrls: ['./big-info-block.component.scss']
})
export class BigInfoBlockComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  @Input() _editable!: string;
  @Input() textColor!: string;
  @Input() borderColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
