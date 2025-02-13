import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobFilterComponent } from './job-listing/job-filter/job-filter.component';
import { JobListComponent } from './job-listing/job-list/job-list.component';
import { JobPostingComponent } from './job-posting/job-posting.component';



@NgModule({
  declarations: [
    JobsComponent,
    JobFilterComponent,
    JobListComponent,
    JobListingComponent,
    JobPostingComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
  ],
  exports:[
    JobListComponent
  ]
  
})
export class JobsModule { }
