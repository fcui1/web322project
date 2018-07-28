import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/data/employee';
import { EmployeeService } from 'src/app/data/employee.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    public employees : Employees[] 
    public getEmployeesSub : any
    public loadingError : boolean = false
  constructor(private employeeservice : EmployeeService) { }

  ngOnInit() {

    this.getEmployeesSub = this.employeeservice.getEmployees().subscribe((employeesReturned)=>{
        this.employees = employeesReturned;
      }, () => {
        this.loadingError = true;
      })
    }
    ngOnDestroy(){
        this.getEmployeesSub.unsubscribe();
    }
  }

