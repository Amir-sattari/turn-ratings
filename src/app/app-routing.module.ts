import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  
// ........................................................................

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'panel-turn', loadChildren: () => import('./panel-turn/panel-turn.module').then(m => m.PanelTurnModule) },

// ........................................................................

  { path: '', component: LandingComponent},
  { path: 'calendar', component: CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
