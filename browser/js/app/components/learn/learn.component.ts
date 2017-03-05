import { Component } from '@angular/core';

import { Page } from '../common/page/page.component';

@Component({
  selector: 'tsabal-learn',
  templateUrl: './learn.component.html',
  // styleUrls: [ './learn.component.scss' ]
})

export class LearnComponent extends Page {
  constructor(){
    super('Learn');
  }
}
