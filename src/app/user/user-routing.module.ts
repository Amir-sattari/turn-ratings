import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { TableComponent } from './table/table.component';
import { PatientReferralsComponent } from './patient-referrals/patient-referrals.component';
import { ExportTableMenuComponent } from './export-table-menu/export-table-menu.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { FinancialReportsComponent } from './financial-reports/financial-reports.component';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [

      { path: '', pathMatch: "full", component: UserProfileComponent },
      { path: 'add-patient', pathMatch: "full", component: AddPatientComponent },
      { path: 'money', pathMatch: "full", component: FinancialReportsComponent },
      { path: 'table', pathMatch: "full", component: TableComponent },
      { path: 'export', pathMatch: "full", component: ExportTableMenuComponent },
      { path: 'search-patient', pathMatch: "full", component: SearchPatientComponent },
      { path: 'header', pathMatch: "full", component: TableHeaderComponent },

      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
