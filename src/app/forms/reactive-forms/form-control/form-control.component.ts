import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
   usernameControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
   ]);
  
   showValue(){
       console.log('Value', this.usernameControl.value);
       console.log('Validation Status', this.usernameControl.valid);
       console.log(this.usernameControl.errors);
  }
}
