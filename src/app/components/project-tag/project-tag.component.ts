import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-project-tag',
  templateUrl: './project-tag.component.html',
  styleUrls: ['./project-tag.component.css']
})
export class ProjectTagComponent {
  @Input() project: Project;
  access: boolean = true;

  constructor(private dataHandling: DataHandlingService) {}

  removeTag(){
    this.dataHandling.deleteProject(this.project);
  }
}
