import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedCandidateComponent } from './shared-candidate.component';

const routes: Routes = [
  {
    path: '',
    component: SharedCandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedCandidateRoutingModule { }
