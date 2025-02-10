import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ScheduledInterviewsStepperComponent } from './scheduled-interviews-stepper.component';
import { UpcomingInterviewsComponent } from './upcoming-interviews/upcoming-interviews.component';
import { CompletedInterviewsComponent } from './completed-interviews/completed-interviews.component';
import { SharedModule } from '../../../shared/shared.module';
import { ScheduledInterviewsStepperRoutingModule } from './scheduled-interviews-stepper-routing.module';


@NgModule({
  declarations: [
    ScheduledInterviewsStepperComponent,
    UpcomingInterviewsComponent,
    CompletedInterviewsComponent
  ],
  imports: [
    CommonModule,
    ScheduledInterviewsStepperRoutingModule,
    SharedModule
  ]
})
export class ScheduledInterviewsStepperModule { }
