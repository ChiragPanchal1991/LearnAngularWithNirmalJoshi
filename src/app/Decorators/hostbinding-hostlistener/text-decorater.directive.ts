import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[TextDecorater]'
})
export class TextDecoraterDirective implements OnInit  {
  @HostBinding('style.backgroundColor') bgColor?:string;
  @HostBinding('style.Color') color?:string;
  constructor() { }
  
  ngOnInit(): void {
    this.bgColor = '#12e233';
      this.color = '#b31212';
  }


  @HostListener('click') onClick(){
    if(this.bgColor == '#12e233'){
      this.bgColor = '#00BCD4';
      this.color = '#b3121e';
    }
    else{
      this.bgColor = '#12e233';
      this.color = '#795548';
    }
  }
}
