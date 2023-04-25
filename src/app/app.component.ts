import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  options: any;
  formChangesSubscription: any;
  @ViewChild('form') ngForm: NgForm;

  updated: any;

  constructor() {
    this.options = { o1: true, o2: false }
  }

  ngOnInit() {
    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(form => {
      console.log(form);
      this.updated = form;
    })
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }
}
