import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InterviewComponent } from "./interview.component";
import { InterviewFeedbackComponent } from "./interview-feedback/interview-feedback.component";

const routes: Routes = [
  {
    path: '',
    component: InterviewComponent,
    children: [
        { path: 'interview-list', component: InterviewFeedbackComponent},
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InterviewRoutingModule { }