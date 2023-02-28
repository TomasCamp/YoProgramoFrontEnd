import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountHandlingService {
  accountLogIn: boolean = true;
  constructor() { }

  isLogIn(): boolean {
    return this.accountLogIn;
  }
  logIn(email: string, password: string): boolean {
    if (email == "hola@gmail.com" && password == "1234") {
      this.accountLogIn = true;
    }
    return this.accountLogIn;
    
  }
  logOut(): void {
    this.accountLogIn = false;
  }
}
