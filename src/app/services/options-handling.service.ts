import { Injectable } from '@angular/core';
import { Options } from '../models/options.model';

@Injectable({
  providedIn: 'root'
})
export class OptionsHandlingService {
  private sections: Options = new Options(true, true, true, true, true);
  constructor() { }

  getSections(): Options {
    return this.sections;
  }

  changeSections(sections: Options): void {
    this.sections.aboutMe = sections.aboutMe;
    this.sections.experience = sections.experience;
    this.sections.study = sections.study;
    this.sections.skill = sections.skill;
    this.sections.project = sections.project;
  }
}
