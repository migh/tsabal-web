import { Injectable }    from '@angular/core';

@Injectable()
export class NotifyService {
  constructor() {
    console.log('Notify Service launched');
  }

  test(){
    console.log('Just a test function.');
  }
}
