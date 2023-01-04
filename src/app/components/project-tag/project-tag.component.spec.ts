import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagComponent } from './project-tag.component';

describe('ProyectTagComponent', () => {
  let component: ProjectTagComponent;
  let fixture: ComponentFixture<ProjectTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
