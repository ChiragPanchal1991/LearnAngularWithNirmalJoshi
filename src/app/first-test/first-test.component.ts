import { Component } from '@angular/core';

@Component({
  selector: 'first-test',
  templateUrl: './first-test.component.html',
  styleUrl: './first-test.component.css'
})
export class FirstTestComponent {
a = 80;
b = 8;

sum = this.a + this.b;
diff = this.a - this.b;
mul = this.a * this.b;
div = this.a / this.b;
 
isChecked = true;
CheckBoxName = "First Check box";

twoWayBinding:string = "";

clickCount =0;
btnClicked(){
  this.clickCount = this.clickCount +1;
}

shiftY(){
  console.log("Shift + Y key pressed");
}
}
