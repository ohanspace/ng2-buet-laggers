import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lag-item',
  template: `
    <p>{{lagItem.courseCode}}</p>
  `,
})
export class LagItemComponent implements OnInit {
  @Input() lagItem: any;
  constructor() {}

  ngOnInit() {
  }

}
