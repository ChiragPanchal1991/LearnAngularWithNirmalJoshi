import { Component } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  selectedClass:string = "default";
  changeStyle(style:string){
    this.selectedClass = style;
  }

  getClass(){
    return 'green'
  }
}
