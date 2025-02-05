import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JobsComponent } from "./jobs.component";
import { JobListingComponent } from "./job-listing/job-listing.component";

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      { path: '', component: JobListingComponent }
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class JobsRoutingModule { }