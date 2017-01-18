import { NgModule, Component }      from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { ThreeangularComponent }    from './threeangular.component';

//import './styles/threeangular.scss';

@NgModule({
  imports:      [ BrowserModule ],
  exports:      [ ThreeangularComponent ],
  declarations: [ ThreeangularComponent ],
  bootstrap:    [ ThreeangularComponent ]
})

export class Threeangular {
  constructor(){
    console.log('Threeangular module!');
  }

  getComponent () {
    return ThreeangularComponent;
  }
}
