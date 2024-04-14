import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-peram',
  templateUrl: './query-peram.component.html',
  styleUrl: './query-peram.component.css'
})
export class QueryPeramComponent {
  emps:{id:number, name:string}[]=[
    {id:1, name:"Chirag"},
    {id:2, name:"Bhavika"},
    {id:3, name:"Nani"}]

    constructor(private route:ActivatedRoute){
      route.queryParams.subscribe((perams)=>{
        console.log("id:" + perams["id"]);
        console.log("name:" + perams["name"]);
      });
    }
}
