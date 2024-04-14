import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-routing',
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.css'
})
export class DynamicRoutingComponent {
emps:{id:number, name:string}[]=[
  {id:1, name:"Chirag"},
  {id:2, name:"Bhavika"},
  {id:3, name:"Nani"}]
}
