import { Component, OnInit, Input } from '@angular/core';

import { LagItemComponent } from '../lag-item';

@Component({
  moduleId: module.id,
  selector: 'lag-list',
  directives: [LagItemComponent],
  template: `
    <lag-item *ngFor="let lagItem of lagItems | async" [lagItem] = "lagItem"></lag-item> 
  `,
})
export class LagListComponent implements OnInit {
  @Input() lagItems: any[];

  constructor() {}

  ngOnInit() {
  }

}
