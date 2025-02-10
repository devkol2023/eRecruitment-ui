import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewFeedbackModalComponent } from './interview-feedback-modal.component';

describe('InterviewFeedbackModalComponent', () => {
  let component: InterviewFeedbackModalComponent;
  let fixture: ComponentFixture<InterviewFeedbackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewFeedbackModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
