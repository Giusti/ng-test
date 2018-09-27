import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatDialog} from '@angular/material';
import {DialogComponentMock} from './dialog/dialog.component.mock';
import {Observable, of} from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let dialog: DialogComponentMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: MatDialog, useClass: DialogComponentMock}, AppComponent],
    }).compileComponents();
    component = TestBed.get(AppComponent);
    dialog = TestBed.get(MatDialog);
  }));

  it('should open the dialog', () => {
      dialog.open.and.returnValue(of({}));
      component.openDialog();
      expect(dialog.open).toHaveBeenCalled();
  });
});
