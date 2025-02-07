import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobManagementRoutingModule } from './job-management-routing.module';
import { JobManagementComponent } from './job-management.component';
import { JobManagementDashboardComponent } from './job-management-dashboard/job-management-dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { ViewJobDetailsModalComponent } from './view-job-details-modal/view-job-details-modal.component';
import { JobsModule } from '../../jobs/jobs.module';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { CandidateDetailsModalComponent } from './applied-candidates/candidate-details-modal/candidate-details-modal.component';


@NgModule({
  declarations: [
    JobManagementComponent,
    JobManagementDashboardComponent,
    ViewJobDetailsModalComponent,
    AppliedCandidatesComponent,
    CandidateDetailsModalComponent
  ],
  imports: [
    CommonModule,
    JobManagementRoutingModule,
    SharedModule,
    JobsModule
  ]
})
export class JobManagementModule { }
