import { Component } from '@angular/core';

import { NotifyService } from '../../modules/notify/services/notify.service';
import { Message } from '../../modules/notify/models/message';


@Component({
  selector: 'tsabal-notify',
  templateUrl: './notify.component.html',
  // styleUrls: [ './notify.component.scss' ]
})

export class NotifyComponent {
  messages: Array<Message> = [];

  constructor(
    public notifyService: NotifyService
  ){
    this.messages = notifyService.getMessageList();
  }
}
