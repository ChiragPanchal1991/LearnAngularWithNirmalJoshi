import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contentchild-child',
  templateUrl: './contentchild-child.component.html',
  styleUrl: './contentchild-child.component.css'
})
export class ContentchildChildComponent {

  @ContentChild('message') messageRef?: ElementRef<HTMLParagraphElement>;  

  ngAfterContentInit(): void {

    if (this.messageRef)
      this.messageRef.nativeElement.innerHTML = "ngAfterContentInit hook change the message";
  }
}
