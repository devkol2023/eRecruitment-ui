import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SharedModule } from '../shared/shared.module';
import { RoleManagementComponent } from './role-management/role-management.component';
import { SystemParametersComponent } from './system-parameters/system-parameters.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    RoleManagementComponent,
    SystemParametersComponent,
    NotificationManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
