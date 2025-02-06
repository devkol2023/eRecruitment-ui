import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
