import { NgModule, ModuleWithProviders }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { NotifyService } from './services/notify.service';

@NgModule({
  imports:      [ BrowserModule ],
  exports:      [ ],
  declarations: [  ],
  providers:    [  ]
})

export class NotifyModule {
  public static forRoot(): ModuleWithProviders {
      return {
        ngModule: NotifyModule,
        providers: [
          NotifyService
        ]
      };
  }

  constructor(){
    console.log('Notify Module was imported...');
  }
}
