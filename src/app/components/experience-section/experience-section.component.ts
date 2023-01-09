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
  editExperience(experience: Experience) {

  }
  
}
