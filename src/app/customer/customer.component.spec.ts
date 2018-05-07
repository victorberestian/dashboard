import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';

import { Customer } from './customer';

describe('Customer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [
        CustomerComponent
      ],
    }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const component = fixture.debugElement.componentInstance;

    return { component, fixture };
  }

  it('form invalid when empty', () => {
    const { component } = setup();
    expect(component.customerForm.valid).toBeFalsy();
  });

  it('submitting a form emits a customer', () => {
    const { component, fixture } = setup();
    expect(component.customerForm.valid).toBeFalsy();

    component.customerForm.controls['name'].setValue("test");
    component.customerForm.controls['contractNo'].setValue(987654321);
    expect(component.customerForm.valid).toBeTruthy();

    let customer: Customer;

    component.savedCustomer.subscribe((value) => customer = value);

    component.addCustomer();

    fixture.detectChanges();

    expect(customer.name).toBe("test");
    expect(customer.contractNumber).toBe(987654321);
  });
});
