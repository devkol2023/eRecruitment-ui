import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduledInterviewsStepperComponent } from './scheduled-interviews-stepper.component';

const routes: Routes = [{
  path: '',
  component: ScheduledInterviewsStepperComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduledInterviewsStepperRoutingModule { }
