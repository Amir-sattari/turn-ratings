import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ExportTableMenuComponent } from './components/export-table-menu/export-table-menu.component';
import { FinancialReportsComponent } from './components/financial-reports/financial-reports.component';
import { FreeTurnsComponent } from './components/free-turns/free-turns.component';
import { PatientNotFoundComponent } from './components/patient-not-found/patient-not-found.component';
import { PatientReferralsComponent } from './components/patient-referrals/patient-referrals.component';
import { PatientsComponent } from './components/patients/patients.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { DoctorContainerComponent } from './components/doctor-container/doctor-container.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateTurnComponent } from './components/create-turn/create-turn.component';
import { TurnPriceComponent } from './components/turn-price/turn-price.component';
import { SetTurnsComponent } from './components/set-turns/set-turns.component';
import { WorkingTimeDoctorComponent } from './components/working-time-doctor/working-time-doctor.component';
import { SetWorkingTimeDoctorComponent } from './components/set-working-time-doctor/set-working-time-doctor.component';

import { NgPersianDatepickerModule } from 'ng-persian-datepicker';





@NgModule({
  declarations: [
    AddPatientComponent,
    ExportTableMenuComponent,
    FinancialReportsComponent,
    FreeTurnsComponent,
    PatientNotFoundComponent,
    PatientReferralsComponent,
    PatientsComponent,
    SearchPatientComponent,
    SidebarComponent,
    TableComponent,
    TableHeaderComponent,
    DoctorContainerComponent,
    UserProfileComponent,
    NotFoundComponent,
    CreateTurnComponent,
    TurnPriceComponent,
    SetTurnsComponent,
    WorkingTimeDoctorComponent,
    SetWorkingTimeDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgPersianDatepickerModule,
    
  ],
 
})
export class DoctorModule { }
