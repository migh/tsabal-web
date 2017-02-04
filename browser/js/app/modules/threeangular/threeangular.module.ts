import { NgModule, Component }      from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { Threeangular }    from './components/threeangular.component';

//import './styles/threeangular.scss';

@NgModule({
  imports:      [ BrowserModule ],
  exports:      [ Threeangular ],
  declarations: [ Threeangular ],
  bootstrap:    [ Threeangular ]
})

export class ThreeangularModule {
  constructor(){
    console.log('Threeangular module!');
  }

  getComponent () {
    return Threeangular;
  }
}
