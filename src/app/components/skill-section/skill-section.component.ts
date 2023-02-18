import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { AccountHandlingService } from 'src/app/services/account-handling.service';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit{
  skills: Skill[];
  formSkill: boolean = false;
  auxSkill: Skill;

  constructor(private dataHandling: DataHandlingService,
              private accountHandling: AccountHandlingService) {}

  ngOnInit(): void {
    this.skills = this.dataHandling.getSkills();
  }
  isLogged(): boolean {
    return this.accountHandling.isLogIn();
  }

  removeTag(skill: Skill){
    this.dataHandling.deleteSkill(skill);
  }

  editForm(skill: Skill): void {
    this.auxSkill = new Skill(skill.name, skill.percentage, skill.id);
    this.formSkill = true;
  }
  addForm(): void {
    this.auxSkill = new Skill("", 0);
    this.formSkill = true;
  }
  cancelForm(): void {
    this.formSkill = false;
  }
  submitForm(): void {
    if (this.auxSkill.isComplete()) {
      if(this.auxSkill.id == undefined) this.dataHandling.addSkill(this.auxSkill);
      else this.dataHandling.editSkill(this.auxSkill);
      this.formSkill = false;
    }
  }
}
