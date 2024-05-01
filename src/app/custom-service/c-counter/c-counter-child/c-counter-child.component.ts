import { Component } from '@angular/core';
import { CCounterService } from '../c-counter.service';

@Component({
  selector: 'c-counter-child',
  templateUrl: './c-counter-child.component.html',
  styleUrl: './c-counter-child.component.css'
})
export class CCounterChildComponent {
  count: number;

  constructor(private cs: CCounterService) {
    this.count = this.cs.getCount();
  }
  
  incrementCount() {
    this.cs.incrementCount()
  }

}
