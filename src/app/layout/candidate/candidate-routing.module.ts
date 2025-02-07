import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CandidateComponent } from "./candidate.component";
import { MyApplicationComponent } from "./my-application/my-application.component";
import { ProfileManagementComponent } from "./profile-management/profile-management.component";
import { CandidateDashboardComponent } from "./candidate-dashboard/candidate-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    children: [
        { path: 'my-application', component: MyApplicationComponent},
        { path: 'profile', component: ProfileManagementComponent},
        { path: 'candidate-dashboard', component: CandidateDashboardComponent}
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CandidateRoutingModule { }