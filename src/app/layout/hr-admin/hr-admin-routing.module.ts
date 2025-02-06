import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HrAdminComponent } from "./hr-admin.component";
import { CandidateManagementComponent } from "./candidate-management/candidate-management.component";

const routes: Routes = [
  {
    path: '',
    component: HrAdminComponent,
    children: [
        { path: 'candidate-management', component: CandidateManagementComponent}
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HrAdminRoutingModule { }