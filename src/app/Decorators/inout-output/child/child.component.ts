import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'inout-output-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterViewInit,AfterContentChecked,AfterViewChecked {
  constructor(){
    console.log("Child component constructor");
  }
  ngAfterContentChecked(): void {
    console.log("Child component ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("Child component ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("Child component ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log("Child component ngAfterViewInit");
  }

  //Never use ngOnChanges and ngDoCheck in same component
  ngDoCheck(): void {
    console.log("Child component ngDoCheck");
    if(this.arrayCount != this.items.length){
      console.log("Child component ngDoCheck: count are diferent");
      this.arrayCount = this.items.length;
    }
    else{
      console.log("Child component ngDoCheck: count are same");
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    //The ngOnChanges hook is used to detect & respondto changes in input properties of an Angular component. It is called whenever there are changes to input properties.
    //In this example ngOnChanges hook not executing bucause we just adding or removing element from array not changeing entier array.
    console.log("Child component ngOnChanges");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("Child component ngOnInit");
  }
  @Output() itemDelted = new EventEmitter<number>();
  @Input() items:number[]=[];
  arrayCount:number = 0;
  deleteItem(index:number){
    this.itemDelted.emit(index);
  }
}
