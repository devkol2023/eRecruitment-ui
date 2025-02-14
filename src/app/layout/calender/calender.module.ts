import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';


@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    FullCalendarModule
  ]
})
export class CalenderModule { }
