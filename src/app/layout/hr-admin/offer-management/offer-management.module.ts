import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferManagementRoutingModule } from './offer-management-routing.module';
import { OfferManagementComponent } from './offer-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { GenerateOfferComponent } from './generate-offer/generate-offer.component';
import { ViewSentOfferListComponent } from './view-sent-offer-list/view-sent-offer-list.component';


@NgModule({
  declarations: [
    OfferManagementComponent,
    GenerateOfferComponent,
    ViewSentOfferListComponent
  ],
  imports: [
    CommonModule,
    OfferManagementRoutingModule,
    SharedModule
  ]
})
export class OfferManagementModule { }
