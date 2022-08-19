import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Sample } from '../models/sample';
import { CustomerService } from '../services/customer.service';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  sample:Sample;
  samples:Sample[];
  customer:Customer;
  customers:Customer[];

  constructor(private httpClient: HttpClient,private sampleService:SampleService,private router:Router,
    private customerService:CustomerService,) {
    this.sample=new Sample();
    this.samples=[];
    this.customer = new Customer();
    this.customers = []; 
   }

  ngOnInit(): void {
    this.fetchSample();
    this.fetchCustomer();
  }
  reloadData() {
    this.sample = new Sample();
    this.fetchSample();
    this.fetchCustomer();
}
fetchSample() {
  this.sampleService.getSample().subscribe(
  (data) => {
    this.samples = data;
    console.log('Checkpoint 1');
  },
  (err) => {
    console.log(err);
  }
);  
}
fetchCustomer() {
  this.customerService.getCustomer().subscribe(
  (data) => {
    this.customers = data;
  },
  (err) => {
    console.log(err);
  }
);  
}
// validateSampleData(): boolean {
//     let flag = false;
//     if (this.sample.sampleNo == '') {
//       alert('Please enter No');
//     }else {
//       flag = true;
//     }
//     return flag;
//   }
  validateCustomerData(): boolean {
    let flag = false;
   
     if (this.customer.sampleDate == '') {
      alert('Please enter the date');
    } 
    else if (this.customer.customerName == '') {
      alert('Please enter the name');
    }else {
      flag = true;
    }
    return flag;
  }
  onRegister() {
    this.fetchSample();
    console.log('Checkpoint 2');
    if (this.validateCustomerData()) {
      //asynchronous vs synchronous programming
        this.customerService.createCustomer(this.customer).subscribe(//check the change
        (data) => {
          if (data) { 
            //reload data since new record has been added
            this.reloadData();
            alert('User registered successfully')
          } 
          else
          alert(
            ' already exists'
          ); 
          },
        
        (err) => {
          console.log(err);
        }
      ); 
    }
  }
}




