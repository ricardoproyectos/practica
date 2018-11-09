import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent  {
  listForm: any = [];
  model: any = {};
  constructor(private http: HttpClient) {}

  onSubmit() {
    let formdata = JSON.stringify(this.model);
    // console.log(data)
    // this.listForm = this.model.push();
    // console.log(this.listForm);
    this.http.get(formdata).subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit(): void {
    // Make the HTTP request:
    
  }

}


