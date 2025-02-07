import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobManagementDashboardComponent } from './job-management-dashboard.component';

describe('JobManagementDashboardComponent', () => {
  let component: JobManagementDashboardComponent;
  let fixture: ComponentFixture<JobManagementDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobManagementDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
