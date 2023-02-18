import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataHandlingService } from './services/data-handling.service';
import { OptionsHandlingService } from './services/options-handling.service';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { StudySectionComponent } from './components/study-section/study-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceSectionComponent,
    ProjectSectionComponent,
    SkillSectionComponent,
    StudySectionComponent,
    AboutMeComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataHandlingService, OptionsHandlingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
