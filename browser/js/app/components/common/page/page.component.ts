import { NotifyInterface } from '../../../modules/notify/interfaces/notify.interface';
import { NotifyService } from '../../../modules/notify/services/notify.service';

export class Page implements NotifyInterface {
  notifyService: NotifyService;
  constructor (
    public description:String
  )
  {
    this.testMethod(description + ' initialized...');
  }

  shout (msg: String) {
    console.log('WE ARE SHOUTING...');
    console.log(msg);
  }

  testMethod (msg: String) {
    console.log(msg);
  }
}
