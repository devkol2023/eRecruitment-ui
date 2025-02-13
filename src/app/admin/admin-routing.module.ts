import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { SystemParametersComponent } from './system-parameters/system-parameters.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{
  path: 'user-management',
  component: UserManagementComponent
},
{
  path: 'role-management',
  component: RoleManagementComponent
},
{
  path: 'system-parameters',
  component: SystemParametersComponent
},
{
  path: 'notification-management',
  component: NotificationManagementComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
