import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobManagementComponent } from './job-management.component';
import { JobManagementDashboardComponent } from './job-management-dashboard/job-management-dashboard.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';

const routes: Routes = [
  {
    path: '',
    component: JobManagementComponent,
    children: [
        { path: 'dashboard', component: JobManagementDashboardComponent},
        { path: 'applied-candidates', component: AppliedCandidatesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobManagementRoutingModule { }
