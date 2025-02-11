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
import { OfferDetailsModalComponent } from './modal/offer-details-modal/offer-details-modal.component';
import { ProfileUpdateReminderModalComponent } from './modal/profile-update-reminder-modal/profile-update-reminder-modal.component';
import { NewJobOfferReceivedModalComponent } from './modal/new-job-offer-received-modal/new-job-offer-received-modal.component';
import { HomeBannerComponent } from '../common/home-banner/home-banner.component';
import { ApplyJobModalComponent } from './modal/apply-job-modal/apply-job-modal.component';
import { InterviewDetailsModalComponent } from './modal/interview-details-modal/interview-details-modal.component';

@NgModule({
  declarations: [TableComponent, ConfirmationModalComponent, CandidateDetailsModalComponent,
    ForwardCandidatesModalComponent, SearchBarComponent, OfferDetailsModalComponent,
    ProfileUpdateReminderModalComponent, NewJobOfferReceivedModalComponent,
    HomeBannerComponent, ApplyJobModalComponent, InterviewDetailsModalComponent
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
    ForwardCandidatesModalComponent, SearchBarComponent, OfferDetailsModalComponent,
    ProfileUpdateReminderModalComponent, NewJobOfferReceivedModalComponent,
    HomeBannerComponent, ApplyJobModalComponent, InterviewDetailsModalComponent
  ]
})
export class SharedModule { }
