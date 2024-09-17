import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  
// ........................................................................

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },

  { path: 'reception', loadChildren: () => import('./reception/reception.module').then(m => m.ReceptionModule) },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'notfound', component: NotFoundComponent },   
  { path: '**', redirectTo: '/notfound' } 

// ........................................................................

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}