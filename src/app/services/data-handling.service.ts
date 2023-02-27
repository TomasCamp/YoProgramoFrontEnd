import { Injectable } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { Project } from 'src/app/models/project.model';
import { Skill } from 'src/app/models/skill.model';
import { Study } from 'src/app/models/study.model';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class DataHandlingService {
  private texto = 'Lorem';
  private img = "./assets/images/gris.jpg";

  private experiences: Experience[] = [
    new Experience(this.texto, "2001-01-01", "2001-01-01","Full Time", "https://d500.epimg.net/cincodias/imagenes/2019/11/04/lifestyle/1572892359_005767_1572892909_noticia_normal.jpg", this.texto, 0), 
    new Experience(this.texto, "2001-01-01", "2001-01-01", "Part Time", this.img, this.texto, 1), 
    new Experience(this.texto, "2001-01-01", "2001-01-01", "Autónomo", this.img, this.texto, 2)
  ];
  private studys: Study[] = [
    new Study(this.texto, this.texto, "2001-01-01", "2001-01-01", this.texto, this.img, 0), 
    new Study(this.texto, this.texto, "2001-01-01", "2001-01-01", this.texto, "https://d500.epimg.net/cincodias/imagenes/2019/11/04/lifestyle/1572892359_005767_1572892909_noticia_normal.jpg", 1), 
    new Study(this.texto, this.texto, "2001-01-01", "2001-01-01", this.texto, this.img, 2)
  ];
  private projects: Project[] = [
    new Project(this.texto, "2001-01-01", "2001-01-01", this.texto, this.texto, this.img, 0), 
    new Project(this.texto, "2001-01-01", "2001-01-01", this.texto, this.texto, "https://d500.epimg.net/cincodias/imagenes/2019/11/04/lifestyle/1572892359_005767_1572892909_noticia_normal.jpg", 1), 
    new Project(this.texto, "2001-01-01", "2001-01-01", this.texto, this.texto, this.img, 2)
  ];
  private skills: Skill[] = [
    new Skill(this.texto, 10, 0), 
    new Skill(this.texto, 20, 1), 
    new Skill(this.texto, 30, 2)
  ];
  private resumeProvicional: string = "Lorem ipsum bla bla bla bla bla bla bla bla bla bal bla lbal.";

  private account: Account = new Account("Lorem ipsum",  "assets/images/gris.jpg",
    "assets/images/user.webp", "https://www.google.com/", "https://www.google.com/");
  
  constructor() { }

  getAccount(): Account {
    return this.account;
  }
  editAccount(account: Account): void {
    if(account.coverImage == "") account.coverImage = "./assets/images/gris.jpg";
    if(account.profileImage == "") account.profileImage = "assets/images/user.webp";
    this.account = account;
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }
  getStudys(): Study[] {
    return this.studys;
  }
  getProjects(): Project[] {
    return this.projects;
  }
  getSkills(): Skill[] {
    return this.skills;
  }
  getResume(): string {
    return this.resumeProvicional;
  }

  deleteExperience(experience: Experience): void {
    this.experiences.splice(experience.id, 1);
    this.experiences.forEach((experience, i)=>{experience.id = i})
  }
  deleteStudy(study: Study): void {
    this.studys.splice(study.id, 1);
    this.studys.forEach((study, i)=>{study.id = i})
  }
  deleteProject(project: Project): void {
    this.projects.splice(project.id, 1);
    this.projects.forEach((project, i)=>{project.id = i})
  }
  deleteSkill(skill: Skill): void {
    this.skills.splice(skill.id, 1);
    this.skills.forEach((skill, i)=>{skill.id = i})
  }

  addExperience(experience: Experience): void {
    experience.id = this.experiences.length;
    this.experiences.push(experience);
  }
  addStudy(study: Study): void {
    study.id = this.studys.length;
    this.studys.push(study);
  }
  addProject(project: Project): void {
    project.id = this.projects.length;
    this.projects.push(project);
  }
  addSkill(skill: Skill): void {
    skill.id = this.skills.length;
    this.skills.push(skill);
  }

  editExperience(experience: Experience): void {
    this.experiences.splice(experience.id, 1, experience);
  }
  editStudy(study: Study): void {
    this.studys.splice(study.id, 1, study);
  }
  editProject(project: Project): void {
    this.projects.splice(project.id, 1, project);
  }
  editSkill(skill: Skill): void {
    this.skills.splice(skill.id, 1, skill);
  }
  editResume(text: string): void {
    this.resumeProvicional = text;
  }
}
