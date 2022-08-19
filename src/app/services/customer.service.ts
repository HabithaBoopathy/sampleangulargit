import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL='http://localhost:8090/';
  constructor(private http:HttpClient) { }
  createCustomer(customer:Customer): Observable<boolean> {
    return this.http.post<boolean>(`${this.URL}customer`, customer);
  }
  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.URL}customer`);
  }
}
