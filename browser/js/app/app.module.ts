import { NgModule, Component }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';

import { Threeangular as Threeng }   from '../lib/threeangular/threeangular.module';
import '../../sass/style.scss';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), Threeng ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class App {
  constructor(){
    console.log('The app');
  }
}
