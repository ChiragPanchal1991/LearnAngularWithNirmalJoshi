import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.css'
})
export class NgOnInitComponent implements OnInit {
  count: number = 0;

  //ngOnInit hook execute after component fully initiated.
  //Constructor executes before the ngOnChanges executes.
  //it is good prectice to make http request in ngOnInit method. 
  //if you make any https request from constructor it can lead to unexpected behevior becouse componet not fully initiated
  
  
  // constructor(){
  //   this.startCounter();
  // }
  ngOnInit(): void {
    this.startCounter();
  }
  startCounter(){
    setInterval(()=>{
      if(this.count <= 5){
        console.log('Logged from NgOnInitComponent:' + this.count++);
      }
    },1000);
  }
}
