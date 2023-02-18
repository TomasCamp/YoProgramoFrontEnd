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
    if (email.includes('@')) {
      this.accountLogIn = true;
    }
    return this.accountLogIn;
    
  }
  logOut(): void {
    this.accountLogIn = false;
  }
}
