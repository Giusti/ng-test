import { Component } from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor(private dialog: DialogComponent) {}

  openDialog() {
    this.dialog.open();
  }

}
