export class Person {

  private _name: string;
  constructor(userName: string) {
    this._name = userName;
  }
  get name(): string {
    return this._name;
  }
}
