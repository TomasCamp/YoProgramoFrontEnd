import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTagComponent } from './experience-tag.component';

describe('ExperienceTagComponent', () => {
  let component: ExperienceTagComponent;
  let fixture: ComponentFixture<ExperienceTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
