import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JobsComponent } from "./jobs.component";
import { JobListingComponent } from "./job-listing/job-listing.component";
import { JobPostingComponent } from "./job-posting/job-posting.component";

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      { path: '', component: JobListingComponent },
      { path: 'post-job', component: JobPostingComponent }
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class JobsRoutingModule { }