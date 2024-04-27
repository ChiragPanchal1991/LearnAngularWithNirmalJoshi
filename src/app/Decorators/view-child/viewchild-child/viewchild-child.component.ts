import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrl: './viewchild-child.component.css'
})
export class ViewchildChildComponent  {
  
  @ViewChild('message') messageRef?: ElementRef;

  // ngAfterViewInit(): void {
  //   console.log(this.messageRef?.nativeElement.innerText);
    
  //   if(this.messageRef?.nativeElement)
  //     this.messageRef.nativeElement.innerHTML = "Child Child ngAfterViewInit hook change the message ";
  // }
  

}
