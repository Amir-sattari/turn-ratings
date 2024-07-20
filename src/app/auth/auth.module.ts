import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module"; 


@NgModule({
  declarations: [
    LoginComponent,
    OtpComponent,
    OtpLoginComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule
]
})
export class AuthModule { }
