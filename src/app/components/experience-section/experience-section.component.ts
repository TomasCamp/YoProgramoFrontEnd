import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { AccountHandlingService } from 'src/app/services/account-handling.service';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit{

  experiences: Experience[];
  formExperience: boolean = false;
  auxExperience: Experience;

  
  constructor(private dataHandling: DataHandlingService,
              private accountHandling: AccountHandlingService){}

  ngOnInit(): void {
    this.experiences = this.dataHandling.getExperiences();
  }
  isLogged(): boolean {
    return this.accountHandling.isLogIn();
  }

  removeTag(experience: Experience){
    this.dataHandling.deleteExperience(experience);
  }
  editForm(experience: Experience): void {
    this.auxExperience = new Experience(experience.job, experience.startLapse, 
                                        experience.endLapse, experience.type, experience.companyLogo, 
                                        experience.activities, experience.id);
    this.formExperience = true;
  }
  addForm(): void {
    this.auxExperience = new Experience("", "", "", "", "", "");
    this.formExperience = true;
  }
  cancelForm(): void {
    this.formExperience = false;
  }
  submitForm(): void {
    if (this.auxExperience.isComplete()) {
      if(this.auxExperience.id == undefined) this.dataHandling.addExperience(this.auxExperience);
      else this.dataHandling.editExperience(this.auxExperience);
      this.formExperience = false;
    }
  }
}
