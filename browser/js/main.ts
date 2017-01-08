import $ from 'jquery';
import Tether from 'tether';
(<any>window).$ = $;
(<any>window).Tether = Tether;

require('../../node_modules/three/examples/js/controls/OrbitControls.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(App);


$(function(){
  console.log('Hola mundo');
});
