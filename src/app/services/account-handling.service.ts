import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountHandlingService {
  logIn: boolean = false;
  constructor() { }

  isLogIn(): boolean {
    return this.logIn;
  }
}
