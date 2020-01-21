import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-math',
  template: `<ng-katex [equation]='mathQuestion'></ng-katex>`,
  styleUrls: ['./math.component.scss'],
})
export class MathComponent implements OnInit {
  @Input() mathQuestion: string;

  constructor() { }

  ngOnInit() {}

}


