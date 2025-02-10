import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'job-dashboard', pathMatch: 'full' }, // Default inside layout
      { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
      { path: 'job-dashboard', loadChildren: () => import('./job-dashboard/job-dashboard.module').then(m => m.JobDashboardModule) },
      { path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule) },
      { path: 'hr', loadChildren: () => import('./hr-admin/hr-admin.module').then(m => m.HrAdminModule) },
      { path: 'interviewer', loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
