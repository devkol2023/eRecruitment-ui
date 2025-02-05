import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDashboardComponent } from './job-dashboard.component';

const routes: Routes = [{ path: '', component: JobDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDashboardRoutingModule { }
