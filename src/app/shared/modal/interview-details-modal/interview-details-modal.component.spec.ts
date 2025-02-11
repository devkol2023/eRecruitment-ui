import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDetailsModalComponent } from './interview-details-modal.component';

describe('InterviewDetailsModalComponent', () => {
  let component: InterviewDetailsModalComponent;
  let fixture: ComponentFixture<InterviewDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
