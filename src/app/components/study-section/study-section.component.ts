import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/study.model';
import { AccountHandlingService } from 'src/app/services/account-handling.service';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-study-section',
  templateUrl: './study-section.component.html',
  styleUrls: ['./study-section.component.css']
})
export class StudySectionComponent implements OnInit{
  studys: Study[];
  formStudy: boolean = false;
  auxStudy: Study;

  constructor(private dataHandling: DataHandlingService,
              private accountHandling: AccountHandlingService) {}

  ngOnInit(): void {
    this.studys = this.dataHandling.getStudys();
  }
  isLogged(): boolean {
    return this.accountHandling.isLogIn();
  }

  removeTag(study: Study){
    this.dataHandling.deleteStudy(study);
  }
  editForm(study: Study): void {
    this.auxStudy = new Study(study.title, study.institution, study.startLapse, study.endLapse, 
                              study.description, study.img, study.id);
    this.formStudy = true;
  }
  addForm(): void {
    this.auxStudy = new Study("", "", "", "", "", "");
    this.formStudy = true;
  }
  cancelForm(): void {
    this.formStudy = false;
  }
  submitForm(): void {
    if (this.auxStudy.isComplete()) {
      if(this.auxStudy.id == undefined) this.dataHandling.addStudy(this.auxStudy);
      else this.dataHandling.editStudy(this.auxStudy);
      this.formStudy = false;
    }
  }
}
