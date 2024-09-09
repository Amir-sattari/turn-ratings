import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionContainerComponent } from './components/reception-container/reception-container.component';
import { SerchPatientComponent } from './components/serch-patient/serch-patient.component';
import { TableTodayTurnsComponent } from './components/table-today-turns/table-today-turns.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { TodayTurnComponent } from './components/today-turn/today-turn.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ReceptionServicesComponent } from './components/reception-services/reception-services.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionContainerComponent,
    children: [

      { path: '', pathMatch: "full", component: SerchPatientComponent },
      { path: 'today-turns', pathMatch: "full", component: TodayTurnComponent },
      { path: 'serch', pathMatch: "full", component: SerchPatientComponent },
      { path: 'AddPatient', pathMatch: "full", component: AddPatientComponent },
      { path: 'patients', pathMatch: "full", component: PatientsComponent },
      { path: 'reception-services', pathMatch: "full", component: ReceptionServicesComponent },
      { path: 'patient', pathMatch: "full", component: PatientComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReceptionRoutingModule { 
  
 }