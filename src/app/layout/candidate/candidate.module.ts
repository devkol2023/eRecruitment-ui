import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { MyApplicationComponent } from './my-application/my-application.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileManagementComponent } from './profile-management/profile-management.component';



@NgModule({
  declarations: [
    CandidateComponent,
    MyApplicationComponent,
    ProfileManagementComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule
  ]
})
export class CandidateModule { }
