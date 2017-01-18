import { Component } from '@angular/core';

@Component({
  selector: 'threeangular',
  template: '<div id="threeangular">Threeangular!</div>'
})

export class ThreeangularComponent {
  constructor(){
    console.log('Threeangular component!');
  }
}
