import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers: any[];
  cService:CustomerServiceService
  customer:any;
  constructor(cs: CustomerServiceService) {
    this.cService = cs;
    this.customers = cs.getCustomers();
  }

  onCustomerClick(id: number) {
    this.customer=this.cService.getCustomersById(id);
  }

}
