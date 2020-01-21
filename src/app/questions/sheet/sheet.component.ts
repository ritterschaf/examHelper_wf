import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import * as vexflow from 'vexflow';

@Component({
  selector: 'app-sheet',
 template: `<div [id]='DivId'></div>`,
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements AfterViewInit {
  number = null;
  @Input() shValue = '';
  shValue2 = 'd#';
  @Input() DivId: number;
  number2 = 15;

  constructor() {
  }

  ngAfterViewInit() {

    this.number2++;
    let name = this.DivId.toString();

    if (this.shValue === 'b' || this.shValue === 'B') {
      this.shValue = 'bb';
    }
    if (this.shValue === 'h' || this.shValue === 'H') {
      this.shValue = 'x';
    }

    if (!this.shValue.includes('/')) {
    this.number = Math.floor(Math.random() * 3) + 3;
    this.shValue = `${this.shValue}/${this.number}`;
    }

    this.draw(this.DivId.toString());

  }

  draw(divname) {


    const VF = vexflow.Flow;
    const div = document.getElementById(divname);
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    renderer.resize(120, 150);
    const context = renderer.getContext();
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

    const stave = new VF.Stave(10, 10, 100);
    stave.addClef('treble');
    stave.setContext(context).draw();

    let notes = [];

    if (this.shValue.includes('#') && this.shValue !== 'b' || this.shValue.includes('b') && this.shValue !== 'b') {
      notes = [
        new VF.StaveNote({
          keys: [this.shValue],
          duration: 'q'
        }).addAccidental(0, new VF.Accidental(this.shValue.slice(1, -2)))
      ];

    } else {
      notes = [
        new VF.StaveNote({keys: [this.shValue], duration: 'q'})
      ];
    }

    const voice = new VF.Voice({num_beats: 1, beat_value: 4});
    voice.addTickables(notes);
    const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 50);
    voice.draw(context, stave);
  }
}


