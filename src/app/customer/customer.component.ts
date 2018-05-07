import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// TODO: use Customer service to get list of customers
import { Customer, Customers } from './customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;
  @Output() savedCustomer = new EventEmitter<Customer>();

  customerForm: FormGroup;
  customers: Customer[] = [];


  constructor(private fb: FormBuilder) {

    this.customers = Customers.map(
      (customer) => {
        const {name, contractNo} = customer;
        return new Customer(name, contractNo);
      }
    );

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      contractNo: ['', Validators.required],
    });
  }

  addCustomer() {
    if (this.customerForm.valid) {
      const {name, contractNo} = this.customerForm.value;
      const newCustomer = new Customer(name, contractNo);
      this.customers.push(newCustomer);
      this.customerForm.reset();

      this.savedCustomer.emit(newCustomer);
    }
  }


}
