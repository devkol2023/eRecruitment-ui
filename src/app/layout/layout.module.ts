import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CalenderModule } from './calender/calender.module';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FullCalendarModule
  ],
  exports:[CalenderModule]
})
export class LayoutModule { }
