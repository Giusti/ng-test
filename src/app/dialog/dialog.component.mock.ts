import {Injectable} from '@angular/core';

@Injectable()
export class DialogComponentMock {
  open: jasmine.Spy = jasmine.createSpy('open');
}
