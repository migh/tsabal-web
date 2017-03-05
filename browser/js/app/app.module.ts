import { NgModule, Component }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';

import { NotifyModule  }   from './modules/notify/notify';
import { NotifyService }   from './modules/notify/notify';
import { ThreeangularModule }   from './modules/threeangular/threeangular';

import { NotifyComponent }  from './components/notify/notify.component';
import { CreateComponent }  from './components/create/create.component';
import { LearnComponent }   from './components/learn/learn.component';
import { AboutComponent }   from './components/about/about.component';

import '../../sass/style.scss';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), ThreeangularModule, NotifyModule.forRoot() ],
  declarations: [ AppComponent, NotifyComponent, CreateComponent, LearnComponent, AboutComponent ],
  providers:    [ NotifyService ],
  bootstrap:    [ AppComponent ]
})

export class App {
  constructor(){
  }
}
