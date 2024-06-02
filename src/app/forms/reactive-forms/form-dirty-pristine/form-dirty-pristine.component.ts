import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dirty-pristine',
  templateUrl: './form-dirty-pristine.component.html',
  styleUrl: './form-dirty-pristine.component.css'
})
export class FormDirtyPristineComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!*&])(?!\s).*$/)
      ]]
    });
  }
  formSubmit(){
    if(this.myForm.valid){
      alert("Form Submitted");
    }
  }
}
