import { Component } from '@angular/core';
import { NotifyService }   from './modules/notify/notify';

@Component({
  selector: 'tsabal',
  templateUrl: './views/tsabal.html'
})

export class AppComponent {
  constructor(
    private notify: NotifyService
  ){
  }
}
