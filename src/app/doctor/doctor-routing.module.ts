import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorContainerComponent } from './components/doctor-container/doctor-container.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { FinancialReportsComponent } from './components/financial-reports/financial-reports.component';
import { TableComponent } from './components/table/table.component';
import { ExportTableMenuComponent } from './components/export-table-menu/export-table-menu.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { PatientReferralsComponent } from './components/patient-referrals/patient-referrals.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientsComponent } from './components/patients/patients.component';
import { CreateTurnComponent } from './components/create-turn/create-turn.component';
import { TurnPriceComponent } from './components/turn-price/turn-price.component';
import { SetTurnsComponent } from './components/set-turns/set-turns.component';
import { WorkingTimeDoctorComponent } from './components/working-time-doctor/working-time-doctor.component';
import { SetWorkingTimeDoctorComponent } from './components/set-working-time-doctor/set-working-time-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorContainerComponent,
    children: [

      { path: '', pathMatch: "full", component: SearchPatientComponent },
      { path: 'add-patient', pathMatch: "full", component: AddPatientComponent },
      { path: 'financial-reports', pathMatch: "full", component: FinancialReportsComponent },
      { path: 'table', pathMatch: "full", component: TableComponent },
      { path: 'export', pathMatch: "full", component: ExportTableMenuComponent },
      { path: 'search-patient', pathMatch: "full", component: SearchPatientComponent },
      { path: 'header', pathMatch: "full", component: TableHeaderComponent },
      { path: 'referrals', pathMatch: "full", component: PatientReferralsComponent },
      { path: 'not-found', pathMatch: "full", component: NotFoundComponent },
      { path: 'patients', pathMatch: "full", component: PatientsComponent },
      { path: 'create-turn', pathMatch: "full", component: CreateTurnComponent },
      { path: 'turn-price', pathMatch: "full", component: TurnPriceComponent },
      { path: 'set-turns', pathMatch: "full", component: SetTurnsComponent },
      { path: 'working-time-doctor', pathMatch: "full", component: WorkingTimeDoctorComponent },
      { path: 'set-working-time-doctor', pathMatch: "full", component: SetWorkingTimeDoctorComponent },

      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
