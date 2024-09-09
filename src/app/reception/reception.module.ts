import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionContainerComponent } from './components/reception-container/reception-container.component';
import { SerchPatientComponent } from './components/serch-patient/serch-patient.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './components/patients/patients.component';
import { ServiceReceptionComponent } from './components/service-reception/service-reception.component';
import { TableTodayTurnsComponent } from './components/table-today-turns/table-today-turns.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { TodayTurnComponent } from './components/today-turn/today-turn.component';
import { ReceptionServicesComponent } from './components/reception-services/reception-services.component';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { FainalizeReservationComponent } from './components/fainalize-reservation/fainalize-reservation.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { SectionComponent } from './components/section/section.component';
import { SectionsComponent } from './components/sections/sections.component';


@NgModule({
  declarations: [
    ReceptionContainerComponent,
    SerchPatientComponent,
    SidebarComponent,
    PatientsComponent,
    ServiceReceptionComponent,
    TableTodayTurnsComponent,
    AddPatientComponent,
    TodayTurnComponent,
    ReceptionServicesComponent,
    PatientComponent,
    DoctorInfoComponent,
    DoctorListComponent,
    FainalizeReservationComponent,
    ReserveComponent,
    SectionComponent,
    SectionsComponent,
    
    
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReceptionModule { }