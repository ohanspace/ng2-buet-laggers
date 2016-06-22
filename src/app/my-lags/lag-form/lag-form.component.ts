import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup, Validators} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'lag-form',
  templateUrl: 'lag-form.component.html' ,
})
export class LagFormComponent implements OnInit {
  @Output() lagCreated: EventEmitter<any> = new EventEmitter(false);

  form: ControlGroup;


  constructor(private fb: FormBuilder) {}

  private buildForm(){
    this.form = this.fb.group({
      courseCode: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  submit(){
    console.log(this.form.value);
    this.lagCreated.emit(this.form.value);
  }

}
