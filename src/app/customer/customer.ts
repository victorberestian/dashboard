import { Person } from '../person';

export class Customer extends Person {

  private _contractNumber: number;
  constructor(userName: string, cContractNumber: number) {

    super(userName);
    this._contractNumber = cContractNumber;
  }
  get contractNumber(): number {
    return this._contractNumber;
  }
}

// TODO: Move this in fakeBackEnd
const Customers = [
  {
    name: 'Martin Black',
    contractNo: 123456789,
  },
  {
    name: 'Hannah Travis',
    contractNo: 654876123,
  },
  {
    name: 'Sam Tracy',
    contractNo: 548751542,
  },
];

export {Customers};
