import { Component } from '@angular/core';

@Component({
  selector: 'slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styleUrl: './slice-pipe.component.css'
})
export class SlicePipeComponent {
  text="Since the date is considered as local in Angular, you can first convert it to UTC";
  array = ["Aa","Bb","Cc","Dd","Ee","Ff"];
  employees:{name:string,age:number,location:string,salary:number}[] = [
    {name:"Chiarg",age:32,location:"Mumbai",salary:80000},
    {name:"Heena",age:36,location:"Melbron",salary:40000},
    {name:"Bhavika",age:30,location:"Patan",salary:120000},
    {name:"Twisha",age:12,location:"Patan",salary:10000},
    {name:"Mahendra",age:65,location:"Malad",salary:60000},
    {name:"Rekha",age:60,location:"Malad",salary:60000},
    {name:"Viranch",age:37,location:"Melbron",salary:60000},
   ];

   pageSize=3;
   startIndex=0;
   endIndex=this.pageSize;

   isNextDisabled = false;
   isPreviousDisabled = true;

   onPreviousClick(){
    this.startIndex = this.startIndex - this.pageSize;
    this.endIndex = this.endIndex - this.pageSize;
    console.log(this.startIndex);
    console.log(this.endIndex);
    this.CheckPageControlls(); 
  }

   onNextClick(){
    this.startIndex = this.startIndex + this.pageSize;
    this.endIndex = this.endIndex + this.pageSize;
    console.log(this.startIndex);
    console.log(this.endIndex);
    this.CheckPageControlls();
   }

   CheckPageControlls(){
    if(this.endIndex>= this.employees.length)
      this.isNextDisabled = true;
    else  
     this.isNextDisabled = false;

     if(this.startIndex<= 0)
      this.isPreviousDisabled = true;
    else  
     this.isPreviousDisabled = false;
    }

}
