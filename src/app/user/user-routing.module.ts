import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [

      { path: '', pathMatch: "full", component: UserProfileComponent },
      { path: 'add-patient', pathMatch: "full", component: AddPatientComponent },

      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
