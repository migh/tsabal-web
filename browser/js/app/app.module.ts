import { NgModule, Component }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';

import { NotifyModule, NotifyService }   from './modules/notify/notify';

import { NotifyComponent }  from './components/notify/notify.component';
import { NavArea }  from './components/navArea/navArea.component';
import { SubscribeBox }  from './components/subscribeBox/subscribeBox.component';

/** Sections */
import { Landing }  from './components/sections/landing/landing.component';
import { Product }  from './components/sections/product/product.component';
import { Pricing }  from './components/sections/pricing/pricing.component';
import { Showroom }  from './components/sections/showroom/showroom.component';
import { Fineprint }  from './components/sections/fineprint/fineprint.component';

import * as i18nConfig from '../../i18n/malinche.json';
import * as esStrings from '../../i18n/es/strings.json';
import * as enStrings from '../../i18n/en/strings.json';
import '../../sass/style.scss';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), NotifyModule.forRoot() ],
  declarations: [
    AppComponent,
    NotifyComponent,
    NavArea,
    SubscribeBox,
    Landing,
    Product,
    Pricing,
    Showroom,
    Fineprint
  ],
  providers:    [ NotifyService ],
  bootstrap:    [ AppComponent ]
})

export class App {
  constructor(){
  }
}
