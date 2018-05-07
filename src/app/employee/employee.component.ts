import { Component, OnInit } from '@angular/core';

// TODO: use Employee service to get list of customers
import { Employee, Employees } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor() {

    this.employees = Employees.map(
      (emp) => {
        const {name, hire, salary} = emp;
        return new Employee(name, salary, hire);
      }
    );

  }

  ngOnInit() {
  }

  deleteEmployee(employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(employee, 1);
  }

}
