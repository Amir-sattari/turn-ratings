import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { HttpClientModule } from '@angular/common/http'; 


 

import { SharedModule } from '../../app/shared/shared.module';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionComponent } from './components/section/section.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserContainerComponent,
    SectionsComponent,
    SectionComponent,
    DoctorsListComponent,
    DoctorInfoComponent,
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UserModule { }
