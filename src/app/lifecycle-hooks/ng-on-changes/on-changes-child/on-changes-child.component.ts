import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'on-changes-child',
  templateUrl: './on-changes-child.component.html',
  styleUrl: './on-changes-child.component.css'
})
export class OnChangesChildComponent implements OnChanges {
  oldText:string|undefined;
  newText:string|undefined;
  @Input() displayText:string = ''; 

  //ngOnChanges executs when any @Input variable changed by its parent componet 
  // it a first life cycle hook 
  ngOnChanges(changes: SimpleChanges): void {
    this.newText = changes["displayText"].currentValue;
    this.oldText = changes["displayText"].previousValue;
  }

}
