import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { MyApplicationComponent } from './my-application/my-application.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { JobDashboardModule } from '../job-dashboard/job-dashboard.module';
import { JobsModule } from '../jobs/jobs.module';



@NgModule({
  declarations: [
    CandidateComponent,
    MyApplicationComponent,
    ProfileManagementComponent,
    CandidateDashboardComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule,
    JobDashboardModule,
    JobsModule
  ]
})
export class CandidateModule { }
