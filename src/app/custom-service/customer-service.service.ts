import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers:{id:number,name:string,age:number,location:string,salary:number}[] = [
    {id:1,name:"Chiarg",age:32,location:"Mumbai",salary:80000},
    {id:2,name:"Heena",age:36,location:"Melbron",salary:40000},
    {id:3,name:"Bhavika",age:30,location:"Patan",salary:120000},
    {id:4,name:"Twisha",age:12,location:"Patan",salary:10000},
    {id:5,name:"Mahendra",age:65,location:"Malad",salary:60000},
    {id:6,name:"Rekha",age:60,location:"Malad",salary:60000},
    {id:7,name:"Viranch",age:37,location:"Melbron",salary:60000},
   ];

   getCustomers(){
    return this.customers;
   }

   getCustomersById(id:number){
    return this.customers.find((e)=> e.id==id);
   }

}
