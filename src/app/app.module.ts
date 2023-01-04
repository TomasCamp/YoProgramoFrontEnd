import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceTagComponent } from './components/experience-tag/experience-tag.component';
import { DataHandlingService } from './services/data-handling.service';
import { OptionsHandlingService } from './services/options-handling.service';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { StudySectionComponent } from './components/study-section/study-section.component';
import { StudyTagComponent } from './components/study-tag/study-tag.component';
import { SkillTagComponent } from './components/skill-tag/skill-tag.component';
import { ProjectTagComponent } from './components/project-tag/project-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceTagComponent,
    ExperienceSectionComponent,
    ProjectSectionComponent,
    SkillSectionComponent,
    StudySectionComponent,
    StudyTagComponent,
    SkillTagComponent,
    ProjectTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataHandlingService, OptionsHandlingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
