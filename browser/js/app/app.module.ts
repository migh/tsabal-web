import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';

import '../../sass/style.scss';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class App { }
