import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InterviewerComponent } from "./interviewer.component";
import { InterviewerDashboardComponent } from "./interviewer-dashboard/interviewer-dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: InterviewerComponent,
        children: [
            {
                path: 'dashboard',
                component: InterviewerDashboardComponent
            },
            {
                path: 'scheduled-interviews',
                loadChildren: () => import('./schedules-interviews-stepper/scheduled-interviews-stepper.module').then(m => m.ScheduledInterviewsStepperModule)
            },
        ]
    }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InterviewerRoutingModule { }