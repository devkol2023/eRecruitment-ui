import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobManagementRoutingModule } from './job-management-routing.module';
import { JobManagementComponent } from './job-management.component';
import { JobManagementDashboardComponent } from './job-management-dashboard/job-management-dashboard.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    JobManagementComponent,
    JobManagementDashboardComponent
  ],
  imports: [
    CommonModule,
    JobManagementRoutingModule,
    SharedModule
  ]
})
export class JobManagementModule { }
