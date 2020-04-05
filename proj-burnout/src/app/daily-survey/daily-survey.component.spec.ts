import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySurveyComponent } from './daily-survey.component';

describe('DailySurveyComponent', () => {
  let component: DailySurveyComponent;
  let fixture: ComponentFixture<DailySurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
