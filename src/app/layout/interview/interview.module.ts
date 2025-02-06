import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './interview.component';
import { InterviewRoutingModule } from './interview-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InterviewFeedbackComponent } from './interview-feedback/interview-feedback.component';
import { InterviewFeedbackModalComponent } from './interview-feedback/interview-feedback-modal/interview-feedback-modal.component';



@NgModule({
  declarations: [
    InterviewComponent,
    InterviewFeedbackComponent,
    InterviewFeedbackModalComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    SharedModule
  ]
})
export class InterviewModule { }
