import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { SectionsComponent } from './components/sections/sections.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { FinalizeReservationComponent } from './components/finalize-reservation/finalize-reservation.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { MyWithdrawComponent } from './components/my-withdraw/my-withdraw.component';
import { MyTurnsComponent } from './components/my-turns/my-turns.component';
import { ReferralsComponent } from './components/referrals/referrals.component';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'sections', component: SectionsComponent },
      { path: 'doctors-list/:id', component: DoctorsListComponent },
      { path: 'reserve/:providerId', component: ReserveComponent },
      { path: 'finalize-reservation/:turnId', component: FinalizeReservationComponent },
      { path: 'userInfo', component: UserInfoComponent },
      { path: 'userEdit', component: UserEditComponent },
      { path: 'my-withdraw', component: MyWithdrawComponent },   
      { path: 'my-turns', component: MyTurnsComponent },   
      { path: 'referrals', component: ReferralsComponent },   
      { path: 'notfound', component: NotFoundComponent },   
      { path: '', redirectTo: '/user-info', pathMatch: 'full' },
      { path: '**', redirectTo: '/notfound' } 
    ],
  },
  { path: '**', redirectTo: 'home' }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
