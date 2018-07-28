import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employees } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient ) { }

  public getEmployees() : Observable<Employees[]> {
      return this.http.get<Employees[]>("https://afternoon-refuge-46215.herokuapp.com/employees");

  }
}
