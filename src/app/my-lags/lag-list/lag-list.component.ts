import { Component, OnInit, Input } from '@angular/core';

import { LagItemComponent } from '../lag-item';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'lag-list',
  directives: [LagItemComponent],
  template: `
    <lag-item *ngFor="let lagItem of lagItems | async" 
          [lagItem] = "lagItem"
          (remove)="onRemoveItem($event)"></lag-item> 
  `,
})
export class LagListComponent implements OnInit {
  @Input() lagItems: FirebaseListObservable<any[]>;

  constructor() {}

  ngOnInit() {
  }
  onRemoveItem(key){
    this.lagItems.remove(key);
    
    
  }

}
