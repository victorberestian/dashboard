import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';

import { Customer } from './customer/customer';

describe('Dashboard app', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [
        AppComponent,
        CustomerComponent,
        EmployeeComponent
      ],
    }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    return { fixture, app };
  }
  it('should create the app', async(() => {
    const { fixture, app } = setup();
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Dashboard'`, async(() => {
    const { fixture, app } = setup();
    expect(app.title).toEqual('Dashboard');
  }));

});
