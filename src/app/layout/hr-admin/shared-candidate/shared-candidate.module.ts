import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCandidateRoutingModule } from './shared-candidate-routing.module';
import { SharedCandidateComponent } from './shared-candidate.component';
import { SharedModule } from '../../../shared/shared.module';
import { InboxComponent } from './inbox/inbox.component';
import { SentboxComponent } from './sentbox/sentbox.component';


@NgModule({
  declarations: [
    SharedCandidateComponent,
    InboxComponent,
    SentboxComponent
  ],
  imports: [
    CommonModule,
    SharedCandidateRoutingModule,
    SharedModule
  ]
})
export class SharedCandidateModule { }
