import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTagComponent } from './study-tag.component';

describe('StudyTagComponent', () => {
  let component: StudyTagComponent;
  let fixture: ComponentFixture<StudyTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
