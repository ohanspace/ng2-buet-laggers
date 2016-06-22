import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MyLagsComponent } from './my-lags';


@Routes([
  {
    path: '/my-lags',
    component: MyLagsComponent
  }
])
@Component({
  moduleId: module.id,
  selector: 'buet-laggers-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <p> app component works</p>
    <router-outlet></router-outlet>
  `,
})
export class BuetLaggersAppComponent {
  constructor(private router: Router){}
}
