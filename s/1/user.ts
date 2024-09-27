class User {
  private _name: string;

  private _firstname: string;

  public get name(): string {
    return this.name;
  }

  public get firstname(): string {
    return this._firstname;
  }

  constructor(name: string, firstname: string) {
    this._name = name;
    this._firstname = firstname;
  }

  public updateUserInDB(id: string, _user: User) {
    console.log("Update informations of user", id);
  }
}
