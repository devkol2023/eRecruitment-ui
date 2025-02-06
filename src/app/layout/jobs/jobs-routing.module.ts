import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JobsComponent } from "./jobs.component";
import { JobListingComponent } from "./job-listing/job-listing.component";
import { JobPostingComponent } from "./job-posting/job-posting.component";
import { JobDetailsComponent } from "./job-details/job-details.component";

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      { path: 'find-jobs', component: JobListingComponent },
      { path: 'post-job', component: JobPostingComponent },
      { path: 'job-details', component: JobDetailsComponent }
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class JobsRoutingModule { }