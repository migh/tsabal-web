import { Component } from '@angular/core';

import { NotifyService } from '../../modules/notify/services/notify.service';
import { Page } from '../common/page/page.component';

@Component({
  selector: 'tsabal-create',
  templateUrl: './create.component.html',
  // styleUrls: [ './create.component.scss' ]
})

export class CreateComponent extends Page{
  constructor(
    public notifyService: NotifyService
  ){
    super('Create');
  }

  /**
  * createJSON - Creates a json file containing the configuration created.
  */
  createJSON () {
    console.log('createJSON clicked');
  }


  /**
   * createData - Creates a dat file containing the configuration created.
   */
  createData () {
    console.log('createData clicked');
    this.notifyService.emit({title: 'Some message', content: 'The content is pretty lame but here it is.'});
  }
}
