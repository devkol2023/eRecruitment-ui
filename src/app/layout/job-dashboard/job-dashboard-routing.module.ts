import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDashboardComponent } from './job-dashboard.component';
import { JobWizardComponent } from './job-wizard/job-wizard.component';

const routes: Routes = [
  { path: '', component: JobDashboardComponent },
  { path: 'job-wizard', component: JobWizardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDashboardRoutingModule { }
