import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit{
  projects: Project[];

  constructor(private dataHandling: DataHandlingService) {}

  ngOnInit(): void {
    this.projects = this.dataHandling.getProjects();
  }
}
