import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-builder',
  templateUrl: './portfolio-builder.component.html',
  styleUrl: './portfolio-builder.component.css'
})
export class PortfolioBuilderComponent {

  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted : boolean = false;
  showHeading : boolean = true;
  qualification = [{school: '', degree: '', year: ''}];

  addQualification(){
    this.qualification.push({school: '', degree: '', year:''});
  }

  submit(){
    this.submitted = true;
    this.showHeading = false;
  }

  edit(){
    this.submitted = false;
    this.showHeading = true;
  }
}
