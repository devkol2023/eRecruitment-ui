import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableComponent } from './table/table.component';
import { ConfirmationModalComponent } from './modal/confirmation-modal/confirmation-modal.component';
import { CandidateDetailsModalComponent } from './modal/candidate-details-modal/candidate-details-modal.component';
import { ForwardCandidatesModalComponent } from './modal/forward-candidates-modal/forward-candidates-modal.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OfferModalComponent } from './modal/offer-modal/offer-modal.component';
import { ProfileUpdateReminderModalComponent } from './modal/profile-update-reminder-modal/profile-update-reminder-modal.component';

@NgModule({
  declarations: [TableComponent, ConfirmationModalComponent, CandidateDetailsModalComponent,
    ForwardCandidatesModalComponent, SearchBarComponent, OfferModalComponent,
    ProfileUpdateReminderModalComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    NgxPaginationModule
  ],
  exports: [AngularMaterialModule, FormsModule, ReactiveFormsModule, NgxSliderModule,
    TableComponent, NgxPaginationModule, ConfirmationModalComponent, CandidateDetailsModalComponent,
    ForwardCandidatesModalComponent, SearchBarComponent, OfferModalComponent,
    ProfileUpdateReminderModalComponent
  ]
})
export class SharedModule { }
