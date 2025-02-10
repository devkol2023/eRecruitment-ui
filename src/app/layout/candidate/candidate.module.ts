import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { MyApplicationComponent } from './my-application/my-application.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { JobsModule } from '../jobs/jobs.module';
import { JobsListCardComponent } from './jobs-list-card/jobs-list-card.component';



@NgModule({
  declarations: [
    CandidateComponent,
    MyApplicationComponent,
    ProfileManagementComponent,
    CandidateDashboardComponent,
    JobsListCardComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule,
    JobsModule
  ],
  exports: [CandidateDashboardComponent, JobsListCardComponent]
})
export class CandidateModule { }
