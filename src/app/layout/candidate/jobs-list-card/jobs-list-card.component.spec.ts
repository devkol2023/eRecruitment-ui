import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListCardComponent } from './jobs-list-card.component';

describe('JobsListCardComponent', () => {
  let component: JobsListCardComponent;
  let fixture: ComponentFixture<JobsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
