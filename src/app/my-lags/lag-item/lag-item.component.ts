import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'lag-item',
  directives: [CollapseDirective],
  templateUrl: 'lag-item.component.html'
})
export class LagItemComponent implements OnInit {
  @Input() lagItem: any;
  @Output() remove: EventEmitter<string> = new EventEmitter(false);
  public isCollapsed:boolean = true;
  constructor() {
    
    
  }

  onRemove(key){
    this.remove.emit(key);
  }
  ngOnInit() {
    //console.log(this.lagItem);
  }

}
