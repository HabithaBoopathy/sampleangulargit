import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Sample } from '../models/sample';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  URL='http://localhost:8090/';
  constructor(private http:HttpClient) { }
  
  getSample(): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${this.URL}sample`);
  }
  
}
