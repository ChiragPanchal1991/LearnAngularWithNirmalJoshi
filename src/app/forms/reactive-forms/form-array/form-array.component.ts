import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {
  employeeForm: FormGroup;
  
  constructor(){
    this.employeeForm = new FormGroup({
      employees: new FormArray([])
    });
  }
  ngOnInit(): void {
    
  }
  get employees():FormArray{
    return this.employeeForm.get("employees") as FormArray
  }

  addEmployee():void{
    const employeeGroup = new FormGroup({
      name: new FormControl(''),
      job: new FormControl(''),
    });
    this.employees.push(employeeGroup);
  }

  submitForm(){
    console.log(this.employeeForm.value);
  }
}
