import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsHandlingService {

  constructor() { }

  isExperience(): boolean {
    return true;
  }
  isProject(): boolean {
    return true;
  }
  isSkill(): boolean {
    return true;
  }
  isStudy(): boolean {
    return true;
  }
  isAccess(): boolean {
    return true;
  }
}
