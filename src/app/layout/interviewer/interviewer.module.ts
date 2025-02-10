import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerComponent } from './interviewer.component';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { InterviewFeedbackModalComponent } from './interview-feedback-modal/interview-feedback-modal.component';
import { InterviewerDashboardComponent } from './interviewer-dashboard/interviewer-dashboard.component';



@NgModule({
  declarations: [
    InterviewerComponent,
    ScheduledInterviewsComponent,
    InterviewFeedbackModalComponent,
    InterviewerDashboardComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    SharedModule
  ]
})
export class InterviewerModule { }
