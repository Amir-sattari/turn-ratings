import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { ExportTableMenuComponent } from './export-table-menu/export-table-menu.component';
import { PatientsComponent } from './patients/patients.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { PatientNotFoundComponent } from './patient-not-found/patient-not-found.component';
import { PatientReferralsComponent } from './patient-referrals/patient-referrals.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FreeTurnsComponent } from './free-turns/free-turns.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TodayTurnsComponent } from './today-turns/today-turns.component';
import { FinancialReportsComponent } from './financial-reports/financial-reports.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';


import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    SidebarComponent,
    TableComponent,
    ExportTableMenuComponent,
    PatientsComponent,
    SearchPatientComponent,
    PatientNotFoundComponent,
    PatientReferralsComponent,
    AddPatientComponent,
    FreeTurnsComponent,
    TableHeaderComponent,
    TodayTurnsComponent,
    FinancialReportsComponent,
    UserProfileComponent,
    UserContainerComponent,
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ButtonModule,
    SharedModule,
    StepperModule 
  ]
})
export class UserModule { }
