class UserData {
  private _id: number;
  private _username: string;
  private _password: string;
  private _isSignedIn: boolean;

  constructor(
    id: number,
    username: string,
    password: string,
    isSignedIn: boolean,
  ) {
    this._id = id;
    this._username = username;
    this._password = password;
    this._isSignedIn = isSignedIn;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get isSignedIn(): boolean {
    return this._isSignedIn;
  }
  set isSignedIn(value: boolean) {
    this._isSignedIn = value;
  }
}

export default UserData;
