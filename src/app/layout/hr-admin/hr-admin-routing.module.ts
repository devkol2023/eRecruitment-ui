import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HrAdminComponent } from "./hr-admin.component";
import { CandidateManagementComponent } from "./candidate-management/candidate-management.component";
import { ManageJobComponent } from "./manage-job/manage-job.component";

const routes: Routes = [
  {
    path: '',
    component: HrAdminComponent,
    children: [
        { path: 'candidate-management', component: CandidateManagementComponent},
        { path: 'manage-jobs', component: ManageJobComponent}
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HrAdminRoutingModule { }