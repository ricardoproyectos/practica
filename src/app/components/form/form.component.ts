import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent  {
   private listForm: Array<any> = [];
   private model: any = {};
 
  constructor() {}
  
  onSubmit() {
    this.listForm.push(this.model);
    this.model = {};
    console.log(this.listForm);
    // setTimeout('document.form.reset()',1000);
  }

  ngOnInit(): void {
  }

}


