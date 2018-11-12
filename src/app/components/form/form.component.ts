import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent  {
  model: any [] = [];
  listForm: any[] = [];
  // datos: any = '';
  constructor() {}
  
  onSubmit() {
    this.listForm.push(this.model);
    // this.datos = this.listForm;
    console.log(this.listForm);
    // setTimeout('document.form.reset()',1000);
  }

  ngOnInit(): void {
  }

}


