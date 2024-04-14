import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  isvisible:boolean = false;
  status = "Show";
  btnClicked(){
    this.isvisible = !this.isvisible;

    if(this.isvisible){
      this.status = "Hide"}
    else{
      this.status = "Show"
    }
      
  }
}
