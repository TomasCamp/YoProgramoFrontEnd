import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit{
  skills: Skill[];

  constructor(private dataHandling: DataHandlingService) {}

  ngOnInit(): void {
    this.skills = this.dataHandling.getSkills();
  }
}
