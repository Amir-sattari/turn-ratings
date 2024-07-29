import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { SectionsComponent } from './components/sections/sections.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';


const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {path: 'sections', component: SectionsComponent},
      {path: 'doctors-list', component: DoctorsListComponent},
      {path: 'test', component: DoctorInfoComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
