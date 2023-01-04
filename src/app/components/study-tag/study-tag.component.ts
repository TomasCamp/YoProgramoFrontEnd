import { Component, Input } from '@angular/core';
import { Study } from 'src/app/models/study.model';
import { DataHandlingService } from 'src/app/services/data-handling.service';

@Component({
  selector: 'app-study-tag',
  templateUrl: './study-tag.component.html',
  styleUrls: ['./study-tag.component.css']
})
export class StudyTagComponent {
  @Input() study: Study;
  access: boolean = true;

  constructor(private dataHandling: DataHandlingService) {}

  removeTag(){
    this.dataHandling.deleteStudy(this.study);
  }
}
