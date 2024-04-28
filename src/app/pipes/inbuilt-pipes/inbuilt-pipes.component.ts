import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.css'
})
export class InbuiltPipesComponent {
 employees:{name:string,age:number,location:string,salary:number}[] = [
  {name:"Chiarg",age:32,location:"Mumbai",salary:80000},
  {name:"Heena",age:36,location:"Melbron",salary:40000},
  {name:"Bhavika",age:30,location:"Patan",salary:120000},
  {name:"Twisha",age:12,location:"Patan",salary:10000},
  {name:"Mahendra",age:60,location:"Malad",salary:60000},
 ];

 systemData:Date= new Date();

 pi=3.145345545;
}
