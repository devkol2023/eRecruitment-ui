import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
      path: '',
      component: AuthComponent,
      children: [
        {
          path: 'register',
          component: RegistrationComponent,
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{ }
