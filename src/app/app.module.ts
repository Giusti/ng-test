import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {DialogComponent} from './dialog/dialog.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, MatTableModule, MatFormFieldModule, MatDialogModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, DialogComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }

