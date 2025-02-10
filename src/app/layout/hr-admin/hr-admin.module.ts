import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { HrAdminComponent } from './hr-admin.component';
import { HrAdminRoutingModule } from './hr-admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ManageJobComponent } from './manage-job/manage-job.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';



@NgModule({
  declarations: [
    CandidateManagementComponent,
    HrAdminComponent,
    ManageJobComponent,
    ScheduleInterviewComponent,
    HrDashboardComponent
  ],
  imports: [
    CommonModule,
    HrAdminRoutingModule,
    SharedModule
  ]
})
export class HrAdminModule { }
