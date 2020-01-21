import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public usejson: boolean;
  public startupSwitch = true;
  constructor() {}

  JSONchoice(choice) {
    this.usejson = choice;
    this.startupSwitch = false;
  }
}

