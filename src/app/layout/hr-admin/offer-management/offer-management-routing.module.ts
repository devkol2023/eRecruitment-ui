import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferManagementComponent } from './offer-management.component';
import { ViewSentOfferListComponent } from './view-sent-offer-list/view-sent-offer-list.component';
import { GenerateOfferComponent } from './generate-offer/generate-offer.component';

const routes: Routes = [
  {
    path: '',
    component: OfferManagementComponent,
    children: [
      { path: 'generate-offer', component: GenerateOfferComponent},
      { path: 'view-sent-offer-list', component: ViewSentOfferListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferManagementRoutingModule { }
