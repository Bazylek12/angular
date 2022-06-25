export class User {

  public userName: string;
  public token: string;
  public color: string;

  constructor(userName: string, token: string, selectedColor: string){
      this.userName = userName;
      this.token = token;
      this.color = selectedColor
  }
}
