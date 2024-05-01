import { Component } from '@angular/core';
import { CCounterService } from './c-counter.service';

@Component({
  selector: 'c-counter',
  templateUrl: './c-counter.component.html',
  styleUrl: './c-counter.component.css',
  providers:[CCounterService]
})
export class CCounterComponent {

}
