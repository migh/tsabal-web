//import * as THREE from 'three';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(App);
