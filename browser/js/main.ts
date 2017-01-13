//require('../../node_modules/three/examples/js/controls/OrbitControls.js');

// Bootstrap
/*
import '../../node_modules/bootstrap/js/src/alert';
import '../../node_modules/bootstrap/js/src/button';
import '../../node_modules/bootstrap/js/src/carousel';
import '../../node_modules/bootstrap/js/src/collapse';
import '../../node_modules/bootstrap/js/src/dropdown';
import '../../node_modules/bootstrap/js/src/modal';
import '../../node_modules/bootstrap/js/src/popover';
import '../../node_modules/bootstrap/js/src/scrollspy';
import '../../node_modules/bootstrap/js/src/tab';
import '../../node_modules/bootstrap/js/src/tooltip';
import '../../node_modules/bootstrap/js/src/util';
*/

import * as THREE from 'three';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(App);

$(function(){
  console.log(THREE);
})
