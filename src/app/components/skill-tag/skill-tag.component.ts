import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-skill-tag',
  templateUrl: './skill-tag.component.html',
  styleUrls: ['./skill-tag.component.css']
})
export class SkillTagComponent {
  @Input() skill: Skill;
  access: boolean = true;

  constructor(private dataHandling: DataHandlingService) {}

  removeTag(){
    this.dataHandling.deleteSkill(this.skill);
  }
}
