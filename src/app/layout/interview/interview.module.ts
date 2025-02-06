import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './interview.component';
import { InterviewRoutingModule } from './interview-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';



@NgModule({
  declarations: [
    InterviewComponent,
    ScheduleInterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    SharedModule
  ]
})
export class InterviewModule { }
