import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
// ........................................................................

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },

// ........................................................................

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 

}