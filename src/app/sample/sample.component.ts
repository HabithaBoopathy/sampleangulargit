import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Sample } from '../models/sample';
import { CustomerService } from '../services/customer.service';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
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
   
  }
  reloadData() {
    this.sample = new Sample();
   
    
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

}
