import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountHandlingService {
  logIn: boolean = true;
  constructor() { }

  isLogIn(): boolean {
    return this.logIn;
  }
}
