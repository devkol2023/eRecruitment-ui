import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledInterviewsStepperComponent } from './scheduled-interviews-stepper.component';

describe('ScheduledInterviewsStepperComponent', () => {
  let component: ScheduledInterviewsStepperComponent;
  let fixture: ComponentFixture<ScheduledInterviewsStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledInterviewsStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledInterviewsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
