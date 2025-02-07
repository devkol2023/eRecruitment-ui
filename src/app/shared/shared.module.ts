import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableComponent } from './table/table.component';
import { ConfirmationModalComponent } from './modal/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [TableComponent, ConfirmationModalComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    NgxPaginationModule
  ],
  exports: [AngularMaterialModule, FormsModule, ReactiveFormsModule, NgxSliderModule,
    TableComponent, NgxPaginationModule, ConfirmationModalComponent]
})
export class SharedModule { }
