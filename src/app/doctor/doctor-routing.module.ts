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

const routes: Routes = [
  {
    path: '',
    component: DoctorContainerComponent,
    children: [

      { path: '', pathMatch: "full", component: SearchPatientComponent },
      { path: 'add-patient', pathMatch: "full", component: AddPatientComponent },
      { path: 'money', pathMatch: "full", component: FinancialReportsComponent },
      { path: 'table', pathMatch: "full", component: TableComponent },
      { path: 'export', pathMatch: "full", component: ExportTableMenuComponent },
      { path: 'search-patient', pathMatch: "full", component: SearchPatientComponent },
      { path: 'header', pathMatch: "full", component: TableHeaderComponent },
      { path: 'referrals', pathMatch: "full", component: PatientReferralsComponent },

      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
