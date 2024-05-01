import { Injectable } from '@angular/core';

@Injectable()
export class CCounterService {
  count:number;

  constructor() { 
    this.count = 0;
  }

  incrementCount(){
    this.count++;
    console.log(this.count);
  }

  getCount()
  {
    return this.count;
  }
}
