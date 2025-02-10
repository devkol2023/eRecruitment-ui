import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDashboardRoutingModule } from './job-dashboard-routing.module';
import { JobDashboardComponent } from './job-dashboard.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { FeaturedJobsComponent } from './featured-jobs/featured-jobs.component';
import { SharedModule } from "../../shared/shared.module";
import { JobWizardComponent } from './job-wizard/job-wizard.component';
import { CandidateModule } from '../candidate/candidate.module';
import { JobsModule } from '../jobs/jobs.module';

@NgModule({
  declarations: [
    JobDashboardComponent,
    JobSearchComponent,
    FeaturedJobsComponent,
    JobWizardComponent,
  ],
  imports: [
    CommonModule,
    JobDashboardRoutingModule,
    AngularMaterialModule,
    SharedModule,
    CandidateModule,
    JobsModule
  ]
})
export class JobDashboardModule { }
