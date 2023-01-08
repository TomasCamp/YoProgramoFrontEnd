import { Component, OnInit } from '@angular/core';
import { AccountHandlingService } from './services/account-handling.service';
import { OptionsHandlingService } from './services/options-handling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  experience: boolean;
  project: boolean;
  skill: boolean;
  study: boolean;

  constructor(private optionsHandling: OptionsHandlingService, 
              private accountHandling: AccountHandlingService){
  }
  ngOnInit(): void {
    this.experience = this.optionsHandling.isExperience();
    this.project = this.optionsHandling.isProject();
    this.skill = this.optionsHandling.isSkill();
    this.study = this.optionsHandling.isStudy();
  }

  isLogIn(): boolean {
    return this.accountHandling.isLogIn();
  }
}
