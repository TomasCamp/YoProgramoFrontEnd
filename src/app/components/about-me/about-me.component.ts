import { Component, OnInit } from '@angular/core';
import { AccountHandlingService } from 'src/app/services/account-handling.service';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  editable = false;
  text: string;
  textAux: string;

  constructor(private dataHandling: DataHandlingService, 
              private accountHandling: AccountHandlingService) {}
  ngOnInit(): void {
    this.text = this.dataHandling.getResume();
    this.textAux = this.text;
  }

  isLogged(){
    return this.accountHandling.isLogIn();
  }
  editOn() {
    this.editable = !this.editable;
  }
  editChange() {
    if (this.text) this.dataHandling.editResume(this.text);
    else this.text = this.textAux;
    this.editable = !this.editable;
  }
  editCancel() {
    this.text = this.textAux;
    this.editable = !this.editable;
  }
}
