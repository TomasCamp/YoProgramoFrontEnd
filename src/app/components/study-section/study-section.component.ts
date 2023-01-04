import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/study.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-study-section',
  templateUrl: './study-section.component.html',
  styleUrls: ['./study-section.component.css']
})
export class StudySectionComponent implements OnInit{
  studys: Study[];
  constructor(private dataHandling: DataHandlingService) {}

  ngOnInit(): void {
    this.studys = this.dataHandling.getStudys();
  }
}
