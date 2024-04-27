import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inout-output',
  templateUrl: './inout-output.component.html',
  styleUrl: './inout-output.component.css'
})
export class InoutOutputComponent implements OnInit,OnChanges {
  constructor(){
    console.log("InoutOutput component constructor");
  }
  ngOnInit(): void {
    console.log("InoutOutput component ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("InoutOutput component ngOnChanges");
    console.log(changes);
    console.log(changes['items'].currentValue);
    console.log(changes['items'].previousValue);
  }
  num:number=0;
  numArr:number[]=[4,7,2,1];
  
  addElement(){
    if(this.num > 0){
      this.numArr.push(this.num);
      this.num = 0
    }
    console.log(this.numArr);
  }

  deleteItem(index:number){
    this.numArr.splice(index, 1); 
  }
}