import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@Component({
  selector: 'view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild(ViewchildChildComponent) childComponent?: ViewchildChildComponent;
  @ViewChild('message') messageRef?: ElementRef<HTMLParagraphElement>;
ngAfterViewInit(): void {
  this.messageRef = this.childComponent?.messageRef;

  if(this.messageRef)
    this.messageRef.nativeElement.innerHTML = "ngAfterViewInit hook change the message";
}

ChangeMessage(message:string){
console.log(message);
  if(this.messageRef)
    this.messageRef.nativeElement.innerHTML = message;
}



}
