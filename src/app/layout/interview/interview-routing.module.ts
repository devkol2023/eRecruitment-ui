import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InterviewComponent } from "./interview.component";
import { ScheduleInterviewComponent } from "./schedule-interview/schedule-interview.component";

const routes: Routes = [
  {
    path: '',
    component: InterviewComponent,
    children: [
        { path: 'schedule-interview', component: ScheduleInterviewComponent},
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InterviewRoutingModule { }