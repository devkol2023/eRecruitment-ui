import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InterviewerComponent } from "./interviewer.component";

const routes: Routes = [
    {
        path: '',
        component: InterviewerComponent,
        children: [
            {
                path: 'scheduled-interviews',
                loadChildren: () => import('./schedules-interviews-stepper/schedules-interviews-stepper.module').then(m => m.SchedulesInterviewsStepperModule)
            },
        ]
    }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InterviewerRoutingModule { }