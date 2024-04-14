import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  id:number=0;
  name:string="";
constructor(private route:ActivatedRoute){
  var params = route.snapshot.params;
  this.id = params["id"];
  this.name = params["name"];
}
}
