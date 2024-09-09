import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';


import { SharedModule } from '../../app/shared/shared.module';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionComponent } from './components/section/section.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { StepsComponent } from './components/steps/steps.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { FinalizeReservationComponent } from './components/finalize-reservation/finalize-reservation.component';
import { MyTurnsComponent } from './components/my-turns/my-turns.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { MyWithdrawComponent } from './components/my-withdraw/my-withdraw.component';
import { ReferralsComponent } from './components/referrals/referrals.component';


@NgModule({
  declarations: [
    SidebarComponent,
    UserContainerComponent,
    SectionsComponent,
    SectionComponent,
    DoctorsListComponent,
    DoctorInfoComponent,
    StepsComponent,
    ReserveComponent,
    FinalizeReservationComponent,
    MyTurnsComponent,
    UserInfoComponent,
    UserEditComponent,
    MyWithdrawComponent,
    ReferralsComponent,
    
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    SectionComponent,
  ],

  
})
export class UserModule { }
