import { Component, Input } from '@angular/core';
import { AccountHandlingService } from 'src/app/services/account-handling.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() linkedin: string;
  @Input() github: string;
  email: string = "";
  password: string = "";
  form: boolean = false;

  constructor(private accountHandling: AccountHandlingService){
  }

  isLogIn(): boolean {
    return this.accountHandling.isLogIn();
  }
  logOut(): void {
    this.accountHandling.logOut();
  }

  openForm(): void {
    this.email = "";
    this.password = "";
    this.form = true;
  }
  cancelForm(): void {
    this.form = false;
  }
  submitForm(): void {
    if(this.accountHandling.logIn(this.email, this.password)) this.form = false;
  }
}
