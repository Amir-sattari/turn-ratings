import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'otp-login', component: OtpLoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'notfound', component: NotFoundComponent },   
  { path: '**', redirectTo: '/notfound' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
