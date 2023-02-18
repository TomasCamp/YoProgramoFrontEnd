import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { AccountHandlingService } from 'src/app/services/account-handling.service';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit{
  projects: Project[];
  formProject: boolean = false;
  auxProject: Project;


  constructor(private dataHandling: DataHandlingService,
              private accountHandling: AccountHandlingService) {}

  ngOnInit(): void {
    this.projects = this.dataHandling.getProjects();
  }
  isLogged(): boolean {
    return this.accountHandling.isLogIn();
  }

  removeTag(project: Project){
    this.dataHandling.deleteProject(project);
  }
  editForm(project: Project): void {
    this.auxProject = new Project(project.name, project.startLapse, 
                                        project.endLapse, project.description, 
                                        project.link, project.img, project.id);
    this.formProject = true;
  }
  addForm(): void {
    this.auxProject = new Project("", "", "", "", "","");
    this.formProject = true;
  }
  cancelForm(): void {
    this.formProject = false;
  }
  submitForm(): void {
    if (this.auxProject.isComplete()) {
      if(this.auxProject.id == undefined) this.dataHandling.addProject(this.auxProject);
      else this.dataHandling.editProject(this.auxProject);
      this.formProject = false;
    }
  }
}
