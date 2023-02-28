import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { Options } from 'src/app/models/options.model';
import { AccountHandlingService } from 'src/app/services/account-handling.service';
import { DataHandlingService } from 'src/app/services/data-handling.service';
import { OptionsHandlingService } from 'src/app/services/options-handling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  section: boolean = false;
  form: boolean = false;
  account: Account;
  sections: Options;
  auxAccount: Account;
  auxSections: Options;

  constructor(private dataHandling: DataHandlingService,
              private accountHandling: AccountHandlingService,
              private optionsHandling: OptionsHandlingService){}

  ngOnInit(): void {
    this.account = this.dataHandling.getAccount();
    this.sections = this.optionsHandling.getSections()

  }
  isLogged(): boolean {
    return this.accountHandling.isLogIn();
  }

  editForm(): void {
    this.auxAccount = new Account(this.account.name, this.account.coverImage, this.account.profileImage,
                                  this.account.linkedin, this.account.github);
    this.form = true;
  }
  cancelForm(): void {
    this.form = false;
  }
  submitForm(): void {
    if (this.auxAccount.isComplete()) {
      this.dataHandling.editAccount(this.auxAccount);
      this.form = false;
    }
  }

  editSections(): void {
    this.auxSections = new Options(this.sections.aboutMe, this.sections.experience, this.sections.study,
                                  this.sections.skill, this.sections.project)
    this.section = true;
  }
  cancelSections(): void {
    this.optionsHandling.changeSections(this.auxSections);
    this.section = false;
  }
}
