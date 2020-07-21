export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    private _jwt: string) {
  }

  get jwt() {
    return this._jwt;
  }
}
