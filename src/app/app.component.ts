import { Component, OnInit } from '@angular/core';
import { Account } from './models/account.model';
import { Options } from './models/options.model';
import { DataHandlingService } from './services/data-handling.service';
import { OptionsHandlingService } from './services/options-handling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  account: Account;
  sections: Options;

  constructor(private optionsHandling: OptionsHandlingService,
              private dataHandling: DataHandlingService){
  }
  ngOnInit(): void {
    this.sections = this.optionsHandling.getSections();
    this.account = this.dataHandling.getAccount();
  }

  
}
