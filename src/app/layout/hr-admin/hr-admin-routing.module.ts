import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HrAdminComponent } from "./hr-admin.component";
import { CandidateManagementComponent } from "./candidate-management/candidate-management.component";
import { ManageJobComponent } from "./manage-job/manage-job.component";
import { ScheduleInterviewComponent } from "./schedule-interview/schedule-interview.component";

const routes: Routes = [
  {
    path: '',
    component: HrAdminComponent,
    children: [
        { path: 'candidate-management', component: CandidateManagementComponent},
        { path: 'manage-jobs', component: ManageJobComponent},
        { path: 'schedule-interview', component: ScheduleInterviewComponent},
        { path: 'job-management', loadChildren: () => import('./job-management/job-management.module').then(m => m.JobManagementModule) },
        { path: 'shared-candidates', loadChildren: () => import('./shared-candidate/shared-candidate.module').then(m => m.SharedCandidateModule) },
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HrAdminRoutingModule { }