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
import { SectionsComponent } from './components/sections/sections.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { FainalizeReservationComponent } from './components/fainalize-reservation/fainalize-reservation.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionContainerComponent,
    children: [

      { path: '', pathMatch: "full", component: PatientsComponent },
      { path: 'today-turns', pathMatch: "full", component: TodayTurnComponent },
      // { path: 'serch', pathMatch: "full", component: SerchPatientComponent },
      { path: 'AddPatient', pathMatch: "full", component: AddPatientComponent },
      { path: 'patients', pathMatch: "full", component: PatientsComponent },
      { path: 'reception-services', pathMatch: "full", component: ReceptionServicesComponent },
      { path: 'patient', pathMatch: "full", component: PatientComponent },
      { path: 'sections', pathMatch: "full", component: SectionsComponent },
      { path: 'doctors-list/:id', pathMatch: "full", component: DoctorListComponent },
      { path: 'reserve/:providerId', pathMatch: "full", component: ReserveComponent },
      { path: 'finalize-reservation/:turnId', pathMatch: "full", component: FainalizeReservationComponent },
      { path: 'notfound', component: NotFoundComponent },   
      { path: '**', redirectTo: '/notfound' } 

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReceptionRoutingModule { 
  
 }