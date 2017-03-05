import { Component } from '@angular/core';

import { Page } from '../common/page/page.component';

@Component({
  selector: 'tsabal-about',
  templateUrl: './about.component.html',
  // styleUrls: [ './about.component.scss' ]
})

export class AboutComponent extends Page {
  constructor(){
    super('About');
    this.shout('Welcome!!!!');
  }
}
