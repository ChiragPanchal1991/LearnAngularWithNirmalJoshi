import { Component } from '@angular/core';

@Component({
  selector: 'ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  fontweight:string="normal";
  fontStyle:string="normal";
  textDecoration:string="none";
  onBoldboxChange(event:any){
    if (event.target.checked) {
      this.fontweight="bold";
    }
    else{
      this.fontweight="normal";
    }
  }

  onItalicboxChange(event:any){
    if (event.target.checked) {
      this.fontStyle="italic";
    }
    else{
      this.fontStyle="normal";
    }
  }

  onUnderlineboxChange(event:any){
    if (event.target.checked) {
      this.textDecoration="underline";
    }
    else{
      this.textDecoration="none";
    }
  }
}
