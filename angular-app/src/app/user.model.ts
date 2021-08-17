export class User {
  constructor(
    public username: String,
    public password: String
    ) {}

  clear(): void {
    this.username = '';
    this.password = '';
  }
}
