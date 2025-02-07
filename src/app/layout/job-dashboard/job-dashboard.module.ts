import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDashboardRoutingModule } from './job-dashboard-routing.module';
import { JobDashboardComponent } from './job-dashboard.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { FeaturedJobsComponent } from './featured-jobs/featured-jobs.component';
import { JobsListCardComponent } from './jobs-list-card/jobs-list-card.component';


@NgModule({
  declarations: [
    JobDashboardComponent,
    JobSearchComponent,
    FeaturedJobsComponent,
    JobsListCardComponent
  ],
  imports: [
    CommonModule,
    JobDashboardRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    JobsListCardComponent
  ]
})
export class JobDashboardModule { }
