import { Injectable } from '@angular/core';

import { Message } from '../models/message';

@Injectable()
export class NotifyService {
  messages: Array<Message>;

  constructor() {
    this.messages = [];
  }


  /**
   * emit - Emit some message to the user
   *
   * @param  {type} message: Message description
   * @return {type}                  description
   */
  emit (message: Message) {

    if ( !message.id ) {
      message.id = ( Math.random() * 10000 ) % 15;
    }

    if ( !message.timeToLive ) {
      message.timeToLive = 500;
    }

    this.messages.push(message);
  }


  /**
   * getMessageList - Returns the message's list
   *
   * @return { Array<Message> }  Return an array of messages
   */
  getMessageList() {
    return this.messages;
  }
}
