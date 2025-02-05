import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'jobs', pathMatch: 'full' }, // Default redirect to jobs
      { 
        path: 'jobs', 
        loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) 
      },
      { path: '**', redirectTo: 'jobs' } // Fallback for invalid routes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
