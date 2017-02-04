import { NgModule, Component }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';

import { NotifyModule }   from './modules/notify/notify';
import { ThreeangularModule }   from './modules/threeangular/threeangular';

import '../../sass/style.scss';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), ThreeangularModule, NotifyModule.forRoot() ],
  declarations: [ AppComponent ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})

export class App {
  constructor(){
  }
}
