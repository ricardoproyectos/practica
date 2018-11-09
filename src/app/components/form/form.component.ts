import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent  {
  listForm: any = [];
  model: any = {};

  onSubmit() {
    let data = JSON.stringify(this.model);
    console.log(data)
    // this.listForm = this.model.push();
    // console.log(this.listForm);

  }
}


