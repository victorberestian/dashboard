import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
