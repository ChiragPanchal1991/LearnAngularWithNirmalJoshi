import { Component } from '@angular/core';

@Component({
  selector: 'ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
  anyNumber:number = 0;
  isPOrN:Number = 0
  onKeyUp(){
    if(this.anyNumber > 0)
      this.isPOrN = 1;
    else if(this.anyNumber < 0)
      this.isPOrN = -1;
    else
    this.isPOrN = 0;
  }
}
