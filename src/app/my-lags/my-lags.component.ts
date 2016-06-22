import { Component, OnInit } from '@angular/core';

import { LagFormComponent } from './lag-form';
import { LagListComponent } from './lag-list';
import { LagService } from './shared/lag.service';

@Component({
  moduleId: module.id,
  selector: 'my-lags',
  directives: [LagFormComponent, LagListComponent],
  providers: [LagService],
  template: `
    <lag-form (lagCreated)="lagService.createMyLag($event)"></lag-form>
    <lag-list [lagItems]="lagService.getMyLags()"></lag-list>
  `,
})
export class MyLagsComponent implements OnInit {

  constructor(private lagService: LagService) {}

  ngOnInit() {
  }

}
