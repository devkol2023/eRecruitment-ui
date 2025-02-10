import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesInterviewsStepperRoutingModule } from './schedules-interviews-stepper-routing.module';
import { ScheduledInterviewsStepperComponent } from './scheduled-interviews-stepper.component';
import { UpcomingInterviewsComponent } from './upcoming-interviews/upcoming-interviews.component';
import { CompletedInterviewsComponent } from './completed-interviews/completed-interviews.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ScheduledInterviewsStepperComponent,
    UpcomingInterviewsComponent,
    CompletedInterviewsComponent
  ],
  imports: [
    CommonModule,
    SchedulesInterviewsStepperRoutingModule,
    SharedModule
  ]
})
export class SchedulesInterviewsStepperModule { }
