import { Person } from '../person';

export class Employee extends Person {

  private _salary: number;
  private _hireDate: string;
  constructor(userName: string, empSalary: number, empHireDate: string) {

    super(userName);
    this._salary = empSalary;
    this._hireDate = empHireDate;
  }
  get salary(): number {
    return this._salary;
  }
  get hireDate(): string {
    return this._hireDate;
  }
}

// TODO: Move this in fakeBackEnd
const Employees = [
  {
    name: 'Jhon Doe',
    salary: 1000,
    hire: '2015-02-10T21:00:12.760Z'
  },
  {
    name: 'Mary Jane',
    salary: 850,
    hire: '2013-11-01T21:00:12.760Z'
  },
  {
    name: 'Michael Stuart',
    salary: 1450,
    hire: '2012-07-23T21:00:12.760Z'
  },
];

export {Employees};
