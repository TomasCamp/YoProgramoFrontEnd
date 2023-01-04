import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-experience-tag',
  templateUrl: './experience-tag.component.html',
  styleUrls: ['./experience-tag.component.css']
})
export class ExperienceTagComponent {
  @Input() experience: Experience;
  access: boolean = true;

  constructor(private dataHandling: DataHandlingService) {}

  removeTag(){
    this.dataHandling.deleteExperience(this.experience);
  }
}
