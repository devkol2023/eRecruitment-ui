import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CandidateComponent } from "./candidate.component";
import { MyApplicationComponent } from "./my-application/my-application.component";

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    children: [
        { path: 'my-application', component: MyApplicationComponent}
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CandidateRoutingModule { }