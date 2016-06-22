import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { BuetLaggersAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { ROUTER_PROVIDERS } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(BuetLaggersAppComponent,[
  ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDCjbkFJviTR1n2Flrb_pkvDuPuiJYowNU",
    authDomain: "buet-laggers.firebaseapp.com",
    databaseURL: "https://buet-laggers.firebaseio.com",
    storageBucket: "buet-laggers.appspot.com",
  })

]);

